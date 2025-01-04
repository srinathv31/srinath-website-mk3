import PlayerList from "@/components/nba-api/PlayerList";
import { getTeamData } from "@/lib/nba-api";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function TeamDataPage({
  params,
}: {
  params: Promise<{ team: string; year: string }>;
}) {
  const { team, year } = await params;
  const data = getTeamData(team, year);

  return (
    <div>
      <div className="flex gap-4 mb-4">
        <p className="text-xl">
          {year} {decodeURIComponent(team)}
        </p>
      </div>
      <div className="flex justify-between">
        <ErrorBoundary fallback={<p>Error ❌</p>}>
          <Suspense fallback={<p>Loading...</p>}>
            <PlayerList promise={data} />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<p>Error ❌</p>}>
          <Suspense fallback={<p>Loading...</p>}>
            <PlayerList promise={data} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}