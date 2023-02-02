import './styles/layout.scss'
import { Outlet } from 'react-router-dom'
import { useDarkModeContext } from '../context/DarkModeProvide'

import Navbar from '../components/Navbar'
import LeftBar from '../components/LeftBar'
import RightBar from '../components/RightBar'

export default function Layout() {
	const { darkMode } = useDarkModeContext()
	return (
		<div className={`theme-${darkMode ? 'dark' : 'light'}`}>
			<Navbar />
			<div style={{ display: 'flex' }}>
				<LeftBar />
				<div style={{ flex: 6 }}>
					<Outlet />
				</div>
				<RightBar />
			</div>
		</div>
	)
}
