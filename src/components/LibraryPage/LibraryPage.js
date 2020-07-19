import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Grid } from '@material-ui/core'
import ReactPlayer from 'react-player'
import Button from '@material-ui/core/Button'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { connect } from 'react-redux'
import { insertIntoItems } from '../../actions/library/insertIntoItems'
import { insertIntoInFocusItem } from '../../actions/library/insertIntoInFocusItem'

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    table: {
        minWidth: 650,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    wrapper: {
        position: 'relative',
        paddingTop: '56.25%',
    },
    height: {
        height: '70vh',
        overflowY: 'scroll',
        overflowX: 'visible',
        padding: 20,
    },
    formControl: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
})

const fakeAPIData = [
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
        byModel: 'model1',
    },
    {
        url:
            'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkimsoonlee.com%2Fwp-content%2Fuploads%2F2014%2F08%2Fcontainer-trucking1.jpg&f=1&nofb=1',
        type: 'image',
        byModel: 'model1',
    },
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
        byModel: 'model3',
    },
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
    },
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
    },
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
    },
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
    },
    {
        url: 'https://www.youtube.com/watch?v=SA7PFjo5DLA',
        type: 'video',
        subType: 'clip',
        byModel: 'model1',
    },
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
    },
    {
        url:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmtMJf_s82SM%2Fmaxresdefault.jpg&f=1&nofb=1',
        type: 'image',
        byModel: 'model2',
    },
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
    },
    {
        url: 'https://www.youtube.com/watch?v=B5i68EN-tmY',
        type: 'video',
        subType: 'video',
    },
    {
        url:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.qwG_1RXH4TGgYOTLRXWLSAHaE1%26pid%3DApi&f=1',
        type: 'image',
        byModel: 'model3',
    },
]

class LibraryPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0,
            response: [],
            showInARow: 4,
            filteredResponse: [],
            model: '',
            disabled: true,
        }
        //binding this
        this.makeRequestToApi = this.makeRequestToApi.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    applyFilter(value) {
        switch (value) {
            case 0:
                this.setState({ filteredResponse: this.state.response })
                this.setState({ disabled: true })

                break
            case 1:
                this.setState({
                    filteredResponse: this.state.response.filter(
                        (o) => o.type === 'video'
                    ),
                })
                this.setState({ disabled: true })
                break
            case 2:
                this.setState({
                    filteredResponse: this.state.response.filter(
                        (o) => o.type === 'image'
                    ),
                })
                this.setState({ disabled: false })
                break
            case 3:
                this.setState({
                    filteredResponse: this.state.response.filter(
                        (o) => o.type === 'video' && o.subType === 'clip'
                    ),
                })
                this.setState({ disabled: false })
                break
            default:
                break
        }
    }

    handleChange = (event, newValue) => {
        this.setState({ value: newValue })
        this.applyFilter(newValue)
        console.log(this.state.response)
    }

    applyModelFilter(value) {
        console.log(this.state.value)
        this.applyFilter(this.state.value)
        switch (value) {
            case 5:
                this.setState({
                    filteredResponse: this.state.filteredResponse.filter(
                        (o) => o.byModel === 'model5'
                    ),
                })

                break
            case 4:
                this.setState({
                    filteredResponse: this.state.filteredResponse.filter(
                        (o) => o.byModel === 'model4'
                    ),
                })
                break
            case 3:
                this.setState({
                    filteredResponse: this.state.filteredResponse.filter(
                        (o) => o.byModel === 'model3'
                    ),
                })
                break
            case 2:
                this.setState({
                    filteredResponse: this.state.filteredResponse.filter(
                        (o) => o.byModel === 'model2'
                    ),
                })
                break
            case 1:
                this.setState({
                    filteredResponse: this.state.filteredResponse.filter(
                        (o) => o.byModel === 'model1'
                    ),
                })
                break
            default:
                break
        }
    }

    handleModelChange = (event) => {
        this.setState({ model: event.target.value })
        this.applyModelFilter(event.target.value)
    }

    //creating delay for fake api
    delay = async (ms) => {
        return await new Promise((resolve) => setTimeout(resolve, ms))
    }

    // fake api call
    makeRequestToApi = async () => {
        await this.delay(500)
        return fakeAPIData
    }

    componentDidMount() {
        this.makeRequestToApi().then((res) => {
            console.log(res)
            this.setState({ response: res })
            this.setState({ filteredResponse: res })
        })
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <Paper>
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="All Media" />
                        <Tab label="Videos" />
                        <Tab label="Photos" />
                        <Tab label="Detected clips" />
                        <FormControl
                            disabled={this.state.disabled}
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <InputLabel id="demo-simple-select-outlined-label">
                                Model
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={this.state.model}
                                defaultValue={0}
                                onChange={this.handleModelChange}
                                label="Age"
                            >
                                <MenuItem value={0}>All</MenuItem>
                                <MenuItem value={1}>Model 1</MenuItem>
                                <MenuItem value={2}>Model 2</MenuItem>
                                <MenuItem value={3}>Model 3</MenuItem>
                                <MenuItem value={4}>Model 4</MenuItem>
                                <MenuItem value={5}>Model 5</MenuItem>
                            </Select>
                        </FormControl>
                    </Tabs>
                </Paper>
                <br />
                <Paper className={classes.height}>
                    <div className={classes.root}>
                        <Grid container spacing={3}>
                            {this.state.filteredResponse.map((o) => (
                                <Grid item xs={6} sm={3}>
                                    <Paper
                                        className={classes.paper}
                                        elevation={3}
                                        boxShadow={1}
                                    >
                                        <div class={classes.wrapper}>
                                            {o.type === 'video' ? (
                                                <ReactPlayer
                                                    url={o.url}
                                                    className={classes.video}
                                                    width="100%"
                                                    height="100%"
                                                    volume="0"
                                                ></ReactPlayer>
                                            ) : (
                                                <img
                                                    src={o.url}
                                                    alt="truck"
                                                    className={classes.video}
                                                    width="100%"
                                                    height="100%"
                                                ></img>
                                            )}
                                        </div>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </Paper>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        insertIntoItems: (data) => {
            return dispatch(insertIntoItems(data))
        },
        insertIntoInFocusItem: (data) => {
            return dispatch(insertIntoInFocusItem(data))
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, { withTheme: true })(LibraryPage))
