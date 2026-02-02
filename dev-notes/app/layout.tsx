import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Choose Your Developer",
  description: "Pokemon-style portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
