import { Box } from '@mui/material';
import React from 'react';
import svg from '../data/svg.json';

const Welcome = () => {
	return (
		<Box>
			<Box sx={{ height: 50 }} />
			<Box position='absolute' width='100%'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' style={{ display: 'block' }}>
					<path {...svg.welcome}></path>
				</svg>
			</Box>
			<Box component='img' src={require('../assets/welcome.png')} sx={{ width: '100%' }} />
		</Box>
	);
};

export default Welcome;
