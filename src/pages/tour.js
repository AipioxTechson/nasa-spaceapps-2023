import dynamic from 'next/dynamic'
import { Grid, GridItem, Box, Card, CardHeader, Heading, CardBody, Select, Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';
import { useWindowSize } from "@uidotdev/usehooks";

const Globe = dynamic(
  () => import('@/app/Components/Globe'),
  { ssr: false }
)

const Destination = () => (
<Card margin={"2vh"}>
  <CardHeader>
    <Heading size='md'>Destination</Heading>
  </CardHeader>
  <CardBody>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Summary
        </Heading>
        <Text pt='2' fontSize='sm'>
          Add Tagline here
        </Text>
      </Box>
  </CardBody>
</Card>
);

const DestinationsList = () => (
  <Box
  overflowY="auto"
  maxHeight={"83vh"}
  paddingTop="2vh"
>
  <Destination/>
  <Destination/>
  <Destination/>
  <Destination/>
</Box>
)

const PlanetSelect = () => (
  <Select
  variant="filled"
  padding={"0vh 5vw 0vh 5vw"}
  >
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
)

const PlanetConfirm = () => (
  <Button variant={"solid"} marginLeft="20vw">
    Finalize your Journey
  </Button>
);


export default function Tour() {
  const { width, height } = useWindowSize();

  return (
    <main>
<Grid
  h='100vh'
  w='100vw'
  templateRows='repeat(6, 1fr)'
  templateColumns='repeat(8, 1fr)'
  gap={4}
>
  <GridItem rowSpan={5} colSpan={4} children={<div><Globe width={width / 2} height={5 * height / 6}/></div>}/>
  <GridItem rowSpan={5} colSpan={4}  children={<DestinationsList/>}/>
  <GridItem colSpan={4} children={<PlanetSelect/>}/>
  <GridItem colSpan={4} children={<PlanetConfirm/>}/>
</Grid>
    </main>
  )
}
