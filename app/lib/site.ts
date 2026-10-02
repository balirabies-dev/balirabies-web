const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.balirabies.com").origin;
const launchReady = process.env.NEXT_PUBLIC_LAUNCH_READY === "true";
const publicDomain = !["localhost", "127.0.0.1", "[::1]"].includes(new URL(siteUrl).hostname);
export const site = {
  name: "BaliRabies",
  url: siteUrl,
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  available24Hours: process.env.NEXT_PUBLIC_AVAILABLE_24_HOURS === "true",
  launchReady,
  indexingEnabled: launchReady && publicDomain && process.env.VERCEL_ENV !== "preview",
};
export const doctorHref = /^\d{8,15}$/.test(site.whatsapp)
  ? `https://wa.me/${site.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20discuss%20care%20in%20Bali.`
  : "/contact";
export const services = [
  {
    title: "Doctor consultation",
    text: "Personal advice and clear next steps.",
    href: "/contact",
    icon: "chat",
  },
  {
    title: "Rabies vaccination",
    text: "Before travel or after a possible exposure.",
    href: "/treatment/rabies-vaccination",
    icon: "syringe",
  },
  {
    title: "Immunoglobulin (RIG)",
    text: "Additional treatment when clinically indicated.",
    href: "/treatment/immunoglobulin",
    icon: "shield",
  },
  {
    title: "Home & villa visits",
    text: "Care where you stay, subject to availability.",
    href: "/treatment/home-visits",
    icon: "home",
  },
];
export const faqs = [
  [
    "What should I do after an animal bite or scratch?",
    "Wash the wound thoroughly with soap and running water for at least 15 minutes and seek medical assessment promptly. Do not wait for symptoms or an online reply."
  ],
  [
    "Do I still need care if I was vaccinated before traveling?",
    "Yes. Previous vaccination does not remove the need for assessment after a possible exposure. Bring your vaccination records so a clinician can decide which post-exposure treatment is appropriate."
  ],
  [
    "What is the difference between rabies vaccine and RIG?",
    "Rabies vaccine helps your immune system produce protection. Rabies immunoglobulin (RIG) provides antibodies when indicated as part of post-exposure care. A clinician decides what you need based on the exposure and vaccination history."
  ],
  [
    "Can a scratch or saliva contact count as an exposure?",
    "Scratches and saliva reaching broken skin or the eyes or mouth can require assessment, even when there is no obvious bite. Describe the contact to a healthcare professional."
  ],
  [
    "Can I continue a vaccination course started elsewhere?",
    "A clinician should review the vaccine product, dose dates, and previous records before confirming your remaining schedule. Do not change or restart the course yourself."
  ],
  [
    "Should I get vaccinated before visiting Bali?",
    "Ask a travel-health professional about your itinerary, animal contact, and access to prompt care. Pre-exposure vaccination may be appropriate for some travelers; it does not replace treatment assessment after exposure."
  ]
];
export const membershipPlans = [
  {
    name: "Care essentials",
    audience: "For a little more continuity",
    benefits: [
      "Rabies-related consultation support",
      "Help coordinating treatment",
      "Follow-up planning",
    ],
    status: "Draft concept · terms pending",
  },
  {
    name: "Bali living",
    audience: "For your longer stay",
    benefits: [
      "All proposed essential benefits",
      "Preferential treatment pricing",
      "General consultation option",
    ],
    status: "Draft concept · terms pending",
  },
];
export const sources = [
  { title: "WHO: Rabies fact sheet", publisher: "World Health Organization", url: "https://www.who.int/news-room/fact-sheets/detail/rabies" },
  { title: "WHO: Vaccinations and immunization", publisher: "World Health Organization", url: "https://www.who.int/teams/control-of-neglected-tropical-diseases/rabies/vaccinations-and-immunization" },
  { title: "WHO: Animal bites", publisher: "World Health Organization", url: "https://www.who.int/news-room/fact-sheets/detail/animal-bites" },
  { title: "WHO: Rabies vaccines position paper — April 2018", publisher: "World Health Organization", url: "https://www.who.int/publications/i/item/who-wer9316" },
  { title: "BPBD: Informasi Penangan Rabies di Provinsi Bali 2026", publisher: "BPBD Provinsi Bali", url: "https://bpbd.baliprov.go.id/article/3964/informasi-penangan-rabies-di-provinsi-bali-2026" },
  { title: "CDC: Rabies pre-exposure prophylaxis guidance", publisher: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/rabies/hcp/clinical-care/pre-exposure-prophylaxis.html" },
  { title: "CDC: Rabies post-exposure prophylaxis guidance", publisher: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/rabies/hcp/clinical-care/post-exposure-prophylaxis.html" },
  { title: "CDC Yellow Book: Rabies", publisher: "Centers for Disease Control and Prevention", url: "https://www.cdc.gov/yellow-book/hcp/travel-associated-infections-diseases/rabies.html" },
  { title: "CDC: Indonesia — Travelers’ Health", publisher: "Centers for Disease Control and Prevention", url: "https://wwwnc.cdc.gov/travel/destinations/traveler/none/indonesia" },
];
