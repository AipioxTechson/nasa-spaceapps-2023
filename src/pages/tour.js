import dynamic from 'next/dynamic'
import { Grid, GridItem, Box, Card, CardHeader, Heading, CardBody, Select, Button, Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';
import { useWindowSize } from "@uidotdev/usehooks";
import { TourData } from '@/app/data/tourData';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/app/Components/Navbar';

const Globe = dynamic(
  () => import('@/app/Components/Globe'),
  { ssr: false }
)

const Destination = ({summary, name, isSelected, onClick}) => (
  <Grid w="100%" templateColumns='repeat(8, 1fr)'>
  <GridItem colSpan={6}>
    <Card margin={"2vh"} as={Link} href={`preview/${name}`}>
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
  </GridItem>
  <GridItem>
    <Button padding={"2vh"} margin={"2vh"} bgColor={isSelected? "brand.300" :"#647365"} onClick={onClick}>{isSelected?  "𐄂" :"Add +" }</Button>
  </GridItem>
  </Grid>
);

const DestinationsList = ({destinations, clickDestination, selectedDestinations, removeDestination}) => (
  <Box
  overflowY="auto"
  maxHeight={"83vh"}
  paddingTop="2vh"
>
  <Text textAlign={"center"}>Select atleast 2 destinations to create a tour</Text>
  {destinations.map(({summary, name}) => {
    const clickPlanet = () => clickDestination(name)
    const removePlanet = () => removeDestination(name)
    const isSelected = selectedDestinations.includes(name)
    return (<Destination onClick={isSelected ? removePlanet: clickPlanet} summary={summary} name={name} isSelected={isSelected}/>)}
    )}
</Box>
)

const PlanetConfirm = ({isDisabled}) => (
  <Button isDisabled={isDisabled} as={Link} href="/itinerary" variant={"solid"} marginLeft="20vw">
    Finalize your Journey
  </Button>
);


export default function Tour() {
  const { width, height } = useWindowSize();
  const [planet, setPlanet] = useState("Mars");

  const [planetData, setPlanetData] = useState(TourData["Mars"]);
  const [selectedDestinations, setDestinations] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      let destinations = localStorage.getItem('destinations');
      if (destinations != null){
        let newDet = destinations.split(",").map((dest) => dest)
        setDestinations(newDet)
      }
    }
  }, []);

  const selectDestination = (destination) => {
    let newDet = [...selectedDestinations, destination]
    setDestinations(newDet)
    localStorage.setItem("destinations", newDet)
  }

  const removeDestination  = (destination) => {
    let newDet = selectedDestinations.filter((n) => n != destination)
    setDestinations(newDet)
    localStorage.setItem("destinations", newDet)
  }
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
      <Box bg="brand.300">
      <Navbar/>
      </Box>
<Grid
  h='100vh'
  w='100vw'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(8, 1fr)'
  bg="brand.300"
  gap={4}
>
  <GridItem rowSpan={5} colSpan={4} children={<div><Globe width={width / 2} height={5 * height / 6} globeImage={planetData.globeImage} destinations={planetData.destinations} moonData={planetData.moonData}/></div>}/>
  <GridItem rowSpan={5} colSpan={4}  children={<DestinationsList destinations={planetData.destinations} selectedDestinations={selectedDestinations} clickDestination={selectDestination} removeDestination={removeDestination}/>}/>
  <GridItem colSpan={4} children={<PlanetSelect/>}/>
</Grid>
    </main>
  )
}
