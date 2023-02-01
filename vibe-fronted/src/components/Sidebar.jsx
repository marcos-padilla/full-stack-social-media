import './styles/sidebar.scss'
import { useAuthContext } from '../context/AuthProvider'
import LogoutIcon from '@mui/icons-material/Logout'
import SettingsIcon from '@mui/icons-material/Settings'
import { IconButton } from '@mui/material'

export default function Sidebar({ status }) {
	const sidebarClassName = `sidebar ${!status ? 'hide' : ''}`
	const { user } = useAuthContext()

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
					<IconButton aria-label='settings' size='large'>
						<LogoutIcon
							fontSize='inherit'
							style={{ color: 'lightgray', fontSize: 40 }}
						/>
					</IconButton>
				</div>
			</div>
		</div>
	)
}
