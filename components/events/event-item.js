import Image from "next/image";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import styles from "./event-item.module.css";
const EventItems = ({ title, image, date, location, id }) => {
  const HumanReadableFormate = new Date(date).toLocaleTimeString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLocation = location.replace(",", "\n");
  return (
    <li className={styles.item}>
      <Image
        // className={styles.images}
        src={image}
        alt={title}
        width={440}
        height={560}
      />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{HumanReadableFormate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedLocation}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button url={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItems;
