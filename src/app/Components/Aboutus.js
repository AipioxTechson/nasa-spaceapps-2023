import React from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";

function Aboutus() {
	return (
		<Grid
			h="200px"
			templateRows="repeat(2, 1fr)"
			templateColumns="repeat(2, 1fr)"
			gap={4}
		>
			<GridItem rowSpan={1} colSpan={1} bg="papayawhip">
				One
			</GridItem>
			<GridItem rowSpan={1} colSpan={1} bg="papayawhip">
				Two
			</GridItem>
			<GridItem rowSpan={1} colSpan={1} bg="papayawhip">
				Three
			</GridItem>
			<GridItem rowSpan={1} colSpan={1} bg="papayawhip">
				Four
			</GridItem>
		</Grid>
	);
}

export default Aboutus;
