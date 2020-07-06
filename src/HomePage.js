import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <Typography paragraph>Welcome to the homepage.</Typography>
                <Typography paragraph>
                    click
                    <Link to="/random"> here </Link>
                    to go on a /random path
                </Typography>
            </div>
        )
    }
}
