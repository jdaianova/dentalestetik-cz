import AboutSection from "../sections/AboutSection/AboutSection";
import BadgesSection from "../sections/BadgesSection/BadgesSection";
import ContactSection from "../sections/ContactSection/ContactSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import InfoSection from "../sections/InfoSection/ui/InfoSection";
import InsurersSection from "../sections/InsurersSection/InsurersSection";
import OffersSection from "../sections/OffersSection/OffersSection";
import PricingSection from "../sections/PricingSection/PricingSection";
import ServicesSection from "../sections/ServicesSection/ui/ServicesSection";

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
      caption: `Vítejte na stránkách naší zubní ordinace, kde se snoubí osobní přístup malého týmu 
                s technologiemi na špičkové úrovni a péčí zaměřenou na váš komfort, 
                bezpečí a dlouhodobé výsledky`,
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
      caption: `Každý detail má pro nás význam — propojujeme zkušenosti, empatii a moderní 
                přístup ke každému ošetření s důrazem na kvalitu a pohodlí`,
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
      caption: `Odhalíme problém, vše vám srozumitelně vysvětlíme, navrhneme řešení a 
                postaráme se o váš úsměv s dlouhodobou péčí a důvěrou 
                v příjemném a klidném prostředí`,
      side: 'left',
    },
    content: () => <OffersSection />,
    withBorder: true,
  },

  {
    id: 'pricing',
    label: 'Ceník',
    title: {
      text: { allPhrase: 'Ceník našich služeb', accentWord: 'služeb' },
      caption: `Konečnou cenu ošetření stanoví lékař podle složitosti zákroku a vašich individuálních potřeb`,
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
      caption: `Přijímáme pacienty většiny zdravotních pojišťoven`,
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
      caption: "725 439 518",
      side: 'right',
    },
    content: () => <ContactSection />,
    withBorder: false,
  },
];
