import React from 'react';
import * as S from './styles';
import SearchInput from '../SearchInput/SearchInput';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import GoHomeButton from '../GoHomeButton/GoHomeButton';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { useAppNavigation } from '../../hooks/navigation';
import { selectSearch, setSearch } from '../../features/movies/movieSlice';
import { setTheme, selectTheme } from '../../features/app-theme/appThemeSlice';
import { Theme } from '../../types/IAppTheme';
import { StackScreen } from '../../enums/StackScreens';

const Header: React.FC = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);
  const isLightTheme = useAppSelector(selectTheme) === 'light';

  const [localSearch, setLocalSearch] = React.useState(search);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setSearch(localSearch));
    navigation.navigate(StackScreen.Home);
  }

  const handleThemeChange = (theme: Theme) => {
    dispatch(setTheme(theme));
  }

  React.useEffect(() => {
    if (!localSearch) {
      dispatch(setSearch(''));
    }
  }, [localSearch, dispatch]);

  return (
    <S.AppBar position="static">
      <GoHomeButton />
      <SearchInput
        search={localSearch}
        onSearchChange={setLocalSearch}
        onSearchSubmit={handleSubmit}
        placeholder="Search..."
      />
      <ThemeSwitch
        onClick={() => handleThemeChange(isLightTheme ? 'dark' : 'light')}
      />
    </S.AppBar>
  );
};

export default Header;
