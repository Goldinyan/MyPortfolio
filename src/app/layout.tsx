import { Metadata } from "next";

export const metadata = {
  icons: {
    icon: "/bgFunny.png",
  },
};


import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className="font-[--font-chillax]">
        {children}
      </body>
    </html>
  );
}
