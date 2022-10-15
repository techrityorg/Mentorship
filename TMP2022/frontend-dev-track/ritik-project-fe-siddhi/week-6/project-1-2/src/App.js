import './App.css';
import DP from './assets/dp.jpg'

function App() {
  return (
    <>
      <div className="App">
        <nav>
          <h1 className="head1">RITIK KUMAR</h1>
        </nav>
        <div>
          <img src={DP} alt="Ritik Kumar" />
        </div>
        <hr />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0 6rem",
        }}
      >
        <div>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Guru Gobind Singh Indraprastha University</h3>
              <p>BTech in Computer Science</p>
              <i>2020 - 2024 </i>
              <i>
                <p>CGPA (up to 2nd semester): 9.93</p>
              </i>
            </li>
            <li>
              <h3>Don Bosco Academy</h3>
              <p>Intermediate</p>
              <i>2017 - 2019 </i>
              <i>
                <p>ICSE, Aggregate Percentage: 83</p>
              </i>
            </li>
            <li>
              <h3>St Xaviers High School</h3>
              <p>Matriculation</p>
              <i>2015 - 2017 </i>
              <i>
                <p>ICSE, CGPA: 88</p>
              </i>
            </li>
          </ul>
        </div>
        <div>
          <h2>Experience</h2>
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
      </div>
      <hr />
      <div className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>
            <h3>Software Engineering Virtual Experience</h3>
            <p>
              <a href="https://bit.ly/3QB73wE">Certificate</a> JPMorgan Chase &
              Co. Issued August 2022
            </p>
          </li>
          <li>
            <h3>Engineering Virtual Program</h3>
            <p>
              <a href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_gBaCZMb88iGZFfgAb_1655031234264_completion_certificate.pdf">
                Certificate
              </a>
              Goldman Sachs, Issued Jun 2022
            </p>
          </li>
          <li>
            <h3>
              Solved 400+ Data Structures and Algorithm problems on different
              Coding Platforms.
            </h3>
          </li>
          <li>
            <h3>1790 CodeChef max rating.</h3>
          </li>
          <li>
            <h3>Microsoft Learn Student Ambassador</h3>
          </li>
        </ul>
      </div>
      <hr />
      <div className="contact">
        <a href="mailto:srivastavaritik360@gmail.com">
          <h2>srivastavaritik360@gmail.com</h2>
        </a>
        <a href="https://www.linkedin.com/in/ritik-kumar-3bb19a175/">
          <h2>LinkedIn</h2>
        </a>
        <a href="https://github.com/srivastavaritik">
          <h2>GitHub</h2>
        </a>
      </div>
    </>
  );
}

export default App;
