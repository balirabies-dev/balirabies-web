import { translate, translateTree } from "../lib/i18n/translate";
import type { Locale } from "../lib/i18n/config";
import { annualDeaths, formatCount, monthlyExposures } from "../lib/home";

export default function RabiesTrends({ locale = "en" }: { locale?: Locale }) {
  const points = monthlyExposures.map((month, index) => ({ ...month, x: 64 + index * 68, y: 208 - (month.value / 8000) * 160 }));
  return translateTree((
    <section className="rabies-trends" aria-label="Bali rabies reporting trends">
      <div className="trend-panel">
        <div className="trend-heading"><h3>Reported exposures by month</h3><p>January–August 2026</p></div>
        <svg viewBox="0 0 600 270" role="img" aria-label="Monthly reported animal-bite exposures in 2026: January 6,689; February 5,683; March 6,688; April 6,276; May 6,239; June 7,136; July 6,763; August 5,537.">
          {[0, 2000, 4000, 6000, 8000].map((tick) => <g key={tick}><line className="chart-grid" x1="48" x2="564" y1={208 - tick / 50} y2={208 - tick / 50} /><text className="chart-axis" x="38" y={212 - tick / 50} textAnchor="end">{tick === 0 ? '0' : `${tick / 1000}k`}</text></g>)}
          <polyline className="chart-line" points={points.map((point) => `${point.x},${point.y}`).join(' ')} />
          {points.map((point) => <g key={point.month}><title>{`${translate(point.month, locale)}: ${formatCount(point.value, locale)} ${translate("exposures", locale)}`}</title><circle className="chart-dot" cx={point.x} cy={point.y} r="4" /><text className="chart-value" x={point.x} y={point.y - 14} textAnchor="middle">{formatCount(point.value, locale)}</text><text className="chart-axis" x={point.x} y="236" textAnchor="middle">{point.short}</text></g>)}
        </svg>
        <details className="chart-data"><summary>View monthly figures</summary><table><caption>Monthly exposure counts, 2026</caption><thead><tr><th scope="col">Month</th><th scope="col">Reported exposures</th></tr></thead><tbody>{monthlyExposures.map((month) => <tr key={month.month}><th scope="row">{month.month}</th><td>{formatCount(month.value, locale)}</td></tr>)}</tbody></table></details>
      </div>
      <div className="trend-panel">
        <div className="trend-heading"><h3>Rabies deaths over five years</h3><p>2022–2026 · 2026 through 4 September</p></div>
        <svg viewBox="0 0 600 270" role="img" aria-label="Reported rabies deaths: 2022, 22; 2023, 9; 2024, 7; 2025, 16; 2026 through 4 September, 7.">
          {[0, 10, 20, 30].map((tick) => <g key={tick}><line className="chart-grid" x1="48" x2="564" y1={208 - tick / 30 * 160} y2={208 - tick / 30 * 160} /><text className="chart-axis" x="38" y={212 - tick / 30 * 160} textAnchor="end">{tick}</text></g>)}
          {annualDeaths.map((year, index) => {
            const x = 68 + index * 100;
            const height = year.value / 30 * 160;
            return <g key={year.year}><title>{`${year.year}: ${year.value} ${translate("reported deaths", locale)}${year.year === '2026' ? ` ${translate('through 4 September', locale)}` : ''}`}</title><rect className={year.year === '2026' ? 'chart-bar current' : 'chart-bar'} x={x} y={208 - height} width="66" height={height} rx="2" /><text className="chart-value" x={x + 33} y={196 - height} textAnchor="middle">{year.value}</text><text className="chart-axis" x={x + 33} y="236" textAnchor="middle">{year.year}{year.year === '2026' ? '*' : ''}</text></g>;
          })}
        </svg>
        <details className="chart-data"><summary>View annual figures</summary><table><caption>Reported human rabies deaths; 2026 is a partial year</caption><thead><tr><th scope="col">Year</th><th scope="col">Deaths</th></tr></thead><tbody>{annualDeaths.map((year) => <tr key={year.year}><th scope="row">{year.year}{year.year === '2026' ? ' (through 4 Sep)' : ''}</th><td>{year.value}</td></tr>)}</tbody></table></details>
      </div>
      <p className="trend-source">Figures transcribed from the supplied Bali government charts. *2026 is a partial year and is not directly comparable with full-year totals.</p>
    </section>
  ), locale);
}
