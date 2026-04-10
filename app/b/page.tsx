import Image from "next/image";
import { CalendarDays, Banknote, Store, GraduationCap, ChevronRight, ArrowRight } from "lucide-react";

const APPLY_URL = "https://lin.ee/XXXXXXXX";

const numbers = [
  { value: "週1日〜", label: "最短勤務日数" },
  { value: "1時間〜", label: "最短勤務時間" },
  { value: "600+",    label: "全国店舗数" },
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
    <div className="min-h-screen bg-white text-[#34414e] font-sans">

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-lg mx-auto px-5 h-14 flex items-center justify-between">
          <Image src="/logo.webp" alt="minoriba" width={110} height={18} className="h-6 w-auto" />
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#f06a6a] to-[#e8837a] text-white text-xs font-bold px-4 py-2 rounded-full shadow-sm">
            応募する
          </a>
        </div>
      </header>

      {/* Hero — light gradient background like SHElikes */}
      <section className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #e8f4f8 0%, #fdf0ee 50%, #fce4f0 100%)" }}>
        <div className="max-w-lg mx-auto px-5 pt-10 pb-6 text-center">
          <span className="inline-block bg-white/80 text-[#f06a6a] text-xs font-bold px-3 py-1 rounded-full mb-4 shadow-sm">
            美容・整体・マッサージ専門求人
          </span>
          <h1 className="text-3xl font-black leading-tight mb-4 text-[#34414e]">
            私らしい働き方を<br />
            <span className="text-[#f06a6a]">セラピスト副業</span>で叶える
          </h1>
          <p className="text-sm text-[#4c6072] leading-relaxed mb-6">
            週1日・1時間〜。全国600店舗でいつでも自由に働ける<br />新しいセラピスト副業のカタチ。
          </p>

          {/* Hero image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] mb-6 shadow-lg">
            <Image src="/hero1.webp" alt="セラピスト" fill className="object-cover object-top" priority />
          </div>

          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-shiny inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#f06a6a] to-[#e8837a] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg shadow-[#f06a6a]/30">
            応募・詳細はこちら
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs text-gray-400 mt-2">※公式LINEに友だち登録していただきます</p>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-white py-8 px-5 border-b border-gray-100">
        <div className="max-w-lg mx-auto grid grid-cols-4 gap-3">
          {numbers.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-black text-[#f06a6a] leading-none mb-1">{value}</p>
              <p className="text-[10px] text-gray-400 leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome tags */}
      <section className="py-12 px-5" style={{ background: "linear-gradient(180deg, #fff 0%, #fdf0ee 100%)" }}>
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#f06a6a] font-bold tracking-widest uppercase text-center mb-2">Welcome</p>
          <h2 className="text-2xl font-black text-center mb-2 text-[#34414e]">こんな方を歓迎します</h2>
          <p className="text-xs text-gray-400 text-center mb-6">どんなバックグラウンドの方でも大歓迎です</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {welcomeTags.map((t) => (
              <span key={t} className="bg-white border border-[#f06a6a]/20 text-[#34414e] text-sm px-4 py-2 rounded-full shadow-sm">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons */}
      <section className="bg-white py-12 px-5">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#f06a6a] font-bold tracking-widest uppercase text-center mb-2">Why</p>
          <h2 className="text-2xl font-black text-center mb-8 text-[#34414e]">選ばれる4つの理由</h2>
          <div className="grid grid-cols-2 gap-3">
            {reasons.map(({ no, title, body, icon: Icon }) => (
              <div key={no} className="bg-[#fdf0ee] rounded-2xl p-5 hover:shadow-md transition-shadow border border-[#f5dbd8]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <Icon className="w-4 h-4 text-[#f06a6a]" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs text-[#f06a6a] font-bold">{no}</span>
                </div>
                <h3 className="text-base font-black leading-snug mb-2 whitespace-pre-line text-[#34414e]">{title}</h3>
                <p className="text-xs text-[#4c6072] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income */}
      <section className="py-12 px-5" style={{ background: "linear-gradient(180deg, #fdf0ee 0%, #fce4f0 100%)" }}>
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#f06a6a] font-bold tracking-widest uppercase text-center mb-2">Income</p>
          <h2 className="text-2xl font-black text-center mb-2 text-[#34414e]">収入イメージ</h2>
          <p className="text-xs text-gray-400 text-center mb-8">＋指名料100%が上乗せされます</p>
          <div className="space-y-4 mb-8">
            {incomeItems.map(({ label, yen, max }) => (
              <div key={label} className="bg-white rounded-2xl px-5 py-4 shadow-sm">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm text-[#4c6072]">{label}</span>
                  <span className="text-xl font-black text-[#f06a6a]">
                    {yen}<span className="text-sm font-normal text-gray-400">円〜/60分</span>
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#f06a6a] to-[#e8837a] rounded-full" style={{ width: `${max}%` }} />
                </div>
              </div>
            ))}
          </div>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-shiny block w-full bg-gradient-to-r from-[#f06a6a] to-[#e8837a] text-white font-bold py-4 rounded-full text-lg text-center shadow-lg shadow-[#f06a6a]/30">
            今すぐ応募する
          </a>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-12 px-5">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#f06a6a] font-bold tracking-widest uppercase text-center mb-2">Process</p>
          <h2 className="text-2xl font-black text-center mb-8 text-[#34414e]">選考の流れ</h2>
          <div className="flex items-start justify-between">
            {selectionSteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f06a6a] to-[#e8837a] flex items-center justify-center mb-2 shadow-sm">
                    <span className="text-white text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p className="text-xs font-bold text-[#34414e] text-center leading-tight">{step}</p>
                </div>
                {i < selectionSteps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-[#f06a6a]/50 mb-4 mx-0.5 flex-none" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="bg-[#fdf0ee] py-12 px-5">
        <div className="max-w-lg mx-auto">
          <p className="text-xs text-[#f06a6a] font-bold tracking-widest uppercase text-center mb-2">Requirements</p>
          <h2 className="text-2xl font-black text-center mb-8 text-[#34414e]">募集要項</h2>
          <div className="bg-white rounded-2xl overflow-hidden divide-y divide-gray-100 shadow-sm">
            {requirements.map((req) => (
              <div key={req.label} className="py-4 px-5 grid grid-cols-3 gap-3">
                <dt className="text-xs font-bold text-[#f06a6a]">{req.label}</dt>
                <dd className="text-sm text-[#34414e] col-span-2">
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
      <section className="py-14 px-5" style={{ background: "linear-gradient(135deg, #f06a6a 0%, #e8837a 100%)" }}>
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-2xl font-black text-white mb-2">まずは詳細を見てみる</h3>
          <p className="text-white/80 text-sm mb-6">公式LINEで求人情報をお届けします</p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="block w-full bg-white text-[#f06a6a] font-black py-4 rounded-full text-lg shadow-lg mb-3">
            応募／詳細の確認はこちら
          </a>
          <p className="text-white/70 text-xs mb-4">※公式LINEに友だち登録していただきます。</p>
          <a href="https://minoriba.com/job" className="text-white/70 text-sm underline">他の求人も探す &gt;&gt;</a>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-8 px-5 text-center">
        <Image src="/logo.webp" alt="minoriba" width={100} height={17} className="h-6 w-auto mx-auto mb-4" />
        <p className="text-xs text-gray-300">© 2024 minoriba. All rights reserved.</p>
      </footer>
    </div>
  );
}
