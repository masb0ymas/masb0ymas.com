import dynamic from 'next/dynamic'

const PublicContainer = dynamic(() => import('~/layouts/containers/Public'))

const routes = [
  {
    path: '/',
    layout: PublicContainer,
    exact: true,
  },
]

const publicRoutes = routes

export default publicRoutes
