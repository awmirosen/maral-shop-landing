import Cards from "./cards";
import Foot from "./foot";

const Content = () => {
  return (
    <div className="flex flex-col gap-8 px-4">
      <Cards />
      <Foot />
    </div>
  );
};

export default Content;
