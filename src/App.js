import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Redirect, Route, useHistory} from 'react-router-dom';



// css
import 'antd/dist/antd.css'; 
import './assets/css/euda.css'
import './assets/css/euda.auth.css'
import './assets/css/euda.dashboard.css'
import './assets/css/euda.contacts.css'

// Layouts 
import routes from './routes'
import PublicLayout from './shared/layout/PublicLayout'
import AuthLayout from './shared/layout/AuthLayout'

// Public pages
import Login from './pages/login/LoginWrapper'

// Authenticated Pages
import Dashboard from './pages/dashboard/DashboardWrapper'
import Employee from './pages/employee/EmployeeWrapper'

const pages =[
  {
    exact:true,
    path: routes.login,
    component: Login,
    layout: PublicLayout,

  },
  {
    exact:true,
    path: routes.dashboard,
    component: Dashboard,
    layout: AuthLayout,

  },
  {
    exact:true,
    path: routes.employee,
    component: Employee,
    layout: AuthLayout,

  },


]

function App() {

  const history = useHistory()

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {pages.map(
            ({exact, path, component:Component, layout: Layout}, index)=>(
              <Route
              key={index}
              exact={exact}
              path={path}
              render = {props =>(
                <Layout history={props.history}>
                  <Component {...props}/>
                </Layout>
              )}
              />
            )
          )}
          <Redirect to ={routes.login}/>
          {/* OR */}
          {/* custom 404 PAGE */}
          {/* <Route component={NotFoundPage} />  */}
            </Switch>
            </Router>
    </div>
  );
}

export default App;
