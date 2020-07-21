import React,{ useContext } from 'react';
import UserProvider from '../contexts/UserProvider';
import Profile from './Profile';
import _ from 'lodash';
import ButtonList from '../components/buttons/ButtonList'

const Home = () => {
    const userData = useContext(UserProvider.context);
    return (
        <div className="page" style={{ textAlign: "center" }}>
            <p className="page-title">Alumnise</p>
            <Profile />
            {_.isEmpty(userData) ?  <ButtonList/> : null}
        </div>
    );
};

export default Home;