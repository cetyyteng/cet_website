// Antigravity IDE - CET Cooperation Survey Dashboard Application Logic
document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle Management
  initTheme();

  // Navigation Smooth Scroll & Active Indicator
  initNavigation();

  // Render All Dashboard Components
  renderOverviewMetrics();
  renderPart1Principles();
  renderPart2Spectrum();
  renderPart3Cases();
  renderPart5SOP();
  renderMatrixTable();
  renderRespondentDropdown();

  // Lucide Icons init if present
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Global state
let currentCaseIndex = 0;
let currentStanceFilter = 'ALL';
let currentSearchTerm = '';
let part1ChartInstance = null;
let part1RadarInstance = null;
let caseDonutChartInstance = null;

/**
 * Theme Management
 */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('cet_dashboard_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cet_dashboard_theme', next);
      updateThemeIcon(next);
      updateChartThemes();
    });
  }
}

function updateThemeIcon(theme) {
  const iconSpan = document.getElementById('theme-icon');
  if (iconSpan) {
    iconSpan.innerHTML = theme === 'dark' ? '☀️' : '🌙';
  }
}

function getThemeColors() {
  const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  return {
    text: isDark ? '#f1f5f9' : '#0f172a',
    textMuted: isDark ? '#94a3b8' : '#64748b',
    grid: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
    surface: isDark ? '#121e27' : '#ffffff'
  };
}

function updateChartThemes() {
  if (part1ChartInstance) part1ChartInstance.destroy();
  if (part1RadarInstance) part1RadarInstance.destroy();
  if (caseDonutChartInstance) caseDonutChartInstance.destroy();
  renderPart1Principles();
  renderCaseDetail(currentCaseIndex);
}

/**
 * Navigation Scroll & Active States
 */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

/**
 * Overview Metrics Render
 */
function renderOverviewMetrics() {
  const totalResp = SURVEY_DATA.metadata.total_respondents;
  document.getElementById('metric-total').textContent = `${totalResp} 位`;
  
  // Highest principle
  const sortedP1 = [...SURVEY_DATA.part1.questions].sort((a, b) => b.avg_score - a.avg_score);
  document.getElementById('metric-top-principle').textContent = `${sortedP1[0].short} (${sortedP1[0].avg_score}分)`;
  
  // Consensus Greenlight
  document.getElementById('metric-top-green').textContent = '同類 NGO/合作社 (90.5%)';

  // Key controversy
  document.getElementById('metric-controversy').textContent = '超商零錢捐 & 點數兌換';
}

/**
 * Part 1: Core Principles (Ranking + Radar)
 */
function renderPart1Principles() {
  const theme = getThemeColors();
  const questions = [...SURVEY_DATA.part1.questions].sort((a, b) => b.avg_score - a.avg_score);

  // Horizontal Bar Chart for Ranking
  const barCtx = document.getElementById('part1RankingChart');
  if (barCtx) {
    part1ChartInstance = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: questions.map(q => q.short),
        datasets: [{
          label: '平均重要程度 (滿分 5.0)',
          data: questions.map(q => q.avg_score),
          backgroundColor: questions.map(q => q.avg_score >= 4.5 ? 'rgba(16, 185, 129, 0.85)' : 'rgba(56, 189, 248, 0.8)'),
          borderColor: questions.map(q => q.avg_score >= 4.5 ? '#10b981' : '#38bdf8'),
          borderWidth: 1,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              title: (ctx) => questions[ctx[0].dataIndex].title,
              label: (ctx) => ` 平均得分: ${ctx.raw} 分 / 5.0 (分類: ${questions[ctx.dataIndex].category})`
            }
          }
        },
        scales: {
          x: {
            min: 3.0,
            max: 5.0,
            grid: { color: theme.grid },
            ticks: { color: theme.textMuted, font: { family: 'inherit' } }
          },
          y: {
            grid: { display: false },
            ticks: { color: theme.text, font: { family: 'inherit', weight: '600', size: 12 } }
          }
        }
      }
    });
  }

  // Radar Chart
  const radarCtx = document.getElementById('part1RadarChart');
  if (radarCtx) {
    const rawQuestions = SURVEY_DATA.part1.questions;
    part1RadarInstance = new Chart(radarCtx, {
      type: 'radar',
      data: {
        labels: rawQuestions.map(q => q.short),
        datasets: [{
          label: '8 大核心原則重要度雷達',
          data: rawQuestions.map(q => q.avg_score),
          backgroundColor: 'rgba(16, 185, 129, 0.25)',
          borderColor: '#10b981',
          pointBackgroundColor: '#10b981',
          pointBorderColor: '#ffffff',
          pointHoverBackgroundColor: '#ffffff',
          pointHoverBorderColor: '#10b981',
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          r: {
            min: 2.5,
            max: 5.0,
            angleLines: { color: theme.grid },
            grid: { color: theme.grid },
            pointLabels: { color: theme.text, font: { family: 'inherit', size: 11, weight: '600' } },
            ticks: { display: false, stepSize: 0.5 }
          }
        }
      }
    });
  }

  // Render Qualitative Notes list
  const notesContainer = document.getElementById('part1-notes-list');
  if (notesContainer) {
    notesContainer.innerHTML = SURVEY_DATA.part1.comments.map(c => `
      <div class="comment-card">
        <div class="comment-header">
          <span class="comment-author">👤 ${c.respondent}</span>
          <span class="badge badge-blue">原則補充</span>
        </div>
        <p class="comment-text">${escapeHtml(c.text)}</p>
      </div>
    `).join('');
  }
}

