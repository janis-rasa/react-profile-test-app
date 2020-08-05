import React from "react"
import Table from "react-bootstrap/Table"

const ProfileAdditionalItems = ({ userProfile }) => {
    return (
        <Table striped hover className="mb-0">
            <tbody>
                <tr>
                    <td>Status</td><td>{userProfile.status.status}</td>
                </tr>
                <tr>
                    <td>Website</td><td><a href="{userProfile.profile.contacts.website}">{userProfile.profile.contacts.website}</a></td>
                </tr>
                <tr>
                    <td>Gender</td><td>{userProfile.profile.gender}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default ProfileAdditionalItems