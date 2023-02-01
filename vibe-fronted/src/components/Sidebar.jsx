import './styles/sidebar.scss'

export default function Sidebar({ status }) {
	const sidebarClassName = `sidebar ${!status ? 'hide' : ''}`
	return <div className={sidebarClassName}>Sidebar</div>
}
