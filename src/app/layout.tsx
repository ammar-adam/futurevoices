import type { Metadata } from "next";
import { Figtree, Playfair_Display } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://futurevoices.co"),
  title: "Future Voices | Public Speaking School for Kids and Teens, Live Online",
  description:
    "A six-level public speaking school for kids and teens. Live online classes of eight, taught by the founder. Next cohort starts September 12, first class free.",
  openGraph: {
    title: "Future Voices | Public Speaking School for Kids and Teens, Live Online",
    description:
      "A six-level public speaking school for kids and teens. Live online classes of eight, taught by the founder. Next cohort starts September 12, first class free.",
    siteName: "Future Voices",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
