import React from 'react';
import { Box } from '@mui/material';
const MuiBox = () => {
	return (
		<Box
			component="span"
			sx={{
				backgroundColor: 'primary.main',
				color: 'white',
				width: '100px',
				height: '100px',
				padding: '16px',
				'&:hover': {
					backgroundColor: 'primary.light'
				}
			}}>
			Bassu
		</Box>
	);
};

export default MuiBox;
