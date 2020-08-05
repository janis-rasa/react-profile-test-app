import { profileAPI } from '../api/api'

const SET_PROFILE_LIST = 'SET_PROFILE_LIST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
	profiles: [],
	userProfile: {}
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		
		case SET_PROFILE_LIST:
			return {
				...state,
				profiles: [
					...action.profiles
				]
			}
		
		case SET_USER_PROFILE:
			return {
				...state,
				userProfile: action.userProfile
			}
		
		default:
            return state
    }
}

const setProfiles = (profiles) => ({
	type: SET_PROFILE_LIST,
	profiles: profiles
})

const setUserProfile = (userProfile) => ({
	type: SET_USER_PROFILE,
	userProfile: userProfile
})

export const requestProfiles = () => async (dispatch) => {
	try {
		// request a list with short profile info
		let response = await profileAPI.getProfiles()
		if (response.data.length) {
			dispatch(setProfiles(response.data))
		}
	} catch (error) {
		alert(error)
	}
}

export const requestUserProfile = (userId) => async (dispatch) => {
	try {
		// request full user profile
		let response = await profileAPI.getProfileData(userId)
		if (response.data.id) {
			dispatch(setUserProfile(response.data))
		}
	} catch (error) {
		alert(error)
	}
}

export default profileReducer