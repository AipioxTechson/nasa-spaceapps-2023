import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	fonts: {
		heading: `'Baloo Bhai 2 Variable', sans-serif`,
		text: `'Baloo Bhai 2 Variable', sans-serif`,
	},
	colors: {
		brand: {
			100: "#182937",
			200: "#B1BED2",
			300: "#172136",
			900: "#1a202c",
		},
	},
});

export default theme;
