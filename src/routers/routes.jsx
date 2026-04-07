import { AppRoutes } from '@constants/appRoutes';
import { Home, About } from '@pages';

import { Layout } from '@components/layout/Layout';

export const routes = [
    { path : AppRoutes.HOME, component : <Layout><Home /></Layout> },
    { path : AppRoutes.ABOUT, component : <Layout><About /></Layout> },
];