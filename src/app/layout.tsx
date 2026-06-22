import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "ชวนเที่ยวไทย | คู่มือท่องเที่ยว 12 จังหวัดเด่นของไทย",
  description:
    "ชวนเที่ยวไทย รวม 12 จังหวัดท่องเที่ยวยอดนิยม พร้อมแผนที่อินเทอร์แอกทีฟ เอกลักษณ์ของแต่ละจังหวัด และสถานที่เที่ยวเด่นที่ห้ามพลาด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${notoSansThai.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
