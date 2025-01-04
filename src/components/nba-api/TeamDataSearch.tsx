"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { TeamSelect } from "./TeamSelect";
import { YearSelect } from "./YearSelect";
import { useState } from "react";

export default function TeamDataSearch() {
  const [team, setTeam] = useState("");
  const [year, setYear] = useState("");

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
