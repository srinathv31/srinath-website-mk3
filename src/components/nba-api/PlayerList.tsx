"use client";

import { NBAHistoryData } from "@/interfaces/nba-api";
import { useParams } from "next/navigation";
import { use } from "react";

export default function PlayerList({
  promise,
}: {
  promise: Promise<NBAHistoryData>;
}) {
  const params = useParams<{ team: string; year: string }>();
  const response = use(promise);
  const data = response[decodeURIComponent(params.team)][params.year];

  return (
    <div>
      <h1>Player List</h1>
      {Object.entries(data.Roster.players).map(([name, stats]) => (
        <div key={name}>
          <p>{name}</p>
          <p>{stats.PER}</p>
        </div>
      ))}
    </div>
  );
}
