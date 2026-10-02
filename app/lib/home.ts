import type { Locale } from "./i18n/config";

export const bpbdSource = "https://bpbd.baliprov.go.id/article/3964/informasi-penangan-rabies-di-provinsi-bali-2026";
export const reportingPeriod = "1 Jan–4 Sep 2026";
export const quickLinks = [
  { title: "Learn About Rabies", text: "What it is, how it spreads, the animals involved, and what travelers should know about rabies in Bali.", href: "/rabies-guide", cta: "Explore Rabies" },
  { title: "Before You Travel", text: "Learn how to reduce your risk and whether pre-exposure rabies vaccination may be right for your trip.", href: "/rabies-guide/before-exposure", cta: "Explore Prevention" },
  { title: "What To Do After Exposure", text: "Step-by-step guidance on what to do after an animal bite, scratch, or other possible rabies exposure.", href: "/rabies-guide/after-exposure", cta: "See the Steps" },
  { title: "Treatment Options", text: "Learn about rabies vaccination, post-exposure prophylaxis (PEP), rabies immunoglobulin (RIG), and treatment schedules.", href: "/treatment", cta: "Learn More" },
  { title: "FAQs", text: "Answers to common questions travelers have about rabies, animal bites, vaccination, and treatment in Bali.", href: "/faq", cta: "View FAQs" },
];
export const biteSteps = [
  { title: "Wash the wound immediately", label: "Wash the wound", text: "Wash and flush the wound thoroughly with soap and running water for at least 15 minutes. Do not wait until you reach a clinic or hospital before washing the wound." },
  { title: "Clean the wound", label: "Apply antiseptic", text: "After thorough washing, an iodine-containing antiseptic can be applied if available. Avoid applying irritants or traditional substances to the wound." },
  { title: "Get assessed as soon as possible", label: "Seek medical advice", text: "Seek medical care promptly after a bite, scratch, or saliva exposure to broken skin or mucous membranes. A healthcare professional can assess whether rabies PEP is recommended." },
  { title: "Post-exposure vaccination may be needed", label: "Rabies vaccination", text: "Depending on the exposure and your previous rabies vaccination history, rabies vaccine may be recommended as part of post-exposure prophylaxis (PEP)." },
  { title: "RIG may be needed for severe exposures", label: "Rabies immunoglobulin", text: "Rabies immunoglobulin (RIG) may be indicated for Category III exposures, including bites or scratches through the skin, or saliva on broken skin or mucous membranes. Previous vaccination history also affects whether RIG is needed." },
];
// Values transcribed from the client-supplied BPBD snapshot, dated 4 September 2026.
export const baliStats = [
  { value: "51,011", title: "Animal-bite exposures", detail: "Rabies-transmitting animal-bite exposures (GHPR)" },
  { value: "375", title: "Cases in animals", detail: "Confirmed animal rabies cases" },
  { value: "37,903", title: "Vaccine administrations", detail: "Rabies vaccine (VAR) administrations" },
  { value: "7", title: "Reported deaths", detail: "Reported human deaths from rabies" },
  { value: "213", title: "Bites per day", detail: "Reported average animal-bite exposures" },
];

export const regionalExposures = [
  { name: "Badung", exposures: 9556, daily: 40, x: 307, y: 225 },
  { name: "Karangasem", exposures: 6566, daily: 28, x: 486, y: 135 },
  { name: "Denpasar", exposures: 6480, daily: 27, x: 352, y: 258 },
  { name: "Gianyar", exposures: 5712, daily: 24, x: 366, y: 174 },
  { name: "Tabanan", exposures: 5596, daily: 23, x: 242, y: 169 },
  { name: "Jembrana", exposures: 5564, daily: 23, x: 112, y: 137 },
  { name: "Buleleng", exposures: 5288, daily: 22, x: 244, y: 76 },
  { name: "Klungkung", exposures: 3558, daily: 15, x: 448, y: 221 },
  { name: "Bangli", exposures: 2681, daily: 11, x: 387, y: 104 },
];
export const monthlyExposures = [
  { month: "January", short: "Jan", value: 6689 },
  { month: "February", short: "Feb", value: 5683 },
  { month: "March", short: "Mar", value: 6688 },
  { month: "April", short: "Apr", value: 6276 },
  { month: "May", short: "May", value: 6239 },
  { month: "June", short: "Jun", value: 7136 },
  { month: "July", short: "Jul", value: 6763 },
  { month: "August", short: "Aug", value: 5537 },
];
export const annualDeaths = [
  { year: "2022", value: 22 },
  { year: "2023", value: 9 },
  { year: "2024", value: 7 },
  { year: "2025", value: 16 },
  { year: "2026", value: 7 },
];
export const formatCount = (value: number, locale: Locale = "en") => value.toLocaleString(locale === "id" ? "id-ID" : "en-US");
