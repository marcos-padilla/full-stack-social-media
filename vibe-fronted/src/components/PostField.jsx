import './styles/postfield.scss'
import Image from '../assets/img.png'
import Map from '../assets/map.png'
import Friend from '../assets/friend.png'
import { useContext } from 'react'
import { useAuthContext } from '../context/AuthProvider'

const Share = () => {
	const { user } = useAuthContext()
	return (
		<div className='postfield'>
			<div className='container'>
				<div className='top'>
					<img src={user.user.profile_photo_path} alt='' />
					<input
						type='text'
						placeholder={`Que tienes en mente ${user.user.name}?`}
					/>
				</div>
				<hr />
				<div className='bottom'>
					<div className='left'>
						<input type='file' id='file' style={{ display: 'none' }} />
						<label htmlFor='file'>
							<div className='item'>
								<img src={Image} alt='' />
								<span>Add Image</span>
							</div>
						</label>
						<div className='item'>
							<img src={Map} alt='' />
							<span>Add Place</span>
						</div>
						<div className='item'>
							<img src={Friend} alt='' />
							<span>Tag Friends</span>
						</div>
					</div>
					<div className='right'>
						<button>Share</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Share
