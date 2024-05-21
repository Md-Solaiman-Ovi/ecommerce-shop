import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./../global.css";
import NavBar from "../components/site/navbar/NavBar";
import Footer from "../components/site/footer/Footer";
import Provider from "../redux/Provider";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { toggleVisibility } from "../redux/globalStateSlice";
import SignIn from "../components/site/login/SignIn";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });
//www.youtube.com/

export const metadata: Metadata = {
  title: "E-commerce shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body className={` bg-[rgba(250,250,250,1)] ${poppins.className}`}>
          <NavBar />
          <div className={`${className}`}>{children}</div>
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
