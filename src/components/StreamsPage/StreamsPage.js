import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ReactPlayer from 'react-player'
import Edit from '@material-ui/icons/Edit'
import { filterData, SearchType } from 'filter-data';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from '@material-ui/core/Button';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    table: {
        minWidth: 650,
    },
});

function createData(videos, status, model, manage, device, favourite) {
    return { videos, status, model, manage, device, favourite };
}
const rows = [
    createData("https://www.youtube.com/watch?v=ug50zmP9I7s", 'Online', 2, 24, 'Cam1', true),
    createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Offline', 2, 37, 'Cam2', true),
    createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Online', 2, 24, 'Cam3', false),
    createData("https://www.youtube.com/watch?v=ug50zmP9I7s", 'Offline', 2, 67, 'Cam4', false),
    createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Online', 2, 49, 'Cam5', false),
];

const options = [
    { value: 0, label: 'select' },
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
    { value: 4, label: 'four' },
];
const defaultOption = options[0];

function shoot() {
    window.location.href = 'devices';
}
function visualization() {

    if (visModel == 0) {
        alert("Please select a model")
    }
    else {
        window.location.href = 'analytics';
    }
}
const ab = [true, true, false, true, true];
var visModel = 0;
export default function Streams() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [Results, setResults] = React.useState(rows);
    const [models, setModels] = React.useState(options);

    const [rowData, setRow] = useState(rows);
    const [selected, setChecked] = React.useState(ab);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        if (newValue == 1) {
            var searchConditions = [
                {
                    key: 'status',
                    value: 'Online',
                    type: SearchType.LK,
                },
            ];
            var result = filterData(rows, searchConditions);
            setResults(result);
            console.log(result);
        }
        else if (newValue == 2) {
            var searchConditions = [
                {
                    key: 'status',
                    value: 'Offline',
                    type: SearchType.LK,
                },
            ];
            var result = filterData(rows, searchConditions);
            setResults(result);
        }
        else if (newValue == 3) {
            var searchConditions = [
                {
                    key: 'favourite',
                    value: 'true',
                    type: SearchType.LK,
                },
            ];
            var result = filterData(rows, searchConditions);
            setResults(result);
        }
        else {
            setResults(rows);
        }
    };
    const selectedModel = (event) => {
        visModel = (event.value);
    };

    const checkBoxHandleChange = (event) => {
    };

    return (
        <div id="parent" >
            <div id="1">
                <Paper className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab label="All Media" />
                        <Tab label="Online" />
                        <Tab label="Offline" />
                        <Tab label="Favourities" />

                    </Tabs>
                </Paper>
            </div>
            <div id="1">
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                            <TableRow>

                                <TableCell>Video</TableCell>
                                <TableCell >Status</TableCell>
                                <TableCell >Model</TableCell>
                                <TableCell >device</TableCell>
                                <TableCell >Manage</TableCell>
                                <TableCell >Favourite</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Results.map((row, i) => (
                                <TableRow key={i}>

                                    <TableCell component="th" scope="row">
                                        <div className='player-wrapper'>
                                            <ReactPlayer className='react-player'
                                                url={row.videos}
                                                width='100%'
                                                height='100%'

                                            />
                                        </div>
                                    </TableCell>

                                    <TableCell >{row.status}</TableCell>
                                    <TableCell >
                                        <Dropdown className="div" id={i + "d"} options={models} value={defaultOption}
                                            onChange={selectedModel} />

                                        <Button onClick={visualization} className="div" variant="contained" color="primary" >
                                            Visualization
                                        </Button>
                                    </TableCell>
                                    <TableCell >{row.device}</TableCell>
                                    <TableCell onClick={shoot}><Edit></Edit></TableCell>
                                    <TableCell >

                                        <Checkbox
                                            id={i}
                                            checked={row.favourite}
                                            onChange={checkBoxHandleChange}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}



class StreamsPage extends Component {






    render() {





        return <div></div>
    }
}
