import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Suh - Builder, Investigator, Craftsman",
  description: "Product-oriented builder and investigator. Formidable thinker with clear hypotheses and deep research.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
