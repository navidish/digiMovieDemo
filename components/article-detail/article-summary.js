import classes from "./article-summary.module.css";

function ArticleSummary(props) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default ArticleSummary;
