// pages/_app.js
import { ChakraProvider, Box } from "@chakra-ui/react";
import Navbar from "@/app/Components/Navbar";
import Hero from "../app/Components/Hero";
import PopularSection from "../app/Components/PopularSection";
import AboutUs from "../app/Components/AboutUs";
import "@fontsource-variable/baloo-bhai-2";

function MyApp({ Component, pageProps }) {
	return (
			<Box bg="brand.300">
				<Box bgImage="url('/herosmall.gif')" h="75vh">
          <Navbar/>
					<Hero />
				</Box>
				<Box>
					<PopularSection />
				</Box>
				<AboutUs />
			</Box>
	);
}

export default MyApp;
