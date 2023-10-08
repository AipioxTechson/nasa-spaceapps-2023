import React from "react";
import { Grid, GridItem, Box, Flex, Heading } from "@chakra-ui/react";

function AboutUs() {
	return (
		<Box>
			<Heading
				color="brand.200"
				bg="brand.300"
				fontWeight="light"
				size="2xl"
				textAlign="left"
				pt={20}
				pl={20}
			>
				About Us
			</Heading>
			<Grid
				h="60vh"
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(2, 1fr)"
				gap={4}
				m={10}
				p={5}
			>
				<GridItem rowSpan={1} colSpan={1} p={3} m={3} h="20vh" w="20vw">
					<Box bg="brand.200" borderRadius="lg">
						Non-profit
					</Box>
				</GridItem>
				<GridItem rowSpan={1} colSpan={1} p={3} m={3} h="20vh" w="20vw">
					<Box bg="brand.200" borderRadius="lg">
						Fun
					</Box>
				</GridItem>
				<GridItem rowSpan={1} colSpan={1} p={3} m={3} h="20vh" w="20vw">
					<Box bg="brand.200" borderRadius="lg">
						Safety guaranteed
					</Box>
				</GridItem>
				<GridItem rowSpan={1} colSpan={1} p={3} m={3} h="20vh" w="20vw">
					<Box bg="brand.200" borderRadius="lg">
						Sustainable
					</Box>
				</GridItem>
			</Grid>
		</Box>
	);
}

export default AboutUs;
