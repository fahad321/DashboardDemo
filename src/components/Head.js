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
    logouts: {
        height: '40px !important',
        background: blue[900],
        color: 'white',
        border: 'none!important',
    },
}))
var signOut
export default function Header(props) {
    const classes = useStyles()
    if (props.authentications == 'false') {
        signOut = 'false'
    } else {
        signOut = 'true'
    }
    function logouts() {
        window.location.reload(false)
    }

    return (
        <div>
            <AppBar position="fixed" className={classes.appBar}>
                <div style={{ display: 'flex' }}>
                    <Toolbar>
                        <Typography variant="h6" noWrap>
                            Aiotize
                        </Typography>
                    </Toolbar>

                    {signOut == 'true' ? (
                        <div style={{ marginLeft: 'auto', paddingTop: '20px' }}>
                            <Button
                                className={classes.logouts}
                                onClick={() => {
                                    window.location.reload(false)
                                }}
                                variant="contained"
                            >
                                Log Out
                            </Button>
                        </div>
                    ) : (
                        <div />
                    )}
                </div>
            </AppBar>
        </div>
    )
}
