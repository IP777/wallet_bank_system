import React from "react";
import styles from "../loginization/Loginization.module.css"
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { ReactComponent as EmailIcon } from '../../assets/email.svg';
import { ReactComponent as PasswordIcon } from '../../assets/lock.svg';




const Loginization = () => {
  return <div className={styles.container}>Loginization Page!!!

<form className={styles.form}  noValidate>
<TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            placeholder="E-mail"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <EmailIcon />
                </InputAdornment>
              ),
            }}
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            type="password"
            id="password"
            placeholder="Пароль"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <PasswordIcon />
                </InputAdornment>
              ),
            }}      
            autoComplete="current-password"
          />
        

<button
  type="submit"
  name="login"
  className={styles.button}
  >
  Войти
</button>
<div className={styles.registry_link}>
<a href="/" className={styles.link}>Регистрация</a>
</div>

</form>


  </div>;
  
};

export default Loginization;