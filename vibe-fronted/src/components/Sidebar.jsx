import './styles/sidebar.scss'
import { useAuthContext } from '../context/AuthProvider'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import { IconButton } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'

const SidebarButton = styled(Button)({
	border: 'none',
	width: '100%',
	fontSize: 30,
	color: 'white',
	borderBottom: '1px solid lightgray',
	borderRadius: 0,
	'&:hover': {
		outlined: 'none',
		border: 'none',
		background: 'rgb(18,85,152)',
	},
})

const SidebarItem = ({ name, icon, link }) => {
	return (
		<Link to={link} style={{ textDecoration: 'none' }}>
			<SidebarButton variant='outlined' startIcon={icon} color='secondary'>
				{name}
			</SidebarButton>
		</Link>
	)
}

const sidebarItems = [
	{
		name: 'Home',
		icon: <HomeIcon />,
		link: '/',
	},
]

export default function Sidebar({ status }) {
	const sidebarClassName = `sidebar ${!status ? 'hide' : ''}`
	const { user, logout } = useAuthContext()

	return (
		<div className={sidebarClassName}>
			<div className='userInformation' onClick={() => {}}>
				<span className='name'>{user.user.name}</span>
				<img
					src={user.user.profile_photo_path}
					style={{
						width: '100px',
						height: '100px',
						borderRadius: 50,
					}}
				/>
				<div className='plus-data'>
					<span>{user.user.username}</span>
				</div>
				<div className='buttons'>
					<IconButton aria-label='logout' size='large'>
						<SettingsIcon
							fontSize='inherit'
							style={{ color: 'lightgray', fontSize: 40 }}
						/>
					</IconButton>
					<IconButton
						aria-label='settings'
						size='large'
						onClick={() => {
							logout()
						}}
					>
						<LogoutIcon
							fontSize='inherit'
							style={{ color: 'lightgray', fontSize: 40 }}
						/>
					</IconButton>
				</div>
			</div>
			<div className='items'>
				{sidebarItems.map((item) => (
					<SidebarItem key={item.name} {...item} />
				))}
			</div>
		</div>
	)
}
