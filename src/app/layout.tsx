"use client";
import LeftBar from "@/components/LeftBar";
import "./globals.css";
import RightBar from "@/components/RightBar";
import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import RightBar2 from "@/components/RightBar2";
import { SkeletonTheme } from "react-loading-skeleton";
export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <body>
          <div className="max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
            <div className="px-2 xsm:px-4 xxl:px-8 ">
              <LeftBar />
            </div>
            <div className="flex-1 lg:min-w-[39rem] border-x-[1px] min-w-10 border-borderGray">
              {children}
              {modal}
            </div>
            <div className="hidden lg:flex ml-4 md:ml-8 flex-1">
              {pathname === "/explore" ? <RightBar2 /> : <RightBar />}
            </div>
          </div>
        </body>
      </SkeletonTheme>
    </html>
  );
}
