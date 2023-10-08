import React from "react";
import { Box, Image, Text, Heading, Button, Flex } from "@chakra-ui/react";

function DestinationInfo() {
	return (
		<Flex mb={3} w="80vw" bg="brand.200" borderRadius="lg">
			<Image
				borderTopLeftRadius="lg"
				borderBottomLeftRadius
				src="tour1.jpg"
				boxSize="300px"
			/>
			<Box p={5}>
				<Heading>Destination Name</Heading>
				<Text>Destination Info</Text>
			</Box>
		</Flex>
	);
}

export default DestinationInfo;
