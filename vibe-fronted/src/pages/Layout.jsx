import Home from './Home'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './styles/layout.scss'
import { useState } from 'react'
import Box from '@mui/material/Box'
export default function Layout() {
	const [sidebarStatus, setSidebarStatus] = useState(true)

	const toggleStatus = () => {
		setSidebarStatus((prevStatus) => !prevStatus)
	}

	return (
		<div className='layout'>
			<Sidebar status={sidebarStatus} />
			<Box sx={{ flexGrow: 1 }}>
				<Navbar toggleStatus={toggleStatus} />
				<div className='content'>
					<Home />
				</div>
			</Box>
		</div>
	)
}
