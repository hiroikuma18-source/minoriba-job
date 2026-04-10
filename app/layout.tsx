import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "minoribaジョブ | 美容・整体・マッサージ業界専門求人",
  description: "美容エステ・整体マッサージ業界専門の求人紹介。週1日・1時間〜OK！自由に働けるセラピスト副業。全国約600店舗で希望エントリー制。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
