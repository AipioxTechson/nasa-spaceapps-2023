import { m } from "framer-motion";
import Globe from "react-globe.gl"
import * as THREE from 'three'

const satObject = (e) => {
  const loader = new THREE.TextureLoader();
  const texture = loader.load (e.image)
  const satGeometry = new THREE.SphereGeometry(e.size, 100, 100);
  const satMaterial = new THREE.MeshLambertMaterial({transparent: true, opacity: 0.7 ,map: texture});
  return new THREE.Mesh(satGeometry, satMaterial);
}


const GlobeNew = ({width, height, globeImage, destinations, moonData}) => (
  <Globe
      globeImageUrl={globeImage}
      labelsData={destinations}
      labelLat={d => d.lat}
      labelLng={d => d.lng}
      labelText={d => d.name}
      labelSize={d => 3}
      labelDotRadius={d => 1}
      labelColor={() => 'rgba(0, 0, 0, 1)'}
      labelResolution={3}
      width={width}
      height={height}
      objectsData={moonData}
      objectLabel="name"
      objectLat="lat"
      objectLng="lng"
      objectAltitude="alt"
      objectFacesSurface={false}
      objectThreeObject={satObject}
    />
)

export default GlobeNew;
