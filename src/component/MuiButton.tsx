import React from 'react';
import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

type Props = {};

const MuiButton = (props: Props) => {
	return (
		<Stack spacing={4}>
			<Stack spacing={2} direction="row">
				<Button variant="text" href="https://google.com">
					Text
				</Button>
				<Button variant="contained">contained</Button>
				<Button variant="outlined">outlined</Button>
			</Stack>

			<Stack spacing={2} direction="row">
				<Button variant="contained" color="primary">
					Primary
				</Button>
				<Button variant="text" color="secondary">
					secondary
				</Button>
				<Button variant="contained" color="error">
					error
				</Button>
				<Button variant="contained" color="success">
					success
				</Button>
				<Button variant="outlined" color="warning">
					warning
				</Button>
				<Button variant="contained" color="info">
					info
				</Button>
			</Stack>

			<Stack display="block" spacing={2} direction="row">
				<Button variant="contained" size="small">
					Small
				</Button>
				<Button variant="contained" size="medium" color="warning">
					median
				</Button>
				<Button variant="contained" size="large">
					Large
				</Button>
			</Stack>

			<Stack spacing={2} direction="row">
				<Button
					variant="contained"
					startIcon={<SendIcon />}
					disableRipple
					onClick={() => alert('alert')}>
					send
				</Button>
				<Button variant="contained" endIcon={<SendIcon />} disableElevation>
					Send
				</Button>
				<IconButton aria-label="send" color="success" size="small">
					<SendIcon />
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
