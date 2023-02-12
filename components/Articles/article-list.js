import ArticleItem from "./article-item";
import classes from "./article-list.module.css";
const ArticleList = (props) => {
  console.log("props", props);
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          title={article.title}
          location={article.location}
          date={article.date}
          image={article.image}
          description={article.description}
        />
      ))}
    </ul>
  );
};
export default ArticleList;
