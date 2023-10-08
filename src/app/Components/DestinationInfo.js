import React from "react";
import { Box, Image, Text, Heading, Button, Flex } from "@chakra-ui/react";

function DestinationInfo({name, planet}) {
	return (
		<Flex mb={3} w="80vw" bg="brand.200" borderRadius="lg">
			<Image
				borderTopLeftRadius="lg"
				borderBottomLeftRadius="lg"
				src="tour1.jpg"
				boxSize="100px"
			/>
			<Box pl={5} pt={3}>
				<Heading fontWeight="light">{name}</Heading>
				<Text>{planet}</Text>
			</Box>
		</Flex>
	);
}

export default DestinationInfo;
