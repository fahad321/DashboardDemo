import React, { Component, useState, useEffect } from 'react';
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
import TextField from '@material-ui/core/TextField';
import { blue } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl'
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from '@material-ui/icons/Settings';
import { createMuiTheme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Brightness1Icon from '@material-ui/icons/Brightness1';

const ENTER_KEY = 13;

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        spacing: [0, 4, 8, 16, 32, 64],
    },
});

const useStyles = makeStyles({
    root: {
        flexGrow: 5,
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
    table: {
        minWidth: 650,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 1,
    },
    height: {
        height: '70vh',

        padding: 20,
    },
});

function createData(videos, status, model, manage, device, favourite) {
    return { videos, status, model, manage, device, favourite };
}
const rows = [
    createData("https://www.youtube.com/watch?v=ug50zmP9I7s", 'Online', 2, 24, 'Cam1', true),
    createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Offline', 2, 37, 'Am2', true),
    createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Online', 2, 24, 'Zam3', false),
    createData("https://www.youtube.com/watch?v=ug50zmP9I7s", 'Offline', 2, 67, 'Dam4', false),
    createData("https://www.youtube.com/watch?v=Bey4XXJAqS8", 'Online', 2, 49, 'Lam5', false),
];

const colums = ['device', 'manage'];
const options = [
    { value: 0, label: 'select' },
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
    { value: 4, label: 'four' },
];
const defaultOption = options[0];


/*
function sortRows(){
    const tempResult = [...rows];
    let sortDirection = "DESC";
    if (sortDirection === "ASC") {
        alert(321)
    } else if (sortDirection === "DESC") {
        alert("ok");
        let i = 0;
        let j, min, temp;
        for (i; i < tempResult.length - 1; i++) {
            min = i;
            for (j = i + 1; j < tempResult.length; j++) {
                if (tempResult[j].favourite > tempResult[min].favourite) {
                    min = j;
                    alert("no");
                    temp = tempResult[i].favourite;
                    tempResult[i].favourite = tempResult[min].favourite;
                    tempResult[min].favourite = temp;
                }

            }
        }
    }

   // setResults(tempResult);
}
*/



/*
const sortRows = () => {
    const tempResult = [...Results];
    let sortDirection = "DESC";
    if (sortDirection === "ASC") {
        alert(321)
    } else if (sortDirection === "DESC") {
        alert("ok");
        let i = 0;
        let j, min, temp;
        for (i; i < tempResult.length - 1; i++) {
            min = i;
            for (j = i + 1; j < tempResult.length; j++) {
                if (tempResult[j].favourite > tempResult[min].favourite) {
                    min = j;
                    alert("no")
                    temp = tempResult[i].favourite;
                    tempResult[i].favourite = tempResult[min].favourite;
                    tempResult[min].favourite = temp;
                }

            }
        }
    }

    setResults(tempResult);
};

*/
var visModel = 0;





export default function StreamPage(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [Results, setResults] = React.useState(rows);
    const [models, setModels] = React.useState(options);
    const [searchInput, setSearch] = React.useState("");
    const [values, setValues] = React.useState(props.value);
    const [sortDirection, setSortDirection] = React.useState("DESC");
    


    const defaultColumnProperties = {
        sortable: true,
    };

    const handleChanges = (event) => {
        setValues(event.target.value);
    };

    const handleClickChanges = () => {
        let searchConditions = [
            {
                key: 'device',
                value: values,
                type: SearchType.LK,
            },
        ];
        var result = filterData(rows, searchConditions);
        setResults(result);
    };

    const handleKeyDown = (e) => {
        if (e.keyCode === ENTER_KEY) {
            let searchConditions = [
                {
                    key: 'device',
                    value: values,
                    type: SearchType.LK,
                },
            ];
            var result = filterData(rows, searchConditions);
            setResults(result);
        }
    };

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

    const checkBoxHandleChange = (id, event) => {

        let rowId = id;
        const tempResult = [...Results];
        tempResult[rowId].favourite = !tempResult[rowId].favourite;
        setResults(tempResult);

    };


    const visualization = () => {

        if (visModel == 0) {
            alert("Please select a model")
            return false;
        }
        else {
            window.location.href = 'analytics';
        }
    };

    const [sortType, setSortType] = React.useState('device');
    useEffect(() => {
        const sortArray = () => {
          const types = {
            device: 'device',
          };
          let type ='device';
          const sortProperty = types[type];
          const sorted = [...rows].sort((a, b) => b[sortProperty] - a[sortProperty]);
          alert(123);
          console.log(sorted);
          setResults(sorted);
        };
    
        sortArray(sortType);
      }, [sortType]);

    const sortRows = () => {
        /*
                const tempResults = [...Results];
                if (sortDirection === "ASC") {
                    alert(123);
                    //return a.devices > b.devices ? 1 : -1;
                } else\
          */

        if (sortDirection === "DESC") {
            alert("iko")
            var type = "device";
            const types = {
                device: 'device',
            };
            const sortProperty = types[type];
            const sortResults = [...Results].sort((a, b) => b[sortProperty] - a[sortProperty]);

            //const SortResults= tempResults.sort((a,b) => b[] > a[]);
            console.log(sortResults);
            setResults(sortResults);
        }

        /*
        if (sortDirection === "DESC") {
            setSortDirection("ASC");

        }
        else {
            setSortDirection("DESC");
        }
        */
    };






    return (

        <div id="1">
            <Paper >
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

                    <FormControl
                        disabled='disabled'
                        variant="outlined"
                        className={classes.formControl}
                    >

                        <TextField id="standard-basic"
                            float='right'
                            placeholder={('Search')}
                            value={values}
                            onChange={handleChanges}
                            onKeyDown={handleKeyDown}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment onClick={handleClickChanges}>
                                        <IconButton >
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </FormControl>
                </Tabs>
            </Paper>

            <br />

            <Paper component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow className={classes.paper}>

                            <TableCell>Video</TableCell>
                            <TableCell >Status</TableCell>
                            <TableCell >Model</TableCell>
                            <TableCell >

                                <span>Device</span>

                                <div onClick={setSortType} className="div">
                                    <div class="info">
                                        {sortDirection === "ASC" ? (
                                            <KeyboardArrowUpIcon fontSize='small' />
                                        ) : (
                                                <KeyboardArrowDownIcon fontSize='small' />
                                            )

                                        }
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell >Manage</TableCell>
                            <TableCell >Favourite</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Results.map((row, i) => (
                            <TableRow key={i}>
                                <TableCell width='150px' component="th" scope="row">
                                    <div className='player-wrapper'>
                                        <ReactPlayer className='react-player'
                                            url={row.videos}
                                            width='100%'
                                            height='100%'

                                        />
                                    </div>
                                </TableCell>

                                <TableCell width='90px'>

                                    {row.status === "Online" ? (
                                        <Brightness1Icon fontSize='small' style={{ fill: "yellow" }} />
                                    ) : (
                                            <Brightness1Icon fontSize='small' style={{ fill: "red" }} />
                                        )
                                    }
                                </TableCell>





                                <TableCell width='200px'>
                                    <Dropdown className="div" id={i + "d"} options={models} value={defaultOption}
                                        onChange={selectedModel} />

                                    <Button onClick={visualization} className="div" variant="contained" color="primary">
                                        Visualization
                                    </Button>

                                </TableCell>
                                <TableCell width='50px' >{row.device}</TableCell>

                                <TableCell width='40px'  >
                                    <Link to="/devices">
                                        <SettingsIcon></SettingsIcon>
                                    </Link>
                                </TableCell>
                                <TableCell width='15px' >
                                    <div id={i} onClick={(e) => checkBoxHandleChange(i, e)} >
                                        {row.favourite === true ? (
                                            <StarIcon fontSize='small' style={{ fill: "yellow" }} />
                                        ) : (
                                                <StarBorderIcon fontSize='small' />
                                            )
                                        }
                                    </div>


                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </Paper>
        </div>
    );
}


class StreamsPage extends Component {





    render() {




        return <div></div>
    }
}


