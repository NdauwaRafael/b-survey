import React from 'react'
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, auth, ...rest }: any) => (
    <Route {...rest}
           render={props => {
               if (auth.isLoading) {
                   return <h2>Loading....</h2>
               }
               else if (!auth.isAuthenticated) {
                   return <Redirect to="/login" />
               }
               else {
                   return <Component {...props} />
               }

           }} />
);

const mapStateToProps = ({ auth }: any) => ({
    auth
});

export default connect(mapStateToProps)(PrivateRoute);
