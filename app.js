const KEYS = {
  "AX7K2M": "user",
  "BQ4L9P": "friend1",
  "CR8N3T": "friend2",
  "DZ5V6H": "friend3",
  "EY1J8R": "friend4",
  "FW3S2L": "friend5"
};

const COACHING = {
  "Fatigue": "Coach tip: consider scaling down to an elastic version on low energy days.",
  "Forgot": "Coach tip: anchor this habit directly to an existing morning routine.",
  "Busy": "Coach tip: block a 15-minute execution window on your calendar."
};

const STRUGGLE_PRESETS = {
  getting_over_ex: {
    habits: [
      "Zero contact streak tracking (reset timer on slip-up)",
      "Archive/delete old media & conversation threads",
      "Nightly self-worth & progress journaling",
      "Identify 3 non-negotiable standards for future partners",
      "Plan 1 daily activity solely for self-fulfillment"
    ],
    skills: ["Radical Acceptance", "Emotional Detachment", "Boundary Reinforcement", "Grief Processing"],
    friction: [
      "Checking ex's active status / social media updates",
      "Re-reading old text message archives late at night",
      "Asking mutual friends about their life",
      "Stalking their friends' stories for background appearances",
      "Keeping gifts or physical reminders in plain view"
    ]
  },
  love_and_dating: {
    habits: [
      "Weekly relationship standards audit",
      "Limit dating app usage to 15 minutes daily",
      "Schedule non-negotiable personal time around dating",
      "Journal feelings after dates to spot red flags early",
      "Practice explicit communication regarding intentions"
    ],
    skills: ["Boundary Setting", "Discerning Intentions", "Secure Attachment Dynamics", "Emotional Independence"],
    friction: [
      "Ignoring clear red flags for fast validation",
      "Double/triple messaging when feeling anxious",
      "Prioritizing potential partners over personal goals",
      "Fixating on text response times",
      "Over-analyzing tone in basic text messages"
    ]
  },
  peer_pressure_fomo: {
    habits: [
      "Daily morning core values alignment check",
      "Digital detox: no social media apps past 10 PM",
      "Budget-first decision audit before committing to plans",
      "Say 'let me check my schedule' before agreeing to invites",
      "Document weekly financial and personal wins"
    ],
    skills: ["Assertive Communication", "Value Alignment", "Financial Discipline", "Selective Availability"],
    friction: [
      "Saying 'yes' to expensive plans out of fear of missing out",
      "Comparing lifestyle/spending habits with online peers",
      "Buying things you don't need to impress others",
      "Conforming opinions to fit into group chats",
      "Apologizing for establishing personal boundaries"
    ]
  },
  social_anxiety: {
    habits: [
      "1 micro-exposure daily (initiate 1 brief conversation)",
      "Maintain a 3-second eye contact target in daily interactions",
      "Box-breathing routine before entering social settings",
      "Record positive social interactions in a log",
      "Practice vocal projection exercises in morning routine"
    ],
    skills: ["Active Listening", "Conversational Flow", "Body Language Mastery", "Self-Soothing"],
    friction: [
      "Replaying awkward moments over and over in your head",
      "Canceling plans at the last minute due to overthinking",
      "Using your phone as a social shield in group settings",
      "Assuming people are judging your presence or outfit",
      "Avoiding eye contact while walking in public"
    ]
  },
  anger_and_frustration: {
    habits: [
      "10-minute breathwork / decompression right after intense events",
      "Track daily emotional trigger patterns in a log",
      "High-intensity physical outlet daily (gym, run, boxing)",
      "Execute a 10-second rule before responding to conflict",
      "Write uncensored thoughts on paper, then destroy it"
    ],
    skills: ["Emotional Regulation", "Pause Before Response", "De-escalation", "Channeling Energy"],
    friction: [
      "Impulsive texting or calling while visibly agitated",
      "Engaging in heated arguments in online comment sections",
      "Venting endlessly without seeking solutions",
      "Taking anger out on objects or physical surroundings",
      "Holding long-term grudges that consume mental bandwidth"
    ]
  },
  brain_fog_doomscrolling: {
    habits: [
      "Cold shower morning reset",
      "Zero phone usage for the first 45 minutes awake",
      "Drink 1L of water before consuming caffeine",
      "Use grayscale mode on phone during work hours",
      "Single-tasking training: 30-minute block without secondary screens"
    ],
    skills: ["Deep Focus Blocks", "Information Dieting", "Dopamine Detoxification", "Attention Control"],
    friction: [
      "Doomscrolling short-form content (TikTok/Reels/Shorts) in bed",
      "Multitasking with video streams in the background while working",
      "Checking notifications immediately upon waking up",
      "Leaving 50+ tabs open in your browser simultaneously",
      "Reaching for your phone every time you experience boredom"
    ]
  },
  procrastination_execution: {
    habits: [
      "Apply the 5-minute rule: start a task for 5 minutes only",
      "Set 3 non-negotiable daily output objectives",
      "Nightly schedule planning for the next morning",
      "Use site blockers during scheduled focus windows",
      "Work in 25-minute uninterrupted focus sprints"
    ],
    skills: ["Time-Boxing", "Task Decomposition", "Friction Reduction", "Momentum Building"],
    friction: [
      "Opening YouTube/socials during study or work blocks",
      "Endless organizing/planning without starting execution",
      "Waiting for 'inspiration' or the 'perfect mood' to start",
      "Overestimating how much time is left to complete tasks",
      "Abandoning tasks at the first sign of confusion"
    ]
  },
  burnout_overwhelm: {
    habits: [
      "Strict work shutdown at 8 PM daily",
      "8-hour sleep requirement (no screens in bedroom)",
      "Unplugged 20-minute daily walk without audio/podcasts",
      "Weekly priority pruning: drop 2 non-essential tasks",
      "Daily gratitude log targeting small simple moments"
    ],
    skills: ["Energy Management", "Delegation", "Rest Prioritization", "Stress Resilience"],
    friction: [
      "Working directly from your bed",
      "Ignoring physical fatigue signals (migraines, muscle tension)",
      "Saying yes to extra projects when already overloaded",
      "Consuming high caffeine late in the day to force productivity",
      "Feeling guilty whenever taking intentional breaks"
    ]
  },
  life_direction_identity: {
    habits: [
      "Weekly 20-minute personal vision & goal alignment audit",
      "Dedicate 1 hour daily strictly to long-term skill acquisition",
      "Read 10 pages of self-mastery or industry literature daily",
      "Track weekly skill developments and real-world wins",
      "Conduct a monthly review of personal progress"
    ],
    skills: ["Long-term Strategy", "Self-Reflection", "Skill Compounding", "Identity Design"],
    friction: [
      "Living on autopilot without clear quarterly goals",
      "Constantly seeking external approval for personal life choices",
      "Changing career/life directions every few weeks based on trends",
      "Focusing on short-term entertainment over long-term growth",
      "Letting fear of failure prevent starting new projects"
    ]
  }
};

