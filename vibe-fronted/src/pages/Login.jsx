import './styles/login.scss'
import Logo from '../assets/logo_aumented.png'
import { Link } from 'react-router-dom'
import { TextField, InputAdornment, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import KeyIcon from '@mui/icons-material/Key'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { API_URL } from '../utils/constants'
import { useAuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Login() {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const { login, user } = useAuthContext()
	const navigate = useNavigate()

	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [user])

	const handleLogin = async () => {
		axios
			.post(
				`${API_URL}/login`,
				{
					username,
					password,
				},
				{
					headers: {
						'Content-Type': 'multipart/form-data',
					},
				}
			)
			.then((resp) => {
				if (resp.data.success) {
					login({
						user: resp.data.user,
						token: resp.data.token,
					})
				}
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return (
		<div className='login'>
			<div className='card'>
				<div className='left'>
					<div className='logo-img'>
						<img src={Logo} />
					</div>
					<p>
						Bienvenido a <strong>VIBE</strong>. La red social que estabas
						buscando, donde se resuleven todso tus problemas. Na mentira, es que
						no se que escribr aqui y estoy realmente apurado
					</p>
					<span>No tienes cuenta?</span>
					<Link to='/register'>
						<Button variant='contained'>Registrate</Button>
					</Link>
				</div>
				<div className='right'>
					<h1>Login</h1>
					<form>
						<TextField
							label='Username'
							variant='outlined'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<PersonIcon />
									</InputAdornment>
								),
							}}
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<TextField
							label='Password'
							variant='outlined'
							type='password'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<KeyIcon />
									</InputAdornment>
								),
							}}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<Button variant='contained' onClick={handleLogin}>
							Login
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
