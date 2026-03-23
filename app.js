const MATERIALS = {
  "316 Stainless": {
    key: "316 Stainless",
    unitPower: 0.045,
    traits: {
      endmill: "316 is gummy, heat-holding, and unforgiving of rubbing. A top-tier approach is to keep the edge engaged, keep coolant or air doing real work, and avoid babying the cut into work hardening.",
      hfm: "316 responds well to true high-feed strategy when the cutter is stable. The win is controlled chip thickness with shallow ap, but the trap is assuming the high feed number means low risk. Heat and evacuation still decide tool life."
    },
    em: {
      adaptive: { vc: 120, fz: 0.08, hmax: [0.055, 0.085], note: "Safe general start for carbide in 316. Use chip thinning in light radial cuts." },
      profile: { vc: 100, fz: 0.06, hmax: [0.045, 0.07], note: "More conservative wall and side milling start." },
      finish: { vc: 140, fz: 0.04, hmax: [0.02, 0.04], note: "Lower chip load, higher speed, light step over." },
      slot: { vc: 75, fz: 0.035, hmax: [0.03, 0.05], note: "Slotting in 316 is heat heavy. Start carefully and watch evacuation." }
    },
    hf: {
      "true-hfm": { vc: 150, fz: 0.9, hmax: [0.18, 0.28], note: "Feed is mainly justified by lead angle. Keep ap shallow and stable." },
      "light-face": { vc: 170, fz: 0.65, hmax: [0.14, 0.22], note: "Use for lighter face work and smoother entries." },
      "long-reach": { vc: 120, fz: 0.55, hmax: [0.1, 0.18], note: "Deflection-sensitive start for less rigid setups." }
    }
  },
  "304 Stainless": {
    key: "304 Stainless",
    unitPower: 0.042,
    traits: {
      endmill: "304 is more eager to smear and work harden than many people expect. The good machinist move is to keep a clean, positive cut and never let the tool skate. Once it starts rubbing, the next pass is already worse.",
      hfm: "304 can look friendly because it is not as hard as some grades, but it punishes hesitation. HFM works best when you stay committed to feed and keep the insert in a real cut instead of feathering the edge."
    },
    em: {
      adaptive: { vc: 130, fz: 0.08, hmax: [0.055, 0.09], note: "Good base point for 304 with carbide and coolant." },
      profile: { vc: 110, fz: 0.06, hmax: [0.045, 0.072], note: "Side milling can work harden quickly. Avoid rubbing." },
      finish: { vc: 150, fz: 0.04, hmax: [0.02, 0.04], note: "Finishing likes sharp tools and consistent chip load." },
      slot: { vc: 80, fz: 0.04, hmax: [0.032, 0.052], note: "Keep chips clear. Avoid dwelling in the cut." }
    },
    hf: {
      "true-hfm": { vc: 160, fz: 1.0, hmax: [0.2, 0.3], note: "Reasonable HFM start in 304 if rigidity is good." },
      "light-face": { vc: 180, fz: 0.7, hmax: [0.15, 0.23], note: "For less aggressive face work." },
      "long-reach": { vc: 130, fz: 0.6, hmax: [0.11, 0.18], note: "Reduce if holder or part is springy." }
    }
  },
  "420 Stainless": {
    key: "420 Stainless",
    unitPower: 0.05,
    traits: {
      endmill: "420 is where sharpness, edge prep, and actual hardness condition matter. Annealed 420 and hardened 420 are not the same job. From a top-tier perspective, you trust the chips and the sound more than the label on the material rack.",
      hfm: "In 420, HFM can be very effective but only when the insert is fresh and the setup is honest. Blunt edges or wishful feeds show up as rapid wear, notch wear, and ugly surface breakdown." 
    },
    em: {
      adaptive: { vc: 95, fz: 0.07, hmax: [0.045, 0.075], note: "Start cautious. Hardness can vary a lot with 420." },
      profile: { vc: 85, fz: 0.055, hmax: [0.04, 0.065], note: "Use a sharper tool and avoid rubbing." },
      finish: { vc: 110, fz: 0.035, hmax: [0.018, 0.036], note: "Light cut and stable holder preferred." },
      slot: { vc: 65, fz: 0.03, hmax: [0.024, 0.042], note: "Heavy heat and load risk. Watch tool wear closely." }
    },
    hf: {
      "true-hfm": { vc: 130, fz: 0.8, hmax: [0.16, 0.24], note: "Use a stable cutter body and fresh edges." },
      "light-face": { vc: 140, fz: 0.6, hmax: [0.12, 0.2], note: "Better if the machine is not hugely rigid." },
      "long-reach": { vc: 110, fz: 0.45, hmax: [0.09, 0.15], note: "Use for fragile setups or long stickout." }
    }
  },
  "Aluminium": {
    key: "Aluminium",
    unitPower: 0.012,
    traits: {
      endmill: "Aluminium rewards sharp geometry, evacuation, and confident feed. The high-level mistake is going too timid and letting the edge polish the material. The right move is usually more chip, not less, provided the flute and coolant strategy can clear it.",
      hfm: "High-feed style in aluminium is usually limited more by machine acceleration, holder security, and part clamping than raw material resistance. It will let you get aggressive quickly, so the discipline is in avoiding recutting and burr-heavy exits."
    },
    em: {
      adaptive: { vc: 450, fz: 0.12, hmax: [0.08, 0.14], note: "Light radial cuts can be pushed hard if chips clear well." },
      profile: { vc: 350, fz: 0.09, hmax: [0.06, 0.11], note: "Good general side milling start." },
      finish: { vc: 550, fz: 0.05, hmax: [0.02, 0.05], note: "Finishing can run fast with a sharp polished tool." },
      slot: { vc: 250, fz: 0.06, hmax: [0.04, 0.075], note: "Watch chip packing in deep slots." }
    },
    hf: {
      "true-hfm": { vc: 500, fz: 1.5, hmax: [0.25, 0.4], note: "High feed can move a lot of material quickly in aluminium." },
      "light-face": { vc: 550, fz: 1.0, hmax: [0.18, 0.3], note: "Smoother light face milling start." },
      "long-reach": { vc: 380, fz: 0.8, hmax: [0.12, 0.22], note: "Back off if chatter shows up." }
    }
  },
  "Plastic": {
    key: "Plastic",
    unitPower: 0.004,
    traits: {
      endmill: "Plastic is less about horsepower and more about heat discipline. A strong machinist reads smell, edge finish, and chip condition fast. If it starts smearing, welding, or going fuzzy, the process is already too hot or the edge is wrong.",
      hfm: "HFM in plastic only makes sense if the cutter geometry and flute space suit the material. The limiting factor is usually melting, edge finish, and chip packing, not load on the spindle."
    },
    em: {
      adaptive: { vc: 350, fz: 0.1, hmax: [0.06, 0.11], note: "Sharp tools and chip evacuation matter more than brute force." },
      profile: { vc: 280, fz: 0.08, hmax: [0.05, 0.09], note: "Watch heat and edge finish." },
      finish: { vc: 320, fz: 0.04, hmax: [0.015, 0.035], note: "Keep tool sharp to avoid smearing." },
      slot: { vc: 220, fz: 0.05, hmax: [0.03, 0.055], note: "Do not let heat build up in enclosed cuts." }
    },
    hf: {
      "true-hfm": { vc: 300, fz: 1.0, hmax: [0.14, 0.24], note: "Useful only if the cutter geometry suits plastic." },
      "light-face": { vc: 320, fz: 0.8, hmax: [0.12, 0.2], note: "A safer general start." },
      "long-reach": { vc: 240, fz: 0.6, hmax: [0.08, 0.15], note: "Use if finish starts to degrade." }
    }
  },
  "Titanium": {
    key: "Titanium",
    unitPower: 0.065,
    traits: {
      endmill: "Titanium is all about heat concentration at the edge. Elite practice is keeping engagement stable, tool sharpness high, and radial load under control. The moment you start rubbing or pausing, the next few millimetres get much uglier.",
      hfm: "HFM in titanium is absolutely possible, but only with real cutter geometry and a rigid system. The point is not to chase a big feed number. The point is to keep a controlled hmax while protecting the edge from thermal abuse."
    },
    em: {
      adaptive: { vc: 60, fz: 0.05, hmax: [0.03, 0.055], note: "Titanium likes conservative speed and stable chip load." },
      profile: { vc: 50, fz: 0.04, hmax: [0.025, 0.045], note: "Keep engagement steady. Avoid rubbing." },
      finish: { vc: 70, fz: 0.025, hmax: [0.012, 0.025], note: "Light cuts and sharp tools are critical." },
      slot: { vc: 40, fz: 0.02, hmax: [0.016, 0.028], note: "Very cautious slot start. Heat is the enemy." }
    },
    hf: {
      "true-hfm": { vc: 75, fz: 0.55, hmax: [0.1, 0.18], note: "Possible, but only with rigid tools and real HFM geometry." },
      "light-face": { vc: 80, fz: 0.4, hmax: [0.08, 0.14], note: "Better starting point for most shops." },
      "long-reach": { vc: 60, fz: 0.3, hmax: [0.05, 0.1], note: "Back off aggressively for weak setups." }
    }
  }
};

