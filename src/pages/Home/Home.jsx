import css from '../Home/Home.module.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.home}>
      <h1 className={css.text}>Welcome to PhoneBook App</h1>
      <p className={css.item}>
        Welcome to Phone Book,the ultimate app for managing your contacts! With
        Phone Book, you can easily create a new user account and login to start
        organizing your contacts right away. So why wait? Sign up for Phone Book
        today and start organizing your contacts like a pro!
      </p>
      <div className={css.link}>
        <NavLink className={css.linkitem} to="/register">
          Sign Up
        </NavLink>
        <NavLink className={css.linkitem} to="/login">
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
