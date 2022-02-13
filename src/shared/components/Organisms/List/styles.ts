import styled from 'styled-components';
import { breakpoints, colors, fonts, maxHeight } from '../../../../shared/styles/theme';

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundDark};
  width: 100%;

  padding: 0 10px;

  overflow-y: scroll;

  height: ${maxHeight.medium};

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    padding: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${colors.border};
    border-radius: 10px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    ::-webkit-scrollbar {
      display: none;
    }
    max-height: ${maxHeight.small};
  }
`;

export const JobsWrapper = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px 0;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 20px;

  background-color: ${colors.clear};
  border: 1px solid ${colors.border};
  border-radius: 20px;

  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  div {
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
    }
  }

  button {
    background-color: transparent;
  }
`;

export const SortByContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;

  svg {
    margin-top: 40px;
  }
`;
