import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from 'next/font/google'
import "./globals.css"

import { cn } from "@/lib/utils"

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "مهارات الذكاء الاصطناعي وأدوات المستقبل",
  description:
    "برنامج تدريبي مباشر أونلاين يعلمك الأدوات التي ستغير طريقة عملك... من صناعة المحتوى إلى بناء البوتات وصفحات الهبوط!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cn("min-h-screen bg-background font-sans antialiased", tajawal.variable)}>{children}</body>
    </html>
  )
}
