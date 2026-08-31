import {
  AiOutlineInstagram,
  AiOutlineShoppingCart,
  AiOutlinePhone,
} from "react-icons/ai";

type DataType = {
  Icon: React.ElementType;
  link: string;
  title: string;
  description: string;
};

export const MARAL_SHOP_DATA: DataType[] = [
  {
    Icon: AiOutlineInstagram,
    link: "https://www.instagram.com/maral_shop_lebas",
    title: "اینستاگرام",
    description: "@Maral_Shop_Lebas",
  },
  {
    Icon: AiOutlineShoppingCart,
    link: "#",
    title: "وبسایت (در حال ساخت)",
    description: "",
  },
  {
    Icon: AiOutlinePhone,
    link: "#",
    title: "شماره تماس",
    description: "09126336604",
  },
];
