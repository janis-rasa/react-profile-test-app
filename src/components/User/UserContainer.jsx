import React from 'react'
import { getUserProfile } from '../../redux/profile-selectors'
import { connect } from "react-redux"
import { requestUserProfile } from '../../redux/profile-reducer'
import User from './User'
import { withRouter } from "react-router-dom"
import { compose } from "redux"

const UserContainer = (props) => {

    const { requestUserProfile, match } = props
    
    React.useEffect(() => {
        // AJAX load user data
        requestUserProfile(parseInt(match.params.userId))
    }, [requestUserProfile, match])


    // Check the user ID and return the component with the correct data
    return props.userProfile.id === parseInt(match.params.userId) ? <User userProfile={props.userProfile} /> : null

}

const mapStateToProps = (state) => ({
    userProfile: getUserProfile(state)
})

export default compose(connect(mapStateToProps, { requestUserProfile }), withRouter)(UserContainer)

