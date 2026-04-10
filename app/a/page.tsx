import Image from "next/image";
import {
  CalendarDays,
  Clock,
  MapPin,
  Store,
  GraduationCap,
  Banknote,
  ChevronRight,
  ShieldCheck,
  Trophy,
  Smile,
  Plus,
  ArrowDown,
} from "lucide-react";
import Header from "../components/Header";
import StickyCtaBar from "../components/StickyCtaBar";

const APPLY_URL = "https://lin.ee/XXXXXXXX"; // 後で差し替え

const badges = [
  { icon: Trophy,      label: "業界最高水準", sub: "の収入" },
  { icon: Store,       label: "全国600店舗", sub: "以上展開" },
  { icon: ShieldCheck, label: "未経験でも",   sub: "2日でデビュー" },
  { icon: Smile,       label: "指名料100%",  sub: "セラピストへ" },
];

const values = [
  {
    number: "01",
    tag: "安心のサポート",
    title: "未経験でも\n2日間で\nデビューできます",
    body: "一生ものの専門スキルが身につく充実したレッスン制度。未経験からでも最短2日間の無料トレーニングで現場デビューが可能です。専任スタッフがしっかりサポートします。",
    image: "/hero1.webp",
  },
  {
    number: "02",
    tag: "業界最高水準の収入",
    title: "自由な働き方で\nしっかり稼げる",
    body: "60分施術で2,520円〜＋指名料100%があなたの収入に。週1日・1時間〜のスキマ時間で、自分のペースで収入を伸ばせます。副業・Wワーク大歓迎。",
    image: "/hero2.webp",
  },
  {
    number: "03",
    tag: "自由なワークスタイル",
    title: "全国600店舗\nどこでも\n自由にエントリー",
    body: "スマホひとつで希望の日時・店舗にエントリー。全国約600店舗が対象なので、引越しや旅行先でも働けます。あなたのライフスタイルに合わせた新しい働き方です。",
    image: "/hero1.webp",
  },
];

const welcomeGroups = [
  "シニアの方",
  "デスクワークの方",
  "転勤・遠距離の方",
  "服飾関係の方",
  "アパレル経験の方",
  "子育て中の方",
  "Wワークをお考えの方",
  "コンビニ経験の方",
  "営業職・接客業の方",
  "業務職・管理職の方",
  "瑜伽・ピラティスの方",
  "復職をお考えの方",
];

const points = [
  { icon: CalendarDays,  id: "01", title: "週1日・1時間〜OK",           desc: "空いた時間だけ働けます" },
  { icon: Banknote,      id: "02", title: "60分 2,520円〜＋指名料全額", desc: "高収入・指名料100％" },
  { icon: Clock,         id: "03", title: "希望エントリー制",            desc: "働きたい時に申し込むだけ" },
  { icon: MapPin,        id: "04", title: "日程・店舗を自分で選択",      desc: "ライフスタイルに合わせて" },
  { icon: Store,         id: "05", title: "全国約600店舗",              desc: "どこでもエントリー可能" },
  { icon: GraduationCap, id: "06", title: "最短2日間の無料レッスン",     desc: "未経験でもすぐデビュー" },
];

const selectionSteps = ["書類選考", "面談", "レッスン", "契約", "入店"];

const requirements = [
  { label: "募集職種", content: "リラクゼーションセラピスト（もみほぐし・足つぼ・ストレッチなど）" },
  { label: "職務内容", items: ["リラクゼーション施術（ボディケア・リフレクソロジー等）", "お客様対応・受付・清掃など店舗業務全般"] },
  { label: "雇用形態", content: "業務委託（個人事業主・副業・Wワーク歓迎）" },
  { label: "入店店舗", content: "全国約600店舗から自由に選択（希望エントリー制）" },
  { label: "入店時間", content: "週1日・1時間〜／希望エントリー制（自分で日程・時間を決定）" },
  { label: "休日・休暇", content: "希望エントリー制" },
  { label: "福利厚生", items: ["指名料100％収入に（200円〜自由設定）", "最短2日間の無料レッスン制度", "備品貸与、短期売上精算", "デジタル受付＆キャッシュレス対応", "副業OK／正社員登用制度あり（トレーナー職等）"] },
];

