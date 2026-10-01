import type { Metadata } from "next";
import "./globals.css";
import { Header, Footer } from "./shell";
export const metadata: Metadata = {
  title: "Fields Café — Stay, play & take away",
  description:
    "Your neighbourhood café at 4 Appian Way, Albany. Good food, room to gather, and a little space to stay.",
  robots: { index: false, follow: false },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
