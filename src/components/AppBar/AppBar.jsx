import { Navigation } from '../Navigation/Navigation';
import { useAuth } from '../hooks/useAuth';

import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={`${css.header} ${isLoggedIn ? css.notFlex : ''}`}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
