import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manish Kumar - Flutter Developer & Healthcare Technology Enthusiast',
  description: 'Passionate Flutter Developer with 3+ years of experience in mobile application development and a strong drive to revolutionize healthcare through technology. Led teams of 10-12 developers while delivering scalable, production-ready applications.',
  keywords: [
    'Flutter Developer',
    'Mobile App Developer',
    'Healthcare Technology',
    'Telemedicine',
    'HIPAA Compliance',
    'Cross-platform Development',
    'React Native',
    'Dart',
    'Android',
    'iOS',
    'Backend Development',
    'Go',
    'Microservices',
    'Clean Architecture',
    'Team Leadership'
  ],
  authors: [{ name: 'Manish Kumar' }],
  creator: 'Manish Kumar',
  publisher: 'Manish Kumar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://manish-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Manish Kumar - Flutter Developer & Healthcare Technology Enthusiast',
    description: 'Passionate Flutter Developer with 3+ years of experience in mobile application development and a strong drive to revolutionize healthcare through technology.',
    url: 'https://manish-portfolio.vercel.app',
    siteName: 'Manish Kumar Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Manish Kumar - Flutter Developer & Healthcare Technology Enthusiast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manish Kumar - Flutter Developer & Healthcare Technology Enthusiast',
    description: 'Passionate Flutter Developer with 3+ years of experience in mobile application development and a strong drive to revolutionize healthcare through technology.',
    images: ['/og-image.jpg'],
    creator: '@manish_kumar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}