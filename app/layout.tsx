import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (
                window.location.hostname === "linmo-cms-auth.netlify.app" &&
                /^#(?:invite_token|confirmation_token|recovery_token|email_change_token)=/.test(window.location.hash)
              ) {
                window.location.replace("/admin/" + window.location.hash);
              }
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
