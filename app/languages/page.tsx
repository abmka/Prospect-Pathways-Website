import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../../components/ui";
import { LANGUAGES, site, type LanguageCode } from "../../site.config";

export const metadata: Metadata = {
  title: "Languages",
  description:
    "Key information about Prospect Pathways in Arabic, Urdu, Punjabi, Bengali, Polish, Romanian, Farsi and Somali, and how to ask for an interpreter.",
};

/**
 * Short summaries of the essentials, one per language. These are DRAFT
 * translations produced for the test site: have each one checked by a
 * qualified translator (or a fluent member of staff) before launch, then
 * delete the draft banner below.
 *
 * Phone and email are pulled from site.config so they only change once.
 */
type Summary = {
  heading: string;
  who: string;
  offer: string;
  help: string;
  contact: string; // use {phone} and {email}
  interpreter: string;
};

const SUMMARIES: Record<Exclude<LanguageCode, "en">, Summary> = {
  ar: {
    heading: "معلومات أساسية بالعربية",
    who: "بروسبكت باثوايز (Prospect Pathways) تُوفّر سكناً مدعوماً للبالغين من عمر 18 إلى 65 عاماً في برمنغهام.",
    offer: "نُقدّم غرفة آمنة ومفروشة، ومساعدة في المعونات المالية والمواعيد، وعاملَ دعم مُخصّصاً لك.",
    help: "نساعد الأشخاص بلا مأوى، أو الخارجين من السجن أو المستشفى، أو الهاربين من العنف الأسري، أو من فقدوا منازلهم.",
    contact: "للاستفسار عن غرفة، يمكن لعامل الدعم أو الأخصائي الاجتماعي أو ضابط المراقبة أو البلدية إحالتك إلينا. ويمكنك أيضاً الاتصال بنا مباشرة على {phone} أو عبر البريد الإلكتروني {email}.",
    interpreter: "يمكننا توفير مترجم دون أي تكلفة عليك.",
  },
  ur: {
    heading: "اردو میں بنیادی معلومات",
    who: "پراسپیکٹ پاتھ ویز (Prospect Pathways) برمنگھم میں 18 سے 65 سال کے بالغ افراد کے لیے معاون رہائش فراہم کرتا ہے۔",
    offer: "ہم ایک محفوظ، فرنشڈ کمرہ، بینیفٹس اور اپائنٹمنٹس میں مدد، اور ایک مقررہ سپورٹ ورکر فراہم کرتے ہیں۔",
    help: "ہم ایسے لوگوں کی مدد کرتے ہیں جو بے گھر ہیں، جیل یا ہسپتال سے نکل رہے ہیں، گھریلو تشدد سے بھاگ رہے ہیں، یا اپنا گھر کھو چکے ہیں۔",
    contact: "کمرے کے بارے میں پوچھنے کے لیے آپ کا سپورٹ ورکر، سوشل ورکر، پروبیشن آفیسر یا کونسل آپ کو ہمارے پاس بھیج سکتے ہیں۔ آپ خود بھی {phone} پر کال یا {email} پر ای میل کر سکتے ہیں۔",
    interpreter: "ہم آپ کے لیے بغیر کسی خرچ کے مترجم کا انتظام کر سکتے ہیں۔",
  },
  pa: {
    heading: "ਪੰਜਾਬੀ ਵਿੱਚ ਮੁੱਖ ਜਾਣਕਾਰੀ",
    who: "ਪ੍ਰੋਸਪੈਕਟ ਪਾਥਵੇਜ਼ (Prospect Pathways) ਬਰਮਿੰਘਮ ਵਿੱਚ 18 ਤੋਂ 65 ਸਾਲ ਦੇ ਬਾਲਗਾਂ ਲਈ ਸਹਾਇਤਾ ਵਾਲੀ ਰਿਹਾਇਸ਼ ਦਿੰਦਾ ਹੈ।",
    offer: "ਅਸੀਂ ਇੱਕ ਸੁਰੱਖਿਅਤ, ਫਰਨੀਚਰ ਵਾਲਾ ਕਮਰਾ, ਬੈਨੀਫ਼ਿਟ ਅਤੇ ਅਪੌਇੰਟਮੈਂਟਾਂ ਵਿੱਚ ਮਦਦ, ਅਤੇ ਇੱਕ ਨਿਯਤ ਸਪੋਰਟ ਵਰਕਰ ਦਿੰਦੇ ਹਾਂ।",
    help: "ਅਸੀਂ ਉਹਨਾਂ ਲੋਕਾਂ ਦੀ ਮਦਦ ਕਰਦੇ ਹਾਂ ਜੋ ਬੇਘਰ ਹਨ, ਜੇਲ੍ਹ ਜਾਂ ਹਸਪਤਾਲ ਤੋਂ ਨਿਕਲ ਰਹੇ ਹਨ, ਘਰੇਲੂ ਹਿੰਸਾ ਤੋਂ ਭੱਜ ਰਹੇ ਹਨ, ਜਾਂ ਜਿਨ੍ਹਾਂ ਦਾ ਘਰ ਛੁੱਟ ਗਿਆ ਹੈ।",
    contact: "ਕਮਰੇ ਬਾਰੇ ਪੁੱਛਣ ਲਈ, ਤੁਹਾਡਾ ਸਪੋਰਟ ਵਰਕਰ, ਸੋਸ਼ਲ ਵਰਕਰ, ਪ੍ਰੋਬੇਸ਼ਨ ਅਫ਼ਸਰ ਜਾਂ ਕੌਂਸਲ ਤੁਹਾਨੂੰ ਸਾਡੇ ਕੋਲ ਭੇਜ ਸਕਦੇ ਹਨ। ਤੁਸੀਂ ਖ਼ੁਦ ਵੀ {phone} 'ਤੇ ਫ਼ੋਨ ਜਾਂ {email} 'ਤੇ ਈਮੇਲ ਕਰ ਸਕਦੇ ਹੋ।",
    interpreter: "ਅਸੀਂ ਤੁਹਾਡੇ ਲਈ ਬਿਨਾਂ ਕਿਸੇ ਖ਼ਰਚੇ ਦੇ ਦੁਭਾਸ਼ੀਏ ਦਾ ਪ੍ਰਬੰਧ ਕਰ ਸਕਦੇ ਹਾਂ।",
  },
  bn: {
    heading: "বাংলায় মূল তথ্য",
    who: "প্রসপেক্ট পাথওয়েজ (Prospect Pathways) বার্মিংহামে ১৮ থেকে ৬৫ বছর বয়সী প্রাপ্তবয়স্কদের জন্য সহায়তাসহ আবাসন প্রদান করে।",
    offer: "আমরা একটি নিরাপদ, আসবাবপত্রসহ ঘর, বেনিফিট ও অ্যাপয়েন্টমেন্টে সহায়তা, এবং একজন নির্দিষ্ট সাপোর্ট ওয়ার্কার দিই।",
    help: "আমরা তাদের সাহায্য করি যারা গৃহহীন, কারাগার বা হাসপাতাল থেকে বের হচ্ছেন, পারিবারিক নির্যাতন থেকে পালিয়ে এসেছেন, বা ঘর হারিয়েছেন।",
    contact: "ঘরের বিষয়ে জানতে আপনার সাপোর্ট ওয়ার্কার, সোশ্যাল ওয়ার্কার, প্রবেশন অফিসার বা কাউন্সিল আপনাকে আমাদের কাছে রেফার করতে পারেন। আপনি নিজেও {phone} নম্বরে ফোন বা {email} ঠিকানায় ইমেল করতে পারেন।",
    interpreter: "আমরা আপনার জন্য বিনা খরচে দোভাষীর ব্যবস্থা করতে পারি।",
  },
  pl: {
    heading: "Najważniejsze informacje po polsku",
    who: "Prospect Pathways zapewnia mieszkania wspierane dla osób dorosłych w wieku od 18 do 65 lat w Birmingham.",
    offer: "Oferujemy bezpieczny, umeblowany pokój, pomoc w sprawach zasiłków i wizyt oraz stałego pracownika wsparcia.",
    help: "Pomagamy osobom bezdomnym, opuszczającym więzienie lub szpital, uciekającym przed przemocą domową lub takim, które straciły dom.",
    contact: "Aby zapytać o pokój, może skierować Cię do nas pracownik wsparcia, pracownik socjalny, kurator lub urząd miasta. Możesz też skontaktować się z nami bezpośrednio: telefon {phone}, e-mail {email}.",
    interpreter: "Możemy bezpłatnie zapewnić tłumacza.",
  },
  ro: {
    heading: "Informații esențiale în limba română",
    who: "Prospect Pathways oferă locuințe cu sprijin pentru adulți cu vârste între 18 și 65 de ani în Birmingham.",
    offer: "Oferim o cameră sigură și mobilată, ajutor cu beneficiile sociale și programările, și un lucrător de sprijin dedicat.",
    help: "Ajutăm persoanele fără adăpost, pe cele care ies din închisoare sau din spital, pe cele care fug de violența domestică sau care și-au pierdut locuința.",
    contact: "Pentru a întreba despre o cameră, lucrătorul de sprijin, asistentul social, ofițerul de probațiune sau consiliul local vă pot trimite la noi. Ne puteți contacta și direct la {phone} sau prin e-mail la {email}.",
    interpreter: "Putem asigura un interpret fără niciun cost pentru dumneavoastră.",
  },
  fa: {
    heading: "اطلاعات اصلی به فارسی",
    who: "پراسپکت پث‌ویز (Prospect Pathways) در بیرمنگام برای بزرگسالان ۱۸ تا ۶۵ ساله مسکن حمایتی فراهم می‌کند.",
    offer: "ما یک اتاق امن و مبله، کمک در امور مزایا و قرار ملاقات‌ها، و یک مددکار حمایتی مشخص ارائه می‌دهیم.",
    help: "ما به افرادی که بی‌خانمان هستند، از زندان یا بیمارستان خارج می‌شوند، از خشونت خانگی فرار کرده‌اند، یا خانه‌شان را از دست داده‌اند کمک می‌کنیم.",
    contact: "برای پرسیدن درباره اتاق، مددکار، مددکار اجتماعی، افسر آزادی مشروط یا شورای شهر می‌توانند شما را به ما معرفی کنند. همچنین می‌توانید مستقیماً با شماره {phone} تماس بگیرید یا به {email} ایمیل بزنید.",
    interpreter: "ما می‌توانیم بدون هیچ هزینه‌ای برای شما مترجم فراهم کنیم.",
  },
  so: {
    heading: "Macluumaad muhiim ah oo Soomaali ah",
    who: "Prospect Pathways waxay siisaa guryo taageero leh dadka waaweyn ee da'doodu u dhaxayso 18 ilaa 65 sano oo ku nool Birmingham.",
    offer: "Waxaan bixinaa qol ammaan ah oo alaab leh, caawimaad ku saabsan gunnooyinka iyo ballamaha, iyo shaqaale taageero oo gaar ah.",
    help: "Waxaan caawinaa dadka hoy la', kuwa ka soo baxaya xabsiga ama isbitaalka, kuwa ka cararaya rabshadaha guriga, ama kuwa gurigooda lumiyay.",
    contact: "Si aad wax uga weydiiso qol, shaqaalahaaga taageerada, shaqaalaha bulshada, sarkaalka tijaabada ama golaha degmadu way kuu soo gudbin karaan. Sidoo kale adigu toos ayaad noola soo xiriiri kartaa lambarka {phone} ama iimaylka {email}.",
    interpreter: "Waxaan kuu diyaarin karnaa turjumaan iyada oo aanay wax kharash ah kugu fadhiyin.",
  },
};

