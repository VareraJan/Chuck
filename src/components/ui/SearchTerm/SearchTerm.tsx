import { ChangeEvent, FC } from "react";
import { Input } from "../input";

interface ISearchTerm {
  searchTerm: string;
  handleSearchTerm: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchTerm: FC<ISearchTerm> = ({ handleSearchTerm, searchTerm }) => {
  return (
    <Input
      placeholder="Search jokes"
      onChange={handleSearchTerm}
      value={searchTerm}
    />
  );
};

export default SearchTerm;
