/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { Atoms } from '../..';
import { IInformation } from './interfaces';

import * as S from './styles';

const Information: React.FC<IInformation> = ({ job, loading, error }) => {
  return (
    <S.InformationContainer data-testid="info_container" hide={error}>
      <S.InformationHeader data-testid="info_header">
        {loading ? (
          <Atoms.Skeleton width={80} height={80} />
        ) : (
          <Atoms.Logo src={job?.company?.logo} size="large" />
        )}

        {loading ? (
          <Atoms.Skeleton width="100%" height={80} type="text" numberOfLines={2} />
        ) : (
          <>
            <Atoms.Text weight="bold" size="large">
              {job?.title}
            </Atoms.Text>
            <Atoms.Text weight="regular" size="medium">
              at <strong>{job?.company?.name}</strong>
            </Atoms.Text>
          </>
        )}
      </S.InformationHeader>

      <S.InformationContent data-testid="info_content">
        <S.SkillsContainer>
          <h5>SKILLS & REQUIREMENTS</h5>
          {loading ? (
            <Atoms.Skeleton width="100%" height="100%" type="text" />
          ) : (
            <S.SkillInformationContainer dangerouslySetInnerHTML={{ __html: job?.skills }} />
          )}
        </S.SkillsContainer>
      </S.InformationContent>

      <S.InformationFooter data-testid="info_footer">
        <Atoms.Button disabled={loading} onClick={() => window.open(job?.urls.ad)}>
          I'm interested
        </Atoms.Button>
      </S.InformationFooter>
    </S.InformationContainer>
  );
};

export default Information;
