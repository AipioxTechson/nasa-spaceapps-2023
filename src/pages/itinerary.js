import { Box, Button } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";
import DestinationInfo from "../app/Components/DestinationInfo";
import Accomodations from "../app/Components/Accomodations";
import Travel from "../app/Components/Travel";
import Navbar from "../app/Components/Navbar";
import TimeSpent from "../app/Components/TimeSpent";
import TripAbout from "../app/Components/TripAbout";
import { featuredData } from "@/app/data/featuredData";

export default function Itinerary() {
	return (
		<Box bg="brand.300" w="100vw" pb={10} align="center">
			<Navbar />
			<TripAbout name={featuredData["01-01-2034"].name} />
			{featuredData["01-01-2034"].planets.map((planet) => (
				<>
					<Travel type="Warp Drive" time="1 hour" />
					{planet.destinations.map((destination) => (
						<>
							<TimeSpent />
							<DestinationInfo
								name={destination}
								info="Dest info"
							/>
							<Travel
								type="Express underground train"
								time="10 hours"
							/>
						</>
					))}
					<Accomodations name={planet.hotel} />
				</>
			))}
			<Button>Book this tour!</Button>
		</Box>
	);
}
