import type { Metadata } from "next"
import { Figtree } from "next/font/google"
import { Toaster } from "@/core/components/ui/sonner"
import { ThemeProvider } from "@/core/context/theme-provider"
import { QueryProvider } from "@/services/tanstack-query/provider"
import "@/core/styles/globals.css"

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Tubod Municipality Agriculture Information System",
  description: "Comprehensive agriculture information management system for Tubod Municipality, Surigao del Norte, designed to streamline farmer registration, crop monitoring, livestock tracking, and agricultural resource management. Fully compliant with RA 9184 (Government Procurement Reform Act), RA 10173 (Data Privacy Act), and National Privacy Commission guidelines for secure handling of farmer and agricultural data.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <QueryProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
            <Toaster richColors closeButton />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  )
}