/**
 * Part 2: Partner Spectrum
 */
function renderPart2Spectrum() {
  const container = document.getElementById('spectrum-bars-container');
  if (!container) return;

  const total = SURVEY_DATA.metadata.total_respondents;
  const questions = SURVEY_DATA.part2.questions;

  container.innerHTML = questions.map(q => {
    const can = q.distribution['最可以合作'] || 0;
    const disc = q.distribution['需要個別討論'] || 0;
    const opp = q.distribution['絕對不能合作'] || 0;

    const canPct = Math.round((can / total) * 100);
    const discPct = Math.round((disc / total) * 100);
    const oppPct = 100 - canPct - discPct;

    return `
      <div class="spectrum-row">
        <div class="spectrum-info">
          <div>
            <div class="spectrum-name">${q.short} <span class="badge badge-purple" style="font-size:0.7rem; margin-left:0.4rem;">${q.category}</span></div>
            <div class="spectrum-desc">${q.desc}</div>
          </div>
          <div style="font-size: 0.82rem; font-weight:600;">
            <span style="color:var(--status-support);">🟢 ${can}票 (${canPct}%)</span> · 
            <span style="color:var(--status-discuss);">🟡 ${disc}票 (${discPct}%)</span> · 
            <span style="color:var(--status-oppose);">🔴 ${opp}票 (${oppPct}%)</span>
          </div>
        </div>
        <div class="spectrum-bar-wrap">
          ${can > 0 ? `<div class="spectrum-segment seg-green" style="width: ${canPct}%;" title="最可以合作: ${can}票 (${canPct}%)">${canPct}%</div>` : ''}
          ${disc > 0 ? `<div class="spectrum-segment seg-yellow" style="width: ${discPct}%;" title="需要個別討論: ${disc}票 (${discPct}%)">${discPct}%</div>` : ''}
          ${opp > 0 ? `<div class="spectrum-segment seg-red" style="width: ${oppPct}%;" title="絕對不能合作: ${opp}票 (${oppPct}%)">${oppPct}%</div>` : ''}
        </div>
      </div>
    `;
  }).join('');

  // Render Part 2 notes
  const notesContainer = document.getElementById('part2-notes-list');
  if (notesContainer) {
    notesContainer.innerHTML = SURVEY_DATA.part2.comments.map(c => `
      <div class="comment-card">
        <div class="comment-header">
          <span class="comment-author">👤 ${c.respondent}</span>
          <span class="badge badge-purple">光譜補充</span>
        </div>
        <p class="comment-text">${escapeHtml(c.text)}</p>
      </div>
    `).join('');
  }
}

/**
 * Part 3: 7 Case Studies Deep Dive
 */
