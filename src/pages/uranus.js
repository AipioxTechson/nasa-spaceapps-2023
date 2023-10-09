import PlanetInfo from "../app/Components/PlanetInfo";
import { PreviewData } from "@/app/data/previewData";
import Navbar from "../app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function Uranus() {
	return (
		<Box bg="brand.300" h="100vh">
			<Navbar />
			<PlanetInfo
				name="Uranus"
				title={PreviewData["Uranus"].title}
				summary={PreviewData["Uranus"].summary}
				packinglist={PreviewData["Uranus"].packingList}
				pic={PreviewData["Uranus"].image}
				tips={PreviewData["Uranus"].tips}
			/>
		</Box>
	);
}
