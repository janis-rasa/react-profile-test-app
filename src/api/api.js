import axios from "axios";

const instance = axios.create(
    {
        baseURL: 'http://my-json-server.typicode.com/janis-rasa/demo/'
    }
)

export const profileAPI = {
    getProfileData(userId) {
        return instance.get(`profiles_ext/${userId}`)
    },
    getProfiles() {
        return instance.get("profiles")
    }
}