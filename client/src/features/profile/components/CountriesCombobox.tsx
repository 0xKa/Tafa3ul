import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { countries } from "countries-list";

const countryList: string[] = Object.values(countries).map((country) => country.name);

interface CountriesComboboxProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const CountriesCombobox = ({ value, onChange, disabled }: CountriesComboboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
          disabled={disabled}
        >
          {value ? countryList.find((country) => country === value) : "Select country..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder="Search country..." className="h-9" />

          <CommandList
            className="max-h-64 overflow-y-auto overscroll-contain"
            onWheelCapture={(e) => {
              // Ensure the list consumes wheel scrolling even inside Dialog/Popover
              e.stopPropagation();
            }}
          >
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup>
              {countryList.map((country) => (
                <CommandItem
                  key={country}
                  value={country}
                  onSelect={(currentValue) => {
                    onChange(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {country}
                  <Check className={cn("ml-auto", value === country ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default CountriesCombobox;
