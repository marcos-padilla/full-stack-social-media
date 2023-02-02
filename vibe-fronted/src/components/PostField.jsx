import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto'
import IconButton from '@mui/material/IconButton'

export default function PostField() {
	return (
		<>
			<TextField
				style={{ width: '100%' }}
				label='Que estas pensando...'
				multiline
				rows={5}
				variant='filled'
				inputProps={{ style: { fontSize: 25 } }}
				InputLabelProps={{ style: { fontSize: 20 } }}
			/>
			<div
				style={{
					marginTop: 10,
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<div>
					<IconButton
						color='primary'
						aria-label='upload picture'
						component='label'
					>
						<input hidden accept='image/*' type='file' />
						<InsertPhotoIcon />
					</IconButton>
				</div>
				<Button variant='contained'>Publicar</Button>
			</div>
		</>
	)
}
