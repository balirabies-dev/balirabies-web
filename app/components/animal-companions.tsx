/** Decorative, project-native line artwork. No image downloads or client JS. */
export default function AnimalCompanions() {
  return (
    <div className="animal-companions" aria-hidden="true">
      <svg viewBox="0 0 240 130" fill="none" focusable="false">
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* A seated dog, with a relaxed floppy ear. */}
          <path className="dog-tail" d="M54 107C31 109 22 94 28 82C31 76 35 77 34 83C31 92 39 96 51 96" />
          <path d="M48 111C44 99 48 85 55 75L58 62C47 59 45 48 48 40L58 29C64 23 77 23 84 29L93 38L104 42C107 43 108 47 105 50L97 57L83 61L84 77C96 88 100 99 96 111H48Z" />
          <path d="M58 30C49 41 51 56 60 61C65 62 69 56 69 49V35M76 78L74 111M86 91L88 111M57 111H67M88 111H102" />
          <path d="M59 67L82 70" />
          <circle cx="85" cy="40" r="1.5" fill="currentColor" stroke="none" />
          <path d="M102 43L106 45" />
          {/* A seated cat, with pointed ears and a curled tail. */}
          <path className="cat-tail" d="M180 109C201 113 215 104 214 90C214 78 205 76 202 83C199 91 207 94 208 87" />
          <path d="M141 111C137 98 140 81 148 73L147 61C140 57 137 50 140 43L138 27L153 35C159 33 165 33 171 35L184 27L182 45C185 52 181 58 175 61L174 74C183 84 189 99 183 111H141Z" />
          <path d="M154 79L153 111M167 79L168 111M145 111H158M165 111H179M158 53L162 56L166 53M162 56V60M145 52L132 49M145 57L132 58M177 52L190 49M177 57L190 58" />
          <path d="M150 46L153 47M170 46L167 47" />
        </g>
        <path d="M36 118H203" stroke="currentColor" strokeOpacity=".25" strokeLinecap="round" />
      </svg>
    </div>
  );
}
