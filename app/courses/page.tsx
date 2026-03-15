'use client';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { BookOpen, Tag } from 'lucide-react';

export default function CourseCatalog() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCourses() {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('is_published', true);
      
      if (data) setCourses(data);
      setLoading(false);
    }
    fetchCourses();
  }, []);

  if (loading) return <div className="p-10 text-center font-sans text-primary">Memuat Kursus...</div>;

  return (
    <div className="max-w-7xl mx-auto p-8 font-['Poppins']">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Katalog Kursus</h1>
        <p className="text-gray-500 mt-2">Pilih kursus terbaik untuk masa depanmu</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
            <div className="h-48 overflow-hidden">
              <img 
                src={course.thumbnail_url || 'https://via.placeholder.com/400x200'} 
                alt={course.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {course.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">{course.title}</h3>
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">{course.description}</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-50">
                <div className="text-lg font-black text-secondary">
                  {course.price === 0 ? 'GRATIS' : `Rp ${Number(course.price).toLocaleString()}`}
                </div>
                <button className="bg-primary text-white px-5 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
