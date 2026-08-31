import { MARAL_SHOP_DATA as data } from "@/data/data";
import Card from "@/components/ui/card";

const Cards = () => {
  return (
    <>
      {data.map((item) => (
        <Card key={item.title} {...item} />
      ))}
    </>
  );
};

export default Cards;
