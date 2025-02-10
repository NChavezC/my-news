import {HiOutlineMoon, HiOutlineSun} from "react-icons/hi2";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
    const {darkMode, toggleDarkMode} = useDarkMode();
    
    return (<button
        onClick={toggleDarkMode}
        className="p-2 bg-gray-200 dark:bg-gray-800 rounded-md"
      >
        {darkMode ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
      </button>
    )
}

export default DarkModeToggle
