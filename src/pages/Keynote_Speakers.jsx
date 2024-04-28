import bnr from "../images/img2.avif";
import moreToCome from "../images/moretocome.png";
import styles from "../styles/Keynote_Speaker.module.css";

function Keynote_Speakers() {
  return (
    <div
      style={{
        backgroundImage: "url('back.png')",
        backgroundRepeat: "repeat-y",
        backgroundSize: "1655px 1250px",
      }}
    >
      <div className=" mb-3">
        <div className={styles.profile_card}>
          <img
            src={bnr}
            style={{
              height: "100px",

              width: "100px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
            alt="Profile Picture"
          />
          <h2>Dr. Binoy Krishna Roy</h2>
          <p>Professor, Department of Electrical Engineering</p>
          <p>National Institute of Technology, Silchar</p>
          <p>
            <a href="http://eed.nits.ac.in/binoy-krishna-roy/">Website</a>
          </p>
        </div>
        <br />
        <div className={styles.profile_card}>
          <img
            src={bnr}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
            alt="Profile Picture"
          />
          <h2>Dr. Saraju Mohanty</h2>
          <p>Professor, Department of Computer Science and Engineering</p>
          <p>University of North Texas</p>
          <p>
            <a href="https://computerscience.engineering.unt.edu/people/faculty/saraju-mohanty">
              Website
            </a>
          </p>
        </div>
        <br />
        <div className={styles.profile_card}>
          <img
            src={bnr}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
            alt="Profile Picture"
          />
          <h2>Dr. Mani Bhushan</h2>
          <p>Professor, Department of Chemical Engineering</p>
          <p>Indian Institute of Technology, Bombay</p>
          <p>
            <a href="https://www.che.iitb.ac.in/faculty/mani-bhushan">
              Website
            </a>
          </p>
        </div>
        <br />
        <div className={styles.profile_card}>
          <img
            src={bnr}
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
            alt="Profile Picture"
          />
          <h2>Dr. Bhavesh Kumar R.Bhalja</h2>
          <p>Professor, Department of Electrical Engineering</p>
          <p>Indian Institute of Technology, Roorkee</p>
          <p>
            <a href="https://www.iitr.ac.in/~EE/Bhavesh_Bhalja">Website</a>
          </p>
        </div>
        <br />
        <div className={styles.profile_card}>
          <img
            src={moreToCome}
            alt="More to Come.."
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Keynote_Speakers;
