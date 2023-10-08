import React from "react";
import { Grid, Text, GridItem, Box, Flex, Heading } from "@chakra-ui/react";

function AboutUs() {
	return (
		<Box>
			<Heading
				color="brand.200"
				bg="brand.300"
				fontWeight="light"
				size="2xl"
				textAlign="left"
				pt={10}
				pl={20}
			>
				About Us
			</Heading>
			<Flex ml={20} mr={5} mt={5}>
				<Box bg="brand.200" borderRadius="lg" p={5} m={5} w="40vw">
					<Heading fontWeight="light">Non-profit</Heading>
					<Text>
						Our mission goes beyond profit margins and luxury
						accommodations. We believe that space exploration should
						benefit everyone, not just the privileged few. That's
						why we've chosen to operate as a nonprofit organization,
						reinvesting all proceeds into educational programs,
						research, and initiatives that promote sustainability
						and global well-being.
					</Text>
				</Box>
				<Box bg="brand.200" borderRadius="lg" p={5} m={5} w="40vw">
					<Heading fontWeight="light">Fun</Heading>
					<Text>
						We believe that space exploration should also be an
						exhilarating and unforgettable experience. While we're a
						nonprofit focused on a higher purpose, we're equally
						dedicated to ensuring that your journey with us is
						filled with joy, wonder, and excitement. We strive to
						infuse every aspect of your space adventure with fun,
						creating cherished memories that will last a lifetime.
					</Text>
				</Box>
			</Flex>
			<Flex ml={20} mr={5} mb={5}>
				<Box bg="brand.200" borderRadius="lg" p={5} m={5} w="40vw">
					<Heading fontWeight="light">Safe</Heading>
					<Text>
						We spare no effort in upholding the highest standards of
						space travel safety, with rigorous training for our crew
						and passengers, state-of-the-art technology, and
						meticulous spacecraft maintenance. Our commitment to
						safety extends from pre-launch preparations to your safe
						return to Earth, ensuring that your space adventure with
						us is not only exhilarating but also a secure and
						worry-free experience. Your well-being is our top
						priority as we explore the cosmos together.
					</Text>
				</Box>
				<Box bg="brand.200" borderRadius="lg" p={5} m={5} w="40vw">
					<Heading fontWeight="light">Sustainable</Heading>
					<Text>
						We understand that the Earth's well-being is
						interconnected with the cosmos. That's why we utilize
						innovative, eco-friendly propulsion systems, minimize
						space debris, and prioritize responsible resource
						management during our missions. By treading lightly in
						space, we aim to ensure that our journeys to the stars
						leave a minimal ecological footprint and contribute to a
						more sustainable future for both our planet and the
						universe we explore.
					</Text>
				</Box>
			</Flex>
		</Box>
	);
}

export default AboutUs;
