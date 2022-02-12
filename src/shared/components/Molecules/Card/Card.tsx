import React from 'react';
import { Atoms } from '../..';
import { Assets } from '../../../../assets';
import { useJobs } from '../../../hooks';

import { ICard } from './interfaces';

import * as S from './styles';

const Card: React.FC<ICard> = ({
  company,
  locations,
  employment_type,
  experience,
  title,
  selectedJobId,
  ...props
}) => {
  const { selectedJob, loading } = useJobs();
  const { logo, name, industry } = company;
  const { location } = locations;
  return (
    <>
      {loading ? (
        <Atoms.Skeleton />
      ) : (
        <S.CardContainer onClick={props.onClick} selected={selectedJob.id === selectedJobId}>
          <S.LogoContainer>
            <Atoms.Logo size="medium" src={logo} />
          </S.LogoContainer>

          <S.CardInformations>
            <Atoms.Text weight="bold" size="large" className="company_name">
              {name}
            </Atoms.Text>

            <Atoms.Text weight="bold" size="small" className="job_title">
              {title}
            </Atoms.Text>
          </S.CardInformations>

          <S.CardInformations>
            <div>
              <Assets.Pin />
              <Atoms.Text weight="regular" size="small" className="location">
                {location.text}
              </Atoms.Text>
            </div>

            <Atoms.Text weight="regular" size="small" className="experience">
              {employment_type} , {experience}
            </Atoms.Text>

            <Atoms.Text weight="regular" size="small" className="industry">
              {industry}
            </Atoms.Text>
          </S.CardInformations>
        </S.CardContainer>
      )}
    </>
  );
};

export default Card;
