import { getFeaturedArticles } from "../dummy-data";
import ArticleList from "../components/Articles/article-list";
export default function Home() {
  const featuredArticles = getFeaturedArticles();

  return <ArticleList items={featuredArticles} />;
}
