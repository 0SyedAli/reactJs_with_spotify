import logo from "../assets/logo_brand.svg";
import { FaHouseChimney } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_inner">
        <img src={logo} alt="" />
        <div>
          <ul>
            <li>
              <a href="/">
                <FaHouseChimney />Home
              </a>
            </li>
            <li>
              <a href="/">
                <FaHouseChimney />
                Buy now
              </a>
            </li>
            <li>
              <a href="/">
                <FaHouseChimney />
                Playlist
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
