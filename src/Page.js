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
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        </main>
    )
}

// class Subjects extends Component{
//     render(){
//         return(

//         )
//     }
// }
