import { Box, Divider, Typography } from '@mui/material';
import { orange } from '@mui/material/colors';
import React from 'react';
import svg from '../data/svg.json';

const Header = ({ home }) => (
	<Box ref={home}>
		<Box sx={{ bgcolor: '#985c3a' }}>
			<Box sx={{ height: 50 }} />
			<Box position='absolute' width='100%'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' style={{ display: 'block' }}>
					<path {...svg.top}></path>
				</svg>
			</Box>
			<Box component='img' src={require('../assets/welcome.png')} sx={{ width: '100%' }} />
			<Box sx={{ pb: 2, px: 2 }}>
				<Typography color='white' fontWeight={500}>
					Kami ialah bisnis usaha yang berada di daerah Kepatihan, Kecamatan Ponorogo, Kabupaten Ponorogo. Kami ialah bisnis usaha yang berkembang dibidang toko musik terutama musik tradisional. Menyediakan peralatan musik tradisioanl khas jawa yang
					berkualitas dengan harga yang terjangkau. Pelayanan ramah dan sopan serta tempat kami mudah ditemukan. Terimakasih.
				</Typography>
				<Divider sx={{ my: 1, bgcolor: 'white' }} />
				<Typography fontSize={20} fontWeight={900} color={orange[400]}>
					Deskripsi Singkat :{' '}
				</Typography>
				<Typography color='white'>
					Gong dan Gamelan Gong dan Gamelan, adalah salah satu alat musik tradisional di Indonesia yang terakulturasi oleh budaya Cina, Arab, India, dan juga beberapa negara di Eropa. Dalam sejarah, pada kurun waktu 500 awal masehi, gendang perunggu masuk di
					Indonesia sebagai salah satu alat barter yang di gunakan oleh negara lain. Gendang perunggu bisa dijumpai di beberapa kepulauan di Indonesia seperti Sumatra, Jawa, Bali, Sumbawa, Selayar, Nusa Tenggara, Maluku, hingga Papua. Fungsi gong dan gamelan
					pada masyarakat Indonesia adalah sebagai alat musik yang mengiringi upacara adat keluarga, masyarakat, kerajaan, dan keagamaan. Di sisi lain Gong dan Gamelan dulunya dianggap sebagai harta, mas kawin, pusaka, perangkat upacara, dan lainnya. Di
					Indonesia sendiri terdapat instrumen Gamelan Jawa, seperti Bonang Barung, Pencon, dan Kolintang. Fungsi sebenarnya Gong dalam alat musik tradisional adalah untuk mengawali dan mengakhiri suatu acara, sedangkan Gamelan adalah suatu instrument musik
					yang mengiringi suatu acara seperti wayang, reog ponorogo, dan beberapa tarian-tarian lainnya.
				</Typography>
			</Box>
		</Box>
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' style={{ display: 'block' }}>
			<path {...svg.bottom}></path>
		</svg>
	</Box>
);

export default Header;
