// Educational data only. No clinical classification or treatment algorithm.
export const questions = [
  {
    title: "Which animal was involved?",
    label: "Animal involved",
    hint: "Choose the closest match.",
    options: ["Dog", "Monkey", "Cat", "Bat", "Other animal", "Not sure"],
  },
  {
    title: "What kind of contact happened?",
    label: "Type of contact",
    hint: "Choose the option that best describes the incident.",
    options: [
      "Bite",
      "Scratch",
      "Lick or saliva contact",
      "Touching or feeding",
      "Other contact",
      "Not sure",
    ],
  },
  {
    title: "What did you notice?",
    label: "Exposure details",
    hint: "You do not need to examine or touch the wound again to answer.",
    options: [
      "Broken skin or bleeding",
      "A mark without visible bleeding",
      "Saliva near eyes, mouth, or broken skin",
      "No visible mark",
      "Not sure",
    ],
  },
  {
    title: "Have you had rabies vaccinations before?",
    label: "Vaccination history",
    hint: "A clinician will need to review the actual records.",
    options: [
      "Completed a previous course",
      "Started but did not complete a course",
      "No previous rabies vaccination",
      "Not sure",
    ],
  },
  {
    title: "When did the incident happen?",
    label: "Time of incident",
    hint: "Seek assessment promptly, even if time has already passed.",
    options: [
      "Today",
      "Yesterday",
      "2–7 days ago",
      "More than a week ago",
      "Not sure",
    ],
  },
];
export function hasAnswer(answers: string[], step: number) {
  return questions[step]?.options.includes(answers[step]) ?? false;
}
