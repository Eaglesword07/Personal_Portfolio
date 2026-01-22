import { AppRoutes } from '@constants/appRoutes';
import { HomePage } from '@pages';

import { Layout } from '@components/layout';

export const routes = [
    { path : AppRoutes.HOME, component : <Layout><HomePage /></Layout> },
];