import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guest Area",
};

export default function Page() {
  return (
    <h2 className="mb-7 text-2xl font-semibold text-accent-400">
      Welcome, Mohsin
    </h2>
  );
}
