import PlanetInfo from "../app/Components/PlanetInfo";
import { PreviewData } from "@/app/data/previewData";
import Navbar from "../app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function Saturn() {
	return (
		<Box bg="brand.300" h="100vh">
			<Navbar />
			<PlanetInfo
				name="Saturn"
				title={PreviewData["Saturn"].title}
				summary={PreviewData["Saturn"].summary}
				packinglist={PreviewData["Saturn"].packingList}
				pic={PreviewData["Saturn"].image}
				tips={PreviewData["Saturn"].tips}
			/>
		</Box>
	);
}
