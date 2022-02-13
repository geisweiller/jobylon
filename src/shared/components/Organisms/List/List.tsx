import React, { useCallback, useEffect, useState } from 'react';
import { Atoms, Molecules } from '../../../../shared/components';
import { Placeholders } from '../../../enums/placeholders';
import { IJob } from '../../../interfaces/interfaces';
import { selectOptions, sortByExperience } from '../../../utils';
import EmptyList from './EmptyList';

import { IList } from './interfaces';

import * as S from './styles';

const List: React.FC<IList> = ({ jobs, setSelectedJob, loading, error }) => {
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState<IJob[]>([]);
  const windowWidth = window.innerWidth;

  const handleCardClick = useCallback(
    (job: IJob) => {
      if (windowWidth <= 480) {
        const { urls } = job;
        window.open(urls.ad);
      } else {
        setSelectedJob(job);
      }
    },
    [windowWidth, window]
  );

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleSearch = useCallback(
    (search: string) => {
      setSearch(search);
      const filtered = jobs?.filter(({ title, company, locations }) => {
        return (
          title.toLowerCase().includes(search.toLowerCase()) ||
          company.name.toLowerCase().includes(search.toLowerCase()) ||
          locations
            .map(({ location }) => location.text)
            .join(' ')
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      });
      setFilteredJobs(filtered);
    },
    [search, setSearch, jobs]
  );

  const handleSortBy = useCallback(
    (order: string) => {
      if (order === 'crescent') {
        const sorted = sortByExperience(filteredJobs);
        setFilteredJobs(sorted);
      }
      if (order === 'decrescent') {
        const sorted = sortByExperience(filteredJobs).reverse();
        setFilteredJobs(sorted);
      }
    },
    [filteredJobs]
  );

  const handleClearFilter = useCallback(() => {
    setSearch('');
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <S.ListContainer data-testid="list_container">
      <S.ListHeader data-testid="list_header">
        <Atoms.SearchField handleSearch={handleSearch} placeholder={Placeholders.Search} />
      </S.ListHeader>

      {!!search && (
        <S.SearchResultsContainer data-testid="list_search_results">
          <div>
            <Atoms.Text size="small" weight="bold">
              Showing results for
            </Atoms.Text>
            <Atoms.Tag>{search}</Atoms.Tag>
          </div>

          <button onClick={handleClearFilter}>
            <Atoms.Text size="small" weight="bold">
              Clear filters
            </Atoms.Text>
          </button>
        </S.SearchResultsContainer>
      )}

      <S.SortByContainer data-testid="list_sort_by_container">
        <Atoms.Select options={selectOptions} onChange={handleSortBy} />
      </S.SortByContainer>

      {filteredJobs?.length > 0 ? (
        <S.JobsWrapper>
          {filteredJobs.map((job, index) => {
            const { company, locations, id, employment_type, experience, title } = job;
            return (
              <Molecules.Card
                key={index}
                company={company}
                locations={locations[0]}
                employment_type={employment_type}
                experience={experience}
                title={title}
                onClick={() => handleCardClick(job)}
                selectedJobId={id}
                loading={loading}
              />
            );
          })}
        </S.JobsWrapper>
      ) : (
        !loading && <EmptyList error={error} />
      )}
    </S.ListContainer>
  );
};

export default List;
