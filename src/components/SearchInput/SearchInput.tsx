import React from "react";
import * as S from "./styles";
import { Search } from "@mui/icons-material";
import { ISearchInput } from "../../types/ISearchInput";

const SearchInput = ({ search, onSearchChange, onSearchSubmit, placeholder }: ISearchInput) => {
  return (
    <S.Form onSubmit={onSearchSubmit}>
      <S.Search
        placeholder={placeholder}
        variant="outlined"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        InputProps={{
          startAdornment: <Search />,
        }}
        autoComplete="off"
      />
    </S.Form>
  );
}

export default SearchInput;

