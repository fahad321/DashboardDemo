import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
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
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone'
import VideoLibraryTwoToneIcon from '@material-ui/icons/VideoLibraryTwoTone'
import TimelineTwoToneIcon from '@material-ui/icons/TimelineTwoTone'
import BubbleChartTwoToneIcon from '@material-ui/icons/BubbleChartTwoTone'
import VideogameAssetTwoToneIcon from '@material-ui/icons/VideogameAssetTwoTone'
import SupervisorAccountTwoToneIcon from '@material-ui/icons/SupervisorAccountTwoTone'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}))

export default function SideDrawer() {
    const classes = useStyles()

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    {['Home', 'Streams', 'Analytics', 'Models', 'Devices'].map(
                        (text, index) => (
                            <Link to={`/${text.toLowerCase()}`}>
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {text === 'Home' ? (
                                            <HomeTwoToneIcon />
                                        ) : text === 'Streams' ? (
                                            <VideoLibraryTwoToneIcon />
                                        ) : text === 'Analytics' ? (
                                            <TimelineTwoToneIcon />
                                        ) : text === 'Models' ? (
                                            <BubbleChartTwoToneIcon />
                                        ) : (
                                            <VideoLibraryTwoToneIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </Link>
                        )
                    )}
                </List>
                <Divider />
                <List>
                    {['Admin'].map((text, index) => (
                        <Link to={`/${text.toLowerCase()}`}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {text === 'Admin' ? (
                                        <SupervisorAccountTwoToneIcon />
                                    ) : null}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </div>
        </Drawer>
    )
}
