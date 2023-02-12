const DUMMY_ARTICLES = [
  {
    id: "a1",
    title: "7 Useful React Libraries You Should Use in Your Next Project",
    description:
      "React libraries for your project: 1. Slate, 2. visx, 3. react-window, 4. react-dropzone,5. baobab, 6. parallax-tilt, and 7. react-pdf. —  Why write custom functionality when we can easily achieve the same result by using a library? A developer’s best friends and lifesaver are libraries. I believe a good project makes use of some of the best libraries available. …",
    location: "Somestreet 25, 12345 San Somewhereo",
    date: "2021-05-12",
    image: "images/a1.jpeg",
    isFeatured: false,
  },
  {
    id: "a1",
    title: "Using ChatGPT to build System Diagrams — Part I",
    description:
      "Interested in Mindmaps — read our blog post on using plantUML with ChatGPT to create awesome Mindmaps The popularity of ChatGPT keeps growing and it’s now being used in a wide range of applications. …",
    location: "New Wall Street 5, 98765 New Work",
    date: "2021-05-30",
    image: "images/a1.jpeg",
    isFeatured: true,
  },
  {
    id: "a3",
    title: "Advanced Data Fetching Technique in React for Senior Engineers",
    description:
      "As an engineer working with React, it’s important to have a solid understanding of the various ways to fetch and manage data in your application. The way you choose to fetch and manage data can greatly impact the performance, scalability, and overall user experience of your application. …",
    location: "My Street 12, 10115 Broke City",
    date: "2022-04-10",
    image: "images/a3.jpg",
    isFeatured: true,
  },
];

export function getFeaturedArticles() {
  return DUMMY_ARTICLES.filter((article) => article.isFeatured);
}

export function getAllArticles() {
  return DUMMY_ARTICLES;
}

export function getFilteredArticles(dateFilter) {
  const { year, month } = dateFilter;

  let filteredArticles = DUMMY_ARTICLES.filter((article) => {
    const articleDate = new Date(article.date);
    return (
      articleDate.getFullYear() === year && articleDate.getMonth() === month - 1
    );
  });

  return filteredArticles;
}

export function getArticleById(id) {
  return DUMMY_ARTICLES.find((article) => article.id === id);
}
