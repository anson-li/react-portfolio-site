import Home from './pages/Home';
import WorkList from './pages/WorkList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import WorkExperiences from './pages/WorkExperiences';
import Jellicent from './pages/ProjectList/Jellicent';

export default [
  {
    key: 'work',
    Component: WorkList,
    path: {
      path: '/work',
    },
  },
  {
    key: 'resume',
    Component: Resume,
    path: {
      path: '/resume',
    },
  },
  {
    key: 'contact',
    Component: Contact,
    path: {
      path: '/contact',
    },
  },
  {
    key: 'projects',
    Component: Projects,
    path: {
      path: '/projects',
    },
  },
  {
    key: 'workexp',
    Component: WorkExperiences,
    path: {
      path: '/workexp',
    },
  },
  {
    key: 'jellicent',
    Component: Jellicent,
    path: {
      path: '/jellicent',
    },
  },
  {
    key: 'home',
    Component: Home,
    path: {
      path: '/',
      exact: true,
    },
  },
];
