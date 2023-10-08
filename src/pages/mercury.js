import PlanetInfo from "../app/Components/PlanetInfo";
import { PreviewData } from "@/app/data/previewData";
import Navbar from "../app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function Mercury() {
	return (
		<Box bg="brand.300" h="100vh">
			<Navbar />
			<PlanetInfo
				name="Mercury"
				title={PreviewData["Mercury"].title}
				summary={PreviewData["Mercury"].summary}
				packinglist={PreviewData["Mercury"].packingList}
				pic={PreviewData["Mercury"].image}
				tips={PreviewData["Mercury"].tips}
			/>
		</Box>
	);
}
