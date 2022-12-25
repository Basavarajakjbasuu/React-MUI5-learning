import React, { useState } from 'react';
import {
	Box,
	FormControlLabel,
	Checkbox,
	FormControl,
	FormLabel,
	FormGroup
} from '@mui/material';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

type Props = {};

const MuiCheckBox = (props: Props) => {
	const [accpetTnC, setAccpetTnC] = useState(false);
	console.log({ accpetTnC });

	const [skills, setSkills] = useState<string[]>([]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setAccpetTnC(event.target.checked);
	};

	console.log(skills);

	const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const index = skills.indexOf(event.target.value);

		if (index === -1) {
			setSkills([...skills, event.target.value]);
		} else {
			setSkills(skills.filter(skill => skill !== event.target.value));
		}
	};
	return (
		<Box>
			<Box>
				<FormControlLabel
					label="I accept term and conditons"
					control={<Checkbox checked={accpetTnC} onChange={handleChange} />}
				/>
			</Box>

			<Box>
				<Checkbox
					icon={<BookmarkBorderIcon />}
					checkedIcon={<BookmarkIcon />}
					checked={accpetTnC}
					onChange={handleChange}
				/>
			</Box>

			<Box>
				<FormControl>
					<FormLabel>Skills</FormLabel>
					<FormGroup row>
						<FormControlLabel
							label="HTML"
							control={
								<Checkbox
									value="HTML"
									checked={skills.includes('html')}
									onChange={handleSkillChange}
								/>
							}
						/>
						<FormControlLabel
							label="CSS"
							control={
								<Checkbox
									value="CSS"
									checked={skills.includes('css')}
									onChange={handleSkillChange}
								/>
							}
						/>
						<FormControlLabel
							label="JAVASCRIPT"
							control={
								<Checkbox
									value="JAVASCRIPT"
									checked={skills.includes('javascript')}
									onChange={handleSkillChange}
								/>
							}
						/>
					</FormGroup>
				</FormControl>
			</Box>
		</Box>
	);
};

export default MuiCheckBox;
