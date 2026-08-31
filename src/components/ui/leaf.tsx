import Image from "next/image";

const Leaf = () => {
  return (
    <Image
      src="/leaf-1.svg"
      alt="leaf"
      width={300}
      height={400}
      className="w-25 absolute top-0 right-0"
    />
  );
};

export default Leaf;
