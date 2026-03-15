import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-5xl font-extrabold text-[#6C5CE7] mb-4">
        MILLY COURSE
      </h1>
      <p className="text-gray-500 text-lg max-w-md mb-8">
        Platform kursus online modern dengan dukungan AI Tutor 24/7.
      </p>
      
      <div className="flex gap-4">
        <Link 
          href="/courses" 
          className="bg-[#6C5CE7] text-white px-8 py-3 rounded-2xl font-bold hover:scale-105 transition-transform"
        >
          Lihat Katalog Kursus
        </Link>
        <Link 
          href="/login" 
          className="border-2 border-[#6C5CE7] text-[#6C5CE7] px-8 py-3 rounded-2xl font-bold hover:bg-[#6C5CE7]/5 transition"
        >
          Masuk / Daftar
        </Link>
      </div>
    </div>
  );
}
