import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import grey from '@material-ui/core/colors/grey'
import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    appBar: {
        background: blue[900],
        zIndex: theme.zIndex.drawer + 1,
        // height: '7vh',
    },
}))

export default function Header() {
    const classes = useStyles()

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Aiotize
                </Typography>
                {/* <Button variant="contained">Default</Button> */}
            </Toolbar>
        </AppBar>
    )
}
