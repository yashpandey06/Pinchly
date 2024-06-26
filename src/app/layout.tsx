import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Provider";
import Layout from "@/components/Layout/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pinchly",
  description: "Your Interview ready friend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Layout>
          <Providers>{children}</Providers>
        </Layout>
      </body>
    </html>
  );
}
