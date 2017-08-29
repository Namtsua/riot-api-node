interface ChampionMasteryDto {
  chestGranted: boolean;
  championLevel: number;
  championPoints: number;
  championId: number;
  playerId: number;
  championPointsUntilNextLevel: number;
  championPointsSinceLastLevel: number;
  lastPlayTime: number;
  tokensEarned: number; // TODO: appears in results, but missing in docs
}
