import { useTranslation } from 'next-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <h1>{t('heroTitle')}</h1>
      <p>{t('heroSubtitle')}</p>
    </section>
  );
};

export default Hero;
