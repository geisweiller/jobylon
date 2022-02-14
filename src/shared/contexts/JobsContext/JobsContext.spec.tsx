import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';

import { JobsProvider } from './JobsContext';
import { waitFor } from '@testing-library/react';
import api from '../../../services/api';
import { useJobs } from '../../hooks';

const apiMock = new MockAdapter(api);

describe('Get data', () => {
  it('should be able to get data', async () => {
    apiMock.onGet('').reply(200, {
      data: {
        jobs: [],
      },
    });

    const { result } = renderHook(() => useJobs(), {
      wrapper: JobsProvider,
    });
    waitFor(() => {
      result.current.getData();
      expect(result.current.jobs).toEqual([]);
      expect(result.current.loading).toBeTruthy();
    });
  });

  it('shouldnt be able to get data', async () => {
    apiMock.onGet('').reply(500);

    const { result } = renderHook(() => useJobs(), {
      wrapper: JobsProvider,
    });
    waitFor(() => {
      result.current.getData();
      expect(result.current.error).toBeTruthy();
      expect(result.current.error).toBeTruthy();
      expect(result.current.loading).toBeFalsy();
    });
  });
});
