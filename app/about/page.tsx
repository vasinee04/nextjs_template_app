import { Heart, Star, Coffee, Music } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
            เกี่ยวกับฉัน
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            มาทำความรู้จักกับฉันให้มากขึ้นกัน
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-12 border border-pink-100">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">เรื่องราวของฉัน 💖</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
            <p>
              สวัสดีค่ะ! ฉันชื่อ somejeed คนที่มีความฝัน ความหวัง และความรักที่มอบให้กับทุกสิ่ง
              ที่ฉันทำ ฉันเชื่อว่าชีวิตคือการเดินทางที่สวยงาม และทุกวันคือโอกาสใหม่
              ในการเรียนรู้และเติบโต
            </p>
            <p>
              ฉันชอบสิ่งที่สร้างสรรค์ สิ่งที่สวยงาม และสิ่งที่ทำให้คนอื่นมีความสุข
              ไม่ว่าจะเป็นการออกแบบ การเขียน หรือแม้แต่การแบ่งปันรอยยิ้มเล็กๆ
              ฉันเชื่อว่าความรักและความใส่ใจในรายละเอียดเล็กๆ
              คือสิ่งที่ทำให้ชีวิตมีความหมาย
            </p>
            <p>
              ที่นี่คือพื้นที่ส่วนตัวของฉัน ที่ฉันหวังว่าจะได้แบ่งปันความคิด ความรู้สึก
              และประสบการณ์ที่น่าสนใจกับทุกคน มาเป็นส่วนหนึ่งของการเดินทางนี้ไปด้วยกันนะคะ
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ValueCard
            icon={<Heart className="w-8 h-8" />}
            title="ความรัก"
            description="ทำทุกอย่างด้วยใจรักและความตั้งใจ"
            color="bg-pink-500"
          />
          
          <ValueCard
            icon={<Star className="w-8 h-8" />}
            title="ความฝัน"
            description="ไม่หยุดฝันและมุ่งมั่นทำให้มันเป็นจริง"
            color="bg-rose-500"
          />
          
          <ValueCard
            icon={<Coffee className="w-8 h-8" />}
            title="ความสุข"
            description="เพลิดเพลินกับช่วงเวลาเล็กๆ ในชีวิต"
            color="bg-pink-600"
          />
          
          <ValueCard
            icon={<Music className="w-8 h-8" />}
            title="ความสร้างสรรค์"
            description="สร้างสรรค์สิ่งใหม่ๆ ที่น่าสนใจ"
            color="bg-fuchsia-500"
          />
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard number="∞" label="ความรักที่มี" />
            <StatCard number="24/7" label="พร้อมเรียนรู้" />
            <StatCard number="100%" label="ทำด้วยหัวใจ" />
          </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
      <div className={`${color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="space-y-2">
      <div className="text-4xl md:text-5xl font-bold">{number}</div>
      <div className="text-pink-100 text-lg">{label}</div>
    </div>
  );
}