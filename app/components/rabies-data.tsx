import { translateTree } from "../lib/i18n/translate";
import type { Locale } from "../lib/i18n/config";
import Link from "next/link";
import { baliStats, bpbdSource, formatCount, regionalExposures, reportingPeriod } from "../lib/home";
import BaliMap from "./bali-map";
import RabiesTrends from "./rabies-trends";

export function RabiesStats({ locale = "en" }: { locale?: Locale }) {
  return translateTree((
    <>
      <dl className="rabies-stats">
        {baliStats.map((stat) => (
          <div key={stat.title}>
            <dt>{stat.title}</dt><dd>{stat.value}</dd><p>{stat.detail}</p><span>{reportingPeriod}</span>
          </div>
        ))}
      </dl>
      <p className="data-source">Source: Bali Provincial Government, Tim Koordinasi (Tikor) Daerah Pencegahan dan Pengendalian Zoonosis &amp; Penyakit Infeksi Baru, via <a href={bpbdSource} target="_blank" rel="noreferrer">BPBD Provinsi Bali ↗</a>. Updated 4 September 2026.</p>
    </>
  ), locale);
}

export default function RabiesData({ locale = "en" }: { locale?: Locale }) {
  return translateTree((
    <div className="data-page">
      <p>This snapshot uses the supplied Bali government figures, dated 4 September 2026. It is not a live surveillance feed or a measure of an individual traveler’s risk.</p>
      <RabiesStats locale={locale} />
      <section className="subsection" id="regional-data">
        <h2>Animal-bite exposures by regency and city.</h2>
        <p>Reported rabies-transmitting animal-bite exposures (GHPR), {reportingPeriod}. Select a region to see its reported count and daily average.</p>
        <BaliMap />
        <div className="table-scroll regional-table"><table><caption>Regional GHPR counts and daily averages from the supplied snapshot</caption><thead><tr><th scope="col">Regency / city</th><th scope="col">Reported exposures</th><th scope="col">Reported bites / day</th></tr></thead><tbody>{regionalExposures.map((region) => <tr key={region.name}><th scope="row">{region.name}</th><td>{formatCount(region.exposures, locale)}</td><td>{region.daily}</td></tr>)}</tbody><tfoot><tr><th scope="row">Published Bali total</th><td>51,011</td><td>213</td></tr></tfoot></table></div>
      </section>
      <RabiesTrends locale={locale} />
      <section className="subsection">
        <h2>Understanding these figures</h2>
        <p>Animal-bite exposure reports, confirmed animal cases, vaccine administrations, and human deaths are different measures. They should not be treated as equivalent counts or used to calculate an individual’s chance of infection.</p>
        <p>Daily averages are reproduced as reported in the supplied table, including the Bali total of 213. They are not recalculated from the displayed date range.</p>
        <p className="fine-print">Source consistency note: the nine supplied regional counts sum to 51,001, while the table’s published Bali total is 51,011. Both are preserved as supplied. The January–August monthly figures sum to 51,011; the regional snapshot is labeled 1 January–4 September. These reporting differences should be clarified with the source.</p>
        <Link className="text-link" href={bpbdSource} target="_blank" rel="noreferrer">Read the BPBD report ↗</Link>
      </section>
    </div>
  ), locale);
}
