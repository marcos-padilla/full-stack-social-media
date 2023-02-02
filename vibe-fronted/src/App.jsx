import Login from './pages/Login'
import './index.css'

import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from 'react-router-dom'
import { AuthProvider, useAuthContext } from './context/AuthProvider'
import Layout from './pages/Layout'
import Register from './pages/Register'

const ProtectedRoute = ({ children }) => {
	const { user } = useAuthContext()
	if (!user) {
		return <Navigate to='/login' />
	}
	return children
}

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<ProtectedRoute>
				<Layout />
			</ProtectedRoute>
		),
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/register',
		element: <Register />,
	},
])

const primaryColor = 'rgb(160,96,255)'
const secondaryColor = 'rgb(0,228,227)'
export default function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
	)
}
