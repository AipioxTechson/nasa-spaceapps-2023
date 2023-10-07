import React from "react";
import { Grid, GridItem, Box } from "@chakra-ui/react";

function Aboutus() {
	return (
		<Flex>
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
			<Grid
				h="200px"
				templateRows="repeat(2, 1fr)"
				templateColumns="repeat(2, 1fr)"
				gap={4}
				m={10}
				p={5}
			>
				<GridItem rowSpan={1} colSpan={1}>
					<Box bg="brand.200" borderRadius="lg">
						Fun
					</Box>
				</GridItem>
				<GridItem rowSpan={1} colSpan={1}>
					<Box bg="brand.200" borderRadius="lg">
						Fun
					</Box>
				</GridItem>
				<GridItem rowSpan={1} colSpan={1}>
					<Box bg="brand.200" borderRadius="lg">
						Fun
					</Box>
				</GridItem>
				<GridItem rowSpan={1} colSpan={1}>
					<Box bg="brand.200" borderRadius="lg">
						Fun
					</Box>
				</GridItem>
			</Grid>
		</Flex>
	);
}

export default Aboutus;
