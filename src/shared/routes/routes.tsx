import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { JobsPage, PageNotFound } from '../../pages';
import { DefaultTemplate } from '../templates';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <DefaultTemplate>
        <Routes>
          <Route path="/jobylon" element={<Navigate to="/jobylon/jobs" />} />
          <Route path="/jobylon/jobs" element={<JobsPage />} />
          <Route path="/jobylon/my-jobs" element={<PageNotFound />} />
          <Route path="/jobylon/reports" element={<PageNotFound />} />
          <Route path="/jobylon/chat" element={<PageNotFound />} />
        </Routes>
      </DefaultTemplate>
    </BrowserRouter>
  );
};

export default AppRoutes;
