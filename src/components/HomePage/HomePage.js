import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import ReactDOM from 'react-dom';
import Table from 'react-table';


 export default class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
       students: [
          { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
          { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
          { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
          { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
       ]
    }
 }  

 renderTableHeader() {
  let header = Object.keys(this.state.students[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

renderTableData() {
  return this.state.students.map((student, index) => {
     const { id, name, age, email } = student //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{name}</td>
           <td>{age}</td>
           <td>{email}</td>
        </tr>
     )
  })
}

  render() {

    

        return (
            <div>
                <Typography paragraph>
                
                </Typography>
                <div>
           <table  id='students'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
           <ReactPlayer
        url="https://www.youtube.com/watch?v=ug50zmP9I7s"
      />
    </div>
    
          
        
                </div>             
        )
    }
    
  }

