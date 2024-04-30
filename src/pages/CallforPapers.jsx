import React from "react";
import styles from "../styles/CallForPapers.module.css";
import { Link, useNavigate } from "react-router-dom";

const CallforPapers = () => {
  const navigate = useNavigate();
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
            <li className={styles.important}>
              Nanotechnology in diagnostic applications
            </li>
            <li className={styles.important}>
              Omics technology as new dimension in disease diagnosis
            </li>
            <li className={styles.important}>
              Advancements in cancer diagnostics
            </li>
            <li className={styles.important}>
              Development of liquid biopsy based assays
            </li>
            <li className={styles.important}>
              Point of care and affordable diagnostics
            </li>
            <li className={styles.important}>
              Miniaturization and automation of diagnostic methods
            </li>
            <li className={styles.important}>
              Precision medicine and digital health
            </li>
            <li className={styles.important}>
              Impact and use of AI and ML in diagnostics
            </li>
            <li className={styles.important}>
              Advanced imaging techniques for diagnostics
            </li>
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
          <button
            className="btn btn-primary mt-3 bg-blue-200 w-40 h-8 rounded-lg hover:scale-110"
            onClick={() => {
              navigate("../submit_your_paper");
            }}
          >
            Submit Paper
          </button>
        </div>
      </div>
    </div>
  );
};

export default CallforPapers;
