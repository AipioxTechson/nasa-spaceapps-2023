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
import Tilt from 'react-vanilla-tilt'

function TripCard() {
	return (
		<Tilt  options={{ scale: 3, max: 35 }} style={{width: "300px", padding: "30px", margin: "10px", background:"#0b101b"}}>
				<Stack>
					<Image borderRadius="lg" src="tour1.jpg" w="100vw" />
					<Heading>Trip name</Heading>
					<Text>Trip desc</Text>
				</Stack>
		</Tilt>
	);
}

export default TripCard;