const materialNames = Object.keys(MATERIALS);
const $ = id => document.getElementById(id);

function fillMaterialSelect(id){
  const el = $(id);
  materialNames.forEach(name => {
    const o = document.createElement("option");
    o.value = name;
    o.textContent = name;
    el.appendChild(o);
  });
}

fillMaterialSelect("em-material");
fillMaterialSelect("hf-material");
$("em-material").value = "316 Stainless";
$("hf-material").value = "316 Stainless";

function rpm(vc, d){ return (1000 * vc) / (Math.PI * d); }
function feed(rpmValue, z, fz){ return rpmValue * z * fz; }
function round(n, digits=2){ return Number.isFinite(n) ? Number(n.toFixed(digits)) : 0; }
function pct(v){ return `${round(v*100,1)}%`; }
function clamp(n, lo, hi){ return Math.min(Math.max(n, lo), hi); }
function inRange(value, range){ return value >= range[0] && value <= range[1]; }
function formatRange(range){ return `${round(range[0],3)} to ${round(range[1],3)} mm`; }

function baseCalculations(vc, d, z, fz){
  const rpmValue = rpm(vc, d);
  return { rpmValue, feedValue: feed(rpmValue, z, fz) };
}

function addWarning(list, condition, message){
  if (condition) list.push(message);
}

function setNumericLimit(id, min, max, step, hint){
  const el = $(id);
  if (!el) return;
  if (min !== undefined && min !== null) el.min = min;
  if (max !== undefined && max !== null) el.max = max;
  if (step !== undefined && step !== null) el.step = step;
  if (hint) el.title = hint;
}

function applyInputLimits(){
  [
    ['em-d', 0.1, 500, 'any', 'Tool diameter in mm'],
    ['em-z', 1, 20, 1, 'Typical range 1 to 20 teeth'],
    ['em-vc', 1, 1500, 'any', 'Cutting speed in m/min'],
    ['em-fz', 0.001, 2, 0.001, 'Programmed feed per tooth'],
    ['em-ae', 0.001, 500, 'any', 'Radial engagement in mm'],
    ['em-ap', 0.001, 1000, 'any', 'Axial depth in mm'],
    ['em-target', 0.001, 2, 0.001, 'Target actual hmax in mm'],
    ['em-maxrpm', 1, 100000, 'any', 'Optional machine rpm limit'],
    ['em-maxkw', 0.1, 1000, 'any', 'Optional spindle power limit'],
    ['hf-d', 0.1, 500, 'any', 'Tool diameter in mm'],
    ['hf-z', 1, 40, 1, 'Typical range 1 to 40 teeth'],
    ['hf-vc', 1, 1500, 'any', 'Cutting speed in m/min'],
    ['hf-fz', 0.001, 5, 0.001, 'Programmed feed per tooth'],
    ['hf-ae', 0.001, 500, 'any', 'Width of cut in mm'],
    ['hf-ap', 0.001, 100, 'any', 'Depth of cut in mm'],
    ['hf-lead', 1, 89, 'any', 'Lead angle in degrees'],
    ['hf-radius', 0.01, 20, 'any', 'Insert corner radius in mm'],
    ['hf-target', 0.001, 2, 0.001, 'Target actual hmax in mm'],
    ['hf-maxrpm', 1, 100000, 'any', 'Optional machine rpm limit'],
    ['hf-maxkw', 0.1, 1000, 'any', 'Optional spindle power limit']
  ].forEach(args => setNumericLimit(...args));
}

function radialChipFactor(ae, d){
  if (d <= 0 || ae <= 0) return 1;
  const ratio = ae / d;
  if (ratio >= 0.5) return 1;
  const inside = 1 - Math.pow(1 - 2 * ratio, 2);
  return clamp(Math.sqrt(Math.max(0, inside)), 0.01, 1);
}

function leadChipFactor(leadDeg){
  const factor = Math.sin((leadDeg * Math.PI) / 180);
  return clamp(factor, 0.01, 1);
}

function metricCard(label, value, detail){
  return `<div class="metric"><span>${label}</span><strong>${value}</strong><small>${detail}</small></div>`;
}

function summaryPill(label, value){
  return `<div class="pill"><span>${label}</span><strong>${value}</strong></div>`;
}

function setStatus(id, tone, title, text){
  const el = $(id);
  el.className = `status ${tone}`;
  el.innerHTML = `<strong>${title}</strong><p>${text}</p>`;
}

function setTopCallout(id, config){
  const el = $(id);
  if (!el) return;
  el.className = `top-callout ${config.tone || 'neutral'}`;
  el.innerHTML = `
    <div class="top-callout-grid">
      <div class="top-callout-main">
        <span class="callout-label">Cut status</span>
        <strong>${config.title}</strong>
        <p>${config.text}</p>
      </div>
      <div class="top-callout-stat">
        <span>Move first</span>
        <strong>${config.move}</strong>
      </div>
      <div class="top-callout-stat emphasis">
        <span>Machine feed to enter</span>
        <strong>${config.feed}</strong>
        <small>This is the machine feedrate, not fz.</small>
      </div>
    </div>
  `;
}


function rangeAssessment(actual, range){
  if (actual < range[0]) return "below";
  if (actual > range[1]) return "above";
  return "inside";
}

function materialView(mode, material){
  return MATERIALS[material].traits[mode];
}


function chartStat(label, value){
  return `<div class="chart-stat"><span>${label}</span><strong>${value}</strong></div>`;
}

