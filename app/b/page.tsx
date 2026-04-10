import Image from "next/image";
import { CalendarDays, Banknote, Store, GraduationCap, ChevronRight, ArrowRight } from "lucide-react";

const APPLY_URL = "https://lin.ee/XXXXXXXX";

const numbers = [
  { value: "週1日〜", label: "最短勤務日数" },
  { value: "1時間〜", label: "最短勤務時間" },
  { value: "600+",   label: "全国店舗数" },
  { value: "¥2,520", label: "60分施術〜" },
];

const reasons = [
  {
    no: "01",
    title: "未経験から\nプロへ",
    body: "最短2日間の無料レッスンで現場デビュー。専任スタッフがマンツーマンでサポートします。",
    icon: GraduationCap,
  },
  {
    no: "02",
    title: "業界最高水準\nの収入",
    body: "60分2,520円〜＋指名料100%。頑張れば頑張るほど収入が増える仕組みです。",
    icon: Banknote,
  },
  {
    no: "03",
    title: "全国どこでも\n自由に働く",
    body: "全国600店舗以上にスマホ一つでエントリー。週1日・1時間〜の完全自由シフト。",
    icon: Store,
  },
  {
    no: "04",
    title: "副業・Wワーク\n大歓迎",
    body: "業務委託だから本業と両立OK。子育て中・転勤族・シニアの方も多数活躍中。",
    icon: CalendarDays,
  },
];

const incomeItems = [
  { label: "未経験", yen: "2,340", max: 60 },
  { label: "経験者",  yen: "2,520", max: 75 },
  { label: "最大",    yen: "3,510", max: 100 },
];

const selectionSteps = ["書類選考", "面談", "レッスン", "契約", "入店"];

const welcomeTags = [
  "シニアの方", "子育て中の方", "Wワークをお考えの方",
  "転勤・遠距離の方", "アパレル経験の方", "復職をお考えの方",
  "デスクワークの方", "営業職・接客業の方", "未経験の方",
];

const requirements = [
  { label: "募集職種", content: "リラクゼーションセラピスト（もみほぐし・足つぼ・ストレッチなど）" },
  { label: "雇用形態", content: "業務委託（個人事業主・副業・Wワーク歓迎）" },
  { label: "収入",     content: "施術60分：未経験2,340円〜／経験者2,520円〜（最大3,510円）＋指名料100%" },
  { label: "入店店舗", content: "全国約600店舗から自由に選択（希望エントリー制）" },
  { label: "入店時間", content: "週1日・1時間〜／希望エントリー制" },
  { label: "福利厚生", items: ["最短2日間の無料レッスン制度", "備品貸与", "副業OK／正社員登用制度あり"] },
];

