import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import ActionItems from "./ActionItems.js";

function HeroSection() {
	return (
		<Box>
			<Heading
				color="brand.200"
				fontWeight="light"
				size="4xl"
				textAlign="left"
				pt={20}
				pl={20}
			>
				EXPLORE SPACE
			</Heading>
			<Text color="brand.200" textAlign="left" pl={20}>
				Create memories that are truly out of this world!
			</Text>
			<ActionItems />
		</Box>
	);
}

export default HeroSection;
