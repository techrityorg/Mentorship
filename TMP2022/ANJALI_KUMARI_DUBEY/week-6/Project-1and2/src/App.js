import "./App.css";
import ProfilePic from './images/dp.png'

function App() {
  return (
    <div className="body">
      <div className="App">
        <div className="fr_cont">
          <nav>
            <h1 className="head1">ANJALI KUMARI DUBEY</h1>
            <a href="mailto:dubeyanjali9819@gmail.com">
              <h3 className="head3">
                <i>dubeyanjali9819@gmail.com</i>
              </h3>
            </a>
            <a
              href="https://www.linkedin.com/in/akd-anjali-dubey-2001"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="head3">
                <i>LinkedIn</i>
              </h3>
            </a>
            <a
              href="https://github.com/AKD-01"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="head3">
                <i>GitHub</i>
              </h3>
            </a>
          </nav>
          <div>
            <img src={ProfilePic} alt="" />
          </div>
        </div>
        <hr />
        <div className="rest_all">
          <div>
            <h1>
              <u>Education</u>
            </h1>
            <ul>
              <li>
                <h3>Guru Gobind Singh Indraprastha University</h3>
                <p>BTech in Computer Science</p>
                <i>2020 - 2024 </i>
                <i>
                  <p>CGPA (up to 2nd semester): 9.97</p>
                </i>
              </li>
              <li>
                <h3>Kendriya Vidyalaya, Andrews Ganj</h3>
                <p>Intermediate</p>
                <i>2017 - 2019 </i>
                <i>
                  <p>CBSE, Aggregate Percentage: 90</p>
                </i>
              </li>
              <li>
                <h3>Kendriya Vidyalaya, Andrews Ganj</h3>
                <p>Matriculation</p>
                <i>2015 - 2017 </i>
                <i>
                  <p>CBSE, CGPA: 10</p>
                </i>
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>
              <u>Experience</u>
            </h1>
            <ul>
              <li>
                <h3>Fyndey Solutions</h3>
                <p>Frontend React Intern</p>
              </li>
              <li>
                <h3>GirlScript Summer of Code</h3>
                <p>Open Source Contributor</p>
              </li>
              <li>
                <h3>Peatix It Pvt Ltd</h3>
                <p>Frontend Intern</p>
              </li>
            </ul>
          </div>
          <hr />
          <div>
            <h1>
              <u>Achievements</u>
            </h1>
            <ul>
              <li>
                <h3>Software Engineering Virtual Experience</h3>
                <p>
                  <a href="https://bit.ly/3dlZLP3">Certificate</a> JPMorgan
                  Chase & Co. Issued August 2022
                </p>
              </li>
              <li>
                <h3>Engineering Virtual Program</h3>
                <p>
                  <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_spinTyMrvtvvLQGsK_1655031956512_completion_certificate.pdf">
                    Certificate
                  </a>{" "}
                  Goldman Sachs, Issued Jun 2022
                </p>
              </li>
              <li>
                <h3>Global Ambassador at the WomenTech Network.</h3>
              </li>
              <li>
                <h3>1812 CodeChef max rating.</h3>
              </li>
              <li>
                <h3>
                  Solved 450+ Data Structures and Algorithm problems on
                  different Coding Platforms.
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
