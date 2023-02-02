import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from 'react-router-dom'

import { AuthProvider, useAuthContext } from './context/AuthProvider'
import { DarkModeProvider, useDarkModeContext } from './context/DarkModeProvide'

import Login from './pages/Login'
import Layout from './pages/Layout'
import Register from './pages/Register'
import Home from './pages/Home'
import Profile from './pages/Profile'

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
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/profile/:id',
				element: <Profile />,
			},
		],
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
			<DarkModeProvider>
				<RouterProvider router={router} />
			</DarkModeProvider>
		</AuthProvider>
	)
}
