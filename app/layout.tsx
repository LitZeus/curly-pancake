import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { PageTransition } from '@/components/page-transition'
import { Loader } from '@/components/loader'
import { Suspense } from 'react'
import { BackgroundAnimation } from '@/components/background-animation'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Creative Portfolio',
  description: 'A vibrant and engaging portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geist.variable} font-sans antialiased flex flex-col min-h-screen bg-gradient-to-b from-background to-background relative`}
      >
        <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <div className="flex-grow">
            <Suspense fallback={<Loader />}>
              <PageTransition>
                <main>{children}</main>
              </PageTransition>
            </Suspense>
          </div>
          <BackgroundAnimation />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'