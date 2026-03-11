import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/';
import HomePage from '../pages/Home';
import CoursesPage from '../pages/Courses';
import CourseDetailPage from '../pages/CourseDetail';
import AboutPage from '../pages/About';
import ContactPage from '../pages/Contact';
import NotFoundPage from '../pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'courses', element: <CoursesPage /> },
      { path: 'courses/:slug', element: <CourseDetailPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;