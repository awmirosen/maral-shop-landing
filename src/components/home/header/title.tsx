import Image from "next/image";

const Title = () => {
  return (
    <Image
      src="/title.svg"
      alt="maral-shop-title"
      width={300}
      height={100}
      loading="eager"
      className="w-60"
    />
  );
};

export default Title;
