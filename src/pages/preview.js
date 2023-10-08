import { Box, Button, Text, Heading, Center, Spacer } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function Preview() {
	return (
		<main>
			<Box bgImage="url('/olympusmons.jpg')" h="100vh">
				<Center bg="brand.300" p={5}>
					<Button mr={10}>Back</Button>
					<Box align="center">
						<Heading color="brand.200" fontWeight="light">
							Olympus Mons
						</Heading>
						<Text color="brand.200">
							The tallest mountain on Mars!
						</Text>
					</Box>
					<Spacer />

					<Button mr={5}>Tips to visit</Button>
					<Button>Next destination</Button>
				</Center>
			</Box>
		</main>
	);
}
