import React from "react";
import { Box, Image, Text, Heading, Button, Flex } from "@chakra-ui/react";

function DestinationInfo({ name, planet, image }) {
	return (
		<Flex mb={3} w="80vw" bg="brand.200" borderRadius="lg">
			<Image
				borderTopLeftRadius="lg"
				borderBottomLeftRadius="lg"
				src={image}
				boxSize="200px"
			/>
			<Box pl={5} pt={3}>
				<Heading fontWeight="light">{name}</Heading>
				<Text>{planet}</Text>
			</Box>
		</Flex>
	);
}

export default DestinationInfo;
