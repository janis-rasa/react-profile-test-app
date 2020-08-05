import React from "react"
import { Card } from "react-bootstrap"
import { NavLink } from 'react-router-dom'
import ProfileAdditionalItems from './ProfileAdditionalItems'

const ProfileItem = ({ userProfile }) => {

    const ProfileAvatar = () => <img src={userProfile.avatarUrl} alt={`${userProfile.name} avatar`} className="img-fluid" />

    return (
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 py-3">
            <Card>
                <Card.Body>
                    <div className="row">
                        
                        <figure className="col-4 mb-0" >
                            
                            {userProfile.profile ? <ProfileAvatar /> : <NavLink to={`/profiles/${userProfile.id}`} className="d-block"><ProfileAvatar /></NavLink>}
                                
                        </figure>

                        <Card.Text className="col-8 d-flex flex-column">
                            <span>{userProfile.name}</span>
                            <a href={`mailto:${userProfile.email}`}>{userProfile.email}</a>
                        </Card.Text>

                    </div>
                    
                    {userProfile.profile ? <ProfileAdditionalItems userProfile={userProfile} /> : null}

                </Card.Body>
            </Card>
        </div>
    )

}


export default ProfileItem