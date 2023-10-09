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
import Tilt from "react-vanilla-tilt";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function TripCard({ tour }) {
	const router = useRouter();
	const selectTour = () => {
		localStorage.setItem("tour", tour.name);
		router.push("/itinerary");
	};
	return (
		<Tilt
			options={{ scale: 3, max: 35 }}
			style={{
				padding: "30px",
				margin: "10px",
				background: "#0b101b",
			}}
		>
			<Stack>
				<Image
					borderRadius="lg"
					src={tour.destinations[0].image}
					h="300px"
					objectFit="cover"
				/>
				<Heading color="brand.200" fontWeight="light">
					{tour.name}
				</Heading>
				<Text color="brand.200">Upcoming tours:</Text>
				{tour.date.map((date) => (
					<Button onClick={selectTour}>{date}</Button>
				))}
			</Stack>
		</Tilt>
	);
}

export default TripCard;
