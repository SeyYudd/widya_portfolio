import HeroNew from './components/HeroNew';
import AboutNew from './components/AboutNew';
import ExperienceNew from './components/ExperienceNew';
import SkillsNew from './components/SkillsNew';
import OrganizationNew from './components/OrganizationNew';
import ContactNew from './components/ContactNew';
import FooterNew from './components/FooterNew';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroNew />
      <AboutNew />
      <ExperienceNew />
      <SkillsNew />
      <OrganizationNew />
      <ContactNew />
      <FooterNew />
    </main>
  );
}
