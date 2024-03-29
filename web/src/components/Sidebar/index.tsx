import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router";

import mapMarkerImg from "../../assets/images/map-marker.svg";

import "./styles.css";

export default function Sidebar() {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <a href="/">
        <img src={mapMarkerImg} alt="Happy" />
      </a>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  );
}
