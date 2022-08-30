import React, {useState} from 'react';
import Card from "../../../UI/Card/Card";
import styles from "../AuthPage.module.scss"
import {Link} from "react-router-dom";
import {LINKS} from "../../../routes/routes";
import {saveAuth} from "../../../app/auth/authService";
import Loader from "../../../components/Loader/Loader";
import {useLoginMutation} from "../../../app/auth/authApiSlice";

const LoginPage = () => {
    const [login, {isError, isLoading, isSuccess}] = useLoginMutation();

    const [credentials, setCredentials] = useState({username: "", password: ""})

    const handleLogin = async (e) => {
        e.preventDefault()
        if (credentials.username.length < 1 || credentials.password.length < 1 || isLoading) {
            return
        }
        const tokens = await login(credentials).unwrap();
        setCredentials({username: "", password: ""})
        saveAuth(tokens)
        window.location.href = LINKS.Main;
    }


    const content = () => {
        return (<form>
                {isError && <h5 className={styles.title}>Неверные логин или пароль</h5>}
                <h2 className={styles.title}>Вход в аккаунт</h2>
                <label>
                    <input
                        type="text"
                        value={credentials.username}
                        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                        placeholder="Имя пользователя"
                        readOnly={isLoading || isSuccess}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        value={credentials.password}
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                        placeholder="Пароль"
                        readOnly={isLoading || isSuccess}
                    />
                </label>
                <div className={styles.submit}>
                    <Link to={LINKS.Register}>Зарегистрироваться</Link>
                    <button type="submit"
                            onClick={handleLogin}
                            className={isLoading || isSuccess ? styles.submitted : {}}
                    >Войти
                    </button>
                </div>
            </form>
        );
    };

    return (
        <div className={styles.wrapper}>
            <Card>
                {isLoading || isSuccess
                    ? <Loader/>
                    : content()
                }
            </Card>
        </div>
    );
};

export default LoginPage;