let state = {
  version: 1,
  activeUserKey: null,
  profiles: {
    user: { name: "You", onboarded: false, habits: [], skills: [], logs: {}, friction: [], lastSeen: null },
    friend1: { name: "Friend 1", onboarded: false, habits: [], skills: [], logs: {}, friction: [], lastSeen: null },
    friend2: { name: "Friend 2", onboarded: false, habits: [], skills: [], logs: {}, friction: [], lastSeen: null },
    friend3: { name: "Friend 3", onboarded: false, habits: [], skills: [], logs: {}, friction: [], lastSeen: null },
    friend4: { name: "Friend 4", onboarded: false, habits: [], skills: [], logs: {}, friction: [], lastSeen: null },
    friend5: { name: "Friend 5", onboarded: false, habits: [], skills: [], logs: {}, friction: [], lastSeen: null },
  }
};

let pendingMissCell = null;

// The month/year currently shown in the habit grid. Runtime only —
// every visit opens on today's month, it isn't saved.
const today = new Date();
let viewYear = today.getFullYear();
let viewMonth = today.getMonth() + 1; // 1-12

const MONTH_NAMES = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

function daysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function pad2(n) { return String(n).padStart(2, '0'); }

function dateKey(year, month, day) {
  return `${year}-${pad2(month)}-${pad2(day)}`;
}

function logKey(hIdx, year, month, day) {
  return `${hIdx}-${dateKey(year, month, day)}`;
}

