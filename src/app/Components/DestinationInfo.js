import React from "react";
import { Box, Image, Text, Heading, Button, Flex } from "@chakra-ui/react";

function DestinationInfo({name, info}) {
	return (
		<Flex mb={3} w="80vw" bg="brand.200" borderRadius="lg">
			<Image
				borderTopLeftRadius="lg"
				borderBottomLeftRadius
				src="tour1.jpg"
				boxSize="180px"
			/>
			<Box p={5}>
				<Heading fontWeight="light">{name}</Heading>
				<Text>{info}</Text>
			</Box>
		</Flex>
	);
}

export default DestinationInfo;
