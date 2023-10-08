// Earth is an example

export const TourData = {
	Earth: {
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
			},
		],
    moonData: [
      {
        lat: 20,
        lng: 20,
        name: "Test",
        alt: 0.5,
        image: "2k_mars.jpeg",
        size: 10
      }
    ]
	},
	Mars: {
		globeImage: "2k_mars.jpeg",
		destinations: [
			{
				name: "Olympus Mons",
				summary: "Like the legendary greek mount Olympus",
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
			},
			{
				name: "Noctis Labyrinthus",
				summary: "Can you escape the Great Martian Maze?",
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
			},
			{
				name: "Aureum Chaos",
				summary: "Rollerblading through the golden chaos",
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
			},
		],
	},
	Venus: {
		globeImage: "2k_mars.jpeg",
		destinations: [
			{
				name: "Maat Mons",
				summary: "Yup",
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
			},
			{
				name: "Artemis Chasma",
				summary: "Yup",
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
			},
		],
	},
	Jupiter: {
		globeImage: "2k_mars.jpeg",
		destinations: [
			{
				name: "The Great Red Spot",
				summary: "A storm bigger than earth",
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
			},
		],
	},
	Mercury: {
		globeImage: "2k_mars.jpeg",
		destinations: [
			{
				name: "Mercury",
				summary: "A storm bigger than earth",
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
			},
		],
	},
	Saturn: {
		globeImage: "2k_mars.jpeg",
		destinations: [
			{
				name: "Saturn",
				summary: "A storm bigger than earth",
				lat: (Math.random() - 0.5) * 180,
				lng: (Math.random() - 0.5) * 360,
			},
		],
	},
	Uranus: {
		globeImage: "2k_mars.jpeg",
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
		globeImage: "2k_mars.jpeg",
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
		globeImage: "2k_mars.jpeg",
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
