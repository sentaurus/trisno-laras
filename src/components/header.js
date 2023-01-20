import { Box, Divider, Grid, Typography } from '@mui/material';
import { orange, red } from '@mui/material/colors';
import React from 'react';
import Lottie from 'lottie-react';
import anim from '../assets/anim/gong.json';
import svg from './svg.json';

const Header = ({ home }) => (
	<Box ref={home}>
		<Box sx={{ height: 50 }} />
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' style={{ display: 'block' }}>
			<path {...svg.header}></path>
		</svg>
		<Grid container alignItems='center' spacing={3} sx={{ px: 3 }}>
			<Grid item sm={3} xs={12}>
				<Lottie animationData={anim} loop={true} />
			</Grid>
			<Grid item sm={9} xs={12}>
				<Grid container>
					<Typography fontSize={70} color={orange[800]} sx={{ mr: 1 }}>
						Kerajinan
					</Typography>
					<Typography fontSize={70} color={red[600]} fontWeight={900}>
						Gamelan
					</Typography>
				</Grid>
				<Divider />
				<Typography fontSize={30}>Menerima pesanan alat musik tradisional berupa gamelan berupa gamelan jawa maupun bali serta menerima perbaikan gamelan.</Typography>
			</Grid>
		</Grid>
	</Box>
);

export default Header;
