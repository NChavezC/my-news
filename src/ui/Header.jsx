import DarkModeToggle from "./darkModeToggle";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex items-center flex-row justify-around mb-5 p-5 border border-stone-300 dark:border-stone-700">
      <Logo />
      <Navbar />
      <DarkModeToggle />
    </header>
  );
}

export default Header;
