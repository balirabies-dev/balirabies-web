"use client";
import { useLocale } from "./locale-provider";
import { translate, translateTree } from "../lib/i18n/translate";

import { useState } from "react";
import { formatCount, regionalExposures, reportingPeriod } from "../lib/home";

export default function BaliMap() {
  const locale = useLocale();
  const [selected, setSelected] = useState(regionalExposures[0].name);
  const active = regionalExposures.find((region) => region.name === selected)!;
  return translateTree((
    <div className="regional-overview">
      <div className="bali-map-visual">
        <svg viewBox="0 0 600 340" role="img" aria-label="Bali regional exposure locator. Select a regency or city below to view reported animal-bite exposures. The island outline is schematic, with approximate locations.">
          <path className="island-outline" d="M45 107 70 80 113 86 155 65 195 66 241 39 289 48 329 51 361 70 401 65 441 83 474 102 506 116 547 160 518 181 488 183 463 195 438 204 409 200 381 221 373 247 357 273 343 310 321 310 306 287 315 258 292 245 264 223 231 207 195 183 158 173 123 169 92 157 69 135Z" />
          <path className="island-outline" d="m438 276 33-16 39 15 5 25-27 17-34-13Z" />
          {regionalExposures.map((region) => (
            <g key={region.name} className={selected === region.name ? "map-marker selected" : "map-marker"}>
              <title>{`${region.name}: ${formatCount(region.exposures, locale)} ${translate("reported exposures", locale)}`}</title>
              <circle cx={region.x} cy={region.y} r={4 + (region.exposures / 9556) * 7} />
              <text x={region.x} y={region.y - 17} textAnchor="middle">{region.name}</text>
              <text className="map-count" x={region.x} y={region.y + 27} textAnchor="middle">{formatCount(region.exposures, locale)}</text>
            </g>
          ))}
          <text x="46" y="303" className="map-ocean">INDIAN OCEAN</text>
        </svg>
        <p className="fine-print">Reported GHPR · {reportingPeriod}<br />Schematic locator; marker size indicates exposure count, not individual risk.</p>
      </div>
      <div className="region-panel">
        <span className="eyebrow">Explore by regency / city</span>
        <div className="region-options" role="group" aria-label="Select a regency or city">
          {regionalExposures.map((region) => (
            <button key={region.name} type="button" aria-pressed={selected === region.name} onClick={() => setSelected(region.name)}>{region.name}</button>
          ))}
        </div>
        <div className="region-detail" aria-live="polite">
          <h3>{active.name}</h3>
          <dl className="region-metrics"><div><dt>Reported exposures</dt><dd>{formatCount(active.exposures, locale)}</dd></div><div><dt>Reported bites / day</dt><dd>{active.daily}</dd></div></dl>
          <p>Rabies-transmitting animal-bite exposures (GHPR), {reportingPeriod}.</p>
          <p className="fine-print">These are exposure reports, not confirmed human rabies cases. Regional positive animal-case counts were not included in the supplied table.</p>
        </div>
      </div>
    </div>
  ), locale);
}
