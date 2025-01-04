import TeamDataSearch from "@/components/nba-api/TeamDataSearch";

export default function BasketballAPILayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-4xl">Basketball API</p>
      <TeamDataSearch />
      {children}
    </div>
  );
}
