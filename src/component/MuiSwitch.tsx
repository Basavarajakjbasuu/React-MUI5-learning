import React, { useState } from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';
type Props = {};

const MuiSwitch = (props: Props) => {
	const [checked, setChecked] = useState<boolean>(false);

	console.log({ checked });
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};
	return (
		<Box>
			<FormControlLabel
				label="Dark mode"
				control={
					<Switch onChange={handleChange} size="small" color="success" />
				}
			/>
		</Box>
	);
};

export default MuiSwitch;