function renderPart3Cases() {
  const tabsContainer = document.getElementById('case-tabs-container');
  if (!tabsContainer) return;

  tabsContainer.innerHTML = SURVEY_DATA.part3.cases.map((c, idx) => `
    <button class="case-tab-btn ${idx === 0 ? 'active' : ''}" onclick="switchCaseTab(${idx})">
      <span>案例 ${c.num}</span>
      <small style="opacity:0.8;">${c.title.slice(0, 8)}...</small>
    </button>
  `).join('');

  renderCaseDetail(0);

  // Setup stance filter buttons
  document.querySelectorAll('[data-stance-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-stance-filter]').forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      currentStanceFilter = e.currentTarget.getAttribute('data-stance-filter');
      filterCaseComments();
    });
  });

  // Setup search filter
  const searchInput = document.getElementById('case-comment-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchTerm = e.target.value.trim().toLowerCase();
      filterCaseComments();
    });
  }
}

function switchCaseTab(index) {
  currentCaseIndex = index;
  document.querySelectorAll('.case-tab-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === index);
  });
  renderCaseDetail(index);
}

function renderCaseDetail(index) {
  const c = SURVEY_DATA.part3.cases[index];
  const total = SURVEY_DATA.metadata.total_respondents;

  document.getElementById('case-display-title').textContent = `案例 ${c.num}：${c.title}`;
  document.getElementById('case-display-type').textContent = c.type;
  document.getElementById('case-display-desc').textContent = c.desc;

  // Risk Tags
  const riskContainer = document.getElementById('case-risk-tags');
  if (riskContainer) {
    riskContainer.innerHTML = c.risk_factors.map(r => `<span class="badge badge-purple">⚠️ ${r}</span>`).join(' ');
  }

  // Stance Pill Counters
  const can = c.distribution['可以合作'] || 0;
  const disc = c.distribution['需進一步討論'] || 0;
  const opp = c.distribution['反對合作'] || 0;

  document.getElementById('case-val-support').textContent = `${can} 票 (${Math.round(can/total*100)}%)`;
  document.getElementById('case-val-discuss').textContent = `${disc} 票 (${Math.round(disc/total*100)}%)`;
  document.getElementById('case-val-oppose').textContent = `${opp} 票 (${Math.round(opp/total*100)}%)`;

  // Render Donut Chart
  const donutCtx = document.getElementById('caseDonutChart');
  if (donutCtx) {
    if (caseDonutChartInstance) caseDonutChartInstance.destroy();
    caseDonutChartInstance = new Chart(donutCtx, {
      type: 'doughnut',
      data: {
        labels: ['可以合作', '需進一步討論', '反對合作'],
        datasets: [{
          data: [can, disc, opp],
          backgroundColor: ['#10b981', '#f59e0b', '#f43f5e'],
          borderWidth: 0,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: { color: getThemeColors().text, font: { family: 'inherit', size: 12 } }
          }
        },
        cutout: '65%'
      }
    });
  }

  filterCaseComments();
}

