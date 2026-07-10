import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "林墨 Lin Mo — 产品设计师与创作者",
  description: "林墨的个人品牌网站：产品设计、体验研究、独立项目与设计文章。",
  openGraph: {
    title: "林墨 Lin Mo — 产品设计师与创作者",
    description: "把复杂的问题，做成清晰而有温度的体验。",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className={notoSans.variable}>{children}</body>
    </html>
  );
}
