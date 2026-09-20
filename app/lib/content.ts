export type Article = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; text: string }[];
  medical?: boolean;
};
export const articles: Record<string, Article> = {
  "rabies-guide": {
    title: "A little knowledge. A clearer next step.",
    eyebrow: "The rabies guide",
    intro:
      "Practical information for living in and exploring Bali. Start here, and speak with a healthcare professional about your own situation.",
    medical: true,
    sections: [
      {
        title: "Understand the risk",
        text: "Rabies is an infection transmitted through the saliva of infected mammals. Bites, scratches, and saliva reaching broken skin or the eyes or mouth can require assessment.",
      },
      {
        title: "Make prevention part of your plans",
        text: "Avoid touching or feeding unfamiliar animals. Discuss pre-exposure vaccination with a healthcare professional before travel or an extended stay.",
      },
      {
        title: "After possible exposure",
        text: "Wash the affected area with soap and running water for at least 15 minutes and seek prompt medical attention. Do not wait for symptoms.",
      },
    ],
  },
  "rabies-guide/before-exposure": {
    title: "Before the adventure, make a care plan.",
    eyebrow: "Prevention",
    intro:
      "A little preparation helps you make informed decisions about travel and everyday life in Bali.",
    medical: true,
    sections: [
      {
        title: "Give animals space",
        text: "Avoid feeding, petting, or handling unfamiliar mammals. Supervise children around animals and explain that even a friendly animal may bite.",
      },
      {
        title: "Discuss vaccination",
        text: "A clinician can discuss pre-exposure vaccination based on your activities, length of stay, and access to care. Previous vaccination does not remove the need for assessment after an exposure.",
      },
      {
        title: "Keep records accessible",
        text: "Carry your vaccination dates and product details. Know where you can seek medical care before heading to remote areas.",
      },
    ],
  },
  "rabies-guide/after-exposure": {
    title: "Bitten or scratched? Take the next step now.",
    eyebrow: "After a possible exposure",
    intro:
      "Seek prompt medical assessment. This website and its questionnaire cannot tell you whether treatment is needed.",
    medical: true,
    sections: [
      {
        title: "1. Wash the wound",
        text: "Wash and flush the area with soap and running water for at least 15 minutes.",
      },
      {
        title: "2. Seek medical attention",
        text: "Do not wait for symptoms or an online response. Visit an available healthcare facility for assessment. A clinician will consider wound care, vaccination, and whether immunoglobulin is indicated.",
      },
      {
        title: "3. Follow your care plan",
        text: "Bring previous vaccination records and follow the schedule provided by your clinician. If a dose is delayed, contact your healthcare provider for advice.",
      },
    ],
  },
  treatment: {
    title: "The right care starts with a conversation.",
    eyebrow: "Our care",
    intro:
      "Explore consultation, vaccination, immunoglobulin, and care at home. A clinician determines the treatment appropriate for you.",
    sections: [
      {
        title: "Consultation and treatment coordination",
        text: "Discuss your situation and ask about appropriate services. Partner-clinic arrangements and home visits require confirmation; no clinic partnership or availability is represented as confirmed in this preview.",
      },
      {
        title: "Support beyond the first visit",
        text: "Ask the team about follow-up planning and continuing a course started elsewhere. Keep a copy of your treatment record for every appointment.",
      },
    ],
  },
  "treatment/rabies-vaccination": {
    title: "Rabies vaccination, explained simply.",
    eyebrow: "Treatment · vaccination",
    intro:
      "Vaccines are used both before exposure and as part of care after a possible exposure. Your clinician will determine the appropriate course.",
    medical: true,
    sections: [
      {
        title: "Before exposure",
        text: "Pre-exposure vaccination may be considered for people at risk. Discuss your travel plans and activities with a healthcare professional.",
      },
      {
        title: "After exposure",
        text: "Post-exposure care may include vaccination and, when indicated, immunoglobulin. Even previously vaccinated people need an assessment after a possible exposure.",
      },
      {
        title: "Your follow-up schedule",
        text: "The schedule depends on your vaccination history and the clinical protocol used. Bring existing records and follow the dates given by your healthcare provider. Ask them what to do if you miss a dose.",
      },
    ],
  },
  "treatment/immunoglobulin": {
    title: "Understanding rabies immunoglobulin.",
    eyebrow: "Treatment · RIG / SAR",
    intro:
      "Rabies immunoglobulin is an additional part of post-exposure care for some patients. It is not a substitute for vaccination.",
    medical: true,
    sections: [
      {
        title: "Why it may be recommended",
        text: "Immunoglobulin provides antibodies as part of post-exposure care when indicated. A clinician decides whether it is appropriate based on the exposure and your vaccination history.",
      },
      {
        title: "Clinical assessment comes first",
        text: "The product, timing, and administration must be managed by a healthcare professional. Do not delay seeking care while trying to arrange a specific product online.",
      },
      {
        title: "Availability and pricing",
        text: "Supply and costs must be confirmed by the care provider. This website does not display live stock information or guarantee availability.",
      },
    ],
  },
  "treatment/home-visits": {
    title: "Care, closer to where you feel at home.",
    eyebrow: "Home & villa visits",
    intro:
      "Ask about a consultation at your accommodation in Bali. Every visit is subject to clinical suitability, location, and availability.",
    sections: [
      {
        title: "Tell us your general location",
        text: "Use the request form to share your area in Bali. A precise address can be arranged privately after the team confirms availability.",
      },
      {
        title: "Confirm the details first",
        text: "Ask about the clinician, available services, visit charges, and any treatment costs before confirming a visit.",
      },
      {
        title: "When to seek care elsewhere",
        text: "Do not wait for a home visit following a possible rabies exposure. Seek prompt medical assessment at an available healthcare facility.",
      },
    ],
  },
  about: {
    title: "For the life you’re building in Bali.",
    eyebrow: "About BaliRabies",
    intro:
      "A public care resource designed around international residents and travelers: understandable information, clear choices, and a practical route to care.",
    sections: [
      {
        title: "Clarity at every step",
        text: "Our aim is to make rabies-related information easier to navigate, from prevention to treatment questions and follow-up planning.",
      },
      {
        title: "A service taking shape",
        text: "This is a development preview. Clinical team information, service coverage, operating hours, and partner facilities are awaiting verification before launch.",
      },
      {
        title: "Information you can trace",
        text: "Educational content links to World Health Organization resources. It is general information and has not been represented as an individual assessment or a clinician-reviewed care plan.",
      },
    ],
  },
  privacy: {
    title: "Your information deserves care, too.",
    eyebrow: "Privacy · development preview",
    intro:
      "This describes the current preview. A complete privacy notice and verified data-controller contact must be approved before live requests are enabled.",
    sections: [
      {
        title: "Exposure guide",
        text: "Answers stay in the current page interaction. They are not added to URLs, stored in browser storage, or sent to an analytics service. Leaving or refreshing the page clears them. Printing creates a copy under your control.",
      },
      {
        title: "Appointment form",
        text: "The preview validates entries locally and does not transmit or save them. Do not enter sensitive medical information. No appointment request is delivered.",
      },
      {
        title: "External services",
        text: "Following an external source or a configured WhatsApp link takes you to another provider and its privacy terms. WhatsApp links contain only a general greeting. The hosting provider may process standard access logs.",
      },
    ],
  },
  terms: {
    title: "Clear expectations, from the beginning.",
    eyebrow: "Terms · draft for approval",
    intro:
      "This website is a development preview. These introductory terms require client and legal approval before launch.",
    sections: [
      {
        title: "Service requests",
        text: "A request is not a confirmed appointment. Clinical suitability, availability, location, and pricing must be agreed with the provider. The preview does not deliver requests or accept payments.",
      },
      {
        title: "Membership",
        text: "Membership concepts are provisional. No plan is offered for purchase, no entitlements are active, and no prices have been approved. Membership is not health insurance.",
      },
      {
        title: "Use of information",
        text: "Educational pages do not establish a doctor-patient relationship or provide a personal treatment plan. Seek professional assessment for medical concerns.",
      },
    ],
  },
  "medical-disclaimer": {
    title: "Information supports care. It does not replace it.",
    eyebrow: "Medical disclaimer",
    intro:
      "BaliRabies provides general educational information, not a diagnosis, risk classification, or prescription.",
    sections: [
      {
        title: "After a possible exposure",
        text: "Seek prompt professional assessment. Do not wait for symptoms, a form response, or completion of the exposure guide.",
      },
      {
        title: "Individual treatment",
        text: "A qualified healthcare professional must determine your treatment and schedule. The questionnaire summarizes what you enter and does not determine whether you are safe.",
      },
      {
        title: "Editorial status",
        text: "Content is based on linked WHO resources. No clinician review or accreditation is claimed. Clinical and operational approval is required before launch.",
      },
    ],
  },
};
for (const [slug, animal, detail] of [
  [
    "dog-bites",
    "dog bites",
    "Do not try to catch or handle the dog. If safely known, tell the clinician whether the animal has an owner.",
  ],
  [
    "monkey-bites-scratches",
    "monkey bites and scratches",
    "Avoid feeding monkeys or trying to retrieve items from them. Report bites and scratches to a healthcare professional.",
  ],
  [
    "cat-bites-scratches",
    "cat bites and scratches",
    "Even a small puncture or scratch should be discussed with a healthcare professional.",
  ],
  [
    "other-animals",
    "contact with other animals",
    "Tell the clinician which animal was involved, if known. Do not handle wildlife to identify it.",
  ],
])
  articles[`rabies-guide/${slug}`] = {
    title: `What to know about ${animal}.`,
    eyebrow: "Animal exposure guide",
    intro:
      "The animal alone does not determine the care you need. A healthcare professional should assess the contact and your medical history.",
    medical: true,
    sections: [
      { title: "Take practical steps", text: detail },
      {
        title: "After a bite or scratch",
        text: "Wash the wound with soap and running water for at least 15 minutes and seek prompt medical attention.",
      },
      {
        title: "Prepare for the assessment",
        text: "Note when the incident happened, the type of contact, and any prior rabies vaccinations. Do not delay care to collect this information.",
      },
    ],
  };
