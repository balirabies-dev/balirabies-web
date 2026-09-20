export const site = {
  name: "BaliRabies",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  launchReady: process.env.NEXT_PUBLIC_LAUNCH_READY === "true",
};
export const doctorHref = /^\d{8,15}$/.test(site.whatsapp)
  ? `https://wa.me/${site.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20discuss%20care%20in%20Bali.`
  : "/contact";
export const services = [
  {
    title: "Doctor consultation",
    text: "A conversation about your situation, with clear next steps for your care.",
    href: "/contact",
    icon: "chat",
  },
  {
    title: "Rabies vaccination",
    text: "Explore vaccination before travel or after a possible exposure.",
    href: "/treatment/rabies-vaccination",
    icon: "syringe",
  },
  {
    title: "Immunoglobulin (RIG)",
    text: "Understand this additional treatment and when a doctor may recommend it.",
    href: "/treatment/immunoglobulin",
    icon: "shield",
  },
  {
    title: "Home & villa visits",
    text: "Ask about care where you stay, subject to location and availability.",
    href: "/treatment/home-visits",
    icon: "home",
  },
];
export const faqs = [
  [
    "Do I need a membership to request treatment?",
    "No. You can inquire about consultation and treatment without a membership. Treatment is charged separately; availability and costs must be confirmed by the team.",
  ],
  [
    "What should I do after an animal bite or scratch?",
    "Wash the wound with soap and running water for at least 15 minutes and seek medical attention promptly. Do not wait for symptoms or for an online reply.",
  ],
  [
    "Can I arrange a visit to my home or villa?",
    "You can request a home or villa visit. The team must confirm your location, clinical suitability, service availability, and any travel charges before a visit is arranged.",
  ],
  [
    "Does membership cover the cost of treatment?",
    "Membership is not health insurance. Vaccines, immunoglobulin, and other treatment may be charged separately. Plan terms and prices are awaiting approval.",
  ],
  [
    "I started vaccination elsewhere. Can I continue in Bali?",
    "Ask a doctor to review your vaccination record, including product names and dates. Your clinician should confirm the remaining schedule; do not change or restart it yourself.",
  ],
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
  {
    title: "WHO: Rabies fact sheet",
    url: "https://www.who.int/news-room/fact-sheets/detail/rabies",
  },
  {
    title: "WHO: Vaccinations and immunization",
    url: "https://www.who.int/teams/control-of-neglected-tropical-diseases/rabies/vaccinations-and-immunization",
  },
  {
    title: "WHO: Animal bites",
    url: "https://www.who.int/news-room/fact-sheets/detail/animal-bites",
  },
];
