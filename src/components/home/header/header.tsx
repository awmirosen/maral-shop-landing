import Logo from "./logo";
import Title from "./title";
import Heart from "./heart";
import FarsiTitle from "./title-fa";
import Description from "./description";

const Header = () => {
  return (
    <header className="w-full h-auto flex flex-col items-center py-4">
      <Logo />
      <Title />
      <span className="w-1/3 h-0.5 bg-accent my-3"/>
      <Heart/>
      <FarsiTitle/>
      <Description/>
    </header>
  );
};

export default Header;
