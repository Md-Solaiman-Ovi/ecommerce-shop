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
      <div className="flex gap-10 my-[50px]">
        <ProfileInformation />
        <div className="w-3/4 ">{children}</div>
      </div>
    </Container>
  );
};
export default UserLayout;
