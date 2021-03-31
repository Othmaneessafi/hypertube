import React from 'react';
import { connect } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import RegisterUser from '../containers/Register';
import loginUser from '../containers/Login';
import confirme from '../containers/emailConfirmation';
import NotFoundPage from '../NotFoundPage';
import ResetPassword from '../containers/resetP';
import ForgotPassword from '../containers/Forgot';
import homePage from '../containers/HomePage';
import omniAuth from '../containers/Login/omniAuth';

const Routes = (props) => {
    const {user} = props;
    return (
            <Switch>
                <Route exact path="/register" component={user === null ? RegisterUser  :  homePage} />
                <Route exact path="/login" component={user === null ? loginUser  : homePage} />
                <Route exact path="/confirme/:token" component={user === null ? confirme  : homePage} />
                <Route exact path="/resetPassword/:token" component={user === null ? ResetPassword  : homePage} />
                <Route exact path="/forgotPassword" component={user === null ? ForgotPassword  : homePage} />
                <Route exact path="/omniAuth/:token" component={omniAuth} />
                <Route exact path="/" component={user === null ? loginUser  : homePage} />
                <Route exact path="" component={NotFoundPage} />
            </Switch>
    )
}
const mapStateToProps = (state) => (
    {
        'user': state.user,
    });
export default connect(mapStateToProps)(Routes);