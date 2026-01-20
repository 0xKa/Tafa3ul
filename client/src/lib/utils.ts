import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(fullName: string | null, username: string): string {
  if (fullName) {
    return fullName
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }
  return username.slice(0, 2).toUpperCase();
}

export function formatDate(dateString: string | null): string {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// date + time
export function formatDateTime(dateString: string | null): string {
  if (!dateString) return "N/A";
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatDateShort(dateString: string | null): string {
  if (!dateString) return "Present";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

export function sortByDate<T>(
  items: T[],
  dateSelector: (item: T) => string | null | undefined,
  order: "asc" | "desc" = "desc",
  isCurrentSelector?: (item: T) => boolean,
): T[] {
  return [...items].sort((a, b) => {
    // If isCurrentSelector is provided, prioritize current items
    if (isCurrentSelector) {
      if (isCurrentSelector(a)) return -1;
      if (isCurrentSelector(b)) return 1;
    }

    const dateA = dateSelector(a) ? new Date(dateSelector(a)!).getTime() : 0;
    const dateB = dateSelector(b) ? new Date(dateSelector(b)!).getTime() : 0;

    return order === "desc" ? dateB - dateA : dateA - dateB;
  });
}
