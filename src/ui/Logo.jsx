import {useDarkMode} from "../context/DarkModeContext"

function Logo() {
    const {darkMode} = useDarkMode();
    return (
        <div className="h-[150px] w-[150px]">
            {darkMode ? <img className="rounded-full" src="LogoD.jpg" /> :<img className="rounded-full" src="LogoL.jpg" />}
        </div>
    )
}

export default Logo
