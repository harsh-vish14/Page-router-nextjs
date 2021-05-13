import { useRef } from "react";
import Button from "../ui/button";
import styles from "./event-search.module.css";

const EventSearch = (props) => {
  const yearRef = useRef();
  const monthRef = useRef();
  const formData = (e) => {
    e.preventDefault();
    props.onSearch(yearRef.current.value, monthRef.current.value);
  };
  return (
    <form className={styles.form} onSubmit={formData}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" name="year" ref={yearRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month" name="month">
            Month
          </label>
          <select id="month" ref={monthRef}>
            <option value="1">January</option>
            <option value="2">february</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Event</Button>
    </form>
  );
};

export default EventSearch;
