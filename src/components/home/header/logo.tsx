import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="maral-logo"
      width={450}
      height={500}
      loading="eager"
      className="h-26 w-auto block dark:hidden my-2"
    />
  );
};

export default Logo;
