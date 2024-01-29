import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AsideMenu from "@/components/AsideMenu";
import { CollapseProvider } from "@/hooks/useCollapse";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative Sphere",
  description:
    "A forward-thinking design agency that creates spectaular user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/CreativeSphereIcon.svg" sizes="any" />
      <CollapseProvider>
        <body className={inter.className}>
          <NavBar />
          <AsideMenu />
          {children}
          <Footer />
        </body>
      </CollapseProvider>
    </html>
  );
}
