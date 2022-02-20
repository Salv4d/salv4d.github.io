import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <h1>Salvador Oliveira</h1>
      <p>Software Engineer</p>
      <div>
        <a href="https://github.com/Salv4d" alt="Github" target="_blank">
          <FontAwesomeIcon className="App-faIcon" icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/salvador-oliveira/"
          alt="LinkedIn"
          target="_blank"
        >
          <FontAwesomeIcon className="App-faIcon" icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/Salv4d" alt="Twitter" target="_blank">
          <FontAwesomeIcon className="App-faIcon" icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default App;
