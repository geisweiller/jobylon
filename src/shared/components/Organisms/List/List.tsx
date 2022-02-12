import React, { useCallback, useEffect, useState } from 'react';
import { Atoms, Molecules } from '../../../../shared/components';
import EmptyList from './EmptyList';

import { IList } from './interfaces';

import * as S from './styles';

const List: React.FC<IList> = ({ jobs, setSelectedJob, loading }) => {
  const [search, setSearch] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  const handleSearch = useCallback(
    (search: string) => {
      setSearch(search);
      const filtered = jobs?.filter(({ title, company }) => {
        return (
          title.toLowerCase().includes(search.toLowerCase()) ||
          company.name.toLowerCase().includes(search.toLowerCase())
        );
      });
      setFilteredJobs(filtered);
    },
    [search, setSearch, jobs]
  );

  const handleClearFilter = useCallback(() => {
    setSearch('');
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <S.ListContainer>
      <S.ListHeader>
        <Atoms.SearchField handleSearch={handleSearch} />
      </S.ListHeader>

      {!!search && (
        <S.SearchResultsContainer>
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

      <S.SortByContainer>
        <Atoms.Select options={[]} onChange={() => console.log('')} />
      </S.SortByContainer>

      {filteredJobs.length > 0 ? (
        <S.JobsWrapper>
          {filteredJobs.map((job) => {
            const { company, locations, id, employment_type, experience, title } = job;
            return (
              <Molecules.Card
                key={id}
                company={company}
                locations={locations[0]}
                employment_type={employment_type}
                experience={experience}
                title={title}
                onClick={() => setSelectedJob(job)}
                selectedJobId={id}
              />
            );
          })}
        </S.JobsWrapper>
      ) : (
        !loading && <EmptyList />
      )}
    </S.ListContainer>
  );
};

export default List;
