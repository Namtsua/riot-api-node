const e = encodeURIComponent;

/**
 * @async
 * @returns {ChampionMasteryDto[]}
 */
function bySummonerId(summonerId) {
  return `champion-mastery/v3/champion-masteries/by-summoner/${e(summonerId)}`;
}

/**
 * @async
 * @returns {ChampionMasteryDto}
 */
function bySummonerIdAndChampionId(summonerId, championId) {
  return `champion-mastery/v3/champion-masteries/by-summoner/${e(summonerId)}/by-champion/${e(championId)}`;
}

/**
 * @async
 * @returns {Number}
 */
function scoresBySummonerId(summonerId) {
  return `champion-mastery/v3/scores/by-summoner/${e(summonerId)}`;
}

module.exports = {
  bySummonerId,
  bySummonerIdAndChampionId,
  scoresBySummonerId,
};
