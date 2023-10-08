import { Box, Button, Text, Heading, Center, Spacer } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";
import DestinationInfo from "../app/Components/DestinationInfo";
import Accomodations from "../app/Components/Accomodations";
import Travel from "../app/Components/Travel";
import Navbar from "../app/Components/Navbar";
import TimeSpent from "../app/Components/TimeSpent";

export default function Itinerary() {
	return (
		<Box bg="brand.300" h="100vh" w="100vw" align="center">
			<Navbar />
			<TimeSpent />
			<DestinationInfo />
			<TimeSpent />
			<Accomodations />
			<TimeSpent />
			<Travel />
			<TimeSpent />
			<DestinationInfo />
			<TimeSpent />
			<Travel />
		</Box>
	);
}
