import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Live Coach | Personal Coaching",
  description:
    "Transform your life with Marco Live Coach. Personal coaching, growth, and real results.",
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
