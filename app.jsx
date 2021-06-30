import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Header from './components/header/Header'
import CheckOut from './components/signup/SignUp';
import Footer from './components/footer/Footer'
import SignUp from './components/signup/SignUp'
import SignIn from './components/signin/SignIn'
import Admin from './components/admin/AdminDashboard'
import AdminResearch from './components/admin/research/Research'
import AdminSessions from './components/admin/sessions/Sessions'
import AdminUsers from './components/admin/users/AdminUsers'
import PublicSessions from './components/sessions/PublicSessions'
import PublicResearchs from './components/researchs/PublicResearchs'
import SessionPraposal from './components/sessions/addsessions/SessionPraposal'
import AddResearch from '././components/researchs/addresearchs/AddResearch'
import Profile from '././components/profile/Profile'
import SessionRequest from './components/sessions/editsession/EditSessions'
import ResearchApprovel from './components/researchs/reviewResearch/ReviewResearch'
import SessionView from './components/sessions/sessoinview/SessionView'

import './app.css';


export default class App extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(

        <Router>
            <Header />
                <div className="Container">
                    <Route path="/" component={Home} exact />
                    <Route path="/checkout" component={CheckOut} exact />
                    <Route path="/signup" component={SignUp} exact />
                    <Route path="/signin" component={SignIn} exact />
                    <Route path="/admin" component={Admin} exact />
                    <Route path="/admin/research" component={AdminResearch} exact />
                    <Route path="/admin/sessions" component={AdminSessions} exact />
                    <Route path="/admin/users" component={AdminUsers} exact />
                    <Route path="/leatestsessions" component={PublicSessions} exact />
                    <Route path="/researchpapers" component={PublicResearchs} exact />
                    <Route path="/sessionpraposal" component={SessionPraposal} exact />
                    <Route path="/addresearch" component={AddResearch} exact />
                    <Route path="/profile" component={Profile} exact />
                    <Route path="/sessionrequestapprovel" component={SessionRequest} exact />
                    <Route path="/reviewresearch" component={ResearchApprovel} exact />
                    <Route path="/sessionview" component={SessionView} exact />
                    
                    
                </div>
            <Footer />
        </Router>
           
        )
    }

}