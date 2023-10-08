import PlanetInfo from "../app/Components/PlanetInfo";
import { PreviewData } from "@/app/data/previewData";
import Navbar from "../app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function Venus() {
	return (
		<Box bg="brand.300" h="100vh">
			<Navbar />
			<PlanetInfo
				name="Venus"
				title={PreviewData["Venus"].title}
				summary={PreviewData["Venus"].summary}
				packinglist={PreviewData["Venus"].packingList}
				pic={PreviewData["Venus"].image}
				tips={PreviewData["Venus"].tips}
			/>
		</Box>
	);
}
