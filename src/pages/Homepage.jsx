import styles from "../styles/HomePage.module.css"; // Import CSS module
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className={styles["home-page"]}>
      <div className={styles["moving-component"]}>
        <div className={styles["text-container"]}>
          <span className={styles["paper-deadline"]}>
            Paper Deadline: April 5 2024
          </span>
          <span className={styles["special-session"]}>
            Checkout out the Accepted Special Session for{" "}
            <Link
              to="/special_session"
              className="text-blue-500 hover:underline"
            >
              {" "}
              AN INTERNATIONAL CONFERENCE{" "}
            </Link>
          </span>
        </div>
      </div>{" "}
      {/* Apply home-page class from the CSS module */}
      <header className={styles.header1}>
        {" "}
        {/* Apply header1 class from the CSS module */}
        <h1 className={styles.title}>AN INTERNATIONAL CONFERENCE</h1>{" "}
        {/* Apply title class from the CSS module */}
        <h2 className={styles.subtitle}>ON</h2>{" "}
        {/* Apply subtitle class from the CSS module */}
        <h1 className={styles["main-title"]}>
          {" "}
          {/* Apply main-title class from the CSS module */}
          <strong>
            Advancements in Diagnostic Technologies: Global Healthcare
            Monitoring
          </strong>
        </h1>
        <p className={styles.date}>November 15-17, 2024</p>{" "}
        {/* Apply date class from the CSS module */}
      </header>
      <section className={styles.scope}>
        {" "}
        {/* Apply scope class from the CSS module */}
        <h2 className={styles["section-title"]}>
          Scope of the Conference
        </h2>{" "}
        {/* Apply section-title class from the CSS module */}
        <p className={styles["scope-description"]}>
          {" "}
          {/* Apply scope-description class from the CSS module */}
          Diagnostic technology offers immense potential for innovating newer
          tools in healthcare monitoring. This technology lies at the
          intersection of biotechnology, information technology, and
          electronics. Increasing advancements in these branches of science are
          expected to transform the site of care and configuration of health
          care monitoring. Therefore, the conference intends to bring together
          the experts working around the globe in diverse fields towards
          improvised healthcare system. The scope of the conference covers
          various biomarkers, sensing technologies, platforms, miniaturized
          devices, sensitive signal readers, artificial intelligence and machine
          learning methods being developed or used for global healthcare system.
        </p>
        <p className={styles["scope-description"]}>
          {" "}
          {/* Apply scope-description class from the CSS module */}
          This conference holds relevance and becomes significant in light of
          the increasing demand and importance of sensing technology towards
          improving health care faciimport HomePage from './Homepage'; lities.
          Through various scientific sessions, the contributions of the various
          branches of science and technology in developing new generation
          sensing devices to address the emerging healthcare challenges and the
          needs associated with them would be discussed.
        </p>
        <h3 className={styles["section-subtitle"]}>Themes</h3>{" "}
        {/* Apply section-subtitle class from the CSS module */}
        <ul className={styles["theme-list"]}>
          {" "}
          {/* Apply theme-list class from the CSS module */}
          <li className={styles["theme-item"]}>Biomarkers discovery</li>{" "}
          {/* Apply theme-item class from the CSS module */}
          <li className={styles["theme-item"]}>
            {" "}
            {/* Apply theme-item class from the CSS module */}
            Nanotechnology in diagnostic applications
          </li>
          {/* Repeat similar structure for other list items */}
        </ul>
      </section>
    </div>
  );
}

export default Homepage;
