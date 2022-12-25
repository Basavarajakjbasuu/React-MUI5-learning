import React, { useState } from 'react';
import { Stack, Autocomplete, TextField } from '@mui/material';

type Skill = {
	id: number;
	label: string;
};

const skills = ['HTML', 'CSS', 'Javascript', 'React', 'TypeScript'];

const skillsOptions = skills.map((skill, index) => ({
	id: index + 1,
	label: skill
}));

const MuiAutoComplete = () => {
	const [value, setValue] = useState<string | null>(null);
	const [skill, setSkill] = useState<Skill | null>(null);
	console.log(skill);
	return (
		<Stack spacing={2} width="250px">
			<Autocomplete
				options={skills}
				renderInput={params => <TextField {...params} label="skills" />}
				value={value}
				onChange={(evnt: any, newValue: string | null) => setValue(newValue)}
				freeSolo
			/>

			<Autocomplete
				options={skillsOptions}
				renderInput={params => <TextField {...params} label="skills" />}
				value={skill}
				onChange={(evnt: any, newValue: string | null) => setSkill(newValue)}
			/>
		</Stack>
	);
};

export default MuiAutoComplete;