// Older saves used plain "hIdx-day" keys with no month/year at all.
// Fold any of those into the month the app happened to be opened in
// so nothing gets silently dropped.
function migrateLegacyLogs(profile) {
  const migratedLogs = {};
  let touched = false;
  Object.keys(profile.logs || {}).forEach(key => {
    const parts = key.split('-');
    if (parts.length === 2) {
      const [hIdx, day] = parts;
      migratedLogs[logKey(hIdx, viewYear, viewMonth, day)] = profile.logs[key];
      touched = true;
    } else {
      migratedLogs[key] = profile.logs[key];
    }
  });
  if (touched) profile.logs = migratedLogs;
}

function init() {
  try {
    const saved = localStorage.getItem('four_keys_data');
    if (saved) {
      const loadedState = JSON.parse(saved);
      if (loadedState && loadedState.profiles) {
        state = { ...state, ...loadedState, profiles: { ...state.profiles, ...loadedState.profiles } };
      }
    }
  } catch (err) {
    console.error('Saved data was unreadable, starting fresh.', err);
  }

  Object.values(state.profiles).forEach(migrateLegacyLogs);

  setupEventListeners();

  try {
    const sessionKey = localStorage.getItem('four_keys_session');
    if (sessionKey && KEYS[sessionKey]) {
      verifyAndLogin(sessionKey);
    }
  } catch (err) {
    console.error('Could not restore session.', err);
  }
}

function saveData() {
  try {
    localStorage.setItem('four_keys_data', JSON.stringify(state));
  } catch (err) {
    console.error('Could not save data.', err);
  }
}

function handleAuth() {
  const inputEl = document.getElementById('passkey-input');
  const val = inputEl ? inputEl.value.trim().toUpperCase() : '';

  if (KEYS[val]) {
    document.getElementById('auth-error').classList.add('hidden');
    verifyAndLogin(val);
  } else {
    document.getElementById('auth-error').classList.remove('hidden');
  }
}

function verifyAndLogin(key) {
  const userKey = KEYS[key];
  state.activeUserKey = userKey;

  if (!state.profiles[userKey]) {
    state.profiles[userKey] = {
      name: `User (${key})`,
      onboarded: false,
      habits: [],
      skills: [],
      logs: {},
      friction: [],
      lastSeen: null
    };
  }

  if (state.profiles[userKey].onboarded === undefined || state.profiles[userKey].onboarded === null) {
    state.profiles[userKey].onboarded = false;
  }

  state.profiles[userKey].lastSeen = Date.now();

  try {
    localStorage.setItem('four_keys_session', key);
  } catch (err) {
    console.error('Could not persist session.', err);
  }
  saveData();
  startPresenceHeartbeat();
  showApp();
}

function logout() {
  touchLastSeen();
  stopPresenceHeartbeat();
  try {
    localStorage.removeItem('four_keys_session');
  } catch (err) {
    console.error('Could not clear session.', err);
  }
  location.reload();
}

/* Presence: "last seen" / "online" tracking.
   IMPORTANT: this only reflects activity recorded in THIS browser's
   localStorage. If everyone uses their own device, each device only
   ever knows its own user's presence — "online" for a friend will
   look stale or "Never" until their data is imported here. Real
   cross-device presence needs a small backend; see the note in chat. */
const ONLINE_THRESHOLD_MS = 2 * 60 * 1000; // 2 minutes
let presenceInterval = null;

function touchLastSeen() {
  if (!state.activeUserKey) return;
  const profile = state.profiles[state.activeUserKey];
  if (!profile) return;
  profile.lastSeen = Date.now();
  saveData();
}

function startPresenceHeartbeat() {
  stopPresenceHeartbeat();
  presenceInterval = setInterval(() => {
    touchLastSeen();
    const groupTab = document.getElementById('tab-group');
    if (groupTab && !groupTab.classList.contains('hidden')) renderGroup();
  }, 30000);

  document.addEventListener('visibilitychange', handleVisibilityChange);
  window.addEventListener('beforeunload', touchLastSeen);
}

function stopPresenceHeartbeat() {
  if (presenceInterval) {
    clearInterval(presenceInterval);
    presenceInterval = null;
  }
  document.removeEventListener('visibilitychange', handleVisibilityChange);
  window.removeEventListener('beforeunload', touchLastSeen);
}

function handleVisibilityChange() {
  if (!document.hidden) touchLastSeen();
}

