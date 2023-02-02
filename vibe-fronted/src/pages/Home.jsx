import PostField from '../components/PostField'
import Posts from '../components/Posts'

import './styles/home.scss'

export default function Home() {
	return (
		<div className='home'>
			<PostField />
			<Posts />
		</div>
	)
}
