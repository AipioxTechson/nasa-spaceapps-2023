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

function Travel() {
	return (
		<Box w="80vw" borderRadius="lg" bg="brand.700" align="center" mb={3}>
			<Text color="brand.800" fontWeight="bold" fontSize="xs">
				TRAVEL
			</Text>
			<Text>Travel time: 100 hours</Text>
			<Text>Transportation type: Warp drive</Text>
			<Text>
				Instructions: A tour guide will pick you up from your hotel.
			</Text>
		</Box>
	);
}

export default Travel;
