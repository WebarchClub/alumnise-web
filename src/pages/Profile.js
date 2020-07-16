import React, { useContext } from "react";
import UserProvider from "../contexts/UserProvider";
import Terminal from "../components/displays/Terminal";
import _ from "lodash";
const LoginMsg =
    "Please Login to share your SRM campus placement interview experience.";
const Profile = () => {
    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData)
        ? LoginMsg
        : "Share your SRM campus placement interview experience";

    return (
        <div className="page">
            <p style={{ textAlign: "center" }}>{text}</p>
            {!_.isEmpty(userData) && <Terminal userData={userData} />}
            {/* <div style={{ marginBottom: 20 }} /> */}
        </div>
    );
};

export default Profile;
