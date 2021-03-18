import Home from './pages/Home';
import WorkList from './pages/WorkList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

import Questionmark from './pages/WorkExperiences/Questionmark';
import CrudeMonitor from './pages/WorkExperiences/CrudeMonitor';
import AlbertaMES from './pages/WorkExperiences/AlbertaMES';
import ATBFinancial from './pages/WorkExperiences/ATBFinancial';

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
    key: 'atbfinancial',
    Component: ATBFinancial,
    path: {
      path: '/atbfinancial',
    },
  },
  {
    key: 'questionmark',
    Component: Questionmark,
    path: {
      path: '/questionmark',
    },
  },
  {
    key: 'crudemonitor',
    Component: CrudeMonitor,
    path: {
      path: '/crudemonitor',
    },
  },
  {
    key: 'albertames',
    Component: AlbertaMES,
    path: {
      path: '/albertames',
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
