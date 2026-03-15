import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '600', '700'],
  variable: '--font-poppins' 
})

export const metadata = {
  title: 'MILLY COURSE - Online Learning Platform',
  description: 'Belajar lebih cerdas dengan AI Tutor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans bg-[#F9FAFB]`}>
        {children}
      </body>
    </html>
  )
}
