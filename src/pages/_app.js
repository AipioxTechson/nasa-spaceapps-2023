// pages/_app.js
import { ChakraProvider, Box } from "@chakra-ui/react";
import theme from "../app/theme";
import Navbar from "../app/Components/Navbar";
import Hero from "../app/Components/Hero";
import ActionItems from "../app/Components/ActionItems";
import PopularSection from "../app/Components/PopularSection";
import AboutUs from "../app/Components/AboutUs";
import "@fontsource-variable/baloo-bhai-2";

function MyApp({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Box bg="brand.300">
				<Box bgImage="url('/herosmall.gif')" h="75vh">
					<Navbar />
					<Hero />
				</Box>
				<Box>
					<PopularSection />
				</Box>
					<AboutUs />
			</Box>
		</ChakraProvider>
	);
}

export default MyApp;
