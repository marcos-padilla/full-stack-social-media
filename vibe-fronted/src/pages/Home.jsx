import PostField from '../components/PostField'
import './styles/home.scss'

export default function Home() {
	return (
		<div className='home'>
			<div className='left'>
				<PostField />
			</div>
			<div className='right'></div>
		</div>
	)
}
