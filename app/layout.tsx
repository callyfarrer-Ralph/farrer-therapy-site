import type { Metadata } from "next";
import "@farrer/shared-ui/styles.css";
import "./globals.css";
import { SiteShell } from "@farrer/shared-ui";
import { brand, contact, navItems } from "./site";

export const metadata: Metadata = {
  title: "The Farrer Therapy Group | Online Therapy Across the UK",
  description:
    "Warm, evidence-based online therapy for adults across the UK with Cally Farrer, BABCP-accredited Psychotherapist."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell brand={brand} contact={contact} navItems={navItems} theme="farrer">
          {children}
        </SiteShell>
      </body>
    </html>
  );
}
