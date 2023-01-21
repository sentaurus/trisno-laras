import { Box, Card, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import data from '../data/produk.json';
import Lottie from 'lottie-react';
import anim from '../assets/anim/gong.json';
import { grey, red } from '@mui/material/colors';
import svg from '../data/svg.json';

const Item = ({ data }) => (
	<Grid item sm={4} xs={12}>
		<Grid container spacing={4}>
			{data.map((item, index) => (
				<Grid key={index} item sm={12} xs={12}>
					<Card elevation={5} sx={{ borderRadius: 3 }}>
						<CardMedia component='img' src={require(`../assets/produk/${item.img}`)} />
						<CardContent>
							<Typography fontWeight={900}>{item.title}</Typography>
							<Typography color={grey[500]} variant='caption'>
								https://www.gramedia.com/literasi/alat-musik-gamelan/{item.tag}
							</Typography>
							<Typography>{item.deskripsi}</Typography>
						</CardContent>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' style={{ display: 'block' }}>
							<path {...svg.item}></path>
						</svg>
					</Card>
				</Grid>
			))}
		</Grid>
	</Grid>
);

const Produk = ({ gamelan }) => (
	<Box id='#produk' ref={gamelan}>
		<Divider />
		<Grid container alignItems='center' sx={{ px: 3 }}>
			<Grid item sm={1} xs={6}>
				<Lottie animationData={anim} loop={true} />
			</Grid>
			<Grid item sm={11} xs={6}>
				<Typography fontSize={30} fontWeight={900} color={red[800]}>
					Contoh Alat Musik Gamelan
				</Typography>
			</Grid>
		</Grid>
		<Grid container spacing={4} sx={{ px: 3 }}>
			<Item data={data.data1} />
			<Item data={data.data2} />
			<Item data={data.data3} />
		</Grid>
		<Divider sx={{ mt: 4, mb: 1 }} />
	</Box>
);

export default Produk;
