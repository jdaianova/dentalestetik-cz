import AboutSection from "../sections/AboutSection/AboutSection";
import BadgesSection from "../sections/BadgesSection/BadgesSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import InfoSection from "../sections/InfoSection/ui/InfoSection";
import InsurersSection from "../sections/InsurersSection/InsurersSection";
import OffersSection from "../sections/OffersSection/OffersSection";
import PricingSection from "../sections/PricingSection/PricingSection";
import ServicesSection from "../sections/ServicesSection/ui/ServicesSection";

import imgOffers from "../../../shared/assets/img/imgOffers.png";

const offersData = [
  'Diagnostika kazů a zánětů',
  'Rekonstrukce zubů',
  'Endodontické ošetření',
  'Protetika',
  'Dětská stomatologie'
];

export const homepageSections = [
  {
    id: 'home',
    label: 'Úvod',
    title: {
      text: { allPhrase: '', accentWord: '' },
      caption: ``,
      side: 'left',
    },
    content: () => <HeroSection />,
    withBorder: false,
  },

  {
    id: 'badges',
    label: '',
    title: {
      text: { allPhrase: '', accentWord: '' },
      caption: ``,
      side: 'left',
    },
    content: () => <BadgesSection />,
    withBorder: false,
  },

  {
    id: 'info',
    label: '',
    title: {
      text: { allPhrase: '', accentWord: '' },
      caption: ``,
      side: 'right',
    },
    content: () => <InfoSection />,
    withBorder: true,
  },

  {
    id: 'about',
    label: 'O nás',
    title: {
      text: { allPhrase: 'KDO JSME', accentWord: 'kdo' },
      caption: `Vítejte na stránkách naší zubní ordinace, kde se snoubí osobní přístup s gmoderními technologiemi a péčí o váš komfort a zdraví`,
      side: 'left',
    },
    content: () => <AboutSection />,
    withBorder: true,
  },

  {
    id: 'services',
    label: 'Služby',
    title: {
      text: { allPhrase: 'JAK PRACUJEME', accentWord: 'PRACUJEME' },
      caption: `Každý detail má pro nás význam — spojujeme zkušenosti, empatii a moderní přístup s důrazem na kvalitu, pohodlí a jistotu péče`,
      side: 'right',
    },
    content: () => <ServicesSection />,
    withBorder: true,
  },

  {
    id: 'offers',
    label: 'Přístup',
    title: {
      text: { allPhrase: 'Co nabízíme', accentWord: 'Co' },
      caption: `Odhalíme problém, vše vám srozumitelně vysvětlíme a postaráme se o váš úsměv s péčí, pohodlím a důvěrou v příjemném místě`,
      side: 'left',
    },
    content: () => <OffersSection offersData={offersData} img={imgOffers}/>,
    withBorder: true,
  },

  {
    id: 'pricing',
    label: 'Ceník',
    title: {
      text: { allPhrase: 'Ceník našich služeb', accentWord: 'služeb' },
      caption: `Konečnou cenu ošetření stanoví lékař podle složitosti zákroku a vašich individuálních potřeb s ohledem na péči, komfort a jistotu`,
      side: 'right',
    },
    content: () => <PricingSection />,
    withBorder: true,
  },

  {
    id: 'insurers ',
    label: '',
    title: {
      text: { allPhrase: 'Smluvní pojišt’ovny', accentWord: 'Smluvní' },
      caption: `Přijímáme pacienty většiny zdravotních pojišťoven a poskytujeme péči s důrazem na kvalitu, pohodlí, jistotu a individuální přístup`,
      side: 'left',
    },
    content: () => <InsurersSection />,
    withBorder: true,
  },

  {
    id: 'contacts',
    label: 'Kontakty',
    title: {
      text: { allPhrase: 'Kde nás najdete', accentWord: 'nás' },
      caption: "Najdete nás na uvedené adrese, veškerá komunikace a objednávky probíhají pouze telefonicky pro rychlé a jasné domluvení",
      side: 'right',
    },
    content: () => <ContactSection />,
    withBorder: false,
  },
];