function valueTone(state){
  if (state === "inside") return "good";
  if (state === "below") return "warn";
  return "bad";
}

function decisionRow(label, value, detail, tone=""){
  return `<div class="decision-row"><div class="decision-label">${label}</div><div class="decision-value ${tone}">${value}</div><div class="decision-detail">${detail}</div></div>`;
}

function decisionGroup(title, caption, rows){
  return `<section class="decision-group"><div class="decision-head"><strong>${title}</strong><span>${caption}</span></div>${rows.join("")}</section>`;
}

function renderDecisionTable(mode, config){
  const { mountId } = config;
  const state = rangeAssessment(config.actualHmax, config.range);
  const inBandText = state === 'inside' ? 'Inside band' : state === 'below' ? 'Below band' : 'Above band';
  const preferredFz = (config.bandLow + config.bandHigh) / 2;
  const moveToPreferred = preferredFz - config.currentFz;
  const moveDirection = Math.abs(moveToPreferred) < Math.max(0.003, config.currentFz * 0.03)
    ? 'Hold'
    : moveToPreferred > 0 ? 'Increase fz' : 'Reduce fz';
  const moveDetail = Math.abs(moveToPreferred) < Math.max(0.003, config.currentFz * 0.03)
    ? `You are already close to the middle of the working band.`
    : `${moveDirection === 'Increase fz' ? 'Move right on the map' : 'Move left on the map'} by about ${round(Math.abs(moveToPreferred),3)} mm/tooth to sit near the middle of the band.`;
  const correctedFeed = config.feedValue * (config.targetFz / (config.useTarget ? config.targetFz : config.currentFz || 1));
  const bandWidth = config.bandHigh - config.bandLow;

  const recommendation = state === 'inside'
    ? `Feed is in the useful zone now. Tune Vc, sound, finish, and spindle load from here.`
    : state === 'below'
      ? `Raise programmed fz first. Get chip thickness honest before chasing more rpm.`
      : `Reduce programmed fz first unless the cut is proving very stable and the edge is happy.`;

  const sections = [
    decisionGroup('Cut decision', 'What to move first', [
      decisionRow('Band status', inBandText, recommendation, valueTone(state)),
      decisionRow('Move programmed fz', moveDirection, moveDetail, moveDirection === 'Hold' ? 'good' : state === 'below' ? 'warn' : 'bad'),
      decisionRow('Programmed fz now', `${round(config.currentFz,3)} mm/tooth`, `White point on the map. This is the number you are actually asking the tool to take.`),
      decisionRow('Useful fz window', `${round(config.bandLow,3)} to ${round(config.bandHigh,3)} mm/tooth`, `Green band on the map for the current geometry. Window width is ${round(bandWidth,3)} mm/tooth.`),
      decisionRow('Best fz in band', `${round(preferredFz,3)} mm/tooth`, `A practical middle-of-band target when you want a safer neutral start rather than living on an edge of the band.`)
    ]),
    decisionGroup('Chip thickness check', 'What the edge is really seeing', [
      decisionRow('Current hmax', `${round(config.actualHmax,3)} mm`, `Actual chip thickness at the edge from your current programmed feed.`, valueTone(state)),
      decisionRow('Target hmax band', formatRange(config.range), `This is the material window the app is trying to keep you inside.`),
      decisionRow('Corrected fz for target', `${round(config.targetFz,3)} mm/tooth`, `Blue point on the map. This is the exact programmed fz that hits your chosen target hmax at the current geometry.`),
      decisionRow('Corrected feedrate', `${round(correctedFeed,0)} mm/min`, `What feedrate that corrected fz would give at the current rpm.`)
    ]),
    decisionGroup('Machine output', 'What the spindle sees after feed is chosen', [
      decisionRow('Feedrate in use', `${round(config.feedValue,0)} mm/min`, config.useTarget ? `Using corrected feed from target hmax because the checkbox is enabled.` : `Using your programmed fz directly.`),
      decisionRow('Cutting speed', `${round(config.vc,1)} m/min`, `Treat this as the second tuning lever after chip thickness.`),
      decisionRow('RPM', `${round(config.rpmValue,0)}`, `Calculated from Vc and tool diameter.`),
      decisionRow('MRR', `${round(config.mrrCm3,1)} cm³/min`, `Simple removal-rate estimate for comparing scenarios.`),
      decisionRow('Power', `${round(config.powerKw,2)} kW`, `Very rough spindle power estimate only.`)
    ]),
  ];

  if (mode === 'endmill') {
    sections.push(decisionGroup('Geometry driver', 'Why the map bends', [
      decisionRow('Radial engagement ae', `${round(config.currentAe,2)} mm`, `Y axis on the endmill map.`),
      decisionRow('ae / D', `${round(config.aeRatio * 100,1)}%`, `This ratio drives radial chip thinning and changes the fz band shape.`),
      decisionRow('Chip thinning factor', `${round(config.chipFactor,3)}`, config.aeRatio < 0.5 ? `Below 1 means the actual chip is thinner than programmed fz.` : `At this step over the chip is close to full thickness.`),
      decisionRow('Reading the map', config.aeRatio < 0.5 ? 'Band will flare right as ae gets lighter' : 'Band stays closer to vertical', config.aeRatio < 0.5 ? `Light ae means you need more programmed fz to reach the same hmax.` : `Heavy ae means programmed fz and actual hmax track closer together.`)
    ]));
  } else {
    sections.push(decisionGroup('Geometry driver', 'Why the map bends', [
      decisionRow('Lead angle', `${round(config.currentLead,1)}°`, `Y axis on the HFM map because lead angle is what dynamically changes chip thinning.`),
      decisionRow('Lead factor', `${round(config.chipFactor,3)}`, `Lower lead angles thin the chip more, so the valid fz window moves right.`),
      decisionRow('Width of cut ae', `${round(config.currentAe,2)} mm`, `Still matters for MRR and how heavy the cut feels, even though it is not the main hmax driver here.`),
      decisionRow('Reading the map', config.currentLead < 20 ? 'Band leans right at low lead' : 'Band tightens left as lead rises', config.currentLead < 20 ? `Very low lead angles justify the big programmed feed numbers you see in true HFM.` : `As lead angle rises, the cutter behaves less like true HFM and the valid feed window comes back down.`)
    ]));
  }

  document.getElementById(mountId).innerHTML = sections.join('');
}

