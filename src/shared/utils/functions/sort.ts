import { IJob } from '../../interfaces/interfaces';

export const sortByExperience = (array: IJob[]) => {
  return array.sort((a, b) => {
    const experienceOrder = ['Entry level', 'Mid level', 'Experienced'];

    const aJobExpIndex = experienceOrder.indexOf(a.experience);
    const bJobExpIndex = experienceOrder.indexOf(b.experience);

    return aJobExpIndex - bJobExpIndex;
  });
};