function ApplyButton({ label = "応募・詳細はこちら" }: { label?: string }) {
  return (
    <a
      href={APPLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg text-center transition-colors shadow-lg"
    >
      {label}
    </a>
  );
}

export default function Page() {
  return (
    <>
      <Header applyUrl={APPLY_URL} />

      <main>
        {/* ---- Hero ---- */}
        <section className="bg-[#fdf0ee] pb-10">
          <div className="max-w-lg mx-auto px-5 pt-8 text-center">
            <p className="text-xs text-[#4c6072] mb-2 tracking-wide">
              美容エステ・整体マッサージ業界専門の求人紹介
            </p>
            <h1 className="text-[1.75rem] font-bold text-[#e8837a] mb-1 leading-snug">
              minoribaジョブ
            </h1>
            <p className="text-sm text-[#4c6072] mb-6">
              業界特化だからこそ、あなたに最適な求人をご紹介
            </p>

            <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[4/3] bg-[#f5dbd8]">
              <Image src="/hero1.webp" alt="セラピストイメージ" fill className="object-cover object-top" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex flex-col justify-end p-5 text-left">
                <p className="text-white/80 text-xs mb-1">セラピスト副業・求人</p>
                <h2 className="text-white text-2xl font-bold leading-snug drop-shadow">
                  空き時間を<br />収入に変える
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 mb-6">
              {badges.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="bg-white rounded-2xl py-3 px-1 flex flex-col items-center shadow-sm">
                  <Icon className="w-5 h-5 text-[#e8837a] mb-1" strokeWidth={1.5} />
                  <p className="text-[10px] font-bold text-[#34414e] leading-tight text-center">{label}</p>
                  <p className="text-[9px] text-[#4c6072] text-center leading-tight">{sub}</p>
                </div>
              ))}
            </div>

            <ApplyButton />
            <p className="text-xs text-gray-400 mt-2">※公式LINEに友だち登録していただきます。</p>
          </div>
        </section>

        {/* ---- こんな方を歓迎 ---- */}
        <section className="bg-white py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Welcome</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-2">
              新たな一歩を踏み出す<br />あなたへ
            </h2>
            <p className="text-sm text-[#4c6072] text-center mb-6">
              どんなバックグラウンドの方でも大歓迎です
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {welcomeGroups.map((g) => (
                <span
                  key={g}
                  className="bg-[#fdf0ee] text-[#34414e] text-sm font-medium px-4 py-2 rounded-full border border-[#f5dbd8]"
                >
                  {g}
                </span>
              ))}
            </div>
            <div className="bg-[#fdf0ee] rounded-2xl p-5 text-center border border-[#f5dbd8]">
              <p className="text-sm font-bold text-[#e8837a] mb-1">復職者も大歓迎！</p>
              <p className="text-sm text-[#4c6072] leading-relaxed">
                以前セラピストとして働いていた方も、ブランクがある方も安心してご応募ください。
                経験者向けの特別サポートもご用意しています。
              </p>
            </div>
          </div>
        </section>

        {/* ---- 選ばれる3つの理由 ---- */}
        <section className="bg-[#fdf0ee] py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Why minoriba</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-10">
              選ばれる3つの理由
            </h2>
            <div className="space-y-12">
              {values.map((v, i) => (
                <div key={v.number}>
                  <div className="relative rounded-2xl overflow-hidden aspect-video bg-[#f5dbd8] mb-4">
                    <Image src={v.image} alt={v.tag} fill className="object-cover" />
                    <span className="absolute top-3 left-3 bg-[#e8837a] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {v.tag}
                    </span>
                  </div>
                  <span className="text-5xl font-bold text-[#fde8e6] leading-none select-none">{v.number}</span>
                  <h3 className="text-xl font-bold text-[#34414e] leading-snug -mt-4 mb-3 whitespace-pre-line">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#4c6072] leading-relaxed">{v.body}</p>
                  {i < values.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <ArrowDown className="w-6 h-6 text-[#e8837a] opacity-40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- おすすめポイント ---- */}
        <section className="bg-white py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Points</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-6">おすすめポイント</h2>
            <div className="grid grid-cols-2 gap-3">
              {points.map(({ icon: Icon, id, title, desc }) => (
                <div key={id} className="bg-[#fdf0ee] rounded-2xl p-4 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3">
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

        {/* ---- 収入の仕組み ---- */}
        <section className="bg-[#fdf0ee] py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Income</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-2">収入の仕組み</h2>
            <p className="text-xs text-[#4c6072] text-center mb-8">あなたの頑張りがそのまま収入に反映されます</p>

            {/* Income diagram */}
            <div className="space-y-3 mb-6">
              {/* Row 1: 施術収入 */}
              <div className="bg-white rounded-2xl px-5 py-4 text-center shadow-sm">
                <p className="text-xs text-[#4c6072] mb-1">基本報酬</p>
                <p className="text-lg font-bold text-[#34414e]">施術収入</p>
                <p className="text-xs text-[#4c6072] mt-1">未経験 2,340円〜 / 経験者 2,520円〜（最大 3,510円）</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Plus className="w-5 h-5 text-[#e8837a]" />
              </div>

              {/* Row 2: 指名料 */}
              <div className="bg-white rounded-2xl px-5 py-4 text-center shadow-sm">
                <p className="text-xs text-[#4c6072] mb-1">指名されるほど増える</p>
                <p className="text-lg font-bold text-[#34414e]">指名料 <span className="text-[#e8837a]">100%</span></p>
                <p className="text-xs text-[#4c6072] mt-1">200円〜自由設定・指名数が増えるほど収入UP</p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <Plus className="w-5 h-5 text-[#e8837a]" />
              </div>

              {/* Row 3: その他 */}
              <div className="bg-white rounded-2xl px-5 py-4 text-center shadow-sm">
                <p className="text-xs text-[#4c6072] mb-1">追加収入</p>
                <p className="text-lg font-bold text-[#34414e]">物販収入など</p>
                <p className="text-xs text-[#4c6072] mt-1">店舗での物販など追加の収入源も</p>
              </div>

              <div className="flex items-center justify-center">
                <ArrowDown className="w-6 h-6 text-[#e8837a]" />
              </div>

              {/* Result */}
              <div className="bg-[#e8837a] rounded-2xl px-5 py-5 text-center shadow-md">
                <p className="text-white/80 text-xs mb-1">合計</p>
                <p className="text-white text-2xl font-bold">セラピストの収入UP！</p>
                <p className="text-white/80 text-sm mt-1">頑張った分だけ、しっかり還元されます</p>
              </div>
            </div>

            <ApplyButton label="今すぐ応募する" />
          </div>
        </section>

        {/* ---- 選考の流れ ---- */}
        <section className="bg-white py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Process</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-8">選考の流れ</h2>
            <div className="flex items-start justify-between">
              {selectionSteps.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#e8837a] flex items-center justify-center mb-2 shadow-sm">
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
        <section id="requirements" className="bg-[#fdf0ee] py-12 px-5">
          <div className="max-w-lg mx-auto">
            <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase text-center mb-2">Requirements</p>
            <h2 className="text-xl font-bold text-[#34414e] text-center mb-8">募集要項</h2>
            <div className="bg-white rounded-2xl overflow-hidden divide-y divide-gray-100 shadow-sm">
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
            <ApplyButton label="応募／詳細の確認はこちら" />
            <p className="text-xs text-gray-500 mt-3 mb-6">※公式LINEに友だち登録していただきます。</p>
            <a href="https://minoriba.com/job" className="text-sm text-[#e8837a] hover:underline">
              他の求人も探す &gt;&gt;
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#1f2d32] border-t border-white/10 py-8 px-5 text-center">
        <Image src="/logo.webp" alt="minoriba" width={100} height={17} className="h-6 w-auto mx-auto mb-4 brightness-0 invert" />
        <p className="text-xs text-gray-500">© 2024 minoriba. All rights reserved.</p>
      </footer>

      <StickyCtaBar applyUrl={APPLY_URL} />
    </>
  );
}
