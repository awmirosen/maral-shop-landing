import Image from "next/image";

const Leaf = () => {
  return (
    <Image
      src="/leaf.svg"
      alt="leaf"
      width={200}
      height={300}
      className="w-15 absolute top-40 left-0"
    />
  );
};

export default Leaf;
