import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChefScale Pro | Built By Chefs, Engineered For Profits",
  description: "Chef-centered food cost, recipe, inventory, menu, sales, and restaurant decision intelligence.",
  icons: { icon: "/chefscale-logo.png", shortcut: "/chefscale-logo.png" },
  openGraph: {
    title: "ChefScale Pro | Built By Chefs, Engineered For Profits",
    description: "Know what every plate costs. Decide what happens next.",
    type: "website",
    images: [{ url: "/chefscale-social-preview.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
