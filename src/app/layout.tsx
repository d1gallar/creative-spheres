import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AsideMenu from "@/components/AsideMenu";
import { CollapseProvider } from "@/hooks/useCollapse";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="white" />
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
