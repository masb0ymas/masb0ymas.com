import publicRoutes from './routes/public/home'

// @ts-expect-error
const globalRoutes = [].concat(publicRoutes)

export default globalRoutes
