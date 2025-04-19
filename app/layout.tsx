import AppSidebar from "@/components/ui/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import ThemeProvider from "@/provider/theme-provider";
import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import getFrontMatterList from "@/lib/posts";

const gothicA1 = Gothic_A1({
  variable: "--gothic-a1",
  weight: "500",
  subsets: ["latin"],
  display: "block",
});

export const metadata: Metadata = {
  title: "Codefug Blog",
  description: "project experiences and development notes",
  openGraph: {
    title: "Codefug Blog",
    description: "project experiences and development notes",
    url: "https://codefug-blog.vercel.app",
    type: "website",
    images: [
      {
        url: "/images/main-logo.png",
        alt: "Codefug Blog",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const totalFrontMatterList = getFrontMatterList();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${gothicA1.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider defaultOpen={false}>
            <AppSidebar totalFrontMatterList={totalFrontMatterList} />
            <Layout>{children}</Layout>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
