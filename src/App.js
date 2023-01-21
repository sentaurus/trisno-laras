import { Box } from '@mui/material';
import React, { useRef } from 'react';
import Bar from './components/bar';
import Footer from './components/footer';
import Header from './components/header';
import Produk from './components/produk';

const App = () => {
	const home = useRef(null);
	const alamat = useRef(null);
	const gamelan = useRef(null);

	const scroll = { home: home, alamat: alamat, gamelan: gamelan };
	return (
		<Box>
			<Bar scroll={scroll} />
			<Header home={home} />
			<Produk gamelan={gamelan} />
			<Footer alamat={alamat} />
		</Box>
	);
};

export default App;
