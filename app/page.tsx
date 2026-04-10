import Image from "next/image";
import {
  CalendarDays,
  Clock,
  MapPin,
  Store,
  GraduationCap,
  Banknote,
  Star,
  ChevronRight,
} from "lucide-react";
import Header from "./components/Header";
import StickyCtaBar from "./components/StickyCtaBar";

const APPLY_URL = "https://lin.ee/XXXXXXXX"; // 後で差し替え

// ---- キースタット ----
const stats = [
  { icon: CalendarDays, value: "週1日〜", label: "自由なシフト" },
  { icon: Clock,        value: "1時間〜", label: "短時間OK" },
  { icon: Store,        value: "600店舗", label: "全国展開" },
  { icon: Banknote,     value: "2,520円〜", label: "60分施術" },
];

// ---- おすすめポイント ----
const points = [
  { icon: CalendarDays,   id: "01", title: "週1日・1時間〜OK",        desc: "空いた時間だけ働けます" },
  { icon: Banknote,       id: "02", title: "60分 2,520円〜＋指名料全額", desc: "高収入・指名料100％" },
  { icon: Clock,          id: "03", title: "希望エントリー制",          desc: "働きたい時に申し込むだけ" },
  { icon: MapPin,         id: "04", title: "日程・店舗を自分で選択",    desc: "ライフスタイルに合わせて" },
  { icon: Store,          id: "05", title: "全国約600店舗",            desc: "どこでもエントリー可能" },
  { icon: GraduationCap,  id: "06", title: "最短2日間の無料レッスン",   desc: "未経験でもすぐデビュー" },
];

// ---- 収入ビジュアル ----
const incomeRows = [
  { label: "未経験スタート", amount: "2,340", unit: "円〜 / 60分" },
  { label: "経験者",         amount: "2,520", unit: "円〜 / 60分" },
  { label: "トップクラス",   amount: "3,510", unit: "円〜 / 60分" },
];

// ---- 選考プロセス ----
const selectionSteps = ["書類選考", "面談", "レッスン", "契約", "入店"];

// ---- 募集要項テーブル ----
const requirements = [
  { label: "募集職種", content: "リラクゼーションセラピスト（もみほぐし・足つぼ・ストレッチなど）" },
  { label: "職務内容", items: ["リラクゼーション施術（ボディケア・リフレクソロジー等）", "お客様対応・受付・清掃など店舗業務全般"] },
  { label: "雇用形態", content: "業務委託（個人事業主・副業・Wワーク歓迎）" },
  { label: "入店店舗", content: "全国約600店舗から自由に選択（希望エントリー制）" },
  { label: "入店時間", content: "週1日・1時間〜／希望エントリー制（自分で日程・時間を決定）" },
  { label: "休日・休暇", content: "希望エントリー制" },
  { label: "福利厚生", items: ["指名料100％収入に（200円〜自由設定）", "最短2日間の無料レッスン制度", "備品貸与、短期売上精算", "デジタル受付＆キャッシュレス対応", "副業OK／正社員登用制度あり（トレーナー職等）"] },
];

