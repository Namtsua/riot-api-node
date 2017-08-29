const client = require('./client');
const log = require('./log');

log(
  'championMasteryBySummonerId',
  client.championMastery.bySummonerId(95299786),
);

log(
  'championMasteryBySummonerIdAndChampionId',
  client.championMastery.bySummonerIdAndChampionId(95299786, 61),
);

log(
  'championMasteryScoreBySummonerId',
  client.championMastery.scoresBySummonerId(95299786),
);
