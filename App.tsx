
import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  UserCheck, 
  ShoppingCart, 
  CreditCard,
  ArrowRight
} from 'lucide-react';
import { TESTIMONIALS, FEATURES, STEPS, FAQS } from './constants';
import { AudienceType } from './types';

const App: React.FC = () => {
  const [activeAudience, setActiveAudience] = useState<AudienceType>('인플루언서');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const audiences: AudienceType[] = ['인플루언서', '스타트업', '부업', '유튜버', '작가'];

  /** 
   * 리틀리 캐릭터형 공식 로고 URL
   */
  const LOGO_URL = "https://littly.io/static/media/logo_black.7f48b1d9.svg";
  
  /**
   * 셀러 신청 페이지 URL
   */
  const REGISTER_URL = "https://app.litt.ly/register";

  /**
   * 히어로 섹션 배경 이미지 URL (사용자가 제공한 이미지와 가장 유사한 고화질 소스)
   */
  const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-5 py-4 flex items-center justify-between">
        <div className="flex items-center h-9">
          <img 
            src={LOGO_URL} 
            alt="littly logo" 
            className="h-full w-auto object-contain" 
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = '<span class="text-2xl font-black tracking-tighter text-slate-900">littly</span>';
              }
            }}
          />
        </div>
        <div className="flex items-center gap-4">
          <a 
            href={REGISTER_URL}
            className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-yellow-500 transition-colors shadow-sm inline-block"
          >
            지금 셀러 신청하기
          </a>
        </div>
      </nav>

      <main className="max-w-xl mx-auto pb-32">
        {/* Hero Section */}
        <section className="px-5 py-12 text-center">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 mb-4">
            나의 영감을<br />콘텐츠로 판매하세요
          </h1>
          <p className="text-slate-500 text-lg mb-8 font-medium">
            인증 후 바로 판매 시작 · 수수료 2%대
          </p>
          <a 
            href={REGISTER_URL}
            className="w-full bg-yellow-400 text-black text-lg font-extrabold py-4 rounded-2xl shadow-lg shadow-yellow-200 hover:scale-[1.02] active:scale-95 transition-all mb-12 flex items-center justify-center"
          >
            지금 셀러 신청하기
          </a>
          
          {/* Updated Hero Card with User Provided Image Concept */}
          <div className="relative group px-2">
            <div className="absolute -inset-2 bg-slate-100 rounded-[2.8rem] blur-xl opacity-50"></div>
            <div 
              className="relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white flex flex-col justify-end p-8 text-left bg-slate-200"
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0) 80%), url(${HERO_IMAGE_URL})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full shadow-[0_0_8px_rgba(250,204,21,0.8)]"></div>
                <span className="text-white text-[11px] font-bold tracking-[0.15em] uppercase opacity-90">INSPIRED SPACE</span>
              </div>
              <h3 className="text-white text-2xl font-black leading-[1.3] tracking-tight">
                당신의 가장 개인적인 영감이<br />
                가장 가치 있는 상품이 됩니다
              </h3>
            </div>
          </div>
        </section>

        {/* Audience Section */}
        <section className="py-12">
          <h2 className="px-5 text-xl font-bold mb-6">누구나 판매자가 될 수 있습니다</h2>
          <div className="flex gap-2 px-5 overflow-x-auto hide-scrollbar pb-2">
            {audiences.map((aud) => (
              <button
                key={aud}
                onClick={() => setActiveAudience(aud)}
                className={`flex-shrink-0 px-6 py-2.5 rounded-full font-bold transition-all ${
                  activeAudience === aud 
                  ? "bg-yellow-400 text-black shadow-md shadow-yellow-100" 
                  : "bg-slate-100 text-slate-500"
                }`}
              >
                {aud}
              </button>
            ))}
          </div>

          <div className="mx-5 mt-6 p-6 rounded-3xl bg-slate-50 border border-slate-100">
            <p className="text-yellow-600 text-sm font-bold mb-3">{activeAudience}를 위한 혜택</p>
            <h3 className="text-xl font-black mb-6 leading-relaxed">
              팬들과 더 깊게 소통하고 수익을 창출하세요
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">프로필 링크 하나로 모든 SNS 통합</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">디지털 굿즈, 상담권 즉시 판매 가능</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-5 py-12">
          <h2 className="text-xl font-bold mb-8">리틀리 사용자 후기</h2>
          <div className="grid grid-cols-2 gap-4">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="relative aspect-square rounded-3xl overflow-hidden group shadow-sm">
                <img 
                  src={t.image} 
                  alt="User" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 flex flex-col justify-end">
                  <p className="text-white text-xs font-bold leading-relaxed">
                    {t.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="px-5 py-20 bg-slate-50 rounded-t-[3rem] mt-12">
          <h2 className="text-2xl font-black mb-10 text-center">왜 리틀리인가요?</h2>
          <div className="space-y-4">
            {FEATURES.map((f) => (
              <div key={f.number} className="flex items-center gap-5 p-6 bg-white rounded-3xl shadow-sm border border-slate-100">
                <div className="w-12 h-12 bg-yellow-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-black text-black">{f.number}</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">{f.title}</h4>
                  <p className="text-slate-500 text-sm font-medium">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="px-5 py-20 bg-white">
          <h2 className="text-2xl font-black mb-12">3단계면 시작할 수 있어요</h2>
          <div className="space-y-16 relative before:absolute before:left-7 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-100">
            {STEPS.map((step, idx) => (
              <div key={idx} className="relative pl-16">
                <div className="absolute left-0 top-0 w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center z-10 shadow-lg">
                  {step.icon === 'UserCheck' && <UserCheck className="w-6 h-6 text-yellow-400" />}
                  {step.icon === 'ShoppingCart' && <ShoppingCart className="w-6 h-6 text-yellow-400" />}
                  {step.icon === 'CreditCard' && <CreditCard className="w-6 h-6 text-yellow-400" />}
                </div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">{step.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-12">
          <h2 className="text-2xl font-black mb-8">자주 묻는 질문</h2>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border-b border-slate-100 last:border-0">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-lg font-bold text-slate-800">{faq.question}</span>
                  {openFaq === idx ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                {openFaq === idx && (
                  <div className="pb-5 text-slate-500 font-medium leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Card */}
        <section className="px-5 py-16">
          <div className="bg-slate-900 rounded-[3rem] p-10 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl font-black text-white mb-4 leading-tight">
                오늘부터,<br />링크 하나로 수익화하세요
              </h2>
              <p className="text-slate-400 mb-10 font-medium">가장 쉽고 빠른 크리에이터 경제의 시작</p>
              <a 
                href={REGISTER_URL}
                className="w-full bg-yellow-400 text-black text-lg font-extrabold py-4 rounded-2xl hover:bg-yellow-500 transition-all flex items-center justify-center gap-2"
              >
                지금 무료로 시작하기
                <ArrowRight className="w-5 h-5" />
              </a>
              <div className="mt-12 opacity-90 transition-opacity hover:opacity-100 h-8">
                <img 
                  src={LOGO_URL} 
                  alt="littly footer logo" 
                  className="h-full w-auto invert brightness-0 grayscale" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky Footer */}
      <footer className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-100 z-50 flex justify-center">
        <div className="max-w-xl w-full">
          <a 
            href={REGISTER_URL}
            className="w-full bg-yellow-400 text-black text-lg font-extrabold py-4 rounded-2xl shadow-xl shadow-yellow-100 active:scale-[0.98] transition-all flex items-center justify-center"
          >
            지금 셀러 신청하기
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
