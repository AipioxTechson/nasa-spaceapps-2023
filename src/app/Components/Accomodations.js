import React from "react";
import {
	Menu,
	MenuButton,
	Button,
	MenuItem,
	MenuList,
	Box,
	HStack,
	Image,
	Flex,
	Text,
	Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Accomodations() {
	return (
		<Box w="80vw" borderRadius="lg" bg="brand.500" align="center" mb={3}>
			<Text color="brand.600" fontWeight="bold" fontSize="xs">
				ACCOMODATIONS
			</Text>
			<Text color="brand.600">Hotel: Hotel Mars</Text>
			<Text color="brand.600">
				Instructions: A tour guide will bring you to your hotel.
			</Text>
		</Box>
	);
}

export default Accomodations;
