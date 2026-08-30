import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src="/logo-dark.svg"
        alt="maral-logo"
        width={450}
        height={500}
        className="h-26 w-auto block dark:hidden"
      />
      <Image
        src="/logo-light.svg"
        alt="maral-logo"
        width={450}
        height={500}
        className="h-26 w-auto hidden dark:block"
      />
    </>
  );
};

export default Logo;
