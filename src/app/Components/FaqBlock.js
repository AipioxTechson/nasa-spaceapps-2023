import React from "react";
import { Text, Box, Flex, Heading } from "@chakra-ui/react";

function FaqBlock({ question, answer }) {
	return (
		<Flex m={5} p={5}>
			<Box ml={10}>
				<Heading color="brand.200" fontWeight="light">
					{question}
				</Heading>
				<Text color="brand.200" mb={5}>
					{answer}
				</Text>
			</Box>
		</Flex>
	);
}

export default FaqBlock;