export const specialPages: Record<
  string,
  { title: string; intro: string; eyebrow: string }
> = {
  membership: {
    title: "A little more peace of mind for life in Bali.",
    eyebrow: "Membership",
    intro:
      "Explore the idea of ongoing support, easier care coordination, and member pricing. Membership is optional; treatment requests are open to everyone.",
  },
  contact: {
    title: "Let’s take the next step together.",
    eyebrow: "Contact & appointment requests",
    intro:
      "Ask about consultation, treatment, or membership. A request is the beginning of a conversation, not a confirmed booking.",
  },
  faq: {
    title: "A few things you might be wondering.",
    eyebrow: "Frequently asked questions",
    intro: "Clear answers about requesting care, membership, and follow-up.",
  },
  sources: {
    title: "Good information starts with trusted sources.",
    eyebrow: "Sources & editorial notes",
    intro:
      "Our educational pages draw on the World Health Organization resources below. Sources accessed on 20 September 2026; this is not a clinical review date.",
  },
  "exposure-guide": {
    title: "Organize the details. Prepare for care.",
    eyebrow: "Your exposure guide",
    intro:
      "Six simple steps to prepare a summary for a healthcare professional. This guide does not diagnose or decide whether treatment is needed.",
  },
};
export const allPaths = [
  ...Object.keys(articles),
  ...Object.keys(specialPages),
];
