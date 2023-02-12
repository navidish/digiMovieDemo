import DateIcon from "../icons/date-icon";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import Button from "../ui/button";
import classes from "./article-item.module.css";
const ArticleItem = (props) => {
  const { title, image, date, location, id, description } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  const exploreLink = `/articles/${id}`;
  return (
    <li className={classes.item}>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <p>{description}</p>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Article</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
      <img src={"/" + image} alt={title} />
    </li>
  );
};
export default ArticleItem;
