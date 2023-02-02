import TextField from '@mui/material/TextField'

export default function PostField() {
	return (
		<TextField
			id='outlined-textarea'
			label='Multiline Placeholder'
			placeholder='Placeholder'
			multiline
		/>
	)
}
