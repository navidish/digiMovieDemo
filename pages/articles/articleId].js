import { useRouter } from "next/router";
import { getArticleById } from "../../dummy-data";
import ArticleSummary from "../../components/Article-detail/Article-summary";
import ArticleContent from "../../components/Article-detail/Article-content";
import ArticleLogistics from "../../components/Article-detail/Article-logistics";
function articleDetailPage() {
  const router = useRouter();
  const articleId = router.query.articleId;
  const article = getArticleById(articleId);
  if (!article) {
    return <p>no article found!</p>;
  }
  return (
    <>
      <ArticleSummary title={article.title} />
      <ArticleLogistics
        date={article.date}
        address={article.location}
        image={article.image}
        imageAlt={article.title}
      />
      <ArticleContent>{article.description}</ArticleContent>
    </>
  );
}
export default articleDetailPage;
