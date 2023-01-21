import { Call, Email, Place, WhatsApp } from '@mui/icons-material';
import { Box, Chip, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import Lottie from 'lottie-react';
import anim from '../assets/anim/alamat.json';
import svg from '../data/svg.json';
import kontak from '../data/kontak.json';

const Item = ({ item, icon }) => (
	<Grid container sx={{ mb: 0.5 }}>
		<Typography color='white' sx={{ mr: 1 }}>
			{item.title} :
		</Typography>
		<Chip onClick={() => (window.location.href = item.click)} label={item.data} color={item.warna} icon={icon} size='small' clickable />
	</Grid>
);

const Footer = ({ alamat }) => {
	const icon = [<Call />, <WhatsApp />, <Email />, <Place />];
	return (
		<Box ref={alamat}>
			<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' style={{ display: 'block' }}>
				<path {...svg.footer}></path>
			</svg>
			<Grid container alignItems='center' sx={{ py: 2, px: 3, bgcolor: '#985c3a' }}>
				<Grid item sm={2} xs={12}>
					<Lottie animationData={anim} loop={true} />
				</Grid>
				<Grid item sm={8} xs={12}>
					<Typography fontWeight={900} color='white'>
						Alamat
					</Typography>
					<Typography color='white'>Jl. Kh. Solikin No.18b, Lingkung Dua, Paju, Kec. Ponorogo, Kab. Ponorogo, Jawa Timur 63415</Typography>
					{kontak.data.map((item, index) => (
						<Item key={index} item={item} icon={icon[index]} />
					))}
				</Grid>
				<Grid item sm={2} xs={12}>
					<Stack height='100%' alignItems='center'>
						<Box component='img' src={require('../assets/gmaps.png')} sx={{ width: 120, bgcolor: 'white', p: 1, mt: 1 }} />
						<Box component='img' src={require('../assets/alamat.png')} sx={{ width: 120, height: 120 }} />
					</Stack>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Footer;
