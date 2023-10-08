import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Travel({ type, time }) {
	return (
		<Box
			w="80vw"
			borderRadius="lg"
			bg="brand.700"
			align="center"
			mb={3}
			p={2}
		>
			<Text color="brand.800" fontWeight="bold" fontSize="xs">
				TRAVEL
			</Text>
			<Text color="brand.800">Travel time: {time}</Text>
			<Text color="brand.800">Transportation type: {type}</Text>
			<Text color="brand.800">
				Instructions: A tour guide will pick you up from your hotel.
			</Text>
		</Box>
	);
}

export default Travel;
