import { Box } from '@mui/material';
import React, { useRef } from 'react';
import Bar from './components/bar';
import Footer from './components/footer';
import Header from './components/header';
import Produk from './components/produk';

const App = () => {
	const home = useRef(null);
	const alamat = useRef(null);
	const produk = useRef(null);

	const scroll = { home: home, alamat: alamat, produk: produk };
	return (
		<Box>
			<Bar scroll={scroll} />
			<Header home={home} />
			<Produk produk={produk} />
			<Footer alamat={alamat} />
		</Box>
	);
};

export default App;
