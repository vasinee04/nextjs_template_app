'use client';

import { useState } from 'react';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('ขอบคุณสำหรับข้อความนะคะ! 💖 จะตอบกลับเร็วๆ นี้เลย');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text text-transparent">
            ติดต่อฉัน 💌
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            มีอะไรอยากคุยหรือสอบถามไหมคะ? ส่งข้อความมาหาฉันได้เลยนะ
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <ContactInfoCard
              icon={<Mail className="w-6 h-6" />}
              title="อีเมล"
              content="somejeed@example.com"
              gradient="from-pink-500 to-pink-600"
            />
            
            <ContactInfoCard
              icon={<MessageCircle className="w-6 h-6" />}
              title="โซเชียลมีเดีย"
              content="@somejeed"
              gradient="from-rose-500 to-rose-600"
            />
            
            <ContactInfoCard
              icon={<MapPin className="w-6 h-6" />}
              title="ที่อยู่"
              content="ประเทศไทย 🇹🇭"
              gradient="from-fuchsia-500 to-fuchsia-600"
            />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-6 border border-pink-100"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    ชื่อของคุณ
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
                    placeholder="ใส่ชื่อของคุณ"
                  />
                </div>
                
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    อีเมล
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  หัวข้อ
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors"
                  placeholder="เรื่องที่อยากคุย"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  ข้อความ
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition-colors resize-none"
                  placeholder="เขียนข้อความที่อยากบอกฉัน..."
                />
              </div>

              <button
                type="submit"
                className="w-full group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                ส่งข้อความ 💌
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactInfoCard({
  icon,
  title,
  content,
  gradient,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  gradient: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100">
      <div
        className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center text-white mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-1 text-gray-800">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}