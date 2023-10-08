import React from "react";
import {
	Box,
	Text,
} from "@chakra-ui/react";

function Accomodations({ name, info }) {
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
			<Text color="brand.600">Hotel: {name}</Text>
			<Text color="brand.600">
				{info}
			</Text>
			<Text color="brand.600">
				Instructions: A tour guide will bring you to your hotel.
			</Text>
		</Box>
	);
}

export default Accomodations;