function filterCaseComments() {
  const c = SURVEY_DATA.part3.cases[currentCaseIndex];
  const container = document.getElementById('case-comments-list');
  if (!container) return;

  const filtered = c.feedbacks.filter(f => {
    const matchStance = currentStanceFilter === 'ALL' || f.choice === currentStanceFilter;
    const matchSearch = !currentSearchTerm || 
      f.text.toLowerCase().includes(currentSearchTerm) || 
      f.respondent.toLowerCase().includes(currentSearchTerm);
    return matchStance && matchSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem; color: var(--text-dim);">
        <p>在此篩選條件下無質性留言。</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(f => {
    let stanceClass = 'discuss';
    let stanceIcon = '🟡';
    if (f.choice === '可以合作') { stanceClass = 'support'; stanceIcon = '🟢'; }
    else if (f.choice === '反對合作') { stanceClass = 'oppose'; stanceIcon = '🔴'; }

    return `
      <div class="comment-card">
        <div class="comment-header">
          <span class="comment-author" style="cursor:pointer;" onclick="openRespondentModal('${f.respondent}')">
            👤 ${f.respondent} <small style="color:var(--accent-blue); text-decoration:underline; font-size:0.75rem; margin-left:4px;">(查看全卷立場)</small>
          </span>
          <span class="badge-stance ${stanceClass}">${stanceIcon} ${f.choice}</span>
        </div>
        <p class="comment-text">${escapeHtml(f.text)}</p>
      </div>
    `;
  }).join('');
}

/**
 * Part 5: SOP Steps & Suggestions
 */
function renderPart5SOP() {
  // Timeline steps
  const timeline = document.getElementById('sop-steps-timeline');
  if (timeline) {
    timeline.innerHTML = SURVEY_DATA.part5.sop_steps.map((step, idx) => {
      const parts = step.split('.');
      const num = idx + 1;
      const text = parts.slice(1).join('.');
      return `
        <div class="sop-step-card">
          <div class="sop-step-num">${num}</div>
          <div class="sop-step-title">步驟 ${num}</div>
          <p class="sop-step-body">${escapeHtml(text)}</p>
        </div>
      `;
    }).join('');
  }

  // SOP Suggestions List
  const sopContainer = document.getElementById('sop-feedback-list');
  if (sopContainer) {
    sopContainer.innerHTML = SURVEY_DATA.part5.sop_feedback.map(f => `
      <div class="comment-card">
        <div class="comment-header">
          <span class="comment-author" style="cursor:pointer;" onclick="openRespondentModal('${f.respondent}')">👤 ${f.respondent}</span>
          <span class="badge badge-green">程序優化建言</span>
        </div>
        <p class="comment-text">${escapeHtml(f.text)}</p>
      </div>
    `).join('');
  }

  // General Strategy Suggestions List
  const genContainer = document.getElementById('general-suggestions-list');
  if (genContainer) {
    genContainer.innerHTML = SURVEY_DATA.part5.general_suggestions.map(f => `
      <div class="comment-card" style="border-left: 3px solid var(--accent-indigo);">
        <div class="comment-header">
          <span class="comment-author" style="cursor:pointer;" onclick="openRespondentModal('${f.respondent}')">👤 ${f.respondent}</span>
          <span class="badge badge-purple">整體戰略/倫理想法</span>
        </div>
        <p class="comment-text">${escapeHtml(f.text)}</p>
      </div>
    `).join('');
  }
}

/**
 * Anonymized Matrix Table
 */
function renderMatrixTable() {
  const tbody = document.getElementById('matrix-table-body');
  if (!tbody) return;

  tbody.innerHTML = SURVEY_DATA.individual_responses.map(resp => {
    const c1 = getBadgeHtml(resp.part3.case1.choice);
    const c2 = getBadgeHtml(resp.part3.case2.choice);
    const c3 = getBadgeHtml(resp.part3.case3.choice);
    const c4 = getBadgeHtml(resp.part3.case4.choice);
    const c5 = getBadgeHtml(resp.part3.case5.choice);
    const c6 = getBadgeHtml(resp.part3.case6.choice);
    const c7 = getBadgeHtml(resp.part3.case7.choice);

    return `
      <tr>
        <td>
          <a href="javascript:void(0)" onclick="openRespondentModal('${resp.id}')" style="color:var(--accent-blue); font-weight:700; text-decoration:none;">
            ${resp.id} 🔍
          </a>
        </td>
        <td>${c1}</td>
        <td>${c2}</td>
        <td>${c3}</td>
        <td>${c4}</td>
        <td>${c5}</td>
        <td>${c6}</td>
        <td>${c7}</td>
        <td><small style="color:var(--text-muted);">${resp.part5.sop_feedback ? '有' : '無'}</small></td>
      </tr>
    `;
  }).join('');
}

function getBadgeHtml(choice) {
  if (choice === '可以合作' || choice === '最可以合作') return `<span class="badge-stance support">可以</span>`;
  if (choice === '需進一步討論' || choice === '需要個別討論') return `<span class="badge-stance discuss">討論</span>`;
  if (choice === '反對合作' || choice === '絕對不能合作') return `<span class="badge-stance oppose">反對</span>`;
  return `<span class="badge-stance">-</span>`;
}

/**
 * Respondent Profile Modal / Drawer
 */
function renderRespondentDropdown() {
  const select = document.getElementById('respondent-select');
  if (!select) return;

  select.innerHTML = '<option value="">-- 選擇同仁代號查看完整問卷回答 --</option>' + 
    SURVEY_DATA.metadata.anonymized_respondents.map(r => `<option value="${r}">${r}</option>`).join('');

  select.addEventListener('change', (e) => {
    if (e.target.value) {
      openRespondentModal(e.target.value);
    }
  });
}

function openRespondentModal(respondentId) {
  const modal = document.getElementById('respondent-modal');
  const modalBody = document.getElementById('modal-respondent-body');
  const modalTitle = document.getElementById('modal-respondent-title');
  if (!modal || !modalBody) return;

  const resp = SURVEY_DATA.individual_responses.find(r => r.id === respondentId);
  if (!resp) return;

  modalTitle.textContent = `去識別化完整檔案：${resp.id}`;

  let p1Html = SURVEY_DATA.part1.questions.map(q => `
    <div style="display:flex; justify-content:space-between; padding:0.4rem 0; border-bottom:1px solid var(--border-subtle); font-size:0.85rem;">
      <span>${q.short}</span>
      <span style="font-weight:700; color:var(--accent-blue);">${resp.part1[q.id]}</span>
    </div>
  `).join('');

  let p2Html = SURVEY_DATA.part2.questions.map(q => `
    <div style="display:flex; justify-content:space-between; padding:0.4rem 0; border-bottom:1px solid var(--border-subtle); font-size:0.85rem;">
      <span>${q.short}</span>
      <span>${getBadgeHtml(resp.part2[q.id])}</span>
    </div>
  `).join('');

  let p3Html = SURVEY_DATA.part3.cases.map(c => {
    const ans = resp.part3[c.id];
    return `
      <div style="margin-bottom:0.75rem; padding:0.75rem; background:var(--bg-surface-raised); border-radius:var(--radius-sm);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
          <strong style="font-size:0.88rem;">案例 ${c.num}：${c.title}</strong>
          ${getBadgeHtml(ans.choice)}
        </div>
        ${ans.reason ? `<p style="font-size:0.82rem; color:var(--text-muted); margin-top:0.35rem; line-height:1.5;">💬 <strong>考量：</strong>${escapeHtml(ans.reason)}</p>` : ''}
      </div>
    `;
  }).join('');

  modalBody.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:1.5rem;">
      <div>
        <h4 style="color:var(--cet-green-light); margin-bottom:0.6rem;">📊 第一部分：核心評估項目給分</h4>
        <div style="background:var(--bg-surface-raised); padding:0.75rem 1rem; border-radius:var(--radius-md);">
          ${p1Html}
          ${resp.part1.comment ? `<p style="margin-top:0.5rem; font-size:0.82rem; color:var(--text-muted);"><strong>補充：</strong>${escapeHtml(resp.part1.comment)}</p>` : ''}
        </div>
      </div>

      <div>
        <h4 style="color:var(--cet-green-light); margin-bottom:0.6rem;">🚦 第二部分：夥伴類型接受度</h4>
        <div style="background:var(--bg-surface-raised); padding:0.75rem 1rem; border-radius:var(--radius-md);">
          ${p2Html}
          ${resp.part2.comment ? `<p style="margin-top:0.5rem; font-size:0.82rem; color:var(--text-muted);"><strong>補充：</strong>${escapeHtml(resp.part2.comment)}</p>` : ''}
        </div>
      </div>

      <div>
        <h4 style="color:var(--cet-green-light); margin-bottom:0.6rem;">🎯 第三部分：7 大情境案例決策與理由</h4>
        <div>${p3Html}</div>
      </div>

      <div>
        <h4 style="color:var(--cet-green-light); margin-bottom:0.6rem;">⚙️ 第五部分：SOP 與未來思考</h4>
        <div style="background:var(--bg-surface-raised); padding:1rem; border-radius:var(--radius-md); font-size:0.85rem;">
          <p><strong>SOP 調整建議：</strong> ${resp.part5.sop_feedback ? escapeHtml(resp.part5.sop_feedback) : '無特別補充'}</p>
          <p style="margin-top:0.6rem;"><strong>其他建議與想法：</strong> ${resp.part5.general_suggestions ? escapeHtml(resp.part5.general_suggestions) : '無特別補充'}</p>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
}

function closeModal() {
  const modal = document.getElementById('respondent-modal');
  if (modal) modal.classList.remove('active');
}

// Utility HTML escape
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Global modal trigger helper
window.openRespondentModal = openRespondentModal;
window.closeModal = closeModal;
window.switchCaseTab = switchCaseTab;
