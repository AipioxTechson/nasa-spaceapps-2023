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
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const planets = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
function Navbar() {
	return (
		<Box h={20}>
			<HStack>
				{/* <Flex> */}
				<Button
					as="a"
					href="/"
					h="40px"
					mt={3}
					ml={3}
					bg="brand.300"
					_active={{
						bg: "brand.300",
						transform: "scale(0.98)",
						borderColor: "#bec3c9",
					}}
				>
					<Image h="40px" src="logo-h.png" />
				</Button>
				<Menu>
					<MenuButton
						as={Button}
						bg="brand.300"
						_active={{
							bg: "brand.300",
							transform: "scale(0.98)",
							borderColor: "#bec3c9",
						}}
						color="brand.200"
						ml={20}
						mt={3}
						rightIcon={<ChevronDownIcon />}
					>
						Destinations
					</MenuButton>
					<MenuList>
						{planets.map((planet) => (<MenuItem MenuItem as="a" href={`${planet.toLowerCase()}`}>
							{planet}
						</MenuItem>))}
					</MenuList>
				</Menu>
				<Button
					href="faq"
					bg="brand.300"
					color="brand.200"
					mt={3}
					_hover={{
						bg: "brand.400",
						transform: "scale(0.98)",
						borderColor: "#bec3c9",
					}}
				>
					FAQ
				</Button>
				<Menu>
					<MenuButton
						as={Button}
						bg="brand.300"
						color="brand.200"
						mt={3}
						rightIcon={<ChevronDownIcon />}
						_active={{
							bg: "brand.300",
							transform: "scale(0.98)",
							borderColor: "#bec3c9",
						}}
					>
						Preparation
					</MenuButton>
					<MenuList>
						<MenuItem>Temp1</MenuItem>
						<MenuItem>Temp2</MenuItem>
						<MenuItem>Temp3</MenuItem>
					</MenuList>
				</Menu>
				{/* </Flex> */}
			</HStack>
		</Box>
	);
}

export default Navbar;
