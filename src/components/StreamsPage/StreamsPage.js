import React, { Component } from 'react';
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




const useStyles = makeStyles({
    root: {
        flexGrow: 1,
      },
    table: {
        minWidth: 650,
      },
  });
  
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 'Online', 2, 24, 4.0),
  createData('Ice cream sandwich', 'Online', 2, 37, 4.3),
  createData('Eclair', 'Online', 2, 24, 6.0),
  createData('Cupcake', 'Online', 2, 67, 4.3),
  createData('Gingerbread', 'Online', 2, 49, 3.9),
  createData('Cupcake', 'Online', 2, 67, 4.3),
  createData('Gingerbread', 'Online', 2, 49, 3.9),
];




  export default function CenteredTabs() {
 
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      
    };
  
    return (
        <div id="parent">
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
          <Tab label="Filters" />
          <Tab label="Help" />
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
            <TableCell >Manage</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
              <img height={50} width={65} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAABhYWEwMDB1dXVycnKUlJTCwsLW1tbLy8tlZWXc3NwkJCRDQ0OMjIy3t7ddXV1SUlKEhIRra2vx8fF9fX2cnJwrKyuoqKjp6enh4eEQEBA5OTnS0tIeHh6tra0+Pj5NTU0XFxf29va3BJcTAAAEGElEQVR4nO2dbXeiMBBGiVVrrYiK+FKta7f//z/untOaoAYYTydkJn3uRyAMt7AjIZNNlgEAAAAAAAAAAAAAAAAAAIhlshvlxyeF5OVu0q23nxvdzPetfusq9gUyUK2bBYtD7Ktj4VA0CaZwA7+o/ILT2NfFyNQnOIx9VawM7wV3sa+Jmd2t4GvsK2Ln9cbwXN95WqzGHWyOl4PzTdexlyYuk1XkNvmlybGzyXwwq0ucrwWfa7u2xWdTtvXlJc8T34B7Tm7/vs3Y7ODNHTd8Ftuax/PVvtztKGmhB48bTmwMwsvVN6NLkwHt+NKJ5P7YZkUMLdQwWxlvFPcyuqSGlmqYLW2UuXfrG/VEYg3ffHdrbTcuyKHFGmYLG8a9gu/ttsZ31jvkGhY2jOtIvT/+kAo2dI/pu93mfg3JpxFsmNkw7hcRhj5g6AGGPmDoA4ZEYOhBmaHtATd8ufMQvAf8TavhgMrUfjHYTqltXA9mSQ5jO+0zchj7dHkN0wKG+oGhfmCon99pOEyBVkP6q5FgYKgfGOoHhvqBoX5gqB8Y6geG+oGhfmDIzGS82rRPEGCnX8OvQrq7gt2g9Gq4+T5vTh9P+zm9GtoTPzDMyBe0B0NXTmbM6bn7eB76NHwxdcqW6TqcxDPsK+PENDTnPjJOVENj5pSJAD8jsqHZBs84sQ2NmQbOOPENjfnDHOcaCYbmI2TGEWF4PRmCGSGG5u8LczCLFENjRoEyjhxDcwiTcQQZ/u9VhegcizI0ZswcMhNnaJ7YM440Q2OGzK+q8gwfmVBGQaKhWdKnlHUj0pA14wg1NCe2R1WqId9tlGv4wPzOVgQbMt1EwYbU/wugA8GG6d/D5P8dcn0vlmrI1+cXasj4pVikIev4okRD3hEbeYbco27SDPnHMYQZBhiLEmV45uz5XpBkGGZMWI5hGaiSSIrhIdhIqRDD1Meekh8/TH0MeJD4OH7ytRip19P0UoUZ0zBshrkQzzDF2sR6feksyfrSWo0w09feh4L2Wef9EaKX1ESvhunX6mfZa+rzLWIAQ/3AUD8w1A8M9QND/cBQPzDUDwz188sNRynQapgWMNQPDPUDQ/38TkPyGhJq17egvxppXaOEfpr015mBoQcY+oChDxgSgaEHGPpgMkx/Ldn01wNOf03n9NflTnRt9frUcBebXCUp1XBl/FFyt72knUmoYelE8qsd9e8Ys4JSrWx7wHTD4D3gdTGredzUJB9ru8xpsRp3sLEN8k3XsRcqG6CiNtnYh+vYGWa1ONUlzo1/31S4e052sa+IGU9Z8rC7lSK82WHa3U4NDXmp6m6phMYvnMUh9qWxcGjpP6xTuI1V+8/5ft59CtHMCVMfJrsyf9JIXu7or4MAAAAAAAAAAAAAAAAAAAC98w+9jGR2gcBLOwAAAABJRU5ErkJggg=="/>
              </TableCell>
              <TableCell >{row.calories}</TableCell>
              <TableCell >{row.fat}</TableCell>
              <TableCell >{row.carbs}</TableCell>
              
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
