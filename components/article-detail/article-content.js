import classes from "./article-content.module.css";

function ArticleContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}

export default ArticleContent;
