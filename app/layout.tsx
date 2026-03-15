import './globals.css'
import { Poppins } from 'next/font/google'

// Konfigurasi font Poppins agar website terlihat modern
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' // Digunakan oleh Tailwind sebagai font-sans
})

export const metadata = {
  title: 'MILLY COURSE - Platform Belajar Online Modern',
  description: 'Belajar kursus online dengan dukungan AI Tutor 24/7. Kuasai skill baru sekarang.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-[#F9FAFB] text-[#1A1A1A] antialiased`}>
        {/* Layout ini akan membungkus semua halaman seperti page.tsx dan courses/page.tsx */}
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  )
}
