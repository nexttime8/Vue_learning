export const sharedData = {
  cards: [
    { imageSrc: "https://source.unsplash.com/Z8dtTatMVMw" },
    { imageSrc: "https://source.unsplash.com/9dmycbFE7mQ" },
    { imageSrc: "https://source.unsplash.com/m7K4KzL5aQ8" },
  ],
  classStyle: [
    {
      card: "current--card",
      image: "current--image",
      info: "current--info",
      zIndex: 30,
    },
    {
      card: "previous--card",
      image: "previous--image",
      info: "previous--info",
      zIndex: 20,
    },
    {
      card: "next--card",
      image: "next--image",
      info: "next--info",
      zIndex: -1,
    },
  ],
  orderIndex: [30, 20, -1],
}
