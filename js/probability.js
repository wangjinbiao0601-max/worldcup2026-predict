/**
 * 2026世界杯胜率预测引擎
 * 基于FIFA排名差计算ELO预期胜率
 */

// ============ ELO胜率计算 ============
function calcWinProbability(teamARank, teamBRank) {
  const diff = teamBRank - teamARank;
  return 1 / (1 + Math.pow(10, diff / 400));
}

function calcMatchProbability(teamA, teamB) {
  const aWin = calcWinProbability(teamA.fifaRank, teamB.fifaRank);
  const bWin = calcWinProbability(teamB.fifaRank, teamA.fifaRank);
  const draw = 1 - aWin - bWin;
  return {
    homeWin: Math.round(aWin * 1000) / 10,
    awayWin: Math.round(bWin * 1000) / 10,
    draw: Math.round(draw * 1000) / 10,
  };
}

// ============ 夺冠概率计算 ============
function calcChampionshipOdds() {
  var maxRank = TEAMS.reduce(function(max, t) { return Math.max(max, t.fifaRank); }, 0);
  var totalScore = TEAMS.reduce(function(sum, t) {
    return sum + (maxRank - t.fifaRank + 1);
  }, 0);

  return TEAMS.map(function(t) {
    var raw = (maxRank - t.fifaRank + 1) / totalScore * 100;
    return {
      id: t.id,
      name: t.nameCN,
      fifaCode: t.fifaCode,
      fifaRank: t.fifaRank,
      group: t.group,
      flag: t.flag,
      probability: Math.round(raw * 100) / 100,
    };
  }).sort(function(a, b) { return b.probability - a.probability; });
}

// ============ 小组出线概率 ============
function calcGroupQualification(group) {
  var groupTeams = getTeamsByGroup(group);
  var total = groupTeams.reduce(function(s, t) { return s + (200 - t.fifaRank); }, 0);

  return groupTeams.map(function(t) {
    var score = (200 - t.fifaRank) / total;
    return {
      id: t.id,
      name: t.nameCN,
      flag: t.flag,
      fifaRank: t.fifaRank,
      qualifyProb: Math.round(score * 10000) / 100,
    };
  }).sort(function(a, b) { return b.qualifyProb - a.qualifyProb; });
}

// ============ 比赛胜率计算器 ============
function calcMatchupOdds(teamCodeA, teamCodeB) {
  var a = getTeamByCode(teamCodeA);
  var b = getTeamByCode(teamCodeB);
  if (!a || !b) return null;
  return calcMatchProbability(a, b);
}

// ============ 缓存 ============
var probCache = {};
function getCachedOdds() {
  if (probCache.championship) return probCache.championship;
  probCache.championship = calcChampionshipOdds();
  return probCache.championship;
}