function setupChartControls(config){
  const {
    controlsId, chartId, currentFz, bandLow, bandHigh, range, previewFactor, yValue,
    inputId, previewLabel, yLabel, stateText, applyText, rpmValue, zValue, chipFactor, targetFeed
  } = config;

  const min = Math.max(0.001, Math.min(currentFz, bandLow) * 0.55);
  const max = Math.max(currentFz, bandHigh) * 1.45;
  const step = max <= 0.3 ? 0.001 : max <= 1 ? 0.005 : 0.01;
  const preferred = (bandLow + bandHigh) / 2;
  const controls = document.getElementById(controlsId);
  if (!controls) return;

  controls.innerHTML = `
    <div class="slider-head">
      <div>
        <div class="slider-title">Feed per Tooth (fz) Tuning</div>
        <div class="slider-sub">Adjust the programmed feed per tooth here before you copy it into the main input. This lets you see whether the cut lands below, inside, or above the hmax band for the current ${yLabel}.</div>
      </div>
      <div class="slider-pill">
        ${summaryPill('Current', `${round(currentFz,3)} mm/tooth`)}
        ${summaryPill('Band centre', `${round(preferred,3)} mm/tooth`)}
      </div>
    </div>
    <div class="slider-grid">
      <div class="slider-wrap">
        <input id="${controlsId}-range" type="range" min="${min}" max="${max}" step="${step}" value="${currentFz}">
        <div class="range-labels"><span>${round(min,3)}</span><span>${round(bandLow,3)}</span><span>${round(bandHigh,3)}</span><span>${round(max,3)}</span></div>
      </div>
      <div class="slider-side">
        <div class="slider-stat"><span>Input fz (test value)</span><strong id="${controlsId}-fz">${round(currentFz,3)} mm/tooth</strong></div>
        <div class="slider-stat emphasis"><span>Machine feed to enter</span><strong id="${controlsId}-feed">${round(targetFeed,0)} mm/min</strong><small>This is the machine feedrate, not fz.</small></div>\n        <div class="slider-stat"><span>Preview hmax</span><strong id="${controlsId}-hmax">${round(currentFz * previewFactor,3)} mm</strong></div>
        <div class="slider-stat"><span>Status</span><strong id="${controlsId}-state">${stateText}</strong></div>\n        <div class="slider-stat"><span>Preview machine feed</span><strong id="${controlsId}-preview-feed">${round(rpmValue * zValue * currentFz,0)} mm/min</strong><small>Based on current rpm and the test fz.</small></div>
      </div>
    </div>
    <div class="snap-row">
      <span>Jump slider to</span>
      <button type="button" class="snap-btn" data-value="${currentFz}">Current</button>
      <button type="button" class="snap-btn" data-value="${bandLow}">Band low</button>
      <button type="button" class="snap-btn" data-value="${preferred}">Band centre</button>
      <button type="button" class="snap-btn" data-value="${bandHigh}">Band high</button>
    </div>
    <div class="slider-actions"><button type="button" class="apply-btn" id="${controlsId}-apply">${applyText}</button></div>
  `;

  const slider = document.getElementById(`${controlsId}-range`);
  const fzOut = document.getElementById(`${controlsId}-fz`);
  const hmaxOut = document.getElementById(`${controlsId}-hmax`);
  const feedOut = document.getElementById(`${controlsId}-feed`);
  const previewFeedOut = document.getElementById(`${controlsId}-preview-feed`);
  const stateOut = document.getElementById(`${controlsId}-state`);
  const chartMount = document.getElementById(chartId);
  const chart = chartMount ? chartMount.querySelector('svg') : null;
  const input = document.getElementById(inputId);

  const classify = value => value < range[0] ? 'Below band' : value > range[1] ? 'Above band' : 'Inside band';
  const stateClass = value => value < range[0] ? 'warn' : value > range[1] ? 'bad' : 'good';

  function updatePreview(){
    const candidateFz = Number(slider.value);
    const candidateHmax = candidateFz * previewFactor;
    const candidateFeed = rpmValue * zValue * candidateFz;
    fzOut.textContent = `${round(candidateFz,3)} mm/tooth`;
    hmaxOut.textContent = `${round(candidateHmax,3)} mm`;
    if (feedOut) feedOut.textContent = `${round(candidateFeed,0)} mm/min`;
    if (previewFeedOut) previewFeedOut.textContent = `${round(candidateFeed,0)} mm/min`;
    stateOut.textContent = classify(candidateHmax);
    stateOut.className = stateClass(candidateHmax);
    const point = chart.querySelector('.point-preview');
    const line = chart.querySelector('.preview-line');
    const label = chart.querySelector('.axis-label.preview');
    if (point && line && chart.dataset.xMin){
      const xMin = Number(chart.dataset.xMin);
      const xMax = Number(chart.dataset.xMax);
      const padL = Number(chart.dataset.padL);
      const padR = Number(chart.dataset.padR);
      const width = Number(chart.dataset.width);
      const plotW = width - padL - padR;
      const x = padL + ((candidateFz - xMin) / (xMax - xMin || 1)) * plotW;
      point.setAttribute('cx', x);
      line.setAttribute('x1', x);
      line.setAttribute('x2', x);
      label.setAttribute('x', x);
    }
  }

  slider.addEventListener('input', updatePreview);
  controls.querySelectorAll('.snap-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      slider.value = btn.dataset.value;
      updatePreview();
    });
  });
  document.getElementById(`${controlsId}-apply`).addEventListener('click', () => {
    input.value = Number(slider.value).toFixed(3).replace(/0+$/,'').replace(/\.$/,'');
    if (inputId === 'em-fz') calcEndmill();
    if (inputId === 'hf-fz') calcHfm();
  });
  updatePreview();
}

function getChartAdvice(currentFz, bandLow, bandHigh, preferredFz, inBand){
  if (inBand) {
    const move = preferredFz - currentFz;
    if (Math.abs(move) < Math.max(0.003, currentFz * 0.03)) return `You are in the band. Leave feed alone and only tune Vc if the cut is stable and the chips look healthy.`;
    return move > 0
      ? `You are in the band. If the cut feels lazy, edge toward ${round(preferredFz,3)} mm/tooth before you touch speed.`
      : `You are in the band. If the cut feels a little heavy, trim feed slightly toward ${round(preferredFz,3)} mm/tooth before changing speed.`;
  }
  if (currentFz < bandLow) return `Raise programmed fz toward ${round(preferredFz,3)} mm/tooth. Get chip thickness right first, then reassess Vc.`;
  return `Reduce programmed fz toward ${round(preferredFz,3)} mm/tooth. Bring chip thickness back into band before pushing speed.`;
}

