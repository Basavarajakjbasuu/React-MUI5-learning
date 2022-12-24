import { useState } from 'react';
import {
	Stack,
	Button,
	IconButton,
	ButtonGroup,
	ToggleButton,
	ToggleButtonGroup
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormateBoldIcon from '@mui/icons-material/FormatBold';
import FormateItalicIcon from '@mui/icons-material/FormatItalic';
import FormateUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

type Props = {};

const MuiButton = (props: Props) => {
	const [formate, setFormate] = useState<string | null>(null);

	const handleFormateChange = (
		_evnt: React.MouseEvent<HTMLElement>,
		updatedFormats: string[]
	) => {
		setFormate(updatedFormats);
	};
	console.log(formate);
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

			<Stack direction="row">
				<ButtonGroup
					variant="contained"
					orientation="vertical"
					size="small"
					color="secondary"
					aria-label="allignment button">
					<Button onClick={() => alert('left')}>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>

			{/* Toggle Button */}

			<Stack direction="row">
				<ToggleButtonGroup
					aria-label="text formatting"
					value={formate}
					onChange={handleFormateChange}
					size="small"
					color="success"
					orientation="vertical"
					exclusive>
					<ToggleButton value="bold">
						<FormateBoldIcon />
					</ToggleButton>
					<ToggleButton value="italic">
						<FormateItalicIcon />
					</ToggleButton>
					<ToggleButton value="underlined">
						<FormateUnderlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
