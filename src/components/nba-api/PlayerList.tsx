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
      <div className="h-screen overflow-y-scroll">
        {Object.entries(data.Roster.players)
          .sort((a, b) => +b[1].PER - +a[1].PER)
          .map(([name, stats]) => (
            <div
              key={name}
              className="flex flex-col justify-between p-8 border border-black my-3 rounded"
            >
              <p>{name}</p>
              <p>
                G: {stats.G} | PER: {stats.PER} | TS%: {stats["TS%"]}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
