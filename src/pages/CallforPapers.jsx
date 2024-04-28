import React from "react";
import styles from "../styles/CallForPapers.module.css";

const CallforPapers = () => {
  return (
    <div>
      <br />
      <div className={styles["call-for-papers-container"]}>
        <div className={styles["call-for-papers"]}>
          <h2>Call for Papers</h2>
          <p>
            We invite researchers, academicians, practitioners, and industry
            experts to submit their original research papers to our conference.
            Topics of interest include but are not limited to:
          </p>
          <ul className={styles["bullet-points"]}>
            <li>Nanotechnology in diagnostic applications</li>
            <li>Omics technology as new dimension in disease diagnosis</li>
            <li className={styles.important}>
              Advancements in cancer diagnostics
            </li>
            <li>Development of liquid biopsy based assays</li>
            <li>Point of care and affordable diagnostics</li>
            <li>Miniaturization and automation of diagnostic methods</li>
            <li className={styles.important}>
              Precision medicine and digital health
            </li>
            <li className={styles.important}>
              Impact and use of AI and ML in diagnostics
            </li>
            <li>Advanced imaging techniques for diagnostics</li>
          </ul>
          <p>
            Submissions must be in PDF format and should not exceed 8 pages. All
            papers will be peer-reviewed, and accepted papers will be published
            in the conference proceedings.
          </p>
          <h3>Important Dates</h3>
          <table className={styles["important-date-table"]}>
            <tbody>
              <tr>
                <th>Description</th>
                <th>Date</th>
              </tr>
              <tr>
                <td>Abstract Submission Deadline</td>
                <td className={styles["date-value"]}>15th August 2024</td>
              </tr>
              <tr>
                <td>Notification of Acceptance</td>
                <td className={styles["date-value"]}>15th September 2024</td>
              </tr>
              <tr>
                <td>Camera-Ready Paper Submission</td>
                <td className={styles["date-value"]}>15th October 2024</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary mt-3">Submit Paper</button>
        </div>
      </div>
    </div>
  );
};

export default CallforPapers;
