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

const data = {
	imageURL:
		"https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",
	name: "Wayfarer Classic",
	price: 4.5,
	rating: 4.2,
	numReviews: 34,
};

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
