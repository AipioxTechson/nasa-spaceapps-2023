import Globe from "react-globe.gl"

const N = 300;
const gData = [...Array(N).keys()].map(() => ({
  lat: (Math.random() - 0.5) * 180,
  lng: (Math.random() - 0.5) * 360,
  size: Math.random() / 3,
  color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]
}));


const GlobeNew = ({width, height, globeImage, destinations}) => (
  <Globe
      globeImageUrl={globeImage}
      labelsData={destinations}
      labelLat={d => d.lat}
      labelLng={d => d.lng}
      labelText={d => d.name}
      labelSize={d => 3}
      labelDotRadius={d => 1}
      labelColor={() => 'rgba(255, 165, 0, 0.75)'}
      labelResolution={3}
      width={width}
      height={height}
    />
)

export default GlobeNew;
