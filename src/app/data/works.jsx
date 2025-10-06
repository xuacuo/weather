// full list: 7 works (for carousel)
export const works = [
  {
    title: "My Neighbor Totoro",
    img: "/Totoro.jpg",
    description:
      "My Neighbor Totoro is deeply rooted in themes of nature and environmental harmony. The film's rural setting—lush forests, winding paths, and old farmhouses—celebrates the beauty of the natural world, while the Totoros are presented as guardians of the forest."
  },
  {
    title: "Spirited Away",
    img: "/Spirited Away.jpg",
    description:
      "In Spirited Away, Chihiro enters a world filled with spirits and demons after her parents take a wrong turn. The film explores courage, identity, and resilience through her journey."
  },
  {
    title: "Howl's Moving Castle",
    img: "/haer.jpg",
    description:
      "Set in a whimsical, war-torn fantasy world, Howl's Moving Castle follows Sophie and the mysterious wizard Howl, highlighting themes of love, courage, and the consequences of war."
  },
  {
    title: "Whisper of the Heart",
    img: "/Whisper of the Heart.jpg",
    description:
      "A coming-of-age story about Shizuku, a young girl discovering her creative voice as a writer, inspired by a boy and a mysterious cat figurine named Baron."
  },
  {
    title: "Nausicaä of the Valley of the Wind",
    img: "/Valley of the Wind.jpg",
    description:
      "Set in a post-apocalyptic world, Princess Nausicaä seeks peace between humans and the toxic jungle, protecting both nature and her people."
  },
  {
    title: "The Secret World of Arrietty",
    img: "/Arrietty.jpg",
    description:
      "Arrietty, a tiny Borrower girl, lives secretly beneath a human house. Her unexpected friendship with a human boy challenges the fragile balance of her hidden world."
  },
  {
    title: "Castle in the Sky",
    img: "/Castle in the Sky.jpg",
    description:
      "The adventure of Sheeta and Pazu as they search for Laputa, a legendary floating city, while being pursued by pirates and secret agents."
  }
];

// subset: 6 works (for grid on WorksPage)
export const worksGrid = works.filter(
  (w) =>
    w.title !== "The Secret World of Arrietty"
);
