import {
  facebook,
  instagram,
  telegram,
  email,
  whatsapp,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: 1,
    url: "#hero",
    title: {
      en: "Home",
      tr: "Ana Sayfa",
    },
  },
  {
    id: 2,
    url: "#features",
    title: {
      en: "Benefits",
      tr: "Avantajlarımız",
    },
  },
  {
    id: 3,
    url: "#about-us",
    title: {
      en: "About Us",
      tr: "Hakkımızda",
    },
  },
  {
    id: 4,
    url: "#contact",
    title: {
      en: "Contact",
      tr: "İletişim",
    },
  },
];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const benefits = [
  {
    id: 1,
    title: {
      en: "Our Services",
      tr: "Hizmetlerimiz",
    },
    text: {
      en: "Domestic and international freight shipping. Road and air cargo delivery. Warehousing and inventory management. Express delivery for documents and small parcels",
      tr: "Yurtiçi ve uluslararası yük taşımacılığı. Karayolu ve hava kargo teslimatı. Depolama ve envanter yönetimi. Belgeler ve küçük paketler için hızlı teslimat",
    },
    backgroundUrl: "/images/card-1.svg",
    imageUrl: "/images/shipping.png",
    light: true,
  },
  {
  id: 2,
    title: {
      en: "Why Choose Us",
      tr: "Neden Bizi Seçmelisiniz",
    },
    text: {
      en: "Reliability and on-time delivery. Personalized approach for every client. Competitive pricing. 24/7 customer support.",
      tr: "Güvenilirlik ve zamanında teslimat. Her müşteri için kişiselleştirilmiş yaklaşım. Rekabetçi fiyatlandırma. 24/7 müşteri desteği",
    },
    backgroundUrl: "/images/card-2.svg",
    imageUrl: "/images/24-7.png",
    light: false,
  },
  {
    id: 3,
    title: {
      en: "Our Coverage",
      tr: "Kapsamımız",
    },
    text: {
      en: "We serve clients that work with international partners in the CIS, Europe, Turkey, China, and more. Wherever your cargo goes — it’s in safe hands",
      tr: "BDT, Avrupa, Türkiye, Çin ve daha birçok ülkede uluslararası ortaklarla çalışan müşterilere hizmet veriyoruz. Kargonuz nereye giderse gitsin emin ellerdedir",
    },
    backgroundUrl: "/images/card-3.svg",
    imageUrl: "/images/checklist.png",
  },
  {
    id: 4,
    title: {
      en: "Fast Responding",
      tr: "Hızlı Yanıt Verme",},
    text: {
      en: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      tr: "Kullanıcıların birden fazla kaynakta arama yapmak zorunda kalmadan sorularına hızlı bir şekilde yanıt bulmalarını sağlarız",
    },
    backgroundUrl: "/images/card-4.svg",
    imageUrl: "/images/mission.png",
    light: true,
  },
  {
    id: 5,
    title: {
      en: "How It Works",
      tr: "Nasıl Çalışır",
    },
    text: {
      en: "Submit a request via the website. Our team contacts you to confirm the details. Contract and paperwork are prepared and go through the process. We ship your cargo on schedule. You receive confirmation upon delivery.",
      tr: "Web sitesi üzerinden bir talep gönderin. Ekibimiz ayrıntıları teyit etmek için sizinle iletişime geçer. Sözleşme ve evraklar hazırlanır ve süreçten geçer. Kargonuzu zamanında gönderiyoruz. Teslimattan sonra onay alıyorsunuz",
    },
    backgroundUrl: "/images/card-5.svg",
    imageUrl: "/images/noconnection.png",
  },
  {
    id: 6,
    title: {
      en: "Storage Of Home Goods",
      tr: "Ev Eşyalarının Depolanması",
    },
    text: {
      en: "We provide secure storage and care for your household items. Whether you're moving, renovating, or simply creating more space, your belongings are kept safe, clean, and well-maintained—ready whenever you need them.",
      tr: "Ev eşyalarınız için güvenli depolama ve bakım sağlıyoruz. İster taşınıyor, ister tadilat yapıyor ya da sadece daha fazla alan yaratıyor olun, eşyalarınız güvenli, temiz ve bakımlı bir şekilde saklanır ve ihtiyaç duyduğunuz her an kullanıma hazırdır",
    },
    backgroundUrl: "/images/card-6.svg",
    imageUrl: "/images/convoy.png",
  },
];

export const aboutImages = [
  {
    src: "images/truck1.jpg",
    alt: "truck",
  },
  {
    src: "images/truck2.jpg",
    alt: "Taped Boxes",
  },
  {
    src: "images/team.png",
    alt: "Boxes",
  },
  {
    src: "images/companylogo3d.jpg",
    alt: "Reliable Connections",
  },  
];

export const socials = [
  {
    id: "0",
    title: "Whatsapp",
    iconUrl: whatsapp,
    url: "https://wa.me/905072412123",
  },
  {
    id: "1",
    title: "Email",
    iconUrl: email,
    url: "mailto:celallogistic@gmail.com",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/celallogistic?igsh=MWMwaTdmeGhwN3JnaQ%3D%3D",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/celallogistic",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://www.facebook.com/share/1ABDddGfjR/?mibextid=wwXIfr",
  },
];
