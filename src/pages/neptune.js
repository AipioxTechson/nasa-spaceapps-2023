import PlanetInfo from "../app/Components/PlanetInfo";
import { PreviewData } from "@/app/data/previewData";
import Navbar from "../app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function Neptune() {
	return (
		<Box bg="brand.300" h="100vh">
			<Navbar />
			<PlanetInfo
				name="Neptune"
				title={PreviewData["Neptune"].title}
				summary={PreviewData["Neptune"].summary}
				packinglist={PreviewData["Neptune"].packingList}
				pic={PreviewData["Neptune"].image}
				tips={PreviewData["Neptune"].tips}
			/>
		</Box>
	);
}