function renderHmaxChart(config){
  const {
    mountId, statsId, captionId, controlsId, inputId, modeLabel, chipFactorLabel, chipFactor, currentFz, currentAe, currentD,
    currentLead = null, targetFz, preferredFz, bandLow, bandHigh, actualHmax, correctedHmax, range, inBand,
    chartMode = "dynamic-ae",
    rpmValue = 0,
    zValue = 0,
    targetFeed = 0
  } = config;

  const xMax = Math.max(currentFz, targetFz, bandHigh, preferredFz) * 1.35;
  const xMin = 0;
  const w = 820, h = 330;
  const pad = {l:72, r:28, t:18, b:48};
  const plotW = w - pad.l - pad.r;
  const plotH = h - pad.t - pad.b;
  const x = v => pad.l + ((v - xMin) / (xMax - xMin || 1)) * plotW;

  const isEndmillChart = chartMode === 'dynamic-ae';
  const yMin = isEndmillChart ? 0 : 5;
  const yMax = isEndmillChart
    ? Math.max(currentD, currentAe * 1.5, currentD * 0.9, 1)
    : Math.max(45, (currentLead || 0) * 1.35);
  const y = v => h - pad.b - ((v - yMin) / (yMax - yMin || 1)) * plotH;

  const ticks = 6;
  const currentX = x(currentFz);
  const targetX = x(targetFz);
  const preferredX = x(preferredFz);
  const currentYValue = isEndmillChart ? currentAe : currentLead;
  const currentY = y(currentYValue);
  const arrowToX = inBand ? preferredX : targetX;
  const arrowClass = inBand ? 'good' : '';
  const advice = getChartAdvice(currentFz, bandLow, bandHigh, preferredFz, inBand);

  const xTicks = Array.from({length:ticks+1}, (_,i) => {
    const val = xMin + (xMax - xMin) * (i / ticks);
    const px = x(val);
    return `<line x1="${px}" y1="${pad.t}" x2="${px}" y2="${h-pad.b}" stroke="rgba(255,255,255,0.08)" />
            <text x="${px}" y="${h-pad.b+20}" text-anchor="middle" class="tick-label">${round(val,3)}</text>`;
  }).join('');
  const yTicks = Array.from({length:5}, (_,i) => {
    const val = yMin + (yMax - yMin) * (i / 4);
    const py = y(val);
    const suffix = isEndmillChart ? '' : '°';
    return `<line x1="${pad.l}" y1="${py}" x2="${w-pad.r}" y2="${py}" stroke="rgba(255,255,255,0.08)" />
            <text x="${pad.l-10}" y="${py+4}" text-anchor="end" class="tick-label">${round(val,1)}${suffix}</text>`;
  }).join('');

  let bandSvg = '';
  let chartNote = '';
  let yTitle = '';
  let targetLabel = 'Corrected fz';

  if (isEndmillChart) {
    const samples = 42;
    const lowPts = [];
    const highPts = [];
    for (let i = 0; i <= samples; i++) {
      const ae = yMin + (yMax - yMin) * (i / samples);
      const factor = radialChipFactor(ae, currentD);
      lowPts.push(`${x(range[0] / factor)},${y(ae)}`);
      highPts.push(`${x(range[1] / factor)},${y(ae)}`);
    }
    const polyPoints = `${lowPts.join(' ')} ${highPts.slice().reverse().join(' ')}`;
    bandSvg = `
      <polygon points="${polyPoints}" class="band-fill" />
      <polyline points="${lowPts.join(' ')}" class="band-edge" />
      <polyline points="${highPts.join(' ')}" class="band-edge" />
    `;
    chartNote = `This band shifts with ae because radial chip thinning changes the programmed fz needed to hit target hmax.`;
    yTitle = 'ae (mm)';
  } else {
    const samples = 42;
    const lowPts = [];
    const highPts = [];
    for (let i = 0; i <= samples; i++) {
      const lead = yMin + (yMax - yMin) * (i / samples);
      const factor = leadChipFactor(lead);
      lowPts.push(`${x(range[0] / factor)},${y(lead)}`);
      highPts.push(`${x(range[1] / factor)},${y(lead)}`);
    }
    const polyPoints = `${lowPts.join(' ')} ${highPts.slice().reverse().join(' ')}`;
    bandSvg = `
      <polygon points="${polyPoints}" class="band-fill" />
      <polyline points="${lowPts.join(' ')}" class="band-edge" />
      <polyline points="${highPts.join(' ')}" class="band-edge" />
    `;
    chartNote = `This band shifts with lead angle because lower lead angles thin the chip more and need a higher programmed fz to reach target hmax.`;
    yTitle = 'Lead angle (°)';
    targetLabel = 'Corrected fz';
  }

  const svg = `
    <div class="chart-wrap" data-shell="true">
      <svg viewBox="0 0 ${w} ${h}" class="chart-svg" role="img" aria-label="${modeLabel} hmax chart" data-x-min="${xMin}" data-x-max="${xMax}" data-pad-l="${pad.l}" data-pad-r="${pad.r}" data-width="${w}">
        <defs>
          <marker id="arrow-head-${mountId}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"></path>
          </marker>
        </defs>
        <rect x="${pad.l}" y="${pad.t}" width="${plotW}" height="${plotH}" class="zone-bad" />
        ${xTicks}
        ${yTicks}
        ${bandSvg}
        <line x1="${pad.l}" y1="${h-pad.b}" x2="${w-pad.r}" y2="${h-pad.b}" stroke="rgba(255,255,255,0.2)" />
        <line x1="${pad.l}" y1="${pad.t}" x2="${pad.l}" y2="${h-pad.b}" stroke="rgba(255,255,255,0.2)" />
        <line x1="${currentX}" y1="${pad.t}" x2="${currentX}" y2="${h-pad.b}" class="current-line" />
        <line x1="${pad.l}" y1="${currentY}" x2="${w-pad.r}" y2="${currentY}" class="current-line" />
        <line x1="${currentX}" y1="${currentY}" x2="${arrowToX}" y2="${currentY}" class="arrow-line ${arrowClass}" marker-end="url(#arrow-head-${mountId})" style="color:${inBand ? 'var(--good)' : 'var(--accent)'}" />
        <line x1="${preferredX}" y1="${pad.t}" x2="${preferredX}" y2="${h-pad.b}" class="preview-line" />
        <circle cx="${currentX}" cy="${currentY}" r="7" class="point-current" />
        <circle cx="${currentX}" cy="${currentY}" r="5" class="point-preview" />
        <circle cx="${targetX}" cy="${currentY}" r="6" class="point-target" />
        <text x="${currentX}" y="${currentY-14}" text-anchor="middle" class="axis-label">You are here</text>
        <text x="${currentX}" y="${Math.max(pad.t + 16, currentY-32)}" text-anchor="middle" class="axis-label preview">Slider preview</text>
        <text x="${targetX}" y="${currentY+24}" text-anchor="middle" class="axis-label">${targetLabel}</text>
        <text x="${pad.l + plotW/2}" y="${h-10}" text-anchor="middle" class="axis-title">Programmed fz (mm/tooth)</text>
        <text x="20" y="${pad.t + plotH/2}" text-anchor="middle" transform="rotate(-90 20 ${pad.t + plotH/2})" class="axis-title">${yTitle}</text>
        <text x="${pad.l+8}" y="${pad.t+22}" class="chart-note">${chartNote}</text>
      </svg>
    </div>
    <div class="legend">
      <div class="legend-item"><span class="legend-swatch band"></span>Target actual hmax band</div>
      <div class="legend-item"><span class="legend-swatch point"></span>Current point</div>
      <div class="legend-item"><span class="legend-swatch target"></span>Feed needed for target hmax</div>
    </div>`;

  $(mountId).innerHTML = svg;
  const chartSvg = $(mountId).querySelector('svg');
  if (chartSvg) {
    chartSvg.dataset.xMin = xMin;
    chartSvg.dataset.xMax = xMax;
    chartSvg.dataset.padL = pad.l;
    chartSvg.dataset.padR = pad.r;
    chartSvg.dataset.width = w;
  }

  const statItems = isEndmillChart
    ? [
        chartStat('Target fz band', `${round(bandLow,3)} to ${round(bandHigh,3)}`),
        chartStat('Current ae', `${round(currentAe,2)} mm`),
        chartStat(chipFactorLabel, round(chipFactor,3)),
        chartStat('Actual hmax', `${round(actualHmax,3)} mm`)
      ]
    : [
        chartStat('Target fz band', `${round(bandLow,3)} to ${round(bandHigh,3)}`),
        chartStat('Current lead', `${round(currentLead,1)}°`),
        chartStat('Current ae', `${round(currentAe,2)} mm`),
        chartStat(chipFactorLabel, round(chipFactor,3)),
        chartStat('Actual hmax', `${round(actualHmax,3)} mm`)
      ];

  $(statsId).innerHTML = statItems.join('');

  const contextLine = isEndmillChart
    ? `Current ae is ${round(currentAe,2)} mm.`
    : `Current lead angle is ${round(currentLead,1)}° and ae is ${round(currentAe,2)} mm.`;

  $(captionId).textContent = `${advice} ${contextLine} Current actual hmax is ${round(actualHmax,3)} mm and the corrected point lands at ${round(correctedHmax,3)} mm.`;

  setupChartControls({
    controlsId,
    chartId: mountId,
    currentFz,
    bandLow,
    bandHigh,
    range,
    previewFactor: chipFactor,
    yValue: isEndmillChart ? currentAe : currentLead,
    inputId,
    previewLabel: 'Input fz (test value)',
    yLabel: isEndmillChart ? `ae of ${round(currentAe,2)} mm` : `lead angle of ${round(currentLead,1)}°`,
    stateText: inBand ? 'Inside band' : (actualHmax < range[0] ? 'Below band' : 'Above band'),
    applyText: 'Copy test fz into the main input',
    rpmValue: config.rpmValue || 0,
    zValue: config.zValue || 0,
    targetFeed: config.targetFeed || 0
  });
}

