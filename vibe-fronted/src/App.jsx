import Login from './pages/Login'
import './index.css'

import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from 'react-router-dom'
import { AuthProvider, useAuthContext } from './context/AuthProvider'
import Home from './pages/Home'

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
				<Home />
			</ProtectedRoute>
		),
	},
	{
		path: '/login',
		element: <Login />,
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
