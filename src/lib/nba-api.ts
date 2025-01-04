export async function getTeamData(team: string, year: string) {
  const response = await fetch(
    `https://1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com/v1/nba/${team}/${year}`,
    {
      headers: {
        "X-RapidAPI-Key": "c0b14705ddmshe3175ea352cb808p17750fjsn3d9fcaa205f9",
        "X-RapidAPI-Host":
          "1977-2022-nba-team-rosters-and-schedules.p.rapidapi.com",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch team data");
  }

  const data = await response.json();
  return data;
}
