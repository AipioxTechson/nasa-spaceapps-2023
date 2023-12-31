import {
	Box,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";
import DestinationInfo from "../app/Components/DestinationInfo";
import Accomodations from "../app/Components/Accomodations";
import Travel from "../app/Components/Travel";
import Navbar from "../app/Components/Navbar";
import TimeSpent from "../app/Components/TimeSpent";
import TripAbout from "../app/Components/TripAbout";
import { featuredData } from "@/app/data/featuredData";
import { useEffect, useState } from "react";

export default function Itinerary() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [retrievedTour, setRetrievedTour] = useState(
		featuredData["featured"][0]
	);
	useEffect(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			var newTour = featuredData["featured"].find(
				(x) => x.name == localStorage.getItem("tour")
			);
			if (newTour != null) {
				setRetrievedTour(newTour);
			}
		}
	});
	var timeOfDay = false;
	var day = 0;
	return (
		<Box bg="brand.300" w="100vw" pb={10} align="center">
			<Navbar />
			<TripAbout name={retrievedTour.name} />
			{retrievedTour.destinations.map((destination) => {
				timeOfDay = !timeOfDay;
				day = day + timeOfDay;
				return (
					<>
						<TimeSpent day={day} isMorning={timeOfDay} />
						<DestinationInfo
							name={destination.name}
							planet={destination.planet}
							image={destination.image}
						/>
						<Travel
							type={destination.type}
							time={destination.travel_time}
						/>
						{timeOfDay && (
							<Accomodations name={destination.hotel} />
						)}
					</>
				);
			})}
			<Button onClick={onOpen}>Book this tour!</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Oops!</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						This feature is still marinating in the innovation oven,
						but trust us, it's gonna be worth the wait. Stay tuned
						for the grand unveiling!
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
}
