// src/components/NewBeautyProblemSection.tsx
import { useLanguage } from '@/contexts/LanguageContext';

const problems = [
  {
    num: '01',
    accentFrom: '#ea4242',
    accentTo: '#f97316',
    emoji: '🤔',
    titleFr: 'Vos clients ont des questions auxquelles personne ne répond',
    titleEn: 'Your customers have questions no one answers',
    quoteFr: '"Ce sérum convient aux peaux sensibles ?"',
    quoteEn: '"Is this serum suitable for sensitive skin?"',
    descFr: 'Chaque question sans réponse est une vente perdue. En boutique physique, une vendeuse rassure. En ligne, le client quitte la page.',
    descEn: 'Every unanswered question is a lost sale. In a physical store, a salesperson reassures. Online, the customer leaves the page.',
  },
  {
    num: '02',
    accentFrom: '#8c3dda',
    accentTo: '#ea4242',
    emoji: '📋',
    titleFr: 'Vos produits ne peuvent pas parler d\'eux-mêmes',
    titleEn: 'Your products can\'t speak for themselves',
    quoteFr: '"Ça marche vraiment pour les cheveux crépus 4C ?"',
    quoteEn: '"Does this actually work for 4C natural hair?"',
    descFr: 'Une fiche produit ne peut pas adapter son discours à chaque cliente. Résultat : les doutes persistent et l\'achat n\'a pas lieu.',
    descEn: 'A product page can\'t tailor its pitch to each customer. Result: doubts persist and no purchase happens.',
  },
  {
    num: '03',
    accentFrom: '#f59e0b',
    accentTo: '#ea4242',
    emoji: '🧐',
    titleFr: 'Vous ne pouvez pas être disponible 24h/24',
    titleEn: 'You can\'t be available 24/7',
    quoteFr: '"Mon teint est mixte, vous me conseillez quoi ?"',
    quoteEn: '"I have combination skin, what do you recommend?"',
    descFr: 'WhatsApp ne scale pas. Embaucher une conseillère coûte cher. Et la nuit, les paniers sont abandonnés sans jamais être récupérés.',
    descEn: 'WhatsApp doesn\'t scale. Hiring an advisor is expensive. And at night, carts are abandoned and never recovered.',
  },
];

const NewBeautyProblemSection = () => {
  const { t, language } = useLanguage();

  return (
    <section
      id="problem"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #0e0e14 0%, #15101e 50%, #0e0e14 100%)' }}
    >
      {/* Subtle background grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Accent glow top-left */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(234,66,66,0.12) 0%, transparent 70%)' }}
      />
      {/* Accent glow bottom-right */}
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(140,61,218,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 container px-5 md:px-12 mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest mb-4 px-4 py-1.5 rounded-full"
            style={{
              background: 'rgba(234,66,66,0.12)',
              color: '#ea4242',
              border: '1px solid rgba(234,66,66,0.25)',
            }}
          >
            {language === 'fr' ? 'Le problème' : 'The problem'}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            {language === 'fr'
              ? <>{t('beautyProblemTitle')}</>
              : <>{t('beautyProblemTitle')}</>
            }
          </h2>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            {t('beautyProblemSubtitle')}
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto mb-14 md:mb-16">
          {problems.map((p) => (
            <div
              key={p.num}
              className="relative flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-[3px] w-full flex-shrink-0"
                style={{ background: `linear-gradient(90deg, ${p.accentFrom}, ${p.accentTo})` }}
              />

              <div className="flex flex-col flex-1 p-6 sm:p-7">
                {/* Number + emoji */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="text-4xl font-black leading-none"
                    style={{
                      background: `linear-gradient(135deg, ${p.accentFrom}, ${p.accentTo})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {p.num}
                  </span>
                  <span className="text-3xl">{p.emoji}</span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-4 leading-snug">
                  {language === 'fr' ? p.titleFr : p.titleEn}
                </h3>

                {/* Customer quote */}
                <div
                  className="rounded-xl p-4 mb-4 flex-shrink-0"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderLeft: `3px solid ${p.accentFrom}`,
                  }}
                >
                  <p className="text-sm text-slate-300 italic leading-relaxed">
                    {language === 'fr' ? p.quoteFr : p.quoteEn}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed flex-1">
                  {language === 'fr' ? p.descFr : p.descEn}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion block */}
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-8 sm:p-10 md:p-12 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #ea4242 0%, #8c3dda 100%)',
            }}
          >
            {/* Decorative circle */}
            <div
              className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            />
            <div
              className="pointer-events-none absolute -bottom-10 -left-10 w-40 h-40 rounded-full"
              style={{ background: 'rgba(255,255,255,0.06)' }}
            />

            <div className="relative z-10 text-center sm:text-left max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-3">
                {language === 'fr' ? 'La réalité' : 'The reality'}
              </p>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {t('beautyProblemConclusion')}
              </h3>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed">
                {t('beautyProblemConclusionSub')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewBeautyProblemSection;
