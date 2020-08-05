import React from "react"
import ProfileItem from "../ProfileItem/ProfileItem"

const ProfileList = (props) => {
    return (
        <>
            <h1 className="text-center mb-5">Profile list</h1>

            <div className="row justify-content-center flex-column align-items-center">
                {props.profiles.map(profile => {
                    return <ProfileItem
                        userProfile={profile}
                        key={profile.id}
                    />
                })}
            </div>

        </>
    )

}


export default ProfileList