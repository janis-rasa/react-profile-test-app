import React from 'react'
import { getProfiles } from '../../redux/profile-selectors'
import { connect } from "react-redux"
import { requestProfiles } from '../../redux/profile-reducer'
import ProfileList from './ProfileList'

const ProfileContainer = (props) => {

  const { requestProfiles } = props

  React.useEffect(() => {
    // AJAX load user list
    requestProfiles()
  }, [requestProfiles])

  // Waiting for data to load and then rendering the component
  return Object.keys(props.profiles).length ? <ProfileList profiles={props.profiles}/> : null

}

const mapStateToProps = (state) => ({
  profiles: getProfiles(state)
})

export default connect(mapStateToProps, { requestProfiles })(ProfileContainer)

