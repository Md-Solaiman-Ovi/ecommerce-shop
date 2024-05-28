import { ReactNode } from "react";
import RootLayout from "../layout";
import ProfileInformation from "@/app/components/site/ProfileInformation";
import Container from "@/app/components/site/Container";

interface UserLayoutProps {
  children: ReactNode;
}

const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <Container>
      <div className="flex flex-col justify-center md:justify-start md:flex-row gap-10 md:my-[50px] md:mx-10 xl:mx-0">
        <ProfileInformation />
        <div className="w-full md:w-2/3 xl:w-3/4 ">{children}</div>
      </div>
    </Container>
  );
};
export default UserLayout;