export default function PageB() {
  return (
    <div className="min-h-screen bg-[#1a1a2e] text-white font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1a1a2e]/95 backdrop-blur border-b border-white/10">
        <div className="max-w-lg mx-auto px-5 h-14 flex items-center justify-between">
          <Image src="/logo.webp" alt="minoriba" width={110} height={18} className="h-6 w-auto brightness-0 invert" />
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="bg-[#e8837a] text-white text-xs font-bold px-4 py-2 rounded-full">
            応募する
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero2.webp" alt="サロン" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e]/60 via-transparent to-[#1a1a2e]" />
        </div>
        <div className="relative max-w-lg mx-auto px-5 pt-16 pb-20 text-center">
          <span className="inline-block border border-[#e8837a] text-[#e8837a] text-xs px-3 py-1 rounded-full mb-4">
            美容・整体・マッサージ専門求人
          </span>
          <h1 className="text-4xl font-black leading-tight mb-4">
            空き時間を<br />
            <span className="text-[#e8837a]">収入</span>に変える
          </h1>
          <p className="text-white/70 text-sm leading-relaxed mb-8">
            週1日・1時間〜。全国600店舗でいつでも自由に働ける<br />新しいセラピスト副業のカタチ。
          </p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-shiny inline-flex items-center gap-2 bg-[#e8837a] text-white font-bold px-8 py-4 rounded-full text-lg shadow-xl shadow-[#e8837a]/30">
            応募・詳細はこちら
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-white/40 text-xs mt-3">※公式LINEに友だち登録していただきます</p>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-[#12122a] py-10 px-5">
        <div className="max-w-lg mx-auto grid grid-cols-4 gap-3">
          {numbers.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-xl font-black text-[#e8837a] leading-none mb-1">{value}</p>
              <p className="text-[10px] text-white/50 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome tags */}
      <section className="bg-[#1a1a2e] py-12 px-5 border-t border-white/10">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Welcome</p>
          <h2 className="text-2xl font-black text-center mb-6">こんな方を歓迎します</h2>
          <div className="flex flex-wrap gap-2 justify-center">
            {welcomeTags.map((t) => (
              <span key={t} className="border border-white/20 text-white/80 text-sm px-4 py-2 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-[#12122a] py-12 px-5">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Why</p>
          <h2 className="text-2xl font-black text-center mb-8">選ばれる4つの理由</h2>
          <div className="grid grid-cols-2 gap-3">
            {reasons.map(({ no, title, body, icon: Icon }) => (
              <div key={no} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#e8837a]/50 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-5 h-5 text-[#e8837a]" strokeWidth={1.5} />
                  <span className="text-xs text-[#e8837a] font-bold">{no}</span>
                </div>
                <h3 className="text-base font-black leading-snug mb-2 whitespace-pre-line">{title}</h3>
                <p className="text-xs text-white/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income */}
      <section className="bg-[#1a1a2e] py-12 px-5 border-t border-white/10">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Income</p>
          <h2 className="text-2xl font-black text-center mb-2">収入イメージ</h2>
          <p className="text-xs text-white/50 text-center mb-8">＋指名料100%が上乗せされます</p>
          <div className="space-y-4 mb-8">
            {incomeItems.map(({ label, yen, max }) => (
              <div key={label}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm text-white/70">{label}</span>
                  <span className="text-xl font-black text-[#e8837a]">¥{yen}<span className="text-sm font-normal text-white/50">円〜/60分</span></span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#e8837a] to-[#f5a89f] rounded-full transition-all" style={{ width: `${max}%` }} />
                </div>
              </div>
            ))}
          </div>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-shiny block w-full bg-[#e8837a] text-white font-bold py-4 rounded-full text-lg text-center shadow-lg shadow-[#e8837a]/30">
            今すぐ応募する
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#12122a] py-12 px-5">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Process</p>
          <h2 className="text-2xl font-black text-center mb-8">選考の流れ</h2>
          <div className="flex items-start justify-between">
            {selectionSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border-2 border-[#e8837a] flex items-center justify-center mb-2">
                    <span className="text-[#e8837a] text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-xs font-bold text-white/80 text-center leading-tight">{step}</p>
                </div>
                {i < selectionSteps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-[#e8837a]/50 mb-4 mx-0.5 flex-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="bg-[#1a1a2e] py-12 px-5 border-t border-white/10">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Requirements</p>
          <h2 className="text-2xl font-black text-center mb-8">募集要項</h2>
          <div className="divide-y divide-white/10">
            {requirements.map((req) => (
              <div key={req.label} className="py-4 grid grid-cols-3 gap-3">
                <dt className="text-xs font-bold text-[#e8837a]">{req.label}</dt>
                <dd className="text-sm text-white/70 col-span-2">
                  {req.content ?? (
                    <ul className="space-y-1">{req.items?.map((item) => <li key={item}>・{item}</li>)}</ul>
                  )}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e8837a] py-14 px-5">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-2xl font-black text-white mb-2">まずは詳細を見てみる</h3>
          <p className="text-white/80 text-sm mb-6">公式LINEで求人情報をお届けします</p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="block w-full bg-white text-[#e8837a] font-black py-4 rounded-full text-lg shadow-lg mb-3">
            応募／詳細の確認はこちら
          </a>
          <p className="text-white/70 text-xs mb-4">※公式LINEに友だち登録していただきます。</p>
          <a href="https://minoriba.com/job" className="text-white/70 text-sm underline">他の求人も探す &gt;&gt;</a>
        </div>
      </section>

      <footer className="bg-[#12122a] py-8 px-5 text-center">
        <Image src="/logo.webp" alt="minoriba" width={100} height={17} className="h-6 w-auto mx-auto mb-4 brightness-0 invert" />
        <p className="text-xs text-white/30">© 2024 minoriba. All rights reserved.</p>
      </footer>
    </div>
  );
}
