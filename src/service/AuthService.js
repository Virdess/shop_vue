import { get, set, remove } from "@/helper/storage";
import $axios from "../helper/axios";
import $config from "@/config";

export async function isLoggedIn() {
    const access_token = await get("access_token")
    if (access_token) {
        return true;
    } else {
        return false;
    }
}

export async function login(user) {
    const data = await $axios({ url: $config.API_BASE_URL + '/auth/login', data: user, method: 'POST' })
        .then(resp => {

            const token = resp.data.token;
            const is_setup = resp.data.user.calories > 0 ? 'true' : 'false';

            set("is_setup", is_setup)
            set("access_token", token)

            return true;
        })
        .catch(err => {
            console.log(err);
            remove("access_token")
            remove("is_setup")
            return false;
        })

        return data;
}

export async function register(user) {
    const data = await $axios({url: $config.API_BASE_URL + '/auth/reg', data: user, method: 'POST' })
    .then(() => {
        return true;
    })
    .catch(err => {
      console.log(err);
      return false;
    })

    return data;
}

export async function logout(forceLogout = false) {
    if (!forceLogout) {
        await $axios({url: $config.API_BASE_URL + 'logout', method: 'POST' }).then(() => {
            remove("access_token")
            remove("is_setup")
            delete $axios.defaults.headers.common['Authorization']
        })
    } else {
        remove("access_token")
        remove("is_setup")
        delete $axios.defaults.headers.common['Authorization']
    }
}

export async function refreshToken() {
    const data = await $axios({url: $config.API_BASE_URL + 'refresh', method: 'POST' })
    .then(resp => {
      const access_token = resp.data.access_token
      set("access_token", access_token)

      return resp.data.access_token;
    })
    .catch((err) => {
      console.log(err);
      return false;
    })

    return data;
}