import type { Metadata } from "next";
import "./globals.css";
import SolvoTheme from "@/application/contexts/SolvoTheme";

export const metadata: Metadata = {
  title: "Solvo Engineers",
  description: "Engineering Agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SolvoTheme>{children}</SolvoTheme>
      </body>
    </html>
  );
}
