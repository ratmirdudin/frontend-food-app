import jwt from "jwt-decode";
import {LINKS} from "../../routes/routes";

const TOKENS_KEY = "tokens";
const USER_KEY = "user";

export const saveAuth = (tokens) => {
    localStorage.setItem(TOKENS_KEY, JSON.stringify(tokens))
}

export const getTokens = () => {
    const tokens = JSON.parse(localStorage.getItem(TOKENS_KEY));
    return tokens ? tokens : {accessToken: null, refreshToken: null}
}

export const logout = () => {
    localStorage.removeItem(TOKENS_KEY)
    window.location.href = LINKS.Login;
}

export const getCurrentUsername = () => {
    const {accessToken} = getTokens()
    return accessToken ? jwt(accessToken).sub : null
}