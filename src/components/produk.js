import { Box, Card, CardContent, CardHeader, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import data from './produk.json';

const Item = ({ data }) => (
	<Grid item sm={4} xs={12}>
		<Grid container spacing={4}>
			{data.map((item, index) => (
				<Grid key={index} item sm={12} xs={12}>
					<Card elevation={5} sx={{ borderRadius: 3 }}>
						<CardMedia component='img' src={require(`../assets/produk/${item.img}`)} />
						<CardHeader title={item.title} subheader={`https://www.gramedia.com/literasi/alat-musik-gamelan/${item.tag}`} />
						<CardContent>
							<Typography>{item.deskripsi}</Typography>
						</CardContent>
					</Card>
				</Grid>
			))}
		</Grid>
	</Grid>
);

const Produk = ({ produk }) => (
	<Box id='#produk' ref={produk} sx={{ p: 4 }}>
		<Grid container spacing={4}>
			<Item data={data.data1} />
			<Item data={data.data2} />
			<Item data={data.data3} />
		</Grid>
	</Box>
);

export default Produk;
