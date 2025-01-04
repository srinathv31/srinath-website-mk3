"use client";

import { NBAHistoryData, RosterData } from "@/interfaces/nba-api";
import { useParams } from "next/navigation";
import { use } from "react";
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

function calculateTeamPER(roster: RosterData) {
  const teamPERData: { name: string; PER: number }[] = [];
  Object.keys(roster.players).forEach((player) => {
    teamPERData.push({ name: player, PER: +roster.players[player].PER });
  });
  return teamPERData;
}

export default function PlayerPERGraph({
  promise,
}: {
  promise: Promise<NBAHistoryData>;
}) {
  const params = useParams<{ team: string; year: string }>();
  const response = use(promise);
  const roster = response[decodeURIComponent(params.team)][params.year].Roster;

  const data = calculateTeamPER(roster);
  // const graphAxisColor = !isDarkModeToggle ? "whitesmoke" : "#5d5d5d";
  const graphAxisColor = "#5d5d5d";

  return (
    <div className="flex flex-col items-center">
      <p className="font-light">Player PER Ratings</p>
      <BarChart width={500} height={250} data={data}>
        <defs>
          <linearGradient
            id="colorUv"
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#F0A58F" />
            <stop offset=".5" stopColor="#EB548C" />
            <stop offset="1" stopColor="#AF4BCE" />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke={graphAxisColor} />
        <YAxis stroke={graphAxisColor} />
        <Tooltip
          labelStyle={{ color: "black" }}
          itemStyle={{ color: "#AF4BCE" }}
        />
        <Legend />
        <Bar dataKey="PER" fill="url(#colorUv)" />
      </BarChart>
    </div>
  );
}
