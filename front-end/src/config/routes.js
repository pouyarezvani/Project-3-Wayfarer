import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
// internal components
import CitiesContainer from '../containers/CitiesContainer/CitiesContainer';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
import PostContainer from "../containers/PostContainer/PostContainer";
import Home from '../pages/Home/Home';



const Routes = ({ setCurrentUser, history, currentUser }) => {

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route {...rest} render={(props) => (
            currentUser
                ? <Component {...props} />
                : <Redirect to='/login' />
        )} />
    );

    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/login' render={(props) => <Home {...props} login={props.match.path} setCurrentUser={setCurrentUser} {...history} />} />
            <Route path='/register' render={(props) => <Home {...props} register={props.match.path} />} />
            <Route path="/post/:id" render={(props) => <PostContainer {...props} currentUser={currentUser} id={props.match.params.id} />} />
            <Route path="/cities/:city_name" render={(props) => <CitiesContainer {...props} currentUser={currentUser} cityName={props.match.params.city_name} />} />
            <Route exact path="/cities" render={(props) => <CitiesContainer {...props} currentUser={currentUser} />} />
            <Route path="/delete_post/:id" render={(props) => <CitiesContainer {...props} currentUser={currentUser} deletePost={props.match.params.id} />} />
            <Route exact path="/city/add_post/:slug" render={(props) => <CitiesContainer {...props} currentUser={currentUser} addPost={true} {...history} slug={props.match.params.slug} />} />
            <Route path="/profile" 
            render={(props) => <ProfileContainer {...props} currentUser={currentUser}  addPost={true} {...history} slug={props.match.params.slug} user_id={props.match.params.user_id} />} />
            <Route path="/delete_post/:id" render={(props) => <ProfileContainer {...props} currentUser={currentUser} deletePost={props.match.params.id} />} />
        </Switch>
    );
};
export default withRouter(Routes);
