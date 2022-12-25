import React from 'react';
import {
	Box,
	FormControl,
	FormLabel,
	FormControlLabel,
	RadioGroup,
	Radio
} from '@mui/material';
type Props = {};

const MuiRadioButton = (props: Props) => {
	return (
		<Box width="200px">
			<FormControl>
				<FormLabel>Years of Experience</FormLabel>

				<RadioGroup name="job-experience-group" aria-label="job-experience">
					<FormControlLabel control={<Radio />} label="0-2" value="0-2" />
					<FormControlLabel control={<Radio />} label="3-5" value="3-5" />
					<FormControlLabel control={<Radio />} label="5-10" value="5-10" />
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default MuiRadioButton;