function getEndmillMeaning(material, strategy, aeRatio, actualHmax, range){
  const chipNote = aeRatio < 0.5
    ? `At ${round(aeRatio * 100, 1)}% step over you are in radial chip thinning territory, so displayed fz and actual hmax are no longer the same conversation.`
    : `At ${round(aeRatio * 100, 1)}% step over, chip thinning is no longer the big story. Cutter load, heat, evacuation, and wall stability matter more.`;
  const rangeState = rangeAssessment(actualHmax, range);
  const rangeNote = rangeState === "inside"
    ? `Your actual hmax is sitting inside the target window, which is usually where the cut starts to look honest rather than rubby.`
    : rangeState === "below"
      ? `Your actual hmax is below the target window, which usually means the edge is spending too much time rubbing instead of shearing cleanly.`
      : `Your actual hmax is above the target window, which can be productive, but edge wear, notch wear, and finish breakdown will arrive faster if the setup is not very solid.`;
  return `${materialView("endmill", material)} ${chipNote} ${rangeNote}`;
}

function getHfmMeaning(material, lead, actualHmax, range){
  const leadFactor = leadChipFactor(lead);
  const rangeState = rangeAssessment(actualHmax, range);
  const rangeNote = rangeState === "inside"
    ? `That puts actual hmax in the target band, which is where HFM starts doing what it is supposed to do: big programmed feed without an abusive chip thickness at the edge.`
    : rangeState === "below"
      ? `That leaves actual hmax under the target band, which often sounds safe but can still waste edge life through rubbing, especially in stainless and titanium.`
      : `That pushes actual hmax over the target band, which can work in a rigid setup but moves the risk quickly toward edge collapse, insert chipping, or unstable entry loads.`;
  return `${materialView("hfm", material)} With a ${round(lead, 1)}° lead angle, the edge only sees about ${pct(leadFactor)} of programmed fz as chip thickness. ${rangeNote}`;
}

function getEndmillNext(material, strategy, warnings, actualHmax, range){
  if (warnings.length) return warnings.join(" ");
  const rangeState = rangeAssessment(actualHmax, range);
  if (rangeState === "below") return `First move is more feed, not more speed. Bring hmax into range, then watch chip form, spindle note, and wall finish before pushing harder.`;
  if (rangeState === "above") return `First move is to check rigidity and sound. If the cut is even slightly nervous, trim feed a step before touching speed.`;
  if (strategy === "slot") return `Because this is slotting, prioritise evacuation and coolant delivery. A good number on screen means nothing if the slot is recutting chips.`;
  return `Use this as a real start point. Push feed first if the cut is calm, then bring speed up only after chip colour, sound, and surface finish all agree.`;
}

function getHfmNext(style, warnings, actualHmax, range){
  if (warnings.length) return warnings.join(" ");
  const rangeState = rangeAssessment(actualHmax, range);
  if (rangeState === "below") return `For HFM, the next move is usually more feed to get the insert working properly, not more rpm.`;
  if (rangeState === "above") return `Back feed down a step unless the cutter body, insert seat, and machine all sound completely comfortable.`;
  if (style === "long-reach") return `Because this is long reach, treat the numbers as secondary to behaviour. Any chatter or washboarding means back off before the tool punishes you.`;
  return `Keep ap shallow, stay honest with feed, and verify the insert depth limit from the catalogue before leaning on it harder.`;
}

function updateEndmillNotes(material, strategy, actualHmax=null, aeRatio=null){
  const preset = MATERIALS[material].em[strategy];
  $("em-range").textContent = `${formatRange(preset.hmax)} target actual hmax for ${strategy}.`;
  $("em-preset-note").textContent = preset.note;
  if (actualHmax === null || aeRatio === null) {
    $("em-meaning").textContent = `${materialView("endmill", material)} Target hmax window for this strategy is ${formatRange(preset.hmax)}.`;
    $("em-next").textContent = `Start here, calculate, then compare actual hmax against the target band.`;
  }
}

function updateHfmNotes(material, style, actualHmax=null, lead=null){
  const preset = MATERIALS[material].hf[style];
  $("hf-range").textContent = `${formatRange(preset.hmax)} target actual hmax for ${style}.`;
  $("hf-preset-note").textContent = preset.note;
  if (actualHmax === null || lead === null) {
    $("hf-meaning").textContent = `${materialView("hfm", material)} Target hmax window for this style is ${formatRange(preset.hmax)}.`;
    $("hf-next").textContent = `Start here, calculate, then check whether lead-angle thinning is putting actual hmax in the right zone.`;
  }
}

function applyEndmillPreset(){
  const material = $("em-material").value;
  const strategy = $("em-strategy").value;
  const preset = MATERIALS[material].em[strategy];
  $("em-vc").value = preset.vc;
  $("em-fz").value = preset.fz;
  $("em-target").value = round(preset.hmax[1] * 0.9, 3);
  updateEndmillNotes(material, strategy);
}

function applyHfmPreset(){
  const material = $("hf-material").value;
  const style = $("hf-style").value;
  const preset = MATERIALS[material].hf[style];
  $("hf-vc").value = preset.vc;
  $("hf-fz").value = preset.fz;
  $("hf-target").value = round(preset.hmax[1] * 0.9, 3);
  updateHfmNotes(material, style);
}

