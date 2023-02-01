import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../utils/constants'

const AuthContext = createContext()

export const useAuthContext = () => {
	return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	)

	const login = ({ user, token }) => {
		setUser({ user, token })
	}

	const logout = async () => {
		if (!user) return

		const options = {
			method: 'POST',
			url: 'http://127.0.0.1:8000/api/logout',
			headers: {
				Accept: 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		}

		axios
			.request(options)
			.then((resp) => {
				if (resp.data.success) {
					setUser(null)
				}
			})
			.catch((err) => {
				console.log(err)
			})
	}

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user))
	}, [user])

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}
