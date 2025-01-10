"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { TeamSelect } from "./TeamSelect";
import { YearSelect } from "./YearSelect";
import { useState } from "react";
import { useParams } from "next/navigation";

export default function TeamDataSearch() {
  const params = useParams<{ team: string; year: string }>();

  const initialTeam = params.team ? decodeURIComponent(params.team) : "";

  const [team, setTeam] = useState(initialTeam);
  const [year, setYear] = useState(params.year);

  return (
    <div className="flex gap-4 my-4">
      <TeamSelect setValue={setTeam} value={team} />
      <YearSelect setValue={setYear} value={year} />
      <Button asChild>
        <Link href={`/projects/basketball-api/${team}/${year}`}>Search</Link>
      </Button>
    </div>
  );
}
