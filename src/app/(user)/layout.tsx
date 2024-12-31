import type { Metadata } from "next";
import { Inter } from "next/font/google";  // Inter is a valid Google font
import './style/globals.css';
import Footer from "@/components/Foooter/Footer";
import ResponsiveNav from "@/components/Navbar/ResponsiveNav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog Haven - Your Blogging Destination",
  description: "A modern blog website for sharing insights, stories, and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider >
      <html lang="en">
        <body className={`${inter.variable} bg-black antialiased`}>
          <ResponsiveNav />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
