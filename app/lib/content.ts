import { biteSteps } from "./home";

export type Article = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; text: string }[];
  medical?: boolean;
};
export const articles: Record<string, Article> = {
  "rabies-guide": {
    title: "Learn about rabies in Bali.",
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
    title: "Before you travel: reduce your rabies risk.",
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
    sections: biteSteps.map((step, index) => ({ title: `${index + 1}. ${step.title}`, text: step.text })),
  },
  treatment: {
    title: "Rabies treatment options.",
    eyebrow: "Treatment",
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
    title: "Clear rabies information for travelers.",
    eyebrow: "About BaliRabies",
    intro:
      "BaliRabies is an educational resource for travelers in Bali, covering rabies prevention, animal exposure, vaccination, and treatment.",
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
  "title": "Privacy Policy",
  "eyebrow": "Privacy Policy",
  "intro": "At BaliRabies, we respect your privacy and are committed to protecting the information you provide when using our website. This policy explains what information we may collect, how we use it, and the choices you have.",
  "sections": [
    {
      "title": "Review status",
      "text": "This policy is a client-supplied draft for review. The current appointment form validates locally and does not send or store requests. Operator identity, contact details, retention periods, and any live integrations must be confirmed before launch. Last updated: September 2026."
    },
    {
      "title": "1. About BaliRabies",
      "text": "BaliRabies is an educational website providing information about rabies prevention, animal exposures, vaccination, post-exposure prophylaxis (PEP), rabies immunoglobulin (RIG), and related healthcare services for travelers in Bali.\nFor the purposes of this Privacy Policy, “BaliRabies,” “we,” “us,” or “our” refers to the operator of this website.\nWebsite: BaliRabies\nContact: Contact email awaiting confirmation\nWhatsApp: WhatsApp number awaiting confirmation"
    },
    {
      "title": "2. Information We Collect",
      "text": "We may collect information that you voluntarily provide when you contact us or request assistance.\nThis may include:\nName \nEmail address \nWhatsApp or telephone number \nCountry of residence \nTravel-related information \nInformation about an animal bite, scratch, or other potential rabies exposure \nPrevious rabies vaccination information \nOther information you choose to provide when requesting assistance \nWebsite Usage Information\nWe may also automatically collect limited technical information when you visit our website, such as:\nIP address \nBrowser type \nDevice type \nPages visited \nApproximate geographic location \nReferring website \nDate and time of visits \nGeneral website usage and performance information \nThis information may be collected through cookies, analytics tools, or similar technologies."
    },
    {
      "title": "3. Health Information",
      "text": "If you contact us regarding a potential rabies exposure, you may choose to provide information about your bite, scratch, vaccination history, or other health-related circumstances.\nPlease do not provide more personal or medical information than is necessary for your inquiry.\nInformation you provide will be used only for the purpose of responding to your inquiry and assisting with your request.\nBaliRabies does not use information submitted through the website to make an automated medical diagnosis or treatment decision."
    },
    {
      "title": "4. How We Use Your Information",
      "text": "We may use information you provide to:\nRespond to your questions and inquiries \nProvide information about rabies vaccination and treatment \nAssist with inquiries regarding PEP or RIG \nCommunicate with you through WhatsApp, telephone, or email \nArrange or coordinate requested healthcare services, where applicable \nImprove our website and educational content \nUnderstand how visitors use our website \nMaintain website security and prevent misuse \nComply with applicable legal and regulatory requirements \nWe will not use your information for unrelated purposes without an appropriate legal basis or your consent where required."
    },
    {
      "title": "5. WhatsApp and Third-Party Communication Services",
      "text": "If you choose to contact BaliRabies through WhatsApp, your communication will also be subject to WhatsApp's own privacy policies and terms.\nWe do not control how WhatsApp processes information on its platform.\nPlease avoid sending unnecessary sensitive medical information through WhatsApp."
    },
    {
      "title": "6. Cookies and Analytics",
      "text": "BaliRabies may use cookies and similar technologies to help the website function properly and to understand how visitors interact with the website.\nThese technologies may be used for:\nWebsite functionality \nTraffic measurement \nWebsite performance \nSecurity \nUnderstanding visitor behavior \nImproving user experience \nThe review build does not load Google Analytics. Any analytics service enabled before launch will be documented here.\nThese services may collect information about your use of the website in accordance with their respective privacy policies.\nYou may be able to control or disable cookies through your browser settings."
    },
    {
      "title": "7. How We Share Information",
      "text": "We do not sell or rent your personal information.\nWe may share information when reasonably necessary with:\nHealthcare providers involved in fulfilling a service you have requested \nService providers that help us operate the website or communicate with users \nWebsite analytics and technology providers \nProfessional advisers where necessary \nGovernment authorities or other parties when required by applicable law \nWhere appropriate, we aim to limit information shared to what is reasonably necessary for the relevant purpose."
    },
    {
      "title": "8. Data Retention",
      "text": "We retain personal information only for as long as reasonably necessary for the purposes described in this Privacy Policy, including responding to inquiries, providing requested services, maintaining appropriate records, resolving disputes, and complying with legal obligations.\nThe length of time information is retained may depend on the nature of the information and the purpose for which it was collected."
    },
    {
      "title": "9. Data Security",
      "text": "We take reasonable technical and organizational measures to protect personal information against unauthorized access, disclosure, alteration, loss, or misuse.\nHowever, no website, online communication service, or electronic transmission can be guaranteed to be completely secure.\nYou should therefore avoid submitting unnecessary sensitive information through online forms or messaging services."
    },
    {
      "title": "10. International Data Transfers",
      "text": "Because BaliRabies may use third-party technology, communication, hosting, analytics, or other service providers, your information may be processed or stored in countries outside Indonesia.\nWhere applicable, we will take reasonable steps to ensure that personal information is handled in accordance with applicable privacy and data protection requirements."
    },
    {
      "title": "11. Your Privacy Rights",
      "text": "Depending on applicable law, you may have rights regarding your personal information, including the right to:\nRequest access to personal information we hold about you \nRequest correction of inaccurate information \nRequest deletion of information where legally permitted \nWithdraw consent where processing is based on consent \nObject to or request restriction of certain processing \nRequest information about how your personal information is processed \nTo exercise a privacy-related right, please contact us using the details below.\nWe may need to verify your identity before processing certain requests."
    },
    {
      "title": "12. Children's Privacy",
      "text": "BaliRabies is primarily intended for travelers and adults seeking information about rabies prevention and treatment.\nWe do not knowingly collect personal information from children through the website for purposes unrelated to providing requested healthcare assistance.\nIf you believe that a child has provided personal information to us without appropriate consent, please contact us so that we can review the situation."
    },
    {
      "title": "13. Third-Party Websites",
      "text": "Our website may contain links to external websites, including healthcare providers, government agencies, medical organizations, maps, booking services, or social media platforms.\nWe are not responsible for the privacy practices or content of third-party websites.\nWe recommend reviewing the privacy policy of any external website before providing personal information."
    },
    {
      "title": "14. Changes to This Privacy Policy",
      "text": "We may update this Privacy Policy from time to time to reflect changes to our services, technology, or applicable legal requirements.\nThe updated version will be published on this page together with the “Last Updated” date."
    }
  ]
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
    title: "Medical Disclaimer",
    eyebrow: "Medical Disclaimer",
    intro: "BaliRabies provides general educational information about rabies prevention, exposure, vaccination, and treatment. The information on this website is not a substitute for an examination, diagnosis, or individualized medical advice from a qualified healthcare professional.",
    sections: [
      { title: "Prompt assessment matters", text: "Rabies exposure should be treated as a medical concern requiring prompt assessment. Treatment decisions, including whether rabies vaccine or rabies immunoglobulin is indicated, depend on the type of exposure, the animal involved, the circumstances of the exposure, and the individual’s previous vaccination history." },
      { title: "Information and updates", text: "Information on this website is based on available public-health and clinical guidance and may be updated as recommendations change." },
      { title: "After a possible exposure", text: "If you have been bitten, scratched, or otherwise exposed to a potentially rabid animal, seek medical attention promptly." },
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
  "rabies-in-bali": {
    title: "Rabies in Bali: data and regional overview.",
    eyebrow: "Rabies in Bali",
    intro: "A dated snapshot of reported animal-bite exposures, animal cases, vaccine administrations, and deaths — with regional counts and historical trends.",
  },
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
      "Ask about rabies vaccination, immunoglobulin, or post-exposure treatment. A request is the beginning of a conversation, not a confirmed booking.",
  },
  faq: {
    title: "A few things you might be wondering.",
    eyebrow: "Frequently asked questions",
    intro: "Answers about animal bites, rabies vaccination, post-exposure treatment, and travel in Bali.",
  },
  sources: {
    title: "Good information starts with trusted sources.",
    eyebrow: "Sources & editorial notes",
    intro:
      "Explore the WHO, CDC, and Bali government references supporting this website. The Bali snapshot is dated 4 September 2026.",
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
