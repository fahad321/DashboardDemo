import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import Head from './Head'
import SideDrawer from './SideDrawer'
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom'
import HomePage from './HomePage'
import NotFound from './NotFound'
import StreamsPage from './StreamsPage'
import AnalyticsPage from './AnalyticsPage'
import ModelsPage from './ModelsPage'
import DevicesPage from './DevicesPage'
import AdminPage from './AdminPage'

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

export default function Page() {
    const classes = useStyles()
    return (
        <main className={classes.content}>
            <Toolbar />
            <Switch>
                <Route exact path="/home" component={HomePage}></Route>
                <Route exact path="/streams" component={StreamsPage}></Route>
                <Route
                    exact
                    path="/analytics"
                    component={AnalyticsPage}
                ></Route>
                <Route exact path="/models" component={ModelsPage}></Route>
                <Route exact path="/devices" component={DevicesPage}></Route>
                <Route exact path="/admin" component={AdminPage}></Route>
                <Route path="*" component={NotFound}></Route>
            </Switch>
        </main>
    )
}

// class Subjects extends Component{
//     render(){
//         return(

//         )
//     }
// }