function isOnline(lastSeen) {
  return !!lastSeen && (Date.now() - lastSeen) <= ONLINE_THRESHOLD_MS;
}

function formatLastSeen(lastSeen) {
  if (!lastSeen) return 'Never';
  const diffMs = Date.now() - lastSeen;
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return 'Just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  const d = new Date(lastSeen);
  return `${MONTH_NAMES[d.getMonth()].slice(0, 3)} ${d.getDate()}`;
}

function showApp() {
  const authScreen = document.getElementById('auth-screen');
  if (authScreen) {
    authScreen.classList.add('hidden');
    authScreen.style.display = 'none';
  }

  const curProfile = state.profiles[state.activeUserKey];
  const appScreen = document.getElementById('app-screen');
  const onboardScreen = document.getElementById('onboarding-screen');

  if (!curProfile || !curProfile.onboarded) {
    if (appScreen) { appScreen.classList.add('hidden'); appScreen.style.display = 'none'; }
    if (onboardScreen) { onboardScreen.classList.remove('hidden'); onboardScreen.style.display = 'flex'; }
    return;
  }

  if (onboardScreen) { onboardScreen.classList.add('hidden'); onboardScreen.style.display = 'none'; }
  if (appScreen) { appScreen.classList.remove('hidden'); appScreen.style.display = 'block'; }

  const nameLabel = document.getElementById('active-user-name');
  const nameInput = document.getElementById('display-name-input');
  if (nameLabel) nameLabel.innerText = curProfile.name;
  if (nameInput) nameInput.value = curProfile.name;

  renderAll();
}

/* Onboarding */
function submitOnboarding() {
  const checked = Array.from(document.querySelectorAll('.struggle-cb:checked')).map(cb => cb.value);
  completeOnboarding(checked);
}

function completeOnboarding(selectedStruggles = []) {
  const curProfile = state.profiles[state.activeUserKey];
  if (!curProfile) return;

  curProfile.habits = [];
  curProfile.skills = [];
  curProfile.friction = [];

  if (selectedStruggles.length === 0) {
    selectedStruggles = ['procrastination_execution', 'brain_fog_doomscrolling'];
  }

  selectedStruggles.forEach(key => {
    const preset = STRUGGLE_PRESETS[key];
    if (preset) {
      curProfile.habits.push(...preset.habits);
      curProfile.skills.push(...preset.skills);
      curProfile.friction.push(...preset.friction.map(reason => ({ habit: null, day: null, reason, seed: true })));
    }
  });

  curProfile.habits = [...new Set(curProfile.habits)];
  curProfile.skills = [...new Set(curProfile.skills)].map(name => ({ name, hours: 0, progress: 0 }));
  // Friction from presets is "things to watch for," not real missed days — keep habits/skills seeded,
  // but leave the friction log itself empty until a real miss happens.
  curProfile.friction = [];

  curProfile.onboarded = true;
  saveData();
  showApp();
}

function switchTab(tab, clickedBtn) {
  ['habits', 'skills', 'progress', 'group', 'friction', 'settings'].forEach(t => {
    const el = document.getElementById(`tab-${t}`);
    if (el) el.classList.add('hidden');
  });

  const targetTab = document.getElementById(`tab-${tab}`);
  if (targetTab) targetTab.classList.remove('hidden');

  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  if (clickedBtn) clickedBtn.classList.add('active');

  if (tab === 'progress') renderProgress();
}

/* Month navigation */
function renderMonthLabel() {
  const label = document.getElementById('month-label');
  if (label) label.innerText = `${MONTH_NAMES[viewMonth - 1]} ${viewYear}`;
}

function changeMonth(delta) {
  viewMonth += delta;
  if (viewMonth > 12) { viewMonth = 1; viewYear += 1; }
  if (viewMonth < 1) { viewMonth = 12; viewYear -= 1; }
  renderHabits();
}

function jumpToToday() {
  const now = new Date();
  viewYear = now.getFullYear();
  viewMonth = now.getMonth() + 1;
  renderHabits();
}