function calcEndmill(){
  const material = $("em-material").value;
  const strategy = $("em-strategy").value;
  const d = Number($("em-d").value);
  const z = Number($("em-z").value);
  const vc = Number($("em-vc").value);
  const fz = Number($("em-fz").value);
  const ae = Number($("em-ae").value);
  const ap = Number($("em-ap").value);
  const target = Number($("em-target").value);
  const useTarget = $("em-use-target").checked;
  const maxRpm = Number($("em-maxrpm").value || 0);
  const maxKw = Number($("em-maxkw").value || 0);

  if ([d,z,vc,fz,ae,ap].some(v => !Number.isFinite(v) || v <= 0)) {
    setStatus("em-status", "bad", "Invalid input", "All main cutting values need to be above zero.");
    return;
  }

  const start = MATERIALS[material].em[strategy];
  const range = start.hmax;
  const chipFactor = radialChipFactor(ae, d);
  const actualHmax = fz * chipFactor;
  const correctedFz = target > 0 ? target / chipFactor : fz;
  const usedFz = useTarget ? correctedFz : fz;
  const { rpmValue, feedValue } = baseCalculations(vc, d, z, usedFz);
  const correctedHmax = usedFz * chipFactor;
  const mrrCm3 = (ae * ap * feedValue) / 1000;
  const powerKw = mrrCm3 * MATERIALS[material].unitPower;
  const aeRatio = ae / d;

  const warnings = [];
  addWarning(warnings, fz > 1, "Programmed fz is extremely high. Check units and decimal place.");
  addWarning(warnings, vc > 1000, "Cutting speed is unusually high. Check units and material limits.");
  addWarning(warnings, z > 20, "Tooth count looks unusually high. Verify cutter data.");
  addWarning(warnings, ae > d * 1.2, "Radial engagement exceeds tool diameter. Check the input.");
  addWarning(warnings, target > 0 && target > 1.2, "Target hmax is extremely high. Check decimal place and cutter type.");
  if (aeRatio < 0.12 && !useTarget && actualHmax < range[0]) warnings.push("Light radial engagement is thinning the chip below the target band. Raise feed or use target hmax.");
  if (strategy === "slot" && aeRatio > 0.8 && vc > start.vc * 1.15) warnings.push("Slotting speed looks aggressive for this material preset.");
  if (ap > d * 3.0) warnings.push("Axial depth is extreme relative to diameter. High risk of deflection, pullout, and poor chip evacuation.");
  else if (ap > d * 2.5) warnings.push("Axial depth is above a normal all-round range. This can still work with a good tool and setup, but watch deflection and evacuation.");
  if (maxRpm && rpmValue > maxRpm) warnings.push("Calculated rpm exceeds the machine limit.");
  if (maxKw && powerKw > maxKw) warnings.push("Estimated spindle load exceeds the entered machine power.");
  if (strategy === "adaptive" && aeRatio > 0.35) warnings.push("Adaptive should usually stay at light radial engagement. This step over is starting to behave more like heavy side milling.");
  if (strategy === "adaptive" && ap < d * 0.5) warnings.push("Adaptive normally earns its keep with decent axial depth. This ap is shallow for a true adaptive cut.");
  if (strategy === "profile" && aeRatio < 0.05) warnings.push("This is so light radially that it is behaving more like a finish pass than a normal profile cut.");
  if (strategy === "profile" && aeRatio > 0.4) warnings.push("This profile cut is getting heavy radially. Check wall stability and tool load.");
  if (strategy === "finish" && aeRatio > 0.12) warnings.push("Finish milling usually wants a lighter step over than this.");
  if (strategy === "finish" && ap > d * 0.75) warnings.push("Finish milling is usually shallower axially than this unless the setup is very stable.");
  if (strategy === "slot" && aeRatio < 0.8) warnings.push("This is not really slotting yet. Increase ae or choose a different strategy.");
  if (actualHmax > range[1] * 1.2) warnings.push("Actual hmax is well above the target band for this material and strategy.");

  let tone = "good";
  let title = "Looks sensible";
  let statusText = `Recommended start for ${material}. ${start.note}`;
  if (warnings.length >= 3) {
    tone = "bad"; title = "High risk setup"; statusText = warnings.join(" ");
  } else if (warnings.length >= 1) {
    tone = "warn"; title = "Proceed with caution"; statusText = warnings.join(" ");
  } else if (!inRange(actualHmax, range)) {
    tone = "warn"; title = "Usable but off target"; statusText = `The setup may cut, but actual hmax is outside the preferred band of ${formatRange(range)}.`;
  }

  $("em-summary").innerHTML = [
    summaryPill("Mode", "Standard endmill"),
    summaryPill("Material", material),
    summaryPill("Target band", `${round(range[0],3)} to ${round(range[1],3)} hmax`)
  ].join("");

  setStatus("em-status", tone, title, statusText);
  const emMove = actualHmax < range[0] ? 'Increase fz' : actualHmax > range[1] ? 'Reduce fz' : 'Tune Vc second';
  setTopCallout("em-topcallout", {
    tone,
    title: inRange(actualHmax, range) ? 'Inside target band' : actualHmax < range[0] ? 'Below target band' : 'Above target band',
    text: inRange(actualHmax, range) ? 'Chip thickness is in the useful zone. Hold feed steady unless the cut proves you wrong.' : actualHmax < range[0] ? 'The edge is seeing too little chip thickness for this geometry. Correct feed before chasing more speed.' : 'Chip thickness is running heavy for the current geometry. Back feed down unless the cut is very stable.',
    move: emMove,
    feed: `${round(feedValue,0)} mm/min`
  });

  renderDecisionTable("endmill", {
    mountId: "em-metrics",
    actualHmax,
    range,
    currentFz: fz,
    bandLow: range[0] / chipFactor,
    bandHigh: range[1] / chipFactor,
    feedValue,
    useTarget,
    vc,
    rpmValue,
    mrrCm3,
    powerKw,
    currentAe: ae,
    aeRatio,
    chipFactor,
    targetFz: correctedFz
  });

  renderHmaxChart({
    mountId: "em-chart",
    statsId: "em-chart-stats",
    captionId: "em-chart-caption",
    controlsId: "em-chart-controls",
    inputId: "em-fz",
    modeLabel: "Endmill",
    chipFactorLabel: "Chip thinning",
    chipFactor,
    currentFz: fz,
    currentAe: ae,
    currentD: d,
    targetFz: correctedFz,
    preferredFz: (range[0] + range[1]) / 2 / chipFactor,
    bandLow: range[0] / chipFactor,
    bandHigh: range[1] / chipFactor,
    actualHmax,
    correctedHmax,
    range,
    inBand: inRange(actualHmax, range),
    useTarget,
    rpmValue,
    zValue: z,
    targetFeed: feed(rpmValue, z, fz),
    chartMode: "dynamic-ae"
  });

  updateEndmillNotes(material, strategy, actualHmax, aeRatio);
  $("em-meaning").textContent = getEndmillMeaning(material, strategy, aeRatio, actualHmax, range);
  $("em-next").textContent = getEndmillNext(material, strategy, warnings, actualHmax, range);
}

