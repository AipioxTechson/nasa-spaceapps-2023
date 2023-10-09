import { Box, Text} from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";

export default function TimeSpent({day, isMorning}) {
	let time = (isMorning? "Morning" : "Evening");
	return (
		<Box color="brand.200" align="center">
			<Text color="brand.200" fontWeight="bold" fontSize="xs">
				Day {day}, {time}
			</Text>
		</Box>
	);
}
