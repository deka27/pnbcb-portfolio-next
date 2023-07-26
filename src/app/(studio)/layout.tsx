import '../globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PNBCB Admin Panel",
  description: "For updating content on PNBCB",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
