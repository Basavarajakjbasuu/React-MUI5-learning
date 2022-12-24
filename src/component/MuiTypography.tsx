import React from 'react';

import { Typography } from '@mui/material';
type Props = {};

const MuiTypography = (props: Props) => {
	return (
		<div>
			<Typography variant="h1">h1 Heading</Typography>
			<Typography variant="h2">h2 Heading</Typography>
			<Typography variant="h3">h3 Heading</Typography>
			<Typography variant="h4" component="h1" gutterBottom>
				h4 Heading
			</Typography>
			<Typography variant="h5">h5 Heading</Typography>
			<Typography variant="h6">h6 Heading</Typography>

			<Typography variant="subtitle1">Subtitle 1</Typography>
			<Typography variant="subtitle2">Subtitle 2</Typography>

			<Typography variant="body1">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum vel
				voluptas labore perspiciatis. Cum sed sunt soluta ab debitis magni!
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui,
				accusantium laborum odit ullam impedit at inventore quo sequi quia?
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium
				earum quis odit, vel, perspiciatis, unde error nisi enim corrupti quo.
				Provident accusamus illum corrupti enim est sunt quia assumenda veniam
				asperiores facere facilis iste dolores, blanditiis nobis delectus
				ducimus.
			</Typography>
			<Typography variant="body2">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi qui,
				accusantium laborum odit ullam impedit at inventore quo sequi quia?
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea accusantium
				earum quis odit, vel, perspiciatis, unde error nisi enim corrupti quo.
				Provident accusamus illum corrupti enim est sunt quia assumenda veniam
				asperiores facere facilis iste dolores, blanditiis nobis delectus
				ducimus.
			</Typography>
		</div>
	);
};

export default MuiTypography;
