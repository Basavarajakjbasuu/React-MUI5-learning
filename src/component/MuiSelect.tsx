import React, { useState } from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

type Props = {};

const MuiSelect = (props: Props) => {
	const [countries, setcountries] = useState<string[]>([]);
	console.log(countries);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setcountries(typeof value === 'string' ? value.split(',') : value);
	};
	return (
		<Box width="250px">
			<TextField
				label="Select country"
				select
				value={countries}
				onChange={handleChange}
				fullWidth
				SelectProps={{
					multiple: true
				}}
				size="small"
				color="success">
				<MenuItem value="IN">India</MenuItem>
				<MenuItem value="US">USA</MenuItem>
				<MenuItem value="AU">Austalia</MenuItem>
			</TextField>
		</Box>
	);
};

export default MuiSelect;
