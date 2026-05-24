/**
 * 2026世界杯 实时比赛引擎
 * 处理比赛结果、动态更新排名、积分榜、淘汰赛晋级
 */
const LIVE = {
  // === 比赛结果记录 ===
  _results: JSON.parse(localStorage.getItem('wc2026_results') || '{}'),

  // === 提交一场比赛结果 ===
  submitResult: function(matchId, homeScore, awayScore) {
    var m = MATCHES.find(function(x) { return x.id === matchId; });
    if (!m) return { error: 'Match not found' };

    m.score = homeScore + '-' + awayScore;
    m.status = 'completed';
    m.homeScore = homeScore;
    m.awayScore = awayScore;

    // 记录结果
    this._results[matchId] = { home: homeScore, away: awayScore, date: new Date().toISOString().slice(0, 10) };
    localStorage.setItem('wc2026_results', JSON.stringify(this._results));

    // 更新球队ELO（简单增减：胜+2，平0，负-2）
    var homeTeam = getTeamByCode(m.home);
    var awayTeam = getTeamByCode(m.away);
    if (homeTeam && awayTeam) {
      if (homeScore > awayScore) { homeTeam.fifaRank = Math.max(1, homeTeam.fifaRank -1); awayTeam.fifaRank += 1; }
      else if (awayScore > homeScore) { awayTeam.fifaRank = Math.max(1, awayTeam.fifaRank -1); homeTeam.fifaRank += 1; }
    }

    // 清除概率缓存
    if (typeof probCache !== 'undefined') probCache = {};
    return { ok: true, match: m };
  },

  // === 重置所有结果 ===
  resetAll: function() {
    this._results = {};
    localStorage.removeItem('wc2026_results');
    MATCHES.forEach(function(m) { m.score = null; m.status = 'scheduled'; delete m.homeScore; delete m.awayScore; });
    if (typeof probCache !== 'undefined') probCache = {};
  },

  // === 获取小组积分榜 ===
  getGroupStandings: function(group) {
    var teams = getTeamsByGroup(group);
    var table = {};
    teams.forEach(function(t) { table[t.fifaCode] = { team: t, pts: 0, gf: 0, ga: 0, gd: 0, played: 0, w: 0, d: 0, l: 0 }; });

    var matches = MATCHES.filter(function(m) { return m.group === group && m.status === 'completed'; });
    matches.forEach(function(m) {
      var h = table[m.home], a = table[m.away];
      if (!h || !a) return;
      h.played++; a.played++;
      h.gf += m.homeScore; h.ga += m.awayScore; h.gd = h.gf - h.ga;
      a.gf += m.awayScore; a.ga += m.homeScore; a.gd = a.gf - a.ga;
      if (m.homeScore > m.awayScore) { h.pts += 3; h.w++; a.l++; }
      else if (m.awayScore > m.homeScore) { a.pts += 3; a.w++; h.l++; }
      else { h.pts += 1; a.pts += 1; h.d++; a.d++; }
    });

    // Sort: points -> GD -> GF
    var arr = Object.values(table);
    arr.sort(function(a, b) { return b.pts - a.pts || b.gd - a.gd || b.gf - a.gf; });
    return arr;
  },

  // === 获取所有小组积分榜 ===
  getAllStandings: function() {
    var self = this;
    return getAllGroups().map(function(g) { return { group: g, standings: self.getGroupStandings(g) }; });
  },

  // === 是否有已完成的比赛 ===
  hasResults: function() {
    return MATCHES.some(function(m) { return m.status === 'completed'; });
  },

  // === 获取已完成比赛列表 ===
  getCompletedMatches: function() {
    return MATCHES.filter(function(m) { return m.status === 'completed'; });
  },

  // === 提交批量结果 ===
  batchSubmit: function(results) {
    var self = this;
    results.forEach(function(r) { self.submitResult(r.id, r.home, r.away); });
  },
};
