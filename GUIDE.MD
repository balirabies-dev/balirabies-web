# BaliRabies Public Website — AI Agent Build Brief

Build the **public-facing BaliRabies website**, a professional rabies information and care service for international residents and travelers in Bali.

Use the client's reference images to understand the intended services, content, and user journeys. Treat them as visual and functional references, not finalized medical guidance, pricing, or instructions. Create a cohesive, polished website rather than reproducing every screenshot literally.

## 1. Objective and audience

The website should help visitors:

- Understand the available rabies-related services.
- Find clear information before or after an animal exposure.
- Contact a doctor easily.
- Explore vaccination, immunoglobulin, and home-visit services.
- Compare membership benefits and express interest in joining.
- Request treatment without requiring membership.

Prioritize international residents living in Bali, while remaining welcoming to short-term visitors. Use clear English and a calm, competent, approachable tone.

Balance medical credibility with a sense of place. Emphasize access to doctors, continuity of care, transparent services, and practical next steps.

## 2. Scope

Build the public website only.

Include:

- Public information and service pages.
- Membership presentation.
- An educational exposure questionnaire.
- Contact and treatment-request flows.
- Responsive navigation and footer.

Patient dashboards, doctor portals, inventory, invoices, clinical records, and business reporting are future phases. Keep the architecture suitable for adding them later, but do not build them now.

## 3. Visual direction: Coastal Teal

Use this palette as the foundation:

| Role | Color |
| --- | --- |
| Primary brand and main actions | `#006B68` |
| Main headings and body text | `#16343D` |
| Main background | `#F7FAF9` |
| Soft section backgrounds | `#E4F1EE` |
| Warm decorative accent | `#C7A879` |
| Cards and clean surfaces | `#FFFFFF` |
| Urgent actions and errors | `#B42332` |

You may refine these colors or add complementary shades where they improve contrast, hierarchy, or visual harmony. Maintain a recognizable Coastal Teal identity.

Create semantic design tokens for backgrounds, surfaces, text, borders, actions, hover states, focus states, and feedback.

Design principles:

- Predominantly light backgrounds with generous whitespace.
- Deep teal for primary actions and selected states.
- Dark ink for readable text.
- Pale mint for supporting sections.
- Sand accents used sparingly.
- Red reserved for urgent assistance and errors.
- Accessible contrast for text and controls.
- Status information communicated through labels and icons as well as color.

Use a restrained typographic system with a highly readable sans-serif body font. A complementary heading font is acceptable if it strengthens the clinical identity. Avoid decorative handwriting for important content.

Use consistent icons, subtle borders, moderate corner radii, and minimal shadows. Add restrained motion that respects reduced-motion preferences.

## 4. Photography and brand assets

Use relevant, high-quality imagery showing Bali, everyday life, consultations, or care at home.

- Choose images that support the section's purpose.
- Balance local scenery with medical credibility.
- Avoid excessive animal imagery that could make the brand resemble a veterinary service.
- Avoid graphic wounds on prominent public pages.
- Do not present stock or generated people as actual clinic staff.
- Do not invent qualifications, testimonials, affiliations, or accreditation.
- Use the client's approved logo if available. Otherwise, use a clean temporary BaliRabies wordmark and make it easy to replace.

Ensure image assets have appropriate usage rights and responsive sizing.

## 5. Information architecture

Use a clear public navigation:

**Home · Rabies Guide · Treatment · Membership · About**

Include a prominent **Talk to a Doctor** action and a visible route for visitors who have experienced an animal bite or scratch.

Suggested routes:

- `/`
- `/rabies-guide`
- `/rabies-guide/before-exposure`
- `/rabies-guide/after-exposure`
- `/rabies-guide/dog-bites`
- `/rabies-guide/monkey-bites-scratches`
- `/rabies-guide/cat-bites-scratches`
- `/rabies-guide/other-animals`
- `/exposure-guide`
- `/treatment`
- `/treatment/rabies-vaccination`
- `/treatment/immunoglobulin`
- `/treatment/home-visits`
- `/membership`
- `/about`
- `/faq`
- `/contact`
- `/privacy`
- `/terms`
- `/medical-disclaimer`
- `/sources`

Use reusable page templates where appropriate. Every exposed route should have meaningful content and working navigation.

## 6. Homepage

Build a complete homepage with the following sections.

### Header

- BaliRabies logo.
- Desktop navigation and accessible mobile menu.
- Primary doctor-contact action.

### Hero

Suggested headline:

> Make Bali home. Keep care close.

Suggested supporting copy:

> Personal doctor support, rabies treatment, and follow-up care for your life in Bali.

Primary action: **Talk to a Doctor**

Secondary action: **Explore Our Care**

Pair the copy with suitable photography or a thoughtfully composed visual. Make the service understandable immediately.

### Urgent-help strip

Provide a clearly differentiated entry point for visitors reporting an animal bite or scratch. Use concise wording and a direct contact action.

### Core services

Present:

- Doctor consultation.
- Rabies vaccination.
- Rabies immunoglobulin, labeled RIG/SAR where appropriate.
- Home or villa visits.
- Treatment coordination and follow-up.

### How care works

Show a simple journey:

1. Contact the team.
2. Discuss the situation with a doctor.
3. Arrange appropriate care.
4. Continue scheduled follow-up.

### Membership introduction

Explain the value of ongoing support, treatment coordination, and member pricing. Link to the full membership page.

### Educational resources

Link to prevention, after-exposure information, and treatment explanations.

### Reasons to choose the service

Use verified service benefits only. Do not invent ratings, patient counts, response-time promises, or clinical credentials.

### FAQ preview

Include a short, accessible accordion covering common service and membership questions.

### Closing contact section and footer

Include contact information, key navigation, and policy links.

