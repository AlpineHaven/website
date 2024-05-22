import { Metadata } from "next";
import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Alpine Haven",
    default: "Alpine Haven",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
