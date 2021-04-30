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
    Component: WorkList,
    key: 'work',
    path: {
      path: '/work',
    },
  },
  {
    Component: Resume,
    key: 'resume',
    path: {
      path: '/resume',
    },
  },
  {
    Component: Contact,
    key: 'contact',
    path: {
      path: '/contact',
    },
  },
  {
    Component: Projects,
    key: 'projects',
    path: {
      path: '/projects',
    },
  },
  {
    Component: ATBFinancial,
    key: 'atbfinancial',
    path: {
      path: '/atbfinancial',
    },
  },
  {
    Component: Questionmark,
    key: 'questionmark',
    path: {
      path: '/questionmark',
    },
  },
  {
    Component: CrudeMonitor,
    key: 'crudemonitor',
    path: {
      path: '/crudemonitor',
    },
  },
  {
    Component: AlbertaMES,
    key: 'albertames',
    path: {
      path: '/albertames',
    },
  },
  {
    Component: Home,
    key: 'home',
    path: {
      exact: true,
      path: '/',
    },
  },
];
