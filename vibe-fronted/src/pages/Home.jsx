import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import './styles/home.scss'
import { useState } from 'react'

export default function Home() {
	const [sidebarStatus, setSidebarStatus] = useState(true)

	const toggleStatus = () => {
		setSidebarStatus((prevStatus) => !prevStatus)
	}

	return (
		<div className='home'>
			<Sidebar status={sidebarStatus} />
			<Navbar toggleStatus={toggleStatus} />
		</div>
	)
}
