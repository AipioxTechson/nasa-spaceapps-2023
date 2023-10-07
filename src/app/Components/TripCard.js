import React from "react";
import {
	HStack,
	Flex,
	Center,
	Spacer,
	Heading,
	Text,
	Input,
	InputGroup,
	Button,
	Box,
	Image,
	Stack,
} from "@chakra-ui/react";

function TripCard() {
	return (
		<Flex h="400px" w="20vw" bg="brand.200" borderRadius="lg" p={5} m={5}>
			<Stack>
				<Image borderRadius="lg" src="tour1.jpg" w="100vw" />
				<Heading>Trip name</Heading>
				<Text>Trip desc</Text>
			</Stack>
		</Flex>
	);
}

export default TripCard;
