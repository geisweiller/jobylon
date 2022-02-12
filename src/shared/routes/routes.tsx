import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { JobsPage, PageNotFound } from '../../pages';
import { DefaultTemplate } from '../templates';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Routes>
          <Route path="/jobylon" element={<Navigate to="/jobs" />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/my-jobs" element={<PageNotFound />} />
          <Route path="/reports" element={<PageNotFound />} />
          <Route path="/chat" element={<PageNotFound />} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default AppRoutes;
