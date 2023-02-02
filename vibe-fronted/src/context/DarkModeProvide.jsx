import { createContext, useEffect, useState, useContext } from 'react'

const DarkModeContext = createContext()

export const useDarkModeContext = () => {
	return useContext(DarkModeContext)
}

export const DarkModeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem('darkMode')) || false
	)

	const toggle = () => {
		setDarkMode(!darkMode)
	}

	useEffect(() => {
		localStorage.setItem('darkMode', darkMode)
	}, [darkMode])

	return (
		<DarkModeContext.Provider value={{ darkMode, toggle }}>
			{children}
		</DarkModeContext.Provider>
	)
}
