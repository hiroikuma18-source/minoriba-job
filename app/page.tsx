import Image from "next/image";

const APPLY_URL = "https://lin.ee/XXXXXXXX"; // 後で差し替え

const points = [
  { id: "01", text: "週1日・1時間〜OK！" },
  { id: "02", text: "施術60分：2,520円〜＋指名料100％ 収入！" },
  { id: "03", text: "働きたい時に働ける柔軟な希望エントリー制" },
  { id: "04", text: "日程・店舗を自分で選べる「希望エントリー制」" },
  { id: "05", text: "全国約600店舗に自由にエントリー可能" },
  { id: "06", text: "もみほぐし経験者は、最短2日間の無料レッスンですぐに働ける！" },
];

type Requirement = {
  label: string;
  content: React.ReactNode;
};

const requirements: Requirement[] = [
  {
    label: "募集職種",
    content: "リラクゼーションセラピスト（もみほぐし・足つぼ・ストレッチなど）",
  },
  {
    label: "職務内容",
    content: (
      <ul className="space-y-1">
        <li>・リラクゼーション施術（ボディケア・リフレクソロジー等）</li>
        <li>・お客様対応・受付・清掃など店舗業務全般</li>
      </ul>
    ),
  },
  {
    label: "雇用形態",
    content: "業務委託（個人事業主・副業・Wワーク歓迎）",
  },
  {
    label: "収入",
    content: (
      <ul className="space-y-1">
        <li>・施術60分：未経験2,340円〜／経験者2,520円〜（最大3,510円）</li>
        <li>・指名料：100％収入（自由設定OK）</li>
      </ul>
    ),
  },
  {
    label: "入店店舗",
    content: "全国約600店舗から自由に選択（希望エントリー制）",
  },
  {
    label: "入店時間",
    content: "週1日・1時間〜／希望エントリー制（自分で日程・時間を決定）",
  },
  {
    label: "休日・休暇",
    content: "希望エントリー制",
  },
  {
    label: "福利厚生",
    content: (
      <ul className="space-y-1">
        <li>・指名料100％収入に（200円〜自由設定）</li>
        <li>・最短2日間の無料レッスン制度</li>
        <li>・備品貸与、短期売上精算</li>
        <li>・デジタル受付＆キャッシュレス対応</li>
        <li>・副業OK／正社員登用制度あり（トレーナー職等）</li>
      </ul>
    ),
  },
  {
    label: "選考プロセス",
    content: (
      <div className="flex flex-wrap gap-2 items-center">
        {["書類選考", "面談", "レッスン", "契約", "入店"].map((step, i, arr) => (
          <div key={step} className="flex items-center gap-2">
            <span className="bg-[#e8837a] text-white text-xs px-3 py-1 rounded-full">{step}</span>
            {i < arr.length - 1 && <span className="text-[#e8837a] text-xs">▶</span>}
          </div>
        ))}
      </div>
    ),
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-lg mx-auto px-4 h-14 flex items-center justify-between">
          <Image
            src="/logo.webp"
            alt="minoriba"
            width={120}
            height={20}
            className="h-7 w-auto"
          />
          <div className="flex gap-4 text-sm text-gray-600">
            <a href="#requirements" className="hover:text-[#e8837a] transition-colors">詳細</a>
            <a href={APPLY_URL} className="hover:text-[#e8837a] transition-colors">お問い合わせ</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#fdf0ee]">
        <div className="max-w-lg mx-auto px-4 pt-8 pb-6 text-center">
          <p className="text-xs text-gray-500 mb-1">美容エステ・整体マッサージ業界専門の求人紹介</p>
          <h1 className="text-2xl font-bold text-[#e8837a] mb-4">minoribaジョブ</h1>
          <div className="grid grid-cols-2 gap-2 mb-6">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/hero1.jpg"
                alt="セラピスト施術イメージ"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/hero2.jpg"
                alt="サロンイメージ"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-sm text-gray-600">
            業界特化のサービスだからこそ、<br />
            ご希望やキャリアビジョンに最適な求人をご紹介します
          </p>
        </div>
      </section>

      {/* Main headline */}
      <section className="bg-white py-8 px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="inline-block bg-[#e8837a] text-white text-xs px-3 py-1 rounded-full mb-3">
            おすすめ
          </div>
          <h2 className="text-2xl font-bold leading-snug mb-6">
            【週1日・1時間〜OK】<br />
            自由に働けるセラピスト副業！
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            あなたの&ldquo;空いている時間&rdquo;が、しっかりとした収入に。<br />
            本案件のセラピスト副業は、未経験でも2日間のレッスンでデビュー可能。<br />
            スマホひとつで希望の日時・店舗に入店でき、全国600店舗で自由に働ける新しい働き方です。<br />
            60分施術で2,520円〜＋指名料100％が収入に！自由な働き方と高収入、どちらも叶います。
          </p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg transition-colors shadow-md"
          >
            応募・詳細はこちら
          </a>
        </div>
      </section>

      {/* Points */}
      <section className="bg-[#fdf0ee] py-10 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold text-center mb-6">おすすめポイント</h2>
          <div className="grid grid-cols-1 gap-3">
            {points.map((point) => (
              <div
                key={point.id}
                className="bg-white rounded-2xl p-4 flex items-start gap-3 shadow-sm"
              >
                <span className="text-[#e8837a] font-bold text-sm whitespace-nowrap">
                  point{point.id}
                </span>
                <p className="text-sm font-medium">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section id="requirements" className="bg-white py-12 px-4">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold">募集要項</h2>
            <p className="text-xs text-gray-400 tracking-widest mt-1">Requirements</p>
          </div>
          <dl className="divide-y divide-gray-100">
            {requirements.map((req) => (
              <div key={req.label} className="py-5 grid grid-cols-3 gap-4">
                <dt className="text-sm font-bold text-[#e8837a]">{req.label}</dt>
                <dd className="text-sm text-gray-700 col-span-2">{req.content}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="bg-[#fdf0ee] py-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">entry</p>
          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#e8837a] hover:bg-[#c96860] text-white font-bold py-4 rounded-full text-lg transition-colors shadow-md mb-3"
          >
            応募／詳細の確認はこちら
          </a>
          <p className="text-xs text-gray-500 mb-6">※公式LINEに友だち登録していただきます。</p>
          <a
            href="https://minoriba.com/job"
            className="text-sm text-[#e8837a] underline"
          >
            他の求人も探す &gt;&gt;
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 px-4 text-center">
        <Image
          src="/logo.webp"
          alt="minoriba"
          width={100}
          height={17}
          className="h-6 w-auto mx-auto mb-3"
        />
        <p className="text-xs text-gray-400">© 2024 minoriba. All rights reserved.</p>
      </footer>
    </div>
  );
}
