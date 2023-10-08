import PlanetInfo from "../app/Components/PlanetInfo";
import { PreviewData } from "@/app/data/previewData";
import Navbar from "../app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function Mars() {
	return (
		<Box bg="brand.300" h="100vh">
            <Navbar />
			<PlanetInfo
                name="Mars"
				title={PreviewData["Mars"].title}
				summary={PreviewData["Mars"].summary}
				packinglist={PreviewData["Mars"].packingList}
				pic={PreviewData["Mars"].image}
				tips={PreviewData["Mars"].tips}
			/>
		</Box>
	);
}
