import React from 'react';
import { NavLink } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import AddService from './AddService/AddService.js';
import ManageService from './ManageService/ManageService.js';
import './DashBoard.css'
import MakeAdmin from './MakeAdmin/MakeAdmin.js';
import MyOrder from '../MyOrder/MyOrder.js';
import Pay from './Pay/Pay.js';
import useAuth from '../hooks/useAuth.js';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
     const { user,logOut } = useAuth();
    return (
        <div>
            <div className="row container-fluid ps-0">
                <div className="col-md-2  py-5 ps-4 dashbord">
                    <Link className="nested" to={`${url}`}>DashBoard</Link>
                    <br />
                    <Link className="nested" to={`${url}/pay`}>Pay Now</Link>
                    <br />
                    <Link className="nested" to={`${url}/myorder`}>My Order</Link>
                    <br />
                    <Link to={`${url}/review`} className="nested">Add Review</Link>
                    <br />
                    
                    <Link to={`${url}/addservice`} className="nested">Add Service</Link>
                    <br />
                    <Link to={`${url}/makeadmin`} className="nested">Make Admin</Link>
                    <br />
                    <Link to={`${url}/namageallorder`} className="nested">Manage Order</Link>
                    <br />
                    {user?.email ? <NavLink
                    onClick={logOut} className="logoutBtn" to="/login">Log out</NavLink> : <> </>
                            } 
                            
                </div>
                <div className="col-md-8">
                <Switch>
                <Route exact path={path}>
                     
                </Route>
                        
                <Route path={`${path}/pay`}>
                    <Pay></Pay>
                </Route>
                        
                <Route path={`${path}/myorder`}>
                    <MyOrder></MyOrder>
                </Route>
                        
                <Route path={`${path}/addservice`}>
                    <AddService></AddService>
                </Route>
                        
                <Route path={`${path}/namageallorder`}>
                    <ManageService></ManageService>
                </Route>
                        
                <Route path={`${path}/makeadmin`}>
                    <MakeAdmin></MakeAdmin>
                </Route>
                    
                </Switch>
                    
                </div>
            </div>
           
        </div>
    );
};

export default DashBoard;
git branch -M mai