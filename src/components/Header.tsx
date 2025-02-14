import { faMoon,faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header = ({ toggleDarkMode ,darkMode}: IProps) => {
  return (
    <div className="bg-[#141516]  h-16 text-white flex items-center justify-between w-full sticky top-0">
      <div className="container     flex items-center justify-between m-auto px-7">
        <h2>logo</h2>
        <div className="flex items-center justify-between gap-x-3.5">
          <p>whatsApp</p>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 text-white rounded cursor-pointer"
          >
            {darkMode? <FontAwesomeIcon icon={faSun} size="1x"/>: <FontAwesomeIcon icon={faMoon} size="1x" />}
           
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