function calcHfm(){
  const material = $("hf-material").value;
  const style = $("hf-style").value;
  const d = Number($("hf-d").value);
  const z = Number($("hf-z").value);
  const vc = Number($("hf-vc").value);
  const fz = Number($("hf-fz").value);
  const ae = Number($("hf-ae").value);
  const ap = Number($("hf-ap").value);
  const lead = Number($("hf-lead").value);
  const radius = Number($("hf-radius").value);
  const target = Number($("hf-target").value);
  const useTarget = $("hf-use-target").checked;
  const maxRpm = Number($("hf-maxrpm").value || 0);
  const maxKw = Number($("hf-maxkw").value || 0);

  if ([d,z,vc,fz,ae,ap,lead,radius].some(v => !Number.isFinite(v) || v <= 0)) {
    setStatus("hf-status", "bad", "Invalid input", "All main cutting values need to be above zero.");
    return;
  }

  const start = MATERIALS[material].hf[style];
  const range = start.hmax;
  const chipFactor = leadChipFactor(lead);
  const actualHmax = fz * chipFactor;
  const correctedFz = target > 0 ? target / chipFactor : fz;
  const usedFz = useTarget ? correctedFz : fz;
  const { rpmValue, feedValue } = baseCalculations(vc, d, z, usedFz);
  const correctedHmax = usedFz * chipFactor;
  const mrrCm3 = (ae * ap * feedValue) / 1000;
  const powerKw = mrrCm3 * MATERIALS[material].unitPower;

  const warnings = [];
  addWarning(warnings, fz > 3, "Programmed fz is extremely high. Check units and decimal place.");
  addWarning(warnings, vc > 1000, "Cutting speed is unusually high. Check units and material limits.");
  addWarning(warnings, z > 30, "Tooth count looks unusually high. Verify cutter data.");
  addWarning(warnings, ae > d * 1.2, "Width of cut exceeds tool diameter. Check the input.");
  addWarning(warnings, target > 0 && target > 1.2, "Target hmax is extremely high. Check decimal place and cutter type.");
  if (lead > 30) warnings.push("Lead angle is high for true HFM behaviour. This starts to behave more like normal milling.");
  if (lead < 8) warnings.push("Very low lead angle. Feed can look huge on paper, so verify insert and machine capability.");
  if (ap > radius) warnings.push("Depth of cut exceeds insert corner radius. Check insert limits and edge strength.");
  if (style === "true-hfm" && lead > 20) warnings.push("True HFM usually uses a lower lead angle than this. The cutter is drifting toward general face milling behaviour.");
  if (style === "light-face" && lead < 10) warnings.push("This lead angle is low enough that the cutter is behaving more like a true high-feed mill than a light face mill.");
  if (style === "long-reach" && usedFz > start.fz * 1.15) warnings.push("Feed looks ambitious for a long reach setup.");
  if (style === "long-reach" && ap > radius * 0.8) warnings.push("Long reach work usually wants a conservative depth of cut. This ap is pushing that style.");
  if (maxRpm && rpmValue > maxRpm) warnings.push("Calculated rpm exceeds the machine limit.");
  if (maxKw && powerKw > maxKw) warnings.push("Estimated spindle load exceeds the entered machine power.");
  if (actualHmax > range[1] * 1.2) warnings.push("Actual hmax is well above the target band for this material and HFM style.");

  let tone = "good";
  let title = "Looks sensible";
  let statusText = `Reasonable HFM starting point for ${material}. ${start.note}`;
  if (warnings.length >= 3) {
    tone = "bad"; title = "High risk setup"; statusText = warnings.join(" ");
  } else if (warnings.length >= 1) {
    tone = "warn"; title = "Proceed with caution"; statusText = warnings.join(" ");
  } else if (!inRange(actualHmax, range)) {
    tone = "warn"; title = "Usable but off target"; statusText = `The setup may cut, but actual hmax is outside the preferred band of ${formatRange(range)}.`;
  }

  $("hf-summary").innerHTML = [
    summaryPill("Mode", "High feed mill"),
    summaryPill("Material", material),
    summaryPill("Target band", `${round(range[0],3)} to ${round(range[1],3)} hmax`)
  ].join("");

  setStatus("hf-status", tone, title, statusText);
  const hfMove = actualHmax < range[0] ? 'Increase fz' : actualHmax > range[1] ? 'Reduce fz' : 'Tune Vc second';
  setTopCallout("hf-topcallout", {
    tone,
    title: inRange(actualHmax, range) ? 'Inside target band' : actualHmax < range[0] ? 'Below target band' : 'Above target band',
    text: inRange(actualHmax, range) ? 'Lead-angle thinning is under control here. Feed is defensible, so tune speed and behaviour next.' : actualHmax < range[0] ? 'Lead angle is thinning the chip more than the programmed feed suggests. Correct feed before adding speed.' : 'The insert is seeing more chip thickness than the target window allows. Back feed down first.',
    move: hfMove,
    feed: `${round(feedValue,0)} mm/min`
  });

  renderDecisionTable("hfm", {
    mountId: "hf-metrics",
    actualHmax,
    range,
    currentFz: fz,
    bandLow: range[0] / chipFactor,
    bandHigh: range[1] / chipFactor,
    feedValue,
    useTarget,
    vc,
    rpmValue,
    mrrCm3,
    powerKw,
    currentAe: ae,
    currentLead: lead,
    chipFactor,
    targetFz: correctedFz
  });

  renderHmaxChart({
    mountId: "hf-chart",
    statsId: "hf-chart-stats",
    captionId: "hf-chart-caption",
    controlsId: "hf-chart-controls",
    inputId: "hf-fz",
    modeLabel: "High feed mill",
    chipFactorLabel: "Lead factor",
    chipFactor,
    currentFz: fz,
    currentAe: ae,
    currentD: d,
    targetFz: correctedFz,
    preferredFz: (range[0] + range[1]) / 2 / chipFactor,
    bandLow: range[0] / chipFactor,
    bandHigh: range[1] / chipFactor,
    actualHmax,
    correctedHmax,
    range,
    inBand: inRange(actualHmax, range),
    useTarget,
    currentLead: lead,
    rpmValue,
    zValue: z,
    targetFeed: feed(rpmValue, z, fz),
    chartMode: "dynamic-lead"
  });

  updateHfmNotes(material, style, actualHmax, lead);
  $("hf-meaning").textContent = getHfmMeaning(material, lead, actualHmax, range);
  $("hf-next").textContent = getHfmNext(style, warnings, actualHmax, range);
}

function bindMobileSections(){
  document.querySelectorAll('[data-toggle-section]').forEach(btn => {
    btn.addEventListener('click', () => {
      const scope = btn.dataset.scope;
      const target = btn.dataset.toggleSection;
      document.querySelectorAll(`[data-scope="${scope}"] .mobile-toggle-btn`).forEach(b => b.classList.toggle('active', b === btn));
      document.querySelectorAll(`[data-mobile-section="${scope}"]`).forEach(section => section.classList.toggle('mobile-active', section.dataset.sectionName === target));
    });
  });
}

function bindTabs(){
  document.querySelectorAll(".mode-card").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mode-card").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      $(btn.dataset.tab).classList.add("active");
    });
  });
}

bindTabs();
bindMobileSections();
$("em-preset").addEventListener("click", applyEndmillPreset);
$("hf-preset").addEventListener("click", applyHfmPreset);
$("em-calc").addEventListener("click", calcEndmill);
$("hf-calc").addEventListener("click", calcHfm);
$("em-material").addEventListener("change", applyEndmillPreset);
$("em-strategy").addEventListener("change", applyEndmillPreset);
$("hf-material").addEventListener("change", applyHfmPreset);
$("hf-style").addEventListener("change", applyHfmPreset);

function bindLiveRecalc(){
  const emIds = ["em-d","em-z","em-vc","em-fz","em-ae","em-ap","em-target","em-maxrpm","em-maxkw","em-use-target"];
  const hfIds = ["hf-d","hf-z","hf-vc","hf-fz","hf-ae","hf-ap","hf-lead","hf-radius","hf-target","hf-maxrpm","hf-maxkw","hf-use-target"];
  emIds.forEach(id => { const el = $(id); if (el) el.addEventListener(el.type === "checkbox" ? "change" : "input", calcEndmill); });
  hfIds.forEach(id => { const el = $(id); if (el) el.addEventListener(el.type === "checkbox" ? "change" : "input", calcHfm); });
}

bindLiveRecalc();
applyInputLimits();
applyEndmillPreset();
applyHfmPreset();
calcEndmill();
calcHfm();
