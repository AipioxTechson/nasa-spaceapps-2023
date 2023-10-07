import React from "react";
import {
	Menu,
	MenuButton,
	Button,
	MenuItem,
	MenuList,
	Box,
	Flex,
	Text,
	Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Navbar() {
	return (
		<Flex>
			<Text>LOGO</Text>
			<Spacer />
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					Destinations
				</MenuButton>
				<MenuList>
					<MenuItem>Temp1</MenuItem>
					<MenuItem>Temp2</MenuItem>
					<MenuItem>Temp3</MenuItem>
				</MenuList>
			</Menu>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					FAQ
				</MenuButton>
				<MenuList>
					<MenuItem>Temp1</MenuItem>
					<MenuItem>Temp2</MenuItem>
					<MenuItem>Temp3</MenuItem>
				</MenuList>
			</Menu>
			<Menu>
				<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
					Preparation
				</MenuButton>
				<MenuList>
					<MenuItem>Temp1</MenuItem>
					<MenuItem>Temp2</MenuItem>
					<MenuItem>Temp3</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
}

export default Navbar;
