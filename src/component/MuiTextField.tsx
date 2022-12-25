import React from 'react';
import { Stack, TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

type Props = {};

const MuiTextField = (props: Props) => {
	return (
		<Stack spacing={4}>
			<Stack direction="row" spacing={2}>
				<TextField label="Name" variant="filled" />
				<TextField label="Name" variant="outlined" />
				<TextField label="Name" variant="standard" />
			</Stack>

			{/* COLOR & SIZE */}
			<Stack direction="row" spacing={2}>
				<TextField label="small secondary" size="small" color="secondary" />
			</Stack>

			<Stack direction="row" spacing={2}>
				<TextField label="Form Input" size="small" color="secondary" required />
				<TextField
					label="Form Input"
					size="small"
					type="password  "
					color="secondary"
					required
					helperText="Do not share your password"
				/>
				<TextField label="read only" InputProps={{ readOnly: true }} />
			</Stack>

			<Stack direction="row" spacing={2}>
				<TextField
					label="Amount"
					InputProps={
						{
							// startAdornment: <InputAdornment postion="start">$</InputAdornment>,
						}
					}
				/>
			</Stack>
		</Stack>
	);
};

export default MuiTextField;
