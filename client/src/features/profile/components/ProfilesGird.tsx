import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { type JSX } from "react";
import type { Profile } from "../types";
import UserCard from "./UserCard";

interface ProfilesGridProps {
  profiles: Profile[];
  totalPages: number;
  currentPage: number;
  handlePageChange: (page: number) => void;
}

const ProfilesGrid = ({ profiles, totalPages, currentPage, handlePageChange }: ProfilesGridProps) => {
  const renderPageNumbers = () => {
    const pages: JSX.Element[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // show all pages if total small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={currentPage === i} onClick={() => handlePageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    } else {
      //always show first page
      pages.push(
        <PaginationItem key={1}>
          <PaginationLink isActive={currentPage === 1} onClick={() => handlePageChange(1)}>
            1
          </PaginationLink>
        </PaginationItem>,
      );

      // show ellipsis or pages around current page
      if (currentPage > 3) {
        pages.push(
          <PaginationItem key="ellipsis-1">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      // show pages around current page
      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={currentPage === i} onClick={() => handlePageChange(i)}>
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }

      // show ellipsis before last page
      if (currentPage < totalPages - 2) {
        pages.push(
          <PaginationItem key="ellipsis-2">
            <PaginationEllipsis />
          </PaginationItem>,
        );
      }

      // always show last page
      pages.push(
        <PaginationItem key={totalPages}>
          <PaginationLink isActive={currentPage === totalPages} onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>,
      );
    }

    return pages;
  };

  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
        {profiles.map((profile) => (
          <UserCard key={profile.id} profile={profile} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                className={currentPage === 1 ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>

            {renderPageNumbers()}

            <PaginationItem>
              <PaginationNext
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                className={currentPage === totalPages ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default ProfilesGrid;
