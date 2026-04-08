import Homepage from '@pages/index.jsx';

import { Layout } from '@components/layout/Layout';

export const routes = [
    { path: '/', component: <Layout><Homepage /></Layout> },
];
