"use client";

import { NBAHistoryData, ScheduleData } from "@/interfaces/nba-api";
import { useParams } from "next/navigation";
import { use } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function calculateMonthlyWins(schedule: ScheduleData) {
  const scheduleMonthlyData: { month: string; W: number; L: number }[] = [];
  Object.values(schedule.games).forEach((gamesArr) => {
    gamesArr.forEach((game) => {
      const gameMonth = game["Date"].substring(5, 8);
      if (!scheduleMonthlyData.find((item) => item.month === gameMonth)) {
        scheduleMonthlyData.push({ month: gameMonth, W: 0, L: 0 });
      }
      const gameResult: "W" | "L" = game["Result"] as "W" | "L";
      scheduleMonthlyData[scheduleMonthlyData.length - 1][gameResult]++;
    });
  });
  return scheduleMonthlyData;
}

export default function WinsPerMonthGraph({
  promise,
}: {
  promise: Promise<NBAHistoryData>;
}) {
  const params = useParams<{ team: string; year: string }>();
  const response = use(promise);
  const schedule =
    response[decodeURIComponent(params.team)][params.year].Schedule;

  const data = calculateMonthlyWins(schedule);
  // const graphAxisColor = !isDarkModeToggle ? "whitesmoke" : "#5d5d5d";
  const graphAxisColor = "#5d5d5d";

  return (
    <div className="flex flex-col items-center">
      <h2 style={{ fontWeight: 300 }}>Monthly Win Totals + Playoffs</h2>
      <BarChart width={500} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" stroke={graphAxisColor} />
        <YAxis stroke={graphAxisColor} />
        <Tooltip labelStyle={{ color: "black" }} />
        <Legend />
        <Bar dataKey="W" fill="#19AADE" />
        <Bar dataKey="L" fill="#DE542C" />
      </BarChart>
    </div>
  );
}
