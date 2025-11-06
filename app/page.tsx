import Link from 'next/link';
import { ArrowRight, Sparkles, Heart, Smile } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-pink-100 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            ยินดีต้อนรับสู่โลกของฉัน
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-pink-500 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
            สวัสดี! ฉันชื่อ
            <br />
            Vasinee Marit 💖
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ยินดีต้อนรับสู่พื้นที่ส่วนตัวของฉัน ที่นี่คือที่ที่ฉันแบ่งปันเรื่องราว
            ความสนใจ และสิ่งที่ฉันรัก มาทำความรู้จักกันให้มากขึ้นกันเถอะ!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/about"
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2"
            >
              รู้จักฉันมากขึ้น
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold border-2 border-pink-200 hover:border-pink-400 hover:text-pink-600 transition-all"
            >
              ติดต่อฉัน
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          สิ่งที่ฉันชอบ 💕
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Heart className="w-8 h-8" />}
            title="มีใจรัก"
            description="ฉันเชื่อว่าทุกสิ่งที่ทำด้วยใจรักจะออกมาดีที่สุดเสมอ"
            gradient="from-pink-400 to-rose-500"
          />
          
          <FeatureCard
            icon={<Sparkles className="w-8 h-8" />}
            title="ความสดใส"
            description="ชีวิตคือการเรียนรู้สิ่งใหม่ๆ และสร้างสรรค์สิ่งที่สวยงาม"
            gradient="from-rose-400 to-pink-500"
          />
          
          <FeatureCard
            icon={<Smile className="w-8 h-8" />}
            title="รอยยิ้ม"
            description="ฉันมักมองโลกในแง่ดี และชอบทำให้คนรอบข้างมีความสุข"
            gradient="from-pink-500 to-fuchsia-500"
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}) {
  return (
    <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}