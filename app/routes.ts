import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
    route('docs/*', 'routes/docs.tsx'),
    route('api/search', 'routes/search.ts'),
    route('og/docs/*', 'routes/og.docs.tsx'),
] satisfies RouteConfig;
