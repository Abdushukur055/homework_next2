import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create option-1",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}