import Link from "next/link";
import { AiOutlineInstagram, AiOutlineRight } from "react-icons/ai";

type CardType = {
  Icon: React.ElementType;
  link: string | undefined;
  title: string;
  description: string;
};

const Card = ({
  Icon = AiOutlineInstagram,
  link = "#",
  title = "مارال شاپ",
  description = "@maral_shop_lebas",
}: CardType) => {
  return (
    <Link
      href={link}
      className="bg-white flex gap-x-4 items-center border border-secondary shadow-lg/80 shadow-secondary px-4 py-3 rounded-xl"
      dir="ltr"
    >
      {/* ICON */}
      <div className="w-1/8">
        <div className="w-12 h-12 bg-primary flex justify-center items-center p-0.5 rounded-xl">
          <Icon size={36} color="#fff" />
        </div>
      </div>
      {/* LABEL */}
      <div className="w-6/8 h-full">
        <div className="flex flex-col justify-center">
          <h5 className="text-lg font-bold">{title}</h5>
          <p>{description}</p>
        </div>
      </div>
      {/* ARROW */}
      <div className="w-1/8 flex justify-center">
        <AiOutlineRight size={20} className="text-foreground" />
      </div>
    </Link>
  );
};

export default Card;
