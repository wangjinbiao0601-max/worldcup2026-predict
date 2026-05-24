/**
 * i18n 中英文词典
 * 纯前端实现，localStorage记忆语言偏好
 */
const I18N = {
  _lang: localStorage.getItem('wc2026_lang') || 'zh',

  dict: {
    // 导航
    '首页': 'Home',
    '球队中心': 'Teams',
    '赛程中心': 'Schedule',
    '胜率预测': 'Probability',
    '晋级之路': 'Bracket',
    '冠军投票': 'Vote',
    '2026世界杯预测': 'WC 2026 Predict',

    // 页头
    '2026 FIFA 世界杯': '2026 FIFA World Cup',
    '美国 · 加拿大 · 墨西哥 联合主办 | 48支球队 | 104场比赛': 'Hosted by USA · Canada · Mexico | 48 Teams · 104 Matches',

    // 首页
    '夺冠热门 Top 10': 'Top 10 Favorites',
    '今日比赛': 'Today\'s Matches',
    '快速导航': 'Quick Navigation',
    '48支球队完整档案 · A-L分组 · FIFA排名 · 国旗一览': '48 Team Profiles · Groups A-L · FIFA Rankings · Flags',
    '104场比赛完整赛程 · 小组赛到决赛 · 日期筛选 · 场馆信息': '104 Match Schedule · Group to Final · Date Filter · Venues',
    '夺冠概率排行榜 · 小组出线概率 · 基于FIFA排名的ELO模型': 'Championship Odds · Group Qualification · ELO Model',
    '淘汰赛树状图 · 32强到冠军 · 晋级路径可视化': 'Knockout Tree · Round of 32 to Champion · Visualization',
    '今日暂无比赛': 'No matches today',
    '赛事尚未开始': 'Tournament hasn\'t started yet',
    '最近比赛': 'Upcoming match',
    '距离世界杯开幕': 'Until World Cup 2026',

    // 球队中心
    '共48支球队，分为A-L共12个小组，每组4队': '48 teams across 12 groups (A-L), 4 teams per group',
    '搜索球队名称...': 'Search teams...',
    '全部': 'All',
    '查看赛程': 'View Schedule',
    'FIFA排名': 'FIFA Rank',
    '分组': 'Group',
    '夺冠热门排名': 'Championship Rank',
    '小组出线概率': 'Qualification Prob.',
    '支球队': 'teams',

    // 赛程
    '共104场比赛 · 72场小组赛 + 32场淘汰赛 · 时间均为北京时间': '104 matches · 72 group + 32 knockout · Beijing Time (UTC+8)',
    '全部比赛': 'All Matches',
    '小组赛': 'Group Stage',
    '全部小组': 'All Groups',
    '场比赛': 'matches',
    '32强': 'R32',
    '16强': 'R16',
    '8强': 'QF',
    '半决赛': 'SF',
    '季军赛': '3rd Place',
    '决赛': 'Final',
    '待定': 'TBD',

    // 胜率预测
    '基于FIFA排名差值的ELO模型计算预期胜率，仅供参考': 'ELO-based win probability using FIFA ranking difference. For reference only.',
    '夺冠概率 Top 20': 'Championship Probability Top 20',
    '完整夺冠概率表 (Top 30)': 'Full Championship Table (Top 30)',
    '切换为表格视图': 'Switch to Table View',
    '切换为图表视图': 'Switch to Chart View',
    '比赛胜率计算器': 'Match Win Probability Calculator',
    '选择两支球队，查看预期胜率': 'Select two teams to calculate win probability',
    '选择球队A': 'Select Team A',
    '选择球队B': 'Select Team B',
    '胜': 'Win',
    '平局': 'Draw',
    '小组出线概率': 'Group Qualification Probability',
    '排名': 'Rank',
    '球队': 'Team',
    '夺冠概率': 'Champ. Prob.',
    '占比': 'Share',
    '概率条': 'Bar',
    '出线概率': 'Qual. Prob.',
    '投票数': 'Votes',

    // 晋级之路
    '从小组赛晋级预测到最终冠军 · 淘汰赛阶段对阵将随比赛进展更新': 'From group stage to champion · Knockout matchups update with results',
    '小组赛晋级预测 (各组前2名)': 'Group Stage Qualification Prediction (Top 2 per Group)',
    '淘汰赛晋级图': 'Knockout Stage Bracket',
    '基于FIFA排名预测的各组前两名 · 32强 → 冠军': 'Top 2 per group based on FIFA ranking · R32 to Champion',
    '32强胜者': 'R32 Winner',
    '16强胜者': 'R16 Winner',
    '8强胜者': 'QF Winner',
    '半决赛胜者': 'SF Winner',
    '冠军': 'Champion',

    // 投票
    '冠军预测投票': 'Champion Prediction Vote',
    '选出你心中的2026世界杯冠军和四强球队，看看有多少人和你眼光一致！': 'Pick your champion and semi-finalists. See who shares your vision!',
    '第一步：选择冠军': 'Step 1: Pick Champion',
    '请点击选择一支球队作为冠军': 'Click a team to select as champion',
    '已选择': 'Selected',
    '第二步：选择四强（不含冠军）': 'Step 2: Semi-finalists (excl. Champion)',
    '再选3支四强球队': 'Pick 3 more semi-finalists',
    '已选': 'Selected',
    '提交我的预测': 'Submit My Prediction',
    '重新选择': 'Reset',
    '全球投票结果': 'Global Vote Results',
    '我的预测': 'My Prediction',
    '全球网友冠军投票 TOP 10': 'Global Vote Top 10',
    '完整排行榜': 'Full Leaderboard',
    '你的眼光战胜了': 'Your pick beat',
    '的网友！': ' of users!',
    '全球共': 'Total',
    '人参与投票': ' votes worldwide',
    '分享我的预测': 'Share My Prediction',
    '我的夺冠预测': 'My Championship Prediction',
    '截图分享到朋友圈': 'Screenshot & Share',
    '重新投票': 'Vote Again',
    '选的': 'Yours',
    '冠军:': 'Champion:',

    // Footer
    '2026世界杯预测胜率网站 · 数据基于FIFA排名模拟计算 · 仅供娱乐参考': 'WC 2026 Predict · Data simulated from FIFA rankings · For entertainment only',
    '隐私政策': 'Privacy Policy',
    '关于我们': 'About',
    '预测数据仅供娱乐参考': 'Predictions are for entertainment only',
    '2026世界杯预测胜率网站 · ': 'WC 2026 Predict · ',
    'FIFA World Cup 2026 © June 12 - July 20, 2026': 'FIFA World Cup 2026 © Jun 12 – Jul 20, 2026',
    ' · ': ' · ',
    '2026世界杯预测胜率网站 · 投票数据存储于本地 · 全球票数为模拟数据': 'WC 2026 Predict · Votes stored locally · Global counts are simulated',
    '2026世界杯预测胜率网站 · 晋级预测基于FIFA排名模拟 · 实际赛果以官方为准': 'WC 2026 Predict · Bracket based on FIFA ranking · Official results may differ',
    '2026世界杯预测胜率网站 · 概率基于FIFA排名ELO模型计算 · 仅供娱乐参考': 'WC 2026 Predict · ELO-based probability · For entertainment only',
    '2026世界杯预测胜率网站 · 球队数据基于官方分组': 'WC 2026 Predict · Team data from official grouping',
    '2026世界杯预测胜率网站 · 赛程基于官方安排 · 时间均为北京时间 (UTC+8)': 'WC 2026 Predict · Official schedule · Beijing Time (UTC+8)',

    // 投票（补充）
    '第一步：选择冠军': 'Step 1: Pick Champion',
    '第二步：选择四强（不含冠军）': 'Step 2: Semi-finalists',
    '再选3支四强球队 · 已选': 'Pick 3 more · Selected',
    '请点击选择一支球队作为冠军': 'Click a team to pick as champion',
    '全球投票结果': 'Global Vote Results',
    '你选择的冠军': 'Your champion',
    '在全球投票中排名': 'ranks',
    '人投票': 'votes',
    '我的夺冠预测': 'My Championship Prediction',
    '2026世界杯预测胜率网站 · 6月12日开幕': 'WC 2026 Predict · Jun 12 Opening',
    '选择球队A': 'Select Team A',
    '长按或右键保存海报图片，分享到朋友圈！': 'Long press to save & share poster!',
    '再选3支四强球队': 'Pick 3 semi-finalists',
    '天': 'D',
    '时': 'H',
    '分': 'M',
    '秒': 'S',
    '返回首页': 'Back to Home',

    // 组名
    '组': 'Group',
    '第': 'MD',
    '轮': '',
    '轮': '',

    // 隐私政策页
    '最后更新：2026年5月24日': 'Last updated: May 24, 2026',
    '我们收集的信息': 'Information We Collect',
    '本网站为纯静态网站，不收集任何个人身份信息。冠军投票数据仅存储在您的浏览器本地（localStorage），不会上传到任何服务器。': 'This is a static website. No personal data is collected. Vote data is stored locally in your browser (localStorage) and never uploaded.',
    '我们使用以下第三方服务，它们可能收集匿名统计数据：': 'We use the following third-party services that may collect anonymous statistics:',
    'Google AdSense：用于展示广告，可能使用Cookie进行广告个性化。详见 ': 'Google AdSense: for displaying ads, may use cookies for personalization. See ',
    'Chart.js：图表库，从cdnjs.cloudflare.com加载，不收集数据': 'Chart.js: chart library loaded from cdnjs.cloudflare.com, no data collection',
    'Cookie 使用': 'Cookie Usage',
    'Google AdSense 可能在您的浏览器中设置Cookie以展示相关广告。您可以通过浏览器设置禁用Cookie。本网站本身不使用任何Cookie。': 'Google AdSense may set cookies for relevant ads. You can disable cookies in browser settings. This site does not use cookies.',
    '数据安全': 'Data Security',
    '投票数据仅存储在您的浏览器本地存储中。清除浏览器缓存或使用"重新投票"功能可删除这些数据。': 'Vote data is only in your browser. Clear cache or use "Reset" to delete.',
    '如有隐私相关问题，请通过GitHub Issues联系我们：': 'For privacy questions, contact us via GitHub Issues:',
    '关于我们': 'About Us',
    '项目介绍': 'About This Project',
    '2026世界杯预测胜率网站是一个非官方的世界杯数据分析平台，旨在为球迷提供：': 'This is an unofficial World Cup data platform for fans, providing:',
    '48支参赛球队的完整档案和FIFA排名': 'Complete profiles and FIFA rankings for all 48 teams',
    '104场比赛的完整赛程（北京时间）': 'Full schedule of 104 matches (Beijing Time)',
    '基于ELO模型的科学胜率预测': 'Scientific win probability based on ELO model',
    '淘汰赛晋级路径可视化': 'Visual knockout bracket',
    '冠军预测投票互动': 'Interactive champion prediction voting',
    '数据来源': 'Data Sources',
    '球队分组：基于2026世界杯官方确认分组': 'Groupings: based on official 2026 World Cup groups',
    'FIFA排名：依据国际足联最新世界排名': 'FIFA rankings: based on latest official rankings',
    '赛程安排：基于官方公布的比赛时间和场馆': 'Schedule: based on official match times and venues',
    '胜率算法：P(胜) = 1 / (1 + 10 ^ (rank_diff / 400))，参考ELO评级模型': 'Algorithm: P(win) = 1/(1+10^(rank_diff/400)) based on ELO model',
    '说明：所有预测数据仅供娱乐参考，不构成任何博彩建议。实际比赛结果以官方为准。': 'Note: all predictions are for entertainment only, not betting advice.',
    '技术栈': 'Tech Stack',
    '纯静态HTML5 + CSS3 + Vanilla JavaScript网站，使用Chart.js进行数据可视化。响应式设计，支持PC、平板和手机访问。托管于GitHub Pages。': 'Static HTML5 + CSS3 + Vanilla JS site with Chart.js visualization. Responsive design for PC, tablet & mobile. Hosted on GitHub Pages.',
    '如有建议或问题，欢迎通过GitHub联系我们：': 'Questions or suggestions? Reach us on GitHub:',
    '隐私政策': 'Privacy Policy',
    '关于我们': 'About Us',
  },

  get current() { return this._lang; },

  t: function(text) {
    if (this._lang === 'zh') return text;
    // Try exact match
    if (this.dict[text]) return this.dict[text];
    // Try trimmed
    var trimmed = text.trim();
    if (this.dict[trimmed]) return this.dict[trimmed];
    return text;
  },

  switchLang: function() {
    this._lang = this._lang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('wc2026_lang', this._lang);
    this.applyAll();
  },

  applyAll: function() {
    var self = this;
    // Handle placeholder-only elements (search boxes, etc.)
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
      if (el.placeholder) {
        el.placeholder = self.t(el.getAttribute('data-i18n-placeholder'));
      }
    });
    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      var translated = self.t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.placeholder && el.getAttribute('data-i18n-placeholder')) {
          el.placeholder = self.t(el.getAttribute('data-i18n-placeholder'));
        }
      } else if (translated !== key) {
        el.textContent = translated;
      }
    });

    // Update title
    var titleEl = document.querySelector('title');
    if (titleEl && titleEl.getAttribute('data-i18n-title')) {
      titleEl.textContent = self.t(titleEl.getAttribute('data-i18n-title'));
    }

    // Update lang switcher button
    var btn = document.getElementById('lang-switch');
    if (btn) btn.textContent = this._lang === 'zh' ? 'EN' : '中文';

    // Update <html> lang
    document.documentElement.lang = this._lang === 'zh' ? 'zh-CN' : 'en';

    // Trigger re-render for dynamic content
    if (typeof window.renderLang === 'function') window.renderLang();
  },

  init: function() {
    this.applyAll();
    var self = this;
    document.getElementById('lang-switch').addEventListener('click', function() {
      self.switchLang();
    });
  }
};

// Auto-init when DOM ready
document.addEventListener('DOMContentLoaded', function() { I18N.init(); });
