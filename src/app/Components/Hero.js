import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Search from "./Search.js";

function HeroSection() {
	return (
		<Box p={10} m={10}>
			<Heading fontWeight="light" size="4xl" textAlign="center">
				EXPLORE SPACE
			</Heading>
			<Text textAlign="center" p={3}>
				Create memories that are truly out of this world!
			</Text>
			<Search />
		</Box>
	);
}

export default HeroSection;
