import React from 'react'

const Terminal = ({userData}) => {
    const userID = userData.id;
    const name = userData.displayName;
    return(
        <div className="window">
        <div className="title-bar">
        <div className="content">
            <pre>{userID}</pre>
            <pre>{name}</pre>
        </div>
        </div>
        </div>
    )
}

 export default Terminal;