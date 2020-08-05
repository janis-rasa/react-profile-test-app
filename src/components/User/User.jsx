import React from 'react'
import ProfileItem from '../ProfileItem/ProfileItem'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

const User = ({ userProfile }) => {

    return (
        <div className="row justify-content-center flex-column align-items-center">
            <ProfileItem userProfile={userProfile} />
            <div className="col-12 text-center pt-3">
                <Button as={NavLink} to="/profiles">Return to profile list</Button>
            </div>
        </div>
    )
}

export default User