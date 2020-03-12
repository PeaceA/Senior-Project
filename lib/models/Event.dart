class Event {
  final String summary;
  final DateTime start;
  final DateTime end;
  final String status;

  const Event({this.summary, this.start, this.end, this.status});
}

// List<Planet> planets = [
//   const Planet(
//     id: "1",
//     name: "Mars",
//     location: "Milkyway Galaxy",
//     distance: "54.6m Km",
//     gravity: "3.711 m/s ",
//     description: "Lorem ipsum...",
//     image: "assets/img/mars.png",
//   ),
//   const Planet(
//     id: "2",
//     name: "Neptune",
//     location: "Milkyway Galaxy",
//     distance: "54.6m Km",
//     gravity: "3.711 m/s ",
//     description: "Lorem ipsum...",
//     image: "assets/img/neptune.png",
//   ),
//   const Planet(
//     id: "3",
//     name: "Moon",
//     location: "Milkyway Galaxy",
//     distance: "54.6m Km",
//     gravity: "3.711 m/s ",
//     description: "Lorem ipsum...",
//     image: "assets/img/moon.png",
//   ),
//   const Planet(
//     id: "4",
//     name: "Earth",
//     location: "Milkyway Galaxy",
//     distance: "54.6m Km",
//     gravity: "3.711 m/s ",
//     description: "Lorem ipsum...",
//     image: "assets/img/earth.png",
//   ),
//   const Planet(
//     id: "5",
//     name: "Mercury",
//     location: "Milkyway Galaxy",
//     distance: "54.6m Km",
//     gravity: "3.711 m/s ",
//     description: "Lorem ipsum...",
//     image: "assets/img/mercury.png",
//   ),
// ];