/* Habit Grid */
function renderHabits() {
  const profile = state.profiles[state.activeUserKey];
  const header = document.getElementById('grid-header');
  const body = document.getElementById('grid-body');
  if (!profile || !header || !body) return;

  renderMonthLabel();

  const total = daysInMonth(viewYear, viewMonth);
  const now = new Date();
  const isCurrentMonth = viewYear === now.getFullYear() && viewMonth === now.getMonth() + 1;
  const todayDay = now.getDate();

  header.innerHTML = '<th class="sticky-col">Habit</th>';
  for (let i = 1; i <= total; i++) {
    const isToday = isCurrentMonth && i === todayDay;
    header.innerHTML += `<th class="${isToday ? 'is-today' : ''}">${i}</th>`;
  }

  body.innerHTML = '';
  if (profile.habits.length === 0) {
    body.innerHTML = `<tr><td class="sticky-col empty-note" colspan="${total + 1}">No habits yet &mdash; add one below.</td></tr>`;
    return;
  }

  profile.habits.forEach((habit, hIdx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td class="sticky-col">${escapeHtml(habit)}</td>`;
    for (let day = 1; day <= total; day++) {
      const key = logKey(hIdx, viewYear, viewMonth, day);
      const val = profile.logs[key] || '';
      let classCss = '';
      if (val === '✓') classCss = 'status-done';
      if (val === '~') classCss = 'status-elastic';
      if (val === '✕') classCss = 'status-missed';
      const isToday = isCurrentMonth && day === todayDay;

      tr.innerHTML += `<td class="${isToday ? 'is-today' : ''}"><div class="cell-toggle ${classCss}" data-hidx="${hIdx}" data-day="${day}">${val}</div></td>`;
    }
    body.appendChild(tr);
  });
}

function toggleHabit(hIdx, day) {
  const profile = state.profiles[state.activeUserKey];
  const key = logKey(hIdx, viewYear, viewMonth, day);
  const curr = profile.logs[key] || '';

  let next = '';
  if (curr === '') {
    next = '✓';
  } else if (curr === '✓') {
    next = '~';
  } else if (curr === '~') {
    next = '✕';
    pendingMissCell = { hIdx, year: viewYear, month: viewMonth, day };
    document.getElementById('failure-modal').classList.remove('hidden');
  } else {
    next = '';
  }

  profile.logs[key] = next;
  saveData();
  renderHabits();
}

function submitFailureReason(reason) {
  if (pendingMissCell) {
    const profile = state.profiles[state.activeUserKey];
    profile.friction.push({
      habit: profile.habits[pendingMissCell.hIdx],
      date: dateKey(pendingMissCell.year, pendingMissCell.month, pendingMissCell.day),
      reason: reason
    });
    const advice = document.getElementById('advice-container');
    advice.innerText = COACHING[reason] || '';
    advice.classList.remove('hidden');
    pendingMissCell = null;
  }
  document.getElementById('failure-modal').classList.add('hidden');
  saveData();
  renderFriction();
}

function addHabit() {
  const input = document.getElementById('new-habit-input');
  const val = input.value.trim();
  if (val) {
    state.profiles[state.activeUserKey].habits.push(val);
    input.value = '';
    saveData();
    renderHabits();
  }
}

/* Skills Hub */
function renderSkills() {
  const profile = state.profiles[state.activeUserKey];
  const container = document.getElementById('skills-container');
  if (!profile || !container) return;
  container.innerHTML = '';

  if (profile.skills.length === 0) {
    container.innerHTML = '<p class="empty-note">No skills added yet.</p>';
    return;
  }

  profile.skills.forEach((skill, sIdx) => {
    const card = document.createElement('div');
    card.className = 'panel skill-card';
    card.innerHTML = `
      <div class="skill-header">
        <span class="skill-title">${escapeHtml(skill.name)}</span>
        <button class="btn-secondary skill-remove-btn" type="button" data-sidx="${sIdx}">Remove</button>
      </div>
      <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${skill.progress}%"></div></div>
      <div class="skill-meta">Progress: ${skill.progress}% | Hours: ${skill.hours}</div>
      <div class="flex-gap-8">
        <button class="btn-secondary add-hrs-btn" type="button" data-sidx="${sIdx}" data-hrs="0.5">+0.5h</button>
        <button class="btn-secondary add-hrs-btn" type="button" data-sidx="${sIdx}" data-hrs="1">+1h</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function addSkill() {
  const input = document.getElementById('new-skill-input');
  const val = input.value.trim();
  if (val) {
    state.profiles[state.activeUserKey].skills.push({ name: val, hours: 0, progress: 0 });
    input.value = '';
    saveData();
    renderSkills();
  }
}

function updateHours(sIdx, amt) {
  const skill = state.profiles[state.activeUserKey].skills[sIdx];
  if (!skill) return;
  skill.hours = Math.round((skill.hours + amt) * 100) / 100;
  skill.progress = Math.min(100, Math.round((skill.hours / 20) * 100));
  saveData();
  renderSkills();
}

function removeSkill(sIdx) {
  state.profiles[state.activeUserKey].skills.splice(sIdx, 1);
  saveData();
  renderSkills();
}

/* Group Accountability */
/* Progress ("how far you've come") */

// Pulls every logged entry for a profile into a flat list of
// { hIdx, date: 'YYYY-MM-DD', status } records, newest key format only
// (migrateLegacyLogs already folds old keys into that shape on load).
function collectLogEntries(profile) {
  const entries = [];
  Object.keys(profile.logs).forEach(key => {
    const val = profile.logs[key];
    if (!val) return;
    const parts = key.split('-');
    if (parts.length !== 4) return;
    const [hIdx, year, month, day] = parts;
    entries.push({ hIdx: Number(hIdx), date: `${year}-${month}-${day}`, status: val });
  });
  return entries;
}

function computeStreaks(distinctCleanDates) {
  // distinctCleanDates: Set of 'YYYY-MM-DD' strings where the day had
  // at least one entry and zero misses.
  if (distinctCleanDates.size === 0) return { current: 0, longest: 0 };

  const toDate = (s) => {
    const [y, m, d] = s.split('-').map(Number);
    return new Date(y, m - 1, d);
  };
  const oneDay = 24 * 60 * 60 * 1000;

  const sorted = [...distinctCleanDates].sort();
  let longest = 1, run = 1;
  for (let i = 1; i < sorted.length; i++) {
    const gap = Math.round((toDate(sorted[i]) - toDate(sorted[i - 1])) / oneDay);
    run = gap === 1 ? run + 1 : 1;
    if (run > longest) longest = run;
  }

  // Current streak: walk back from today while each consecutive
  // calendar day is in the clean set.
  let current = 0;
  const cursor = new Date();
  cursor.setHours(0, 0, 0, 0);
  while (true) {
    const key = dateKey(cursor.getFullYear(), cursor.getMonth() + 1, cursor.getDate());
    if (distinctCleanDates.has(key)) {
      current++;
      cursor.setDate(cursor.getDate() - 1);
    } else {
      break;
    }
  }

  return { current, longest };
}

function renderProgress() {
  const profile = state.profiles[state.activeUserKey];
  const summaryEl = document.getElementById('progress-summary');
  const chartEl = document.getElementById('progress-chart');
  const habitsEl = document.getElementById('progress-habits');
  if (!profile || !summaryEl || !chartEl || !habitsEl) return;

  const entries = collectLogEntries(profile);

  if (entries.length === 0) {
    summaryEl.innerHTML = '<p class="empty-note">No days logged yet &mdash; mark a few habits on the grid and check back here.</p>';
    chartEl.innerHTML = '';
    habitsEl.innerHTML = '';
    return;
  }

  // Overall totals
  let done = 0, elastic = 0, missed = 0;
  entries.forEach(e => {
    if (e.status === '✓') done++;
    if (e.status === '~') elastic++;
    if (e.status === '✕') missed++;
  });
  const totalMarks = done + elastic + missed;
  const consistency = totalMarks > 0 ? Math.round(((done + elastic) / totalMarks) * 100) : 0;

  // Per-day rollup, for streaks and the monthly chart
  const byDay = {}; // date -> { done, elastic, missed }
  entries.forEach(e => {
    if (!byDay[e.date]) byDay[e.date] = { done: 0, elastic: 0, missed: 0 };
    if (e.status === '✓') byDay[e.date].done++;
    if (e.status === '~') byDay[e.date].elastic++;
    if (e.status === '✕') byDay[e.date].missed++;
  });

  const cleanDates = new Set(
    Object.keys(byDay).filter(d => byDay[d].missed === 0 && (byDay[d].done + byDay[d].elastic) > 0)
  );
  const { current, longest } = computeStreaks(cleanDates);
  const daysTracked = Object.keys(byDay).length;
  const firstDate = Object.keys(byDay).sort()[0];

  summaryEl.innerHTML = `
    <div class="stat-grid">
      <div class="stat-box"><span class="stat-value">${consistency}%</span><span class="stat-label">Lifetime consistency</span></div>
      <div class="stat-box"><span class="stat-value">${current}</span><span class="stat-label">Current streak (days)</span></div>
      <div class="stat-box"><span class="stat-value">${longest}</span><span class="stat-label">Longest streak (days)</span></div>
      <div class="stat-box"><span class="stat-value">${daysTracked}</span><span class="stat-label">Days tracked</span></div>
    </div>
    <p class="hint-text">Tracking since ${firstDate ? escapeHtml(firstDate) : '\u2014'}. ${done} done, ${elastic} elastic, ${missed} missed overall.</p>
  `;

  // Monthly consistency chart — last 8 months that have data
  const byMonth = {}; // 'YYYY-MM' -> { done, elastic, missed }
  entries.forEach(e => {
    const monthKey = e.date.slice(0, 7);
    if (!byMonth[monthKey]) byMonth[monthKey] = { done: 0, elastic: 0, missed: 0 };
    if (e.status === '✓') byMonth[monthKey].done++;
    if (e.status === '~') byMonth[monthKey].elastic++;
    if (e.status === '✕') byMonth[monthKey].missed++;
  });
  const monthKeys = Object.keys(byMonth).sort().slice(-8);

  if (monthKeys.length === 0) {
    chartEl.innerHTML = '<p class="empty-note">Not enough data yet.</p>';
  } else {
    chartEl.innerHTML = '<div class="bar-chart">' + monthKeys.map(mk => {
      const m = byMonth[mk];
      const totalM = m.done + m.elastic + m.missed;
      const pct = totalM > 0 ? Math.round(((m.done + m.elastic) / totalM) * 100) : 0;
      const [y, mo] = mk.split('-').map(Number);
      const label = MONTH_NAMES[mo - 1].slice(0, 3);
      return `
        <div class="bar-col">
          <span class="bar-pct">${pct}%</span>
          <div class="bar-track"><div class="bar-fill" style="height:${pct}%"></div></div>
          <span class="bar-label">${label} '${String(y).slice(2)}</span>
        </div>`;
    }).join('') + '</div>';
  }

  // Per-habit breakdown
  if (profile.habits.length === 0) {
    habitsEl.innerHTML = '<p class="empty-note">No habits yet.</p>';
  } else {
    habitsEl.innerHTML = profile.habits.map((habit, hIdx) => {
      const hEntries = entries.filter(e => e.hIdx === hIdx);
      const hDone = hEntries.filter(e => e.status === '✓').length;
      const hElastic = hEntries.filter(e => e.status === '~').length;
      const hMissed = hEntries.filter(e => e.status === '✕').length;
      const hTotal = hDone + hElastic + hMissed;
      const hPct = hTotal > 0 ? Math.round(((hDone + hElastic) / hTotal) * 100) : 0;
      return `
        <div class="habit-progress-row">
          <div class="habit-progress-name">${escapeHtml(habit)}</div>
          <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${hPct}%"></div></div>
          <div class="habit-progress-pct">${hTotal > 0 ? hPct + '%' : '&mdash;'}</div>
        </div>`;
    }).join('');
  }
}

function renderGroup() {
  const tbody = document.getElementById('group-table-body');
  if (!tbody) return;
  tbody.innerHTML = '';

  Object.keys(state.profiles).forEach(pKey => {
    const p = state.profiles[pKey];
    let done = 0, elastic = 0, missed = 0;
    Object.values(p.logs).forEach(v => {
      if (v === '✓') done++;
      if (v === '~') elastic++;
      if (v === '✕') missed++;
    });

    const total = done + elastic + missed;
    const rate = total > 0 ? Math.round(((done + elastic) / total) * 100) : 0;
    const passed = rate >= 80;
    const online = isOnline(p.lastSeen);

    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${escapeHtml(p.name)}</td>
      <td class="status-cell"><span class="status-dot ${online ? 'online' : 'offline'}"></span>${online ? 'Online' : 'Offline'}</td>
      <td>${formatLastSeen(p.lastSeen)}</td>
      <td>${rate}%</td>
      <td>${done}</td>
      <td>${elastic}</td>
      <td>${missed}</td>
      <td class="${passed ? 'stake-pass' : 'stake-fail'}">${passed ? 'Passed' : '$20 Owed'}</td>
    `;
    tbody.appendChild(tr);
  });
}

/* Friction Log */
function renderFriction() {
  const profile = state.profiles[state.activeUserKey];
  const list = document.getElementById('friction-log-list');
  if (!profile || !list) return;
  list.innerHTML = '';

  if (profile.friction.length === 0) {
    list.innerHTML = '<p class="empty-note">No missed entries logged.</p>';
    return;
  }

  // Most recent first
  const sorted = [...profile.friction].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  sorted.forEach(f => {
    const item = document.createElement('div');
    item.className = 'friction-item';
    item.innerHTML = `<strong>${escapeHtml(f.habit || '')}</strong> (${escapeHtml(f.date || '')}): <span class="reason-text">${escapeHtml(f.reason)}</span>`;
    list.appendChild(item);
  });
}

function updateDisplayName(val) {
  const trimmed = val.trim();
  if (!trimmed) return;
  state.profiles[state.activeUserKey].name = trimmed;
  document.getElementById('active-user-name').innerText = trimmed;
  saveData();
  renderGroup();
}

/* Data Safeguards */
function exportData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `ontrack_backup.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;

  const fileReader = new FileReader();
  fileReader.onload = function (event) {
    try {
      const imported = JSON.parse(event.target.result);
      if (!imported || typeof imported !== 'object' || !imported.profiles) {
        throw new Error('File is missing a "profiles" section.');
      }
      state = imported;
      if (!state.activeUserKey || !state.profiles[state.activeUserKey]) {
        state.activeUserKey = Object.keys(state.profiles)[0] || null;
      }
      saveData();
      showApp();
    } catch (err) {
      alert('That file could not be imported: ' + err.message);
    } finally {
      e.target.value = '';
    }
  };
  fileReader.readAsText(file);
}

function renderAll() {
  renderHabits();
  renderSkills();
  renderGroup();
  renderFriction();
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* Global Listeners */
function setupEventListeners() {
  const bind = (id, event, handler) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener(event, handler);
    } else {
      console.warn(`OnTrack: expected element #${id} was not found in the DOM.`);
    }
  };

  bind('unlock-btn', 'click', handleAuth);
  bind('passkey-input', 'keyup', (e) => { if (e.key === 'Enter') handleAuth(); });
  bind('lock-btn', 'click', logout);
  bind('submit-onboarding-btn', 'click', submitOnboarding);
  bind('add-habit-btn', 'click', addHabit);
  bind('new-habit-input', 'keyup', (e) => { if (e.key === 'Enter') addHabit(); });
  bind('prev-month-btn', 'click', () => changeMonth(-1));
  bind('next-month-btn', 'click', () => changeMonth(1));
  bind('today-btn', 'click', jumpToToday);
  bind('add-skill-btn', 'click', addSkill);
  bind('new-skill-input', 'keyup', (e) => { if (e.key === 'Enter') addSkill(); });
  bind('export-btn', 'click', exportData);
  bind('import-btn', 'click', () => document.getElementById('import-file').click());
  bind('import-file', 'change', importData);
  bind('display-name-input', 'change', (e) => updateDisplayName(e.target.value));

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => switchTab(e.target.dataset.tab, e.target));
  });

  const gridBody = document.getElementById('grid-body');
  if (gridBody) {
    gridBody.addEventListener('click', (e) => {
      const cell = e.target.closest('.cell-toggle');
      if (cell) {
        toggleHabit(parseInt(cell.dataset.hidx, 10), parseInt(cell.dataset.day, 10));
      }
    });
  }

  const skillsContainer = document.getElementById('skills-container');
  if (skillsContainer) {
    skillsContainer.addEventListener('click', (e) => {
      const removeBtn = e.target.closest('.skill-remove-btn');
      const hrsBtn = e.target.closest('.add-hrs-btn');
      if (removeBtn) {
        removeSkill(parseInt(removeBtn.dataset.sidx, 10));
      } else if (hrsBtn) {
        updateHours(parseInt(hrsBtn.dataset.sidx, 10), parseFloat(hrsBtn.dataset.hrs));
      }
    });
  }

  document.querySelectorAll('.modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => submitFailureReason(e.target.dataset.reason));
  });
}

window.onload = init;