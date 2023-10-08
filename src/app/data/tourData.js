// Earth is an example

export const TourData = {
  "Earth": {
    globeImage: "//unpkg.com/three-globe/example/img/earth-night.jpg",
    destinations: [
      {
        name: "University of Toronto",
        summary: "Best uni ever",
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
      },
      {
        name: "Space center",
        summary: "Yup",
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
      }
    ]
  },
  "Mars": {
    globeImage: "2k_mars.jpeg",
    destinations: []
  }

}