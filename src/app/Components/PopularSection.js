import React from "react";
import {
	Flex,
	Center,
	Spacer,
	Heading,
	Box,
	Text,
	Input,
	InputGroup,
	Button,
    Stack,
} from "@chakra-ui/react";
import TripCard from "./TripCard";

function PopularSection() {
	return (
		<Stack>
			<Heading
				color="brand.200"
				bg="brand.300"
				fontWeight="light"
				size="2xl"
				textAlign="left"
				pt={20}
				pl={20}
			>
				Most Popular Trips
			</Heading>
			<Flex pl={20} pb={20} bg="brand.300" align="center">
				<TripCard />
				<TripCard />
				<TripCard />
				<TripCard />
			</Flex>
		</Stack>
	);
}

export default PopularSection;
