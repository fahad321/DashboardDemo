import React, { Component } from 'react'
import ModelCard from './ModelCard'
import MultilineChartIcon from '@material-ui/icons/MultilineChart'

// export default class ModelsPage extends Component {
//     render() {
//         return (
//             <div>
//                 <ModelCard heading="model1" status="n" />
//                 <ModelCard heading="model2" status="u" />
//                 <ModelCard heading="model3" status="u" />
//                 <ModelCard heading="model3" status="n" />
//                 <ModelCard heading="model5" status="u" />
//             </div>
//         )
//     }
// }

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}))

export default function ModelsPage() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Paper className={classes.paper} variant="outlined">
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ModelCard heading="Model1" status="n" />
                    </Grid>
                    <Grid item xs>
                        <ModelCard heading="Model2" status="u" />
                    </Grid>
                    <Grid item xs>
                        <ModelCard heading="Model3" status="u" />
                    </Grid>
                </Grid>
                <br />
                <br />
                <br />
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ModelCard heading="Model4" status="u" />
                    </Grid>
                    <Grid item xs>
                        <ModelCard heading="Model5" status="u" />
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
