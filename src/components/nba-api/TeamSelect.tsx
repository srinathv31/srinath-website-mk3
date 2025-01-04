"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function TeamSelect({
  value,
  setValue,
}: {
  value: string;
  setValue: (value: string) => void;
}) {
  const [open, setOpen] = React.useState(false);

  const teamList = [
    "ATLANTA HAWKS",
    "BOSTON CELTICS",
    "BROOKLYN NETS",
    "CHARLOTTE HORNETS",
    "CHICAGO BULLS",
    "CLEVELAND CAVALIERS",
    "DALLAS MAVERICKS",
    "DENVER NUGGETS",
    "DETROIT PISTONS",
    "GOLDEN STATE WARRIORS",
    "HOUSTON ROCKETS",
    "INDIANA PACERS",
    "LOS ANGELES CLIPPERS",
    "LOS ANGELES LAKERS",
    "MEMPHIS GRIZZLIES",
    "MIAMI HEAT",
    "MILWAUKEE BUCKS",
    "MINNESOTA TIMBERWOLVES",
    "NEW ORLEANS PELICANS",
    "NEW YORK KNICKS",
    "OKLAHOMA CITY THUNDER",
    "ORLANDO MAGIC",
    "PHILADELPHIA 76ERS",
    "PHOENIX SUNS",
    "PORTLAND TRAIL BLAZERS",
    "SACRAMENTO KINGS",
    "SAN ANTONIO SPURS",
    "TORONTO RAPTORS",
    "UTAH JAZZ",
    "WASHINGTON WIZARDS",
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {value ? teamList.find((team) => team === value) : "Select team..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search year..." />
          <CommandList>
            <CommandEmpty>No year found.</CommandEmpty>
            <CommandGroup>
              {teamList.map((team) => (
                <CommandItem
                  key={team}
                  value={team}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {team}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === team ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
