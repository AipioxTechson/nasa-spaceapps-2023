import dynamic from 'next/dynamic'
import { Grid, GridItem, Box, Card, CardHeader, Heading, CardBody, Select, Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';
import { useWindowSize } from "@uidotdev/usehooks";
import { TourData } from '@/app/data/tourData';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Globe = dynamic(
  () => import('@/app/Components/Globe'),
  { ssr: false }
)

const Destination = ({summary, name}) => (
<Card margin={"2vh"} as={Link} href="preview">
  <CardHeader>
    <Heading size='md'>{name}</Heading>
  </CardHeader>
  <CardBody>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          {summary}
        </Text>
      </Box>
  </CardBody>
</Card>
);

const DestinationsList = ({destinations}) => (
  <Box
  overflowY="auto"
  maxHeight={"83vh"}
  paddingTop="2vh"
>
  {destinations.map(({summary, name}) => (<Destination summary={summary} name={name}/>))}
</Box>
)

const PlanetConfirm = () => (
  <Button variant={"solid"} marginLeft="20vw">
    Finalize your Journey
  </Button>
);


export default function Tour() {
  const { width, height } = useWindowSize();
  const [planet, setPlanet] = useState("Earth");

  const [planetData, setPlanetData] = useState(TourData["Earth"]);

  const PlanetSelect = () => (
    <Select
    variant="filled"
    padding={"0vh 5vw 0vh 5vw"}
    defaultValue={planet}
    onChange={(e) => setPlanet(e.target.value)}
    value={planet}
    >
      {Object.keys(TourData).map(planet =><option key={planet} value={planet}>{planet}</option>
      )}
  </Select>
  )

  useEffect(() => {
    setPlanetData(TourData[planet])
  },[planet])

  return (
    <main>
<Grid
  h='100vh'
  w='100vw'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(8, 1fr)'
  bg="brand.300"
  gap={4}
>
  <GridItem rowSpan={5} colSpan={4} children={<div><Globe width={width / 2} height={5 * height / 6} globeImage={planetData.globeImage} destinations={planetData.destinations}/></div>}/>
  <GridItem rowSpan={5} colSpan={4}  children={<DestinationsList destinations={planetData.destinations}/>}/>
  <GridItem colSpan={4} children={<PlanetSelect/>}/>
  <GridItem colSpan={4} children={<PlanetConfirm/>}/>
</Grid>
    </main>
  )
}
