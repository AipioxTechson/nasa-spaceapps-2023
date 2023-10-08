import PlanetInfo from "../app/Components/PlanetInfo";
import { PreviewData } from "@/app/data/previewData";
import Navbar from "../app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function Jupiter() {
	return (
		<Box bg="brand.300" h="100vh">
			<Navbar />
			<PlanetInfo
				name="Jupiter"
				title={PreviewData["Jupiter"].title}
				summary={PreviewData["Jupiter"].summary}
				packinglist={PreviewData["Jupiter"].packingList}
				pic={PreviewData["Jupiter"].image}
				tips={PreviewData["Jupiter"].tips}
			/>
		</Box>
	);
}
