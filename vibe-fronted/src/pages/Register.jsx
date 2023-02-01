import './styles/register.scss'
import Logo from '../assets/logo_aumented.png'
import { Link } from 'react-router-dom'
import { TextField, InputAdornment, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import KeyIcon from '@mui/icons-material/Key'
import BadgeIcon from '@mui/icons-material/Badge'
import EmailIcon from '@mui/icons-material/Email'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { API_URL } from '../utils/constants'
import { useAuthContext } from '../context/AuthProvider'
import { useNavigate } from 'react-router-dom'

export default function Register() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfirmation, setPasswordConfirmation] = useState('')
	const [error, setError] = useState('')

	const { login, user } = useAuthContext()
	const navigate = useNavigate()

	useEffect(() => {
		if (user) {
			navigate('/')
		}
	}, [user])

	const handleLogin = async (e) => {
		e.preventDefault()

		axios
			.post(
				`${API_URL}/register`,
				{
					name: name,
					email: email,
					username: username,
					password: password,
					password_confirmation: passwordConfirmation,
				},
				{
					headers: {
						'Content-Type': 'multipart/form-data',
						Accept: 'application/json',
					},
				}
			)
			.then((resp) => {
				if (resp.data.success) {
					login({ user: resp.data.user, token: resp.data.token })
					navigate('/')
				}
			})
			.catch((error) => {
				setError(error.response.data.message)
			})
	}

	return (
		<div className='register'>
			<div className='card'>
				<div className='left'>
					<div className='logo-img'>
						<img src={Logo} />
					</div>
					<p>
						Bienvenido a <strong>VIBE</strong>. La red social que estabas
						buscando, donde se resuleven todso tus problemas. Oye, dime que te
						parece el logo que me cree
					</p>
					<span>Ya tienes cuenta?</span>
					<Link to='/login'>
						<Button variant='contained'>Login</Button>
					</Link>
				</div>
				<div className='right'>
					<h1>Register</h1>
					<form>
						<TextField
							label='Name'
							variant='outlined'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<BadgeIcon />
									</InputAdornment>
								),
							}}
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<TextField
							label='Email'
							type='email'
							variant='outlined'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<EmailIcon />
									</InputAdornment>
								),
							}}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
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
						<TextField
							label='Password Confirmation'
							variant='outlined'
							type='password'
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<KeyIcon />
									</InputAdornment>
								),
							}}
							value={passwordConfirmation}
							onChange={(e) => setPasswordConfirmation(e.target.value)}
						/>
						{error && (
							<div
								style={{
									color: 'red',
									fontSize: 20,
									textAlign: 'center',
								}}
							>
								{error}
							</div>
						)}
						<Button variant='contained' onClick={handleLogin}>
							Registrate
						</Button>
					</form>
				</div>
			</div>
		</div>
	)
}
