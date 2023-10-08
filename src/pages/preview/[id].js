import PlanetInfo from "@/app/Components/PlanetInfo";
import { PreviewData } from "@/app/data/previewData";
import Navbar from "@/app/Components/Navbar";
import { Box } from "@chakra-ui/react";
import "@fontsource-variable/baloo-bhai-2";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

export default function Mercury() {
  const [id, setId] = useState("Mercury");
  const router = useRouter();

  useEffect(()=> {
    if (router.query.id != undefined){
      setId(router.query.id)
    }
  },[router.query.id])

	return (
		<Box bg="brand.300" h="100vh">
			<Navbar />
			<PlanetInfo
				name={id}
				title={PreviewData[id].title}
				summary={PreviewData[id].summary}
				packinglist={PreviewData[id].packingList}
				pic={PreviewData[id].image}
				tips={PreviewData[id].tips}
			/>
		</Box>
	);
}