## 7. Educational content

Create a structured Rabies Guide covering:

- General rabies information.
- Prevention and pre-exposure considerations.
- What to do after a possible exposure.
- Animal-specific scenarios.
- Vaccination and immunoglobulin explanations.
- Follow-up and treatment schedules.
- Common questions.

Use readable article layouts with headings, short paragraphs, related resources, and contextual contact actions.

Medical content must come from approved client material or verified authoritative sources. Do not treat the mockup copy as clinically validated. Clearly distinguish general information from an individual medical assessment.

Show source references and review dates only when they are real. Do not fabricate clinician review.

If including Bali statistics or a risk map, use a verified, dated dataset. If none is available, omit those features rather than inventing values or risk classifications.

## 8. Interactive exposure guide

Build an accessible, responsive six-step educational questionnaire:

1. Animal involved.
2. Type of contact.
3. Exposure details.
4. Previous rabies vaccination history.
5. When the incident happened.
6. Summary and next steps.

Support:

- Back and Next navigation.
- Progress indication.
- Required-answer validation.
- "Not sure" options.
- Preservation of answers while navigating.
- Editing answers from the summary.
- Restarting the questionnaire.
- A print-friendly summary.
- A doctor-contact action.

Do not invent a clinical decision algorithm. If an approved decision tree is supplied, implement it separately from the interface and test its branches. Otherwise, provide an answer summary and a general recommendation to obtain professional assessment, without declaring the user safe or prescribing treatment.

Do not place exposure answers in URLs or analytics events. Keep answers local to the current interaction unless the user explicitly submits them through an approved flow.

## 9. Treatment pages and requests

Explain the available services:

- Rabies vaccination, including pre-exposure and post-exposure contexts.
- Rabies immunoglobulin.
- Home or villa visits.
- Partner-clinic care.
- Consultation and follow-up.

Clearly communicate that suitability and treatment plans depend on clinical assessment.

Build a treatment-request form collecting only necessary information:

- Name.
- Preferred contact method.
- Email or phone.
- Requested service, including "Not sure."
- Preferred date.
- General location in Bali.
- Optional short message.
- Appropriate privacy acknowledgment.

Label the action **Request an Appointment** or **Request Treatment**. Explain that submission is a request and the team must confirm availability.

Do not show a confirmed booking unless an actual booking system supports it.

## 10. Membership page

Present:

- Membership purpose.
- Plan comparison.
- Benefits and exclusions.
- Member versus non-member access.
- Treatment pricing, if approved.
- How activation works.
- FAQs.
- A clear joining or inquiry action.

The references suggest fixed-term membership, rabies-related consultations, treatment coordination, preferential treatment pricing, and priority support. Some plans may include a general consultation.

However, the reference images contain conflicting prices and entitlements. Keep plan data centralized and configurable. Do not silently choose between conflicting values.

Until commercial details are approved:

- Use clearly identified draft data in development.
- Do not publish invented prices.
- Use an inquiry action if checkout is not available.

Explicitly distinguish membership benefits from separately charged treatment. Do not imply that membership is health insurance or covers all medical expenses.

## 11. Contact and integrations

Make contact details centrally configurable.

Support WhatsApp contact links when the real clinic number is available. Keep any prefilled message general and avoid automatically inserting sensitive health information.

Do not invent phone numbers, email addresses, clinic locations, or operating hours.

If production integrations are unavailable:

- Build the interface and validation.
- Provide a clearly labeled development/demo state.
- Document what must be connected.
- Never display a false "sent," "paid," or "booked" confirmation.

Do not add a language selector unless alternate-language content actually exists.

## 12. Responsive design and accessibility

Design for mobile, tablet, and desktop.

- Keep primary contact actions easy to find on mobile.
- Use readable text sizes and comfortable touch targets.
- Avoid horizontal overflow.
- Ensure forms, menus, accordions, and the questionnaire work with a keyboard.
- Use semantic HTML, visible focus states, descriptive labels, and helpful validation.
- Target WCAG 2.2 AA.
- Respect reduced-motion settings.
- Provide meaningful alternative text for images.
- Keep urgent-contact access available without requiring account creation or questionnaire completion.

## 13. Technical implementation

Inspect the existing project and follow its conventions. If starting from scratch, choose a maintainable modern framework suitable for a content-rich website and explain the choice briefly.

Use:

- Reusable components and shared design tokens.
- Structured content files or the project's existing CMS.
- Centralized service, membership, contact, and FAQ data.
- Clear separation of questionnaire logic from presentation.
- Responsive images and optimized font loading.
- Minimal client-side JavaScript where possible.
- Environment variables for integration settings and secrets.
- Server-side validation if forms have a backend.

Implement page metadata, social previews, canonical URLs, sitemap, robots configuration, and useful internal linking. Only add structured data supported by verified business information.

## 14. Verification and delivery

Before finishing:

- Check all public routes and navigation.
- Test mobile and desktop layouts.
- Verify keyboard navigation and form validation.
- Test questionnaire navigation and any approved decision rules.
- Check text contrast and focus visibility.
- Confirm there are no broken images, dead buttons, or console errors.
- Verify that forms accurately represent whether data was submitted.
- Review medical, pricing, and business claims for unsupported content.
- Run the project's relevant build, lint, and test checks.

Deliver:

1. The implemented public website.
2. Instructions to run and preview it.
3. A concise summary of the design and functionality.
4. A list of client inputs still needed before launch.
5. A clear account of which integrations are live and which remain in demo mode.

Proceed with reasonable design and implementation decisions. Ask only for information that blocks meaningful progress. Build and verify the site locally; publish only when explicitly requested.

The result should feel like a cohesive, credible healthcare service designed for people living in Bali, with Coastal Teal as its defining visual identity.
