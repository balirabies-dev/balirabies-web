/* eslint-disable @typescript-eslint/no-require-imports -- Standalone CommonJS QA runner resolves optional external tooling. */
// Run with QA_NODE_MODULES pointing to a directory containing playwright and @axe-core/playwright.
const { chromium } = require(`${process.env.QA_NODE_MODULES}/playwright`);
const AxeBuilder = require(
  `${process.env.QA_NODE_MODULES}/@axe-core/playwright`,
).default;
const assert = require("node:assert/strict");
(async () => {
  const browser = await chromium.launch({
    executablePath:
      process.env.CHROME_PATH ||
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
  });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  const base = process.env.TEST_URL || "http://localhost:3001";
  const xml = await (await page.request.get(`${base}/sitemap.xml`)).text();
  const paths = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(
    (m) => new URL(m[1]).pathname,
  );
  for (const path of paths) {
    const response = await page.goto(base + path);
    assert.equal(response.status(), 200, path);
    assert.equal(await page.locator("h1").count(), 1, path);
  }
  console.log(`PASS ${paths.length} public routes`);
  for (const path of [
    "/",
    "/contact",
    "/membership",
    "/exposure-guide",
    "/rabies-guide/after-exposure",
  ]) {
    await page.goto(base + path);
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    console.log(
      "AXE",
      path,
      JSON.stringify(
        results.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      ),
    );
    assert.equal(results.violations.length, 0, `Accessibility ${path}`);
  }
  await page.goto(base + "/exposure-guide");
  await page.getByRole("button", { name: "Next →", exact: false }).click();
  assert.match(await page.locator(".questionnaire").getByRole("alert").textContent(), /choose an answer/);
  for (let i = 0; i < 5; i++) {
    await page.getByLabel("Not sure", { exact: true }).check();
    await page
      .getByRole("button", {
        name: i === 4 ? "View summary" : "Next →",
        exact: false,
      })
      .click();
  }
  assert.equal(await page.locator(".answer-summary dd").count(), 5);
  await page
    .getByRole("button", { name: "Edit Animal involved", exact: true })
    .click();
  assert(await page.getByLabel("Not sure", { exact: true }).isChecked());
  await page.getByLabel("Dog", { exact: true }).check();
  await page.getByRole("button", { name: "Next →", exact: false }).click();
  assert(await page.getByLabel("Not sure", { exact: true }).isChecked());
  for (let i = 1; i < 5; i++)
    await page
      .getByRole("button", {
        name: i === 4 ? "View summary" : "Next →",
        exact: false,
      })
      .click();
  assert.equal(
    await page.locator(".answer-summary dd").first().textContent(),
    "Dog",
  );
  await page.emulateMedia({ media: "print" });
  assert(await page.locator(".answer-summary").isVisible());
  assert(!(await page.locator(".site-header").isVisible()));
  await page.emulateMedia({ media: "screen" });
  await page.getByRole("button", { name: "Restart questionnaire" }).click();
  assert.equal(await page.locator("input:checked").count(), 0);
  await page.getByLabel("Dog", { exact: true }).check();
  await page.reload();
  assert.equal(await page.locator("input:checked").count(), 0);
  assert.equal(
    await page.evaluate(() => localStorage.length + sessionStorage.length),
    0,
  );
  console.log(
    "PASS questionnaire validation, navigation, editing, restart, print and privacy",
  );
  await page.goto(base + "/contact");
  await page.getByRole("button", { name: "Request an Appointment" }).click();
  assert.equal(await page.getByRole("status").count(), 0);
  await page.getByLabel("Full name").fill("Preview User");
  await page.getByLabel("Email address").fill("preview@example.com");
  await page.getByLabel("Requested service").selectOption("Not sure");
  await page.getByLabel("General location").fill("Ubud");
  await page.getByRole("checkbox").check();
  let submissions = 0;
  page.on("request", (r) => {
    if (r.method() === "POST") submissions++;
  });
  await page.getByRole("button", { name: "Request an Appointment" }).click();
  assert.match(
    await page.getByRole("status").textContent(),
    /Nothing was sent or booked/,
  );
  assert.equal(submissions, 0);
  console.log("PASS form validation and honest demo state");
  await page.goto(base + "/");
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").textContent(), "Skip to content");
  await page.locator("details").first().locator("summary").focus();
  await page.keyboard.press("Enter");
  assert(
    await page
      .locator("details")
      .first()
      .evaluate((e) => e.open),
  );
  await page.screenshot({
    path: "/private/tmp/balirabies-desktop.png",
    fullPage: true,
  });
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      await page.goto(base + path);
      assert(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
        `Overflow ${width} ${path}`,
      );
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/");
  await page.screenshot({
    path: "/private/tmp/balirabies-mobile.png",
    fullPage: true,
  });
  await page.getByRole("button", { name: "Menu" }).click();
  assert(await page.getByRole("navigation").isVisible());
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "Membership", exact: true })
    .click();
  assert.equal(new URL(page.url()).pathname, "/membership");
  assert(!(await page.getByRole("navigation").isVisible()));
  await page.goto(base + "/");
  await page.locator(".hero-visual img").waitFor();
  assert(
    await page
      .locator(".hero-visual img")
      .evaluate((img) => img.complete && img.naturalWidth > 0),
  );
  assert.equal(
    (await page.request.get(base + "/not-a-real-page")).status(),
    404,
  );
  assert.equal(errors.length, 0, errors.join("\n"));
  console.log(
    "PASS responsive routes, keyboard, mobile menu, image, 404 and browser errors",
  );
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
