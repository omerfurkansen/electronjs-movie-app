export interface ISearchInput {
  search: string;
  onSearchChange: (search: string) => void;
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
}