function fill(text: string) {
  return text.replace("{phone}", site.phone).replace("{email}", site.email);
}

export default function LanguagesPage() {
  const others = LANGUAGES.filter((l) => l.code !== "en");

  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }]}
        title="Languages"
        intro="The essentials about Prospect Pathways in the languages our residents speak most, and how to ask for an interpreter or a translated document."
      >
        <nav aria-label="Languages on this page" className="lang-list" style={{ paddingTop: "8px" }}>
          {others.map((l) => (
            <a key={l.code} href={`#${l.code}`} lang={l.code} dir={l.dir}>
              {l.native}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="section">
        <div className="container stack gap-28" style={{ maxWidth: "980px" }}>
          <div className="draft-note" role="note">
            <strong>Draft translations.</strong> These were produced for the test site and have not
            yet been checked by a qualified translator. Have each one reviewed before launch, then
            remove this notice in <code>app/languages/page.tsx</code>.
          </div>

          <div className="card card--ground">
            <h2 className="h4">Interpreters and other formats</h2>
            <p className="body">
              If English is not your first language, we can arrange an interpreter for sign-up,
              support sessions and reviews at no cost to you. We can also provide our key documents —
              the licence agreement, house rules and complaints leaflet — in translation, large
              print, easy read or audio. Ask your support worker, or{" "}
              <Link href="/contact-us">contact us</Link>.
            </p>
          </div>

          {others.map((l) => {
            const s = SUMMARIES[l.code as Exclude<LanguageCode, "en">];
            return (
              <section key={l.code} id={l.code} className="lang-section" lang={l.code} dir={l.dir}>
                <div className="lang-section__head">
                  <h2 className="h3">{s.heading}</h2>
                  <span className="note" lang="en" dir="ltr">
                    {l.english}
                  </span>
                </div>
                <p className="lead">{s.who}</p>
                <p className="body">{s.offer}</p>
                <p className="body">{s.help}</p>
                <p className="body">{fill(s.contact)}</p>
                <p className="body">
                  <strong>{s.interpreter}</strong>
                </p>
                <div>
                  <a className="btn btn--primary" href={site.phoneHref} lang="en" dir="ltr">
                    {site.phone}
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
