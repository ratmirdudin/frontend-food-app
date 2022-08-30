import React, {useState} from 'react';
import Card from "../../../UI/Card/Card";
import styles from "../AuthPage.module.scss"
import {Link, useNavigate} from "react-router-dom";
import {LINKS} from "../../../routes/routes";
import Loader from "../../../components/Loader/Loader";
import {useRegisterMutation} from "../../../app/auth/authApiSlice";

const RegisterPage = () => {
    const navigate = useNavigate()
    const [register, {isError, isLoading, isSuccess}] = useRegisterMutation()
    const [registerForm, setRegisterForm] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    })
    const [repeatPassword, setRepeatPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (registerForm.username.length < 1 || registerForm.password.length < 1
            || registerForm.password !== repeatPassword) {
            return
        }
        await register(registerForm);
        setRegisterForm({
            firstname: "",
            lastname: "",
            username: "",
            password: "",
        })
        setRepeatPassword("")
        navigate(LINKS.Login)
    }

    const content = () => {
        return (
            <form>
                {isError && <h4>Во время регистрации произошла ошибка</h4>}
                <h2 className={styles.title}>Регистрация</h2>
                <label>
                    <input
                        type="text"
                        value={registerForm.firstname}
                        onChange={(e) => setRegisterForm({...registerForm, firstname: e.target.value})}
                        placeholder="Введите имя"
                        readOnly={isLoading || isSuccess}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={registerForm.lastname}
                        onChange={(e) => setRegisterForm({...registerForm, lastname: e.target.value})}
                        placeholder="Введите фамилию"
                        readOnly={isLoading || isSuccess}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={registerForm.username}
                        onChange={(e) => setRegisterForm({...registerForm, username: e.target.value})}
                        placeholder="Введите имя аккаунта"
                        readOnly={isLoading || isSuccess}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        value={registerForm.password}
                        onChange={(e) => setRegisterForm({...registerForm, password: e.target.value})}
                        placeholder="Введите пароль"
                        readOnly={isLoading || isSuccess}
                    />
                </label>
                <label>
                    <input
                        type="password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        placeholder="Повторите пароль"
                        readOnly={isLoading || isSuccess}
                    />
                </label>
                <div className={styles.submit}>
                    <Link to={LINKS.Login}>Войти в аккаунт</Link>
                    <button type="submit" onClick={handleSubmit}>Зарегистрироваться</button>
                </div>
            </form>
        );
    }

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

export default RegisterPage;