import Leaf from "@/components/ui/leaf";
import Header from "@/components/home/header";
import Content from "@/components/home/content";

const HomePage = () => {
  return (
    <main className="relative flex flex-col">
      <Leaf />
      <Header />
      <Content />
    </main>
  );
};

export default HomePage;
