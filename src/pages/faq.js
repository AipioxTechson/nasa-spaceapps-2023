import FaqBlock from "../app/Components/FaqBlock";
import { faqData } from "@/app/data/faqData";
import Navbar from "../app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function faq() {
	return (
		<Box bg="brand.300">
			<Navbar />
			{faqData["questions"].map((q) => (
				<FaqBlock
				question={q.q}
				answer={q.a}
			/>
			))}
		</Box>
	);
}
