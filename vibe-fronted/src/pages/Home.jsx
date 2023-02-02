import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './styles/home.scss'
import { useState } from 'react'
import Box from '@mui/material/Box'
export default function Home() {
	const [sidebarStatus, setSidebarStatus] = useState(true)

	const toggleStatus = () => {
		setSidebarStatus((prevStatus) => !prevStatus)
	}

	return (
		<div className='home'>
			<Sidebar status={sidebarStatus} />
			<Box sx={{ flexGrow: 1 }}>
				<Navbar toggleStatus={toggleStatus} />
				<div className='content'></div>
			</Box>
		</div>
	)
}
