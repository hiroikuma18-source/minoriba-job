import Image from "next/image";
import Header from "./components/Header";
import StickyCtaBar from "./components/StickyCtaBar";

const APPLY_URL = "https://lin.ee/XXXXXXXX"; // 後で差し替え

const points = [
  { id: "01", text: "週1日・1時間〜OK！" },
  { id: "02", text: "施術60分：2,520円〜＋指名料100％収入！" },
  { id: "03", text: "働きたい時に働ける柔軟な希望エントリー制" },
  { id: "04", text: "日程・店舗を自分で選べる「希望エントリー制」" },
  { id: "05", text: "全国約600店舗に自由にエントリー可能" },
  { id: "06", text: "もみほぐし経験者は、最短2日間の無料レッスンですぐに働ける！" },
];

const selectionSteps = ["書類選考", "面談", "レッスン", "契約", "入店"];

const requirements = [
  {
    label: "募集職種",
    content: "リラクゼーションセラピスト（もみほぐし・足つぼ・ストレッチなど）",
  },
  {
    label: "職務内容",
    items: [
      "リラクゼーション施術（ボディケア・リフレクソロジー等）",
      "お客様対応・受付・清掃など店舗業務全般",
    ],
  },
  { label: "雇用形態", content: "業務委託（個人事業主・副業・Wワーク歓迎）" },
  {
    label: "収入",
    items: [
      "施術60分：未経験2,340円〜／経験者2,520円〜（最大3,510円）",
      "指名料：100％収入（自由設定OK）",
    ],
  },
  { label: "入店店舗", content: "全国約600店舗から自由に選択（希望エントリー制）" },
  { label: "入店時間", content: "週1日・1時間〜／希望エントリー制（自分で日程・時間を決定）" },
  { label: "休日・休暇", content: "希望エントリー制" },
  {
    label: "福利厚生",
    items: [
      "指名料100％収入に（200円〜自由設定）",
      "最短2日間の無料レッスン制度",
      "備品貸与、短期売上精算",
      "デジタル受付＆キャッシュレス対応",
      "副業OK／正社員登用制度あり（トレーナー職等）",
    ],
  },
];

export default function Page() {
  return (
    <>
      <Header applyUrl={APPLY_URL} />

      <main>
        {/* Hero */}
        <section className="bg-[#fdf0ee]">
          <div className="max-w-lg mx-auto px-5 pt-8 pb-10 text-center">
            <p className="text-xs text-[#4c6072] mb-2 tracking-wide">
              美容エステ・整体マッサージ業界専門の求人紹介
            </p>
            <h1 className="text-[1.75rem] font-bold text-[#e8837a] mb-5 leading-snug">
              minoribaジョブ
            </h1>

            {/* Hero images */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#f5dbd8]">
                <Image
                  src="/hero1.jpg"
                  alt="セラピスト施術イメージ"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-[#f5dbd8]">
                <Image
                  src="/hero2.jpg"
                  alt="サロンイメージ"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-sm text-[#4c6072] leading-relaxed mb-6">
              業界特化のサービスだからこそ、<br />
              ご希望やキャリアビジョンに最適な求人をご紹介します
            </p>

            {/* Main headline */}
            <div className="bg-white rounded-2xl px-5 py-6 shadow-sm mb-6 text-left">
              <span className="inline-block bg-[#e8837a] text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                おすすめ
              </span>
              <h2 className="text-xl font-bold text-[#34414e] leading-snug mb-4">
                【週1日・1時間〜OK】<br />
                自由に働けるセラピスト副業！
              </h2>
              <p className="text-sm text-[#4c6072] leading-relaxed">
                あなたの&ldquo;空いている時間&rdquo;が、しっかりとした収入に。
                本案件のセラピスト副業は、未経験でも2日間のレッスンでデビュー可能。
                スマホひとつで希望の日時・店舗に入店でき、全国600店舗で自由に働ける新しい働き方です。
                60分施術で2,520円〜＋指名料100％が収入に！
              </p>
            </div>

            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg transition-colors shadow-lg"
            >
              応募・詳細はこちら
            </a>
            <p className="text-xs text-gray-400 mt-2">※公式LINEに友だち登録していただきます。</p>
          </div>
        </section>

        {/* Points */}
        <section className="bg-white py-12 px-5">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase mb-1">Points</p>
              <h2 className="text-xl font-bold text-[#34414e]">おすすめポイント</h2>
            </div>
            <div className="space-y-3">
              {points.map((point) => (
                <div
                  key={point.id}
                  className="flex items-start gap-4 bg-[#fdf0ee] rounded-2xl p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="flex-none">
                    <span className="text-[10px] font-bold text-[#e8837a] uppercase tracking-wider block leading-none">point</span>
                    <span className="text-2xl font-bold text-[#e8837a] leading-none">{point.id}</span>
                  </div>
                  <p className="text-sm font-semibold text-[#34414e] leading-snug pt-1">{point.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section id="requirements" className="bg-[#fdf0ee] py-12 px-5">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <p className="text-xs text-[#e8837a] font-bold tracking-widest uppercase mb-1">Requirements</p>
              <h2 className="text-xl font-bold text-[#34414e]">募集要項</h2>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-sm divide-y divide-gray-100">
              {requirements.map((req) => (
                <div key={req.label} className="px-5 py-4 grid grid-cols-3 gap-3">
                  <dt className="text-xs font-bold text-[#e8837a] col-span-1 pt-0.5">{req.label}</dt>
                  <dd className="text-sm text-[#34414e] col-span-2">
                    {req.content ?? (
                      <ul className="space-y-1">
                        {req.items?.map((item) => (
                          <li key={item}>・{item}</li>
                        ))}
                      </ul>
                    )}
                  </dd>
                </div>
              ))}

              {/* Selection process */}
              <div className="px-5 py-4 grid grid-cols-3 gap-3">
                <dt className="text-xs font-bold text-[#e8837a] col-span-1 pt-0.5">選考プロセス</dt>
                <dd className="col-span-2">
                  <div className="flex flex-wrap gap-1.5 items-center">
                    {selectionSteps.map((step, i) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="bg-[#e8837a] text-white text-xs px-2.5 py-1 rounded-full font-medium">
                          {step}
                        </span>
                        {i < selectionSteps.length - 1 && (
                          <span className="text-[#e8837a] text-xs">▶</span>
                        )}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="bg-[#1f2d32] py-14 px-5">
          <div className="max-w-lg mx-auto text-center">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">entry</p>
            <h3 className="text-xl font-bold text-white mb-2">応募・詳細の確認はこちら</h3>
            <p className="text-sm text-gray-400 mb-6">
              他の求人も見たい方も、まずはお気軽にご登録ください
            </p>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shiny block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg transition-colors shadow-lg mb-3"
            >
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
        <Image
          src="/logo.webp"
          alt="minoriba"
          width={100}
          height={17}
          className="h-6 w-auto mx-auto mb-4 brightness-0 invert"
        />
        <p className="text-xs text-gray-500">© 2024 minoriba. All rights reserved.</p>
      </footer>

      <StickyCtaBar applyUrl={APPLY_URL} />
    </>
  );
}
