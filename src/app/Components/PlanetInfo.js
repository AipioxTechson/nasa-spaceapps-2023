import React from "react";
import {
	List,
	ListItem,
	ListIcon,
	Text,
	Box,
	Image,
	Flex,
	Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

function PlanetInfo({ name, title, summary, packinglist, pic, tips }) {
	return (
		<Flex m={5} p={5}>
			<Image src={pic} boxSize="30vw" objectFit="cover" />
			<Box ml={10}>
				<Heading color="brand.200" fontWeight="light" size="4xl">
					{name}
				</Heading>
				<Heading color="brand.200" fontWeight="light">
					{title}
				</Heading>
				<Text color="brand.200" mb={5}>
					{summary}
				</Text>
				<Heading color="brand.200" fontWeight="light">
					Packing List
				</Heading>
				<List spacing={3}>
					{packinglist.map((item) => (
						<ListItem color="brand.200" mb={5}>
							<ListIcon as={CheckCircleIcon} color="green.500" />
							{item}
						</ListItem>
					))}
				</List>
				<Heading color="brand.200" fontWeight="light">
					Tips
				</Heading>
				<Text color="brand.200" mb={5}>
					{tips}
				</Text>
			</Box>
		</Flex>
	);
}

export default PlanetInfo;
