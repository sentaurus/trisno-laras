import { Place } from '@mui/icons-material';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import svg from './svg.json';
import Lottie from 'lottie-react';
import anim from '../assets/anim/alamat.json';

const Footer = ({ alamat }) => {
	const map = () => window.open('https://www.google.co.id/maps/place/Mbah+Goiman+Gong/@-7.8882964,111.4608583,21z/data=!4m5!3m4!1s0x2e799fedd7dc5def:0xe71e7df0ba68bd17!8m2!3d-7.8883176!4d111.4610148');
	return (
		<Box ref={alamat}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' style={{ display: 'block' }}>
				<path {...svg.footer}></path>
			</svg>
			<Grid container alignItems='center' sx={{ py: 2, px: 3, bgcolor: '#985c3a' }}>
				<Grid item sm={2} xs={6}>
					<Lottie animationData={anim} loop={true} />
				</Grid>
				<Grid item sm={2} xs={6}>
					<Stack height='100%' alignItems='center'>
						<Box component='img' src={require('../assets/alamat.png')} sx={{ width: 100, height: 100, mb: 1 }} />
						<Chip onClick={() => map()} icon={<Place />} label='Google Maps' clickable color='warning' size='small' />
					</Stack>
				</Grid>
				<Grid item sm={8} xs={12}>
					<Typography fontWeight={900} color='white'>
						Alamat
					</Typography>
					<Typography color='white'>Jl. Kh. Solikin No.18b, Lingkung Dua, Paju, Kec. Ponorogo, Kab. Ponorogo, Jawa Timur 63415</Typography>
					<Typography color='white'>Telepon : +62 123 456</Typography>
					<Typography color='white'>WhatsApp : +62 812 3456 7890</Typography>
					<Typography color='white'>e-Mail : test@gmail.com</Typography>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
