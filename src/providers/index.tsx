import { ProviderTheme } from "./theme-provider";
import { ChildrenType } from "@/types/global";

const Providers = ({ children }: ChildrenType) => {
  return <ProviderTheme>{children}</ProviderTheme>;
};
export default Providers;
