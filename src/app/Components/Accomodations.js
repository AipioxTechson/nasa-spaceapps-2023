import React from "react";
import {
	Box,
	Text,
} from "@chakra-ui/react";

function Accomodations() {
	return (
		<Box
			w="80vw"
			borderRadius="lg"
			bg="brand.500"
			align="center"
			mb={3}
			p={2}
		>
			<Text color="brand.600" fontWeight="bold" fontSize="xs">
				ACCOMODATIONS
			</Text>
			<Text color="brand.600">Hotel: Hotel Mars</Text>
			<Text color="brand.600">
				Instructions: A tour guide will bring you to your hotel.
			</Text>
		</Box>
	);
}

export default Accomodations;
