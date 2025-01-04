export interface Player {
  G: string;
  PER: string;
  "TS%": string;
  WS: string;
  P_G: string;
  P_PER: string;
  "P_TS%": string;
  P_WS: string;
}

export interface RosterData {
  url: string;
  players: {
    [name: string]: Player;
  };
}

export interface ScheduleData {
  url: string;
  games: {
    regular: Game[];
    playoffs: Game[];
  };
}

export interface Game {
  Date: string;
  "Start (ET)": string;
  "Box Score": string;
  Location: string;
  Opponent: string;
  Result: string;
  PtsFor: string;
  PtsOpp: string;
  W: string;
  L: string;
  Streak: string;
}

export interface FranchiseYearData {
  Roster: RosterData;
  Schedule: ScheduleData;
}

export interface FranchiseHistoryData {
  [year: string]: FranchiseYearData;
}

export interface NBAHistoryData {
  [team: string]: FranchiseHistoryData;
}
