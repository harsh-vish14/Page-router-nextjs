import EventItems from "./event-item";
import styles from "./event-list.module.css";
const EventList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return (
          <EventItems
            key={item.id}
            title={item.title}
            image={item.image}
            date={item.date}
            location={item.location}
            id={item.id}
          />
        );
      })}
    </ul>
  );
};

export default EventList;
