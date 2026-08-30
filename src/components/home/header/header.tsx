import Logo from "./logo";
import Title from "./title";

const Header = () => {
  return (
    <header className="w-full h-12 flex flex-col items-center py-2">
      <Logo />
      <Title />
    </header>
  );
};

export default Header;
