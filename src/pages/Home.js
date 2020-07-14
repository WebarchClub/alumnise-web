import React,{ useContext } from 'react';
import UserProvider from '../contexts/UserProvider';
import Profile from './Profile';
import _ from 'lodash';
import ButtonList from '../components/buttons/ButtonList'

const Home = () => {
    const LoginMsg = "Login to see your Data.";

    const userData = useContext(UserProvider.context);
    const text = _.isEmpty(userData) ? LoginMsg: "Explore Your Data";
    return (
        <div className="page" style={{ textAlign: "center" }}>
            <p className="page-title">Alumnise</p>
            <Profile />
            {(text === "Login to see your Data.") ?  <ButtonList/> : null}
        </div>
    );
};

export default Home;