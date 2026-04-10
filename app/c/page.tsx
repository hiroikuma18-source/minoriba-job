import Image from "next/image";
import { Check, ChevronRight } from "lucide-react";

const APPLY_URL = "https://lin.ee/XXXXXXXX";

const highlights = [
  { num: "週1日〜",  sub: "自由な日程" },
  { num: "1時間〜",  sub: "短時間OK" },
  { num: "600店舗",  sub: "全国展開" },
  { num: "指名料\n100%", sub: "全額還元" },
];

const checkPoints = [
  "未経験でも最短2日間でデビュー可能",
  "施術60分 2,520円〜（最大3,510円）",
  "指名料は100%あなたの収入に",
  "週1日・1時間〜の完全自由シフト",
  "全国600店舗以上でエントリー可能",
  "副業・Wワーク・復職 大歓迎",
];

const incomeSteps = [
  {
    step: "1",
    title: "施術収入",
    desc: "60分 未経験2,340円〜 / 経験者2,520円〜（最大3,510円）",
  },
  {
    step: "2",
    title: "＋ 指名料 100%",
    desc: "200円〜自由設定。指名が増えるほど収入UP",
  },
  {
    step: "3",
    title: "＋ 物販収入など",
    desc: "店舗での物販など追加収入源も",
  },
];

const selectionSteps = ["書類選考", "面談", "レッスン", "契約", "入店"];

const welcomeTags = [
  "シニアの方", "子育て中の方", "Wワークをお考えの方", "転勤・遠距離の方",
  "アパレル経験の方", "復職をお考えの方", "デスクワークの方", "未経験の方",
];

const requirements = [
  { label: "募集職種", content: "リラクゼーションセラピスト（もみほぐし・足つぼ・ストレッチなど）" },
  { label: "雇用形態", content: "業務委託（個人事業主・副業・Wワーク歓迎）" },
  { label: "収入",     content: "施術60分：未経験2,340円〜／経験者2,520円〜（最大3,510円）＋指名料100%" },
  { label: "入店店舗", content: "全国約600店舗から自由に選択（希望エントリー制）" },
  { label: "入店時間", content: "週1日・1時間〜／希望エントリー制" },
  { label: "休日・休暇", content: "希望エントリー制" },
  { label: "福利厚生", items: ["最短2日間の無料レッスン制度", "備品貸与・短期売上精算", "副業OK／正社員登用制度あり"] },
];

function Divider() {
  return <div className="w-12 h-0.5 bg-[#e8837a] mx-auto my-8" />;
}

