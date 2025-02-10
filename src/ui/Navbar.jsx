import MenuLink from "./MenuLink";

function Navbar() {
  return (
    <div className="flex justify-around items-center w-[50%]">
      <MenuLink to="/home">Home</MenuLink>
      <MenuLink to="/sa">South America</MenuLink>
      <MenuLink to="/gaza">Gaza</MenuLink>
      <MenuLink to="/us">USA</MenuLink>
      <MenuLink to="/europe">Europe</MenuLink>
    </div>
  );
}

export default Navbar;
