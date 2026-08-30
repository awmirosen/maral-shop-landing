import Leaf from "@/components/ui/leaf";
import Header from "@/components/home/header";
import Main from "@/components/home/main";

const HomePage = () => {
  return (
    <main className="relative flex flex-col">
      <Leaf />
      <Header />
      <Main />
      
    </main>
  );
};

export default HomePage;
