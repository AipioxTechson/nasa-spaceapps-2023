import { Box, Button, Text, Heading, Center, Spacer } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	useDisclosure,
} from "@chakra-ui/react";

export default function Preview() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<main>
			<Box bgImage="url('/olympusmons.jpg')" h="100vh">
				<Center bg="brand.300" p={5}>
					<Button>Back</Button>
					<Spacer />
					<Box align="center">
						<Heading color="brand.200" fontWeight="light">
							Olympus Mons
						</Heading>
						<Text color="brand.200">
							The tallest mountain on Mars!
						</Text>
					</Box>
					<Spacer />
                    <Button onClick={onOpen}>Tips for visiting</Button>
					<Modal isOpen={isOpen} onClose={onClose}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Tips for visiting</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								Tips go here
							</ModalBody>
							<ModalFooter>
								<Button
									colorScheme="blue"
									mr={3}
									onClick={onClose}
								>
									Close
								</Button>
								<Button variant="ghost">
									Secondary Action
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Center>
			</Box>
		</main>
	);
}
