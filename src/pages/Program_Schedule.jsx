import styles from "../styles/ProgramSchedule.module.css";

function Program_Schedule() {
  return (
    <div className={styles.container}>
      <h2>Program Schedule</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00 AM</td>
            <td>Registration</td>
            <td>-</td>
          </tr>
          <tr>
            <td>10:00 AM</td>
            <td>Opening Ceremony</td>
            <td>John Doe</td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td>Keynote Speech</td>
            <td>Jane Smith</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
}

export default Program_Schedule;
