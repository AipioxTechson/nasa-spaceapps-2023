import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};
const theme = extendTheme({
	...config,
	fonts: {
		heading: `'Baloo Bhai 2 Variable', sans-serif`,
		text: `'Baloo Bhai 2 Variable', sans-serif`,
	},
	colors: {
		brand: {
			100: "#182937",
			200: "#B1BED2",
			300: "#172136",
			400: "#0b101b",
			500: "#c9e7ca", // green
			600: "#647365", // green
			700: "#fcdfd9", // pink
			800: "#935a4d",
			900: "#1a202c",
		},
	},
});

export default theme;
