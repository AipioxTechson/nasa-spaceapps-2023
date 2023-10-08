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

function Navbar() {
	return (
		<Box h={20}>
			<HStack>
				{/* <Flex> */}
				<Image src="logo-h.png" h="40px" mt={3} ml={3} />
				<Menu>
					<MenuButton
						as={Button}
						bg="brand.300"
						color="brand.200"
						ml={20}
						mt={3}
						rightIcon={<ChevronDownIcon />}
					>
						Destinations
					</MenuButton>
					<MenuList>
						<MenuItem>Temp1</MenuItem>
						<MenuItem>Temp2</MenuItem>
						<MenuItem>Temp3</MenuItem>
					</MenuList>
				</Menu>
				<Menu>
					<MenuButton
						as={Button}
						bg="brand.300"
						color="brand.200"
						mt={3}
						rightIcon={<ChevronDownIcon />}
					>
						FAQ
					</MenuButton>
					<MenuList>
						<MenuItem>Temp1</MenuItem>
						<MenuItem>Temp2</MenuItem>
						<MenuItem>Temp3</MenuItem>
					</MenuList>
				</Menu>
				<Menu>
					<MenuButton
						as={Button}
						bg="brand.300"
						color="brand.200"
						mt={3}
						rightIcon={<ChevronDownIcon />}
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
