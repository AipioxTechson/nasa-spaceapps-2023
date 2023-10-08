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
} from "@chakra-ui/react";
import Link from "next/link";

function ActionItems() {
	return (
		<Flex mt={5} ml={20}>
			<Button>VIEW OUR FEATURED TOURS</Button>
			<Button as={Link} href="/tour" ml={5}>OR CREATE YOUR OWN</Button>
		</Flex>
	);
}

export default ActionItems;
