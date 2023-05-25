import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <div className={css.formContainer}>
        <label className={css.label}>
          Email
          <input
            className={css.input}
            type="email"
            name="email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Please, write your email"
            aria-label="email"
            required
          />
        </label>
        <label className={css.label}>
          Password
          <input
            className={css.input}
            type="password"
            name="password"
            autoComplete="off"
            minLength="7"
            title="The password length must be not less thn 7"
            required
          />
        </label>
        <button className={css.btn} type="submit">
          SIGN IN
        </button>
        <NavLink className={css.link} to="/register">
          Don't have an account? Sign Up
        </NavLink>
      </div>
    </form>
  );
};