export default function PageC() {
  return (
    <div className="min-h-screen bg-white text-[#34414e] font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-lg mx-auto px-5 h-14 flex items-center justify-between">
          <Image src="/logo.webp" alt="minoriba" width={110} height={18} className="h-6 w-auto" />
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="border border-[#e8837a] text-[#e8837a] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#fdf0ee] transition-colors">
            応募する
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-gray-100">
        <div className="max-w-lg mx-auto px-5 py-12 text-center">
          <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">minoriba job</p>
          <h1 className="text-3xl font-black leading-tight mb-4 text-[#34414e]">
            あなたの時間を<br />
            <span className="text-[#e8837a]">価値</span>に変えよう
          </h1>
          <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-xs mx-auto">
            美容・整体・マッサージ業界専門の求人紹介。
            週1日・1時間〜の自由な働き方でしっかり稼げます。
          </p>

          {/* Hero image */}
          <div className="relative rounded-3xl overflow-hidden aspect-[3/2] mb-8 bg-gray-100">
            <Image src="/hero1.webp" alt="セラピスト" fill className="object-cover object-top" priority />
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-4 gap-2 mb-8">
            {highlights.map(({ num, sub }) => (
              <div key={sub} className="bg-[#fdf0ee] rounded-2xl py-4 px-1 text-center">
                <p className="text-base font-black text-[#e8837a] leading-tight whitespace-pre-line mb-1">{num}</p>
                <p className="text-[9px] text-gray-500">{sub}</p>
              </div>
            ))}
          </div>

          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg transition-colors">
            応募・詳細はこちら
          </a>
          <p className="text-xs text-gray-400 mt-2">※公式LINEに友だち登録していただきます。</p>
        </div>
      </section>

      {/* Check points */}
      <section className="max-w-lg mx-auto px-5 py-12">
        <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Features</p>
        <h2 className="text-xl font-black text-center mb-8">このお仕事の特徴</h2>
        <ul className="space-y-3">
          {checkPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <div className="flex-none w-5 h-5 rounded-full bg-[#e8837a] flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-[#34414e]">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <Divider />

      {/* こんな方歓迎 */}
      <section className="max-w-lg mx-auto px-5 py-4 pb-12">
        <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Welcome</p>
        <h2 className="text-xl font-black text-center mb-2">こんな方を歓迎します</h2>
        <p className="text-xs text-gray-400 text-center mb-6">どんなバックグラウンドの方でもご応募いただけます</p>
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {welcomeTags.map((t) => (
            <span key={t} className="border border-[#e8837a]/30 text-[#34414e] text-sm px-4 py-2 rounded-full bg-[#fdf0ee]">
              {t}
            </span>
          ))}
        </div>
        <div className="border border-[#e8837a]/20 rounded-2xl p-5 text-center bg-[#fdf0ee]">
          <p className="text-sm font-bold text-[#e8837a] mb-1">復職者も大歓迎！</p>
          <p className="text-sm text-gray-500 leading-relaxed">
            経験者・ブランクのある方も安心してご応募ください
          </p>
        </div>
      </section>

      <Divider />

      {/* 収入の仕組み */}
      <section className="max-w-lg mx-auto px-5 py-4 pb-12">
        <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Income</p>
        <h2 className="text-xl font-black text-center mb-2">収入の仕組み</h2>
        <p className="text-xs text-gray-400 text-center mb-8">頑張りがそのまま収入に反映されます</p>

        <div className="space-y-2">
          {incomeSteps.map(({ step, title, desc }, i) => (
            <div key={step}>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fdf0ee]">
                <div className="flex-none w-8 h-8 rounded-full bg-[#e8837a] flex items-center justify-center">
                  <span className="text-white text-xs font-bold">{step}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#34414e] mb-0.5">{title}</p>
                  <p className="text-xs text-gray-500">{desc}</p>
                </div>
              </div>
              {i < incomeSteps.length - 1 && (
                <div className="flex justify-center py-1">
                  <div className="w-0.5 h-5 bg-[#e8837a]/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-4 bg-[#e8837a] rounded-2xl p-5 text-center text-white">
          <p className="text-sm opacity-80 mb-1">合計</p>
          <p className="text-xl font-black">セラピストの収入UP！</p>
        </div>

        <div className="mt-6">
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg text-center transition-colors">
            今すぐ応募する
          </a>
        </div>
      </section>

      <Divider />

      {/* 選考の流れ */}
      <section className="max-w-lg mx-auto px-5 py-4 pb-12">
        <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Process</p>
        <h2 className="text-xl font-black text-center mb-8">選考の流れ</h2>
        <div className="space-y-0">
          {selectionSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full border-2 border-[#e8837a] flex items-center justify-center bg-white z-10">
                  <span className="text-[#e8837a] text-xs font-bold">{i + 1}</span>
                </div>
                {i < selectionSteps.length - 1 && <div className="w-0.5 h-8 bg-[#e8837a]/20" />}
              </div>
              <p className="text-sm font-bold text-[#34414e] pb-8">{step}</p>
              {i < selectionSteps.length - 1 && (
                <ChevronRight className="w-0 h-0" />
              )}
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* 募集要項 */}
      <section id="requirements" className="max-w-lg mx-auto px-5 py-4 pb-12">
        <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Requirements</p>
        <h2 className="text-xl font-black text-center mb-8">募集要項</h2>
        <div className="divide-y divide-gray-100">
          {requirements.map((req) => (
            <div key={req.label} className="py-4 grid grid-cols-3 gap-3">
              <dt className="text-xs font-bold text-[#e8837a]">{req.label}</dt>
              <dd className="text-sm text-[#34414e] col-span-2">
                {req.content ?? (
                  <ul className="space-y-1">{req.items?.map((item) => <li key={item}>・{item}</li>)}</ul>
                )}
              </dd>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fdf0ee] border-t border-[#f5dbd8] py-14 px-5">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs text-[#e8837a] uppercase tracking-widest mb-3">entry</p>
          <h3 className="text-xl font-black text-[#34414e] mb-2">応募・詳細の確認はこちら</h3>
          <p className="text-sm text-gray-500 mb-6">他の求人も見たい方も、まずはご登録ください</p>
          <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
            className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg text-center transition-colors shadow-md mb-3">
            応募／詳細の確認はこちら
          </a>
          <p className="text-xs text-gray-400 mb-4">※公式LINEに友だち登録していただきます。</p>
          <a href="https://minoriba.com/job" className="text-sm text-[#e8837a] hover:underline">他の求人も探す &gt;&gt;</a>
        </div>
      </section>

      <footer className="bg-white border-t border-gray-100 py-8 px-5 text-center">
        <Image src="/logo.webp" alt="minoriba" width={100} height={17} className="h-6 w-auto mx-auto mb-4" />
        <p className="text-xs text-gray-300">© 2024 minoriba. All rights reserved.</p>
      </footer>
    </div>
  );
}
