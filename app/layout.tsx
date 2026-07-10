import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "曾一 Yi Zeng — 系统架构师与 C/C++ 工程师",
  description: "曾一的个人技术网站：分布式系统、高性能网络、C/C++ 系统研发与 AI Agent Infra。",
  openGraph: {
    title: "曾一 Yi Zeng — 系统架构师与 C/C++ 工程师",
    description: "让复杂系统更可靠，也让智能工具真正服务于工程。",
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
