import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          Username
          <input
            className={css.input}
            type="text"
            name="name"
            minLength="2"
            title="Please, write your name and surname"
            aria-label="name"
            required
          />
        </label>
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
          SIGN UP
        </button>
        <NavLink className={css.link} to="/login">
          Already have an account? Sign In
        </NavLink>
      </div>
    </form>
  );
};
