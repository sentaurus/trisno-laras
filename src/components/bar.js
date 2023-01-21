import { AppBar, Avatar, Box, Grid, IconButton, Link, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import React from 'react';

const Bar = ({ scroll }) => {
	const click = (data) => data.current?.scrollIntoView({ behavior: 'smooth' });
	return (
		<AppBar sx={{ bgcolor: '#985c3a' }} elevation={0}>
			<Grid container alignItems='center' sx={{ height: 50, px: 2 }}>
				<Avatar src={require('../assets/icon.png')} variant='rounded' sx={{ mr: 1 }} />

				<Link onClick={() => click(scroll.home)} underline='none' sx={{ mr: 2 }}>
					<Typography fontSize={15} fontWeight={900} color='white'>
						Home
					</Typography>
				</Link>
				<Link onClick={() => click(scroll.gamelan)} underline='none' sx={{ mr: 2 }}>
					<Typography fontSize={15} fontWeight={400} color={orange[200]}>
						Gamelan
					</Typography>
				</Link>
				<Link onClick={() => click(scroll.alamat)} underline='none'>
					<Typography fontSize={15} fontWeight={400} color={orange[200]}>
						Kontak
					</Typography>
				</Link>
				<Box flex={1} />
				<IconButton onClick={() => window.open('https://id.wikipedia.org/wiki/Gamelan')}>
					<Avatar src={require('../assets/wiki.png')} sx={{ width: 24, height: 24 }} />
				</IconButton>
			</Grid>
		</AppBar>
	);
};

export default Bar;
