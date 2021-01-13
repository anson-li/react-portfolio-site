import Home from './pages/Home';
import WorkList from './pages/WorkList';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Jellicent from './pages/ProjectList/Jellicent';

import Questionmark from './pages/WorkExperiences/Questionmark';
import CrudeMonitor from './pages/WorkExperiences/CrudeMonitor';
import SSCTE from './pages/WorkExperiences/SSCTE';
import DailyUI from './pages/WorkExperiences/DailyUI';
import TeamAqua from './pages/WorkExperiences/TeamAqua';
import AlbertaMES from './pages/WorkExperiences/AlbertaMES';

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
    key: 'jellicent',
    Component: Jellicent,
    path: {
      path: '/jellicent',
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
    key: 'sscte',
    Component: SSCTE,
    path: {
      path: '/sscte',
    },
  },
  {
    key: 'dailyui',
    Component: DailyUI,
    path: {
      path: '/dailyui',
    },
  },
  {
    key: 'teamaqua',
    Component: TeamAqua,
    path: {
      path: '/teamaqua',
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
