import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";
import DestinationInfo from "../app/Components/DestinationInfo";
import Accomodations from "../app/Components/Accomodations";
import Travel from "../app/Components/Travel";
import Navbar from "../app/Components/Navbar";
import TimeSpent from "../app/Components/TimeSpent";
import TripAbout from "../app/Components/TripAbout";

export default function Itinerary() {
	return (
		<Box bg="brand.300" w="100vw" align="center">
			<Navbar />
			<TripAbout />
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