export default function Page() {
  return (
    <>
      <Header applyUrl={APPLY_URL} />

      <main>
        {/* ---- Hero ---- */}
        <section className="bg-[#fdf0ee]">
          <div className="max-w-lg mx-auto px-5 pt-8 pb-10 text-center">
            <p className="text-xs text-[#4c6072] mb-2 tracking-wide">
              美容エステ・整体マッサージ業界専門の求人紹介
            </p>
            <h1 className="text-[1.75rem] font-bold text-[#e8837a] mb-5 leading-snug">
              minoribaジョブ
            </h1>

            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#f5dbd8]">
                <Image src="/hero1.webp" alt="セラピストイメージ" width={320} height={320} className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#f5dbd8]">
                <Image src="/hero2.webp" alt="サロンイメージ" width={320} height={320} className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-white rounded-2xl px-5 py-6 shadow-sm text-left mb-6">
              <span className="inline-block bg-[#e8837a] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                おすすめ
              </span>
              <h2 className="text-xl font-bold text-[#34414e] leading-snug mb-3">
                【週1日・1時間〜OK】<br />自由に働けるセラピスト副業！
              </h2>
              <p className="text-sm text-[#4c6072] leading-relaxed">
                あなたの&ldquo;空いている時間&rdquo;が、しっかりとした収入に。未経験でも2日間のレッスンでデビュー可能。スマホひとつで全国600店舗に自由にエントリーできます。
              </p>
            </div>

            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
              className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg transition-colors shadow-lg">
              応募・詳細はこちら
            </a>
            <p className="text-xs text-gray-400 mt-2">※公式LINEに友だち登録していただきます。</p>
          </div>
        </section>

        {/* ---- キースタット ---- */}
        <section className="bg-white py-10 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Numbers</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-6">選ばれる理由、数字で見る</h2>
            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="bg-[#fdf0ee] rounded-2xl p-5 text-center">
                  <Icon className="w-7 h-7 text-[#e8837a] mx-auto mb-2" strokeWidth={1.5} />
                  <p className="text-2xl font-bold text-[#34414e] leading-none mb-1">{value}</p>
                  <p className="text-xs text-[#4c6072]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- おすすめポイント ---- */}
        <section className="bg-[#fdf0ee] py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Points</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-6">おすすめポイント</h2>
            <div className="grid grid-cols-2 gap-3">
              {points.map(({ icon: Icon, id, title, desc }) => (
                <div key={id} className="bg-white rounded-2xl p-4 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-[#fdf0ee] flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-[#e8837a]" strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-bold text-[#e8837a] uppercase tracking-wider mb-1">point {id}</span>
                  <p className="text-sm font-bold text-[#34414e] leading-snug mb-1">{title}</p>
                  <p className="text-xs text-[#4c6072]">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- 収入ビジュアル ---- */}
        <section className="bg-white py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Income</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-2">収入イメージ</h2>
            <p className="text-xs text-[#4c6072] text-center mb-6">指名料は100%収入に（自由設定OK）</p>

            <div className="space-y-3 mb-6">
              {incomeRows.map(({ label, amount, unit }, i) => (
                <div key={label} className="flex items-center gap-4 bg-[#fdf0ee] rounded-2xl px-5 py-4">
                  <div className="flex-none">
                    <Star
                      className="w-5 h-5 text-[#e8837a]"
                      fill={i === 2 ? "#e8837a" : "none"}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-[#4c6072] mb-0.5">{label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-[#e8837a]">{amount}</span>
                      <span className="text-xs text-[#4c6072]">{unit}</span>
                    </div>
                  </div>
                  {/* バー */}
                  <div className="flex-none w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#e8837a] rounded-full"
                      style={{ width: i === 0 ? "60%" : i === 1 ? "75%" : "100%" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
              className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-base text-center transition-colors shadow-lg">
              今すぐ応募する
            </a>
          </div>
        </section>

        {/* ---- 選考プロセス ---- */}
        <section className="bg-[#fdf0ee] py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Process</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-8">選考の流れ</h2>
            <div className="flex items-start justify-between">
              {selectionSteps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e8837a] flex items-center justify-center mb-2">
                      <span className="text-white text-xs font-bold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="text-xs font-bold text-[#34414e] text-center leading-tight">{step}</p>
                  </div>
                  {i < selectionSteps.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-[#e8837a] mb-4 mx-0.5 flex-none" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- 募集要項 ---- */}
        <section id="requirements" className="bg-white py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Requirements</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-8">募集要項</h2>
            <div className="bg-[#fdf0ee] rounded-2xl overflow-hidden divide-y divide-[#f5dbd8]">
              {requirements.map((req) => (
                <div key={req.label} className="px-5 py-4 grid grid-cols-3 gap-3">
                  <dt className="text-xs font-bold text-[#e8837a] col-span-1 pt-0.5">{req.label}</dt>
                  <dd className="text-sm text-[#34414e] col-span-2">
                    {req.content ?? (
                      <ul className="space-y-1">
                        {req.items?.map((item) => <li key={item}>・{item}</li>)}
                      </ul>
                    )}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Apply CTA ---- */}
        <section className="bg-[#1f2d32] py-14 px-5">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">entry</p>
            <h3 className="text-xl font-bold text-white mb-2">応募・詳細の確認はこちら</h3>
            <p className="text-sm text-gray-400 mb-6">
              他の求人も見たい方も、まずはお気軽にご登録ください
            </p>
            <a href={APPLY_URL} target="_blank" rel="noopener noreferrer"
              className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg transition-colors shadow-lg mb-3">
              応募／詳細の確認はこちら
            </a>
            <p className="text-xs text-gray-500 mb-6">※公式LINEに友だち登録していただきます。</p>
            <a href="https://minoriba.com/job" className="text-sm text-[#e8837a] hover:underline">
              他の求人も探す &gt;&gt;
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1f2d32] border-t border-white/10 py-8 px-5 text-center">
        <Image src="/logo.webp" alt="minoriba" width={100} height={17} className="h-6 w-auto mx-auto mb-4 brightness-0 invert" />
        <p className="text-xs text-gray-500">© 2024 minoriba. All rights reserved.</p>
      </footer>

      <StickyCtaBar applyUrl={APPLY_URL} />
    </>
  );
}
