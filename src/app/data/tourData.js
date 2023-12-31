// Earth is an example
export const TourData = {
  Mercury: {
    globeImage: "mercury_surface.jpg",
    destinations: [
      {
        name: "Caloris Basin",
        summary: "Visit the youngest large impact basin on Mercury",
        lat: (30),
        lng: (-190),
      },{
        name: "Poles",
        summary: "Shielded from the Sun in an Icy Abyss",
        lat: (90),
        lng: (0),
      }
    ],
  },
  Mars: {
    globeImage: "mars_surface.jpg",
    destinations: [
      {
        name: "Aureum Chaos",
        summary: "Rollerblading through the golden chaos",
        lat: (-4.4 ),
        lng: (333),
      },
      {
        name: "Olympus Mons",
        summary: "Scaling the Summit of the Solar System",
        lat: (18.8),
        lng: (-132),
      },
      {
        name: "Noctis Labyrinthus",
        summary: "The Great Martian Maze",
        lat: (-6.5),
        lng: (260),
      }
      ]
  },
  Venus: {
    globeImage: "venus_surface.jpg",
    destinations: [
      {
        name: "Maat Mons",
        summary: "Visit the Roman Goddess’ Fiery Volcano",
        lat: (-30),
        lng: (135),
      },
      {
      name: "Artemis Chasma",
      summary: "Walk along Venus' biggest corona",
      lat: (18.8),
      lng: (-132),
      }
    ]
  },
  Jupiter: {
    globeImage: "jupiter_surface.jpg",
    destinations: [
      {
        name: "The Great Red Spot",
        summary: "A storm bigger than earth",
        lat: (-20),
        lng: (-48),
      },
    ],
    moonData : [
      {
        lat: 20,
        lng: 20,
        name: "IO",
        alt: 0.5,
        image: "IO_surface.jpg",
        size: 5
      },
      {
        lat: -10,
        lng: 20,
        name: "Europa",
        alt: 0.8,
        image: "europa_surface.png",
        size: 4
      },
      {
        lat: 0,
        lng: 200,
        name: "Ganymede",
        alt: 0.6,
        image: "ganymede_surface.jpg",
        size: 4
      }
    ]
  },
 
  Saturn: {
    globeImage: "saturn_surface.jpg",
    destinations: [
      {
        name: "Titan",
        summary: "Saturns largest moon",
        
      },
      {
        name: "Saturn",
        summary: "A storm bigger than earth",
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
      },
    ],
    moonData : [
      {
        lat: 20,
        lng: 20,
        name: "Titan",
        alt: 0.5,
        image: "titan_surface2.jpg",
        size: 6
      }
    ]
  },
  Uranus: {
    globeImage: "uranus_surface.jpg",
    destinations: [
      {
        name: "Uranus",
        summary: "A storm bigger than earth",
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
      },
    ],
  },
  Neptune: {
    globeImage: "neptune_surface.jpg",
    destinations: [
      {
        name: "Neptune",
        summary: "A storm bigger than earth",
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
      },
    ],
  },
  Pluto: {
    globeImage: "pluto_surface.jpg",
    destinations: [
      {
        name: "Pluto",
        summary: "A storm bigger than earth",
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
      },
    ],
  },
};     
    
    

    
   