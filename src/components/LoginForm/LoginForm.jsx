import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
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
    <div>
      {!isLoggedIn && (
        <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
          <label className={css.label}>
            Email
            <input type="email" name="email" />
          </label>
          <label className={css.label}>
            Password
            <input type="password" name="password" />
          </label>
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
};
