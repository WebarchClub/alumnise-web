import React,{ useContext } from 'react';
import { Link } from 'react-router-dom';
import UserProvider from '../../contexts/UserProvider';
import _ from 'lodash';
import PassportLogo from "../../res/webarch.png";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const MenuBar = () => {
    const userData = useContext(UserProvider.context);
    return (
        <div className="menu-bar">
            <Link className="btn menu-btn" to="/" title="Home">
                <img
                        src={PassportLogo}
                        alt="passport.js logo"
                        style={{ height: 25 }}
                    />
            </Link>
            {
                !_.isEmpty(userData) &&
                <a
                    className="btn menu-btn"
                    href={"/auth/logout"}
                    title="Logout"
                    style={{ float: "right" }}
                >
                   <ExitToAppIcon />
                </a>
            }
        </div>
    );
};


export default MenuBar;