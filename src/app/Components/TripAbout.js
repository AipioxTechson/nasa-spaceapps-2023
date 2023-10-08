import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

function TripAbout() {
	return (
		<Box w="80vw" borderRadius="lg" align="center" mb={3} p={2}>
			<Heading color="brand.200" fontWeight="bold" fontSize="3xl">
				Trip Itinerary
			</Heading>
			<Text color="brand.200">
				This is your trip itinerary. Your adventure awaits!
			</Text>
		</Box>
	);
}

export default TripAbout;
