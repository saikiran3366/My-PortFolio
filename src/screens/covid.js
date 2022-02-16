import React,{useState,useEffect} from 'react';
import CovidModal from '../components/covidModal';


import {Table,
 TableBody ,
 TableCell ,
 TableContainer ,
 TableHead ,
 TableRow,
 Paper,
 Typography
 } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';
import { borderRadius } from '@mui/system';

 const useStyles=makeStyles((theme)=>({
    //  table:{
    //      minWidth:800,
    //  },
     tableContainer:{
         borderRadius:15,
         margin:'10px 10px',
         maxWidth:1500
     },

     tableHeaderCell:{
         fontWeight:'bold',
         fontSize:'1.2rem',
         backgroundColor:'black',
         color:theme.palette.getContrastText(theme.palette.primary.dark)
     },

     state:{
         color:'blue',
         fontWeight:'bold',
         fontSize:'1.2rem'

     },
     deaths:{
        fontWeight:'bold',
        fontSize:'1rem'
     },

     confirmed:{
         fontWeight:'bold',
         fontSize:'1rem',
         color:'white',
         backgroundColor:'grey',
         borderRadius:8,
         padding:'3px 10px',
         display:'inline-block'
     }
 }));

const Covid = () =>{
    const[data,setData] = useState([]);
    const [rowData,setRowData] = useState({})
    const classes=useStyles();

    const [showModal,setShowModal] = useState(false)
    
    const show = (row) =>{
        setShowModal(true)
        setRowData(row)
    }

    useEffect(()=>{
        fetch('https://data.covid19india.org/data.json').then(
            res => res.json()
        ).then(jsondata=> setData(jsondata.statewise))
    },[])

    return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <div>
                <h1>Covid dashboard India</h1>
            </div>
            <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableHeaderCell}>State</TableCell>
                <TableCell className={classes.tableHeaderCell}>Confirmed</TableCell>
                <TableCell className={classes.tableHeaderCell}>Recovered</TableCell>
                <TableCell className={classes.tableHeaderCell}>Deaths</TableCell>
                <TableCell className={classes.tableHeaderCell}>Active</TableCell>
                <TableCell className={classes.tableHeaderCell}>Last Updated</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.name} style={{cursor:'pointer'}} onClick={()=>{show(row)}}>
                  <TableCell className={classes.state}>{row.state}</TableCell>
                  <TableCell>
                      <Typography className={classes.confirmed}>{row.confirmed}</Typography>
                    </TableCell>
                  <TableCell >
                        <Typography className={classes.confirmed} style={{backgroundColor:'green'}}>{row.recovered}</Typography>
                  </TableCell>
                  <TableCell className={classes.deaths}>{row.deaths}</TableCell>
                  <TableCell >
                      <Typography className={classes.confirmed}style={{backgroundColor:'red'}}>{row.active}</Typography>
                  </TableCell>
                  <TableCell >{row.lastupdatedtime}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {showModal && <CovidModal showModal={showModal} rowData={rowData} closeModal={()=>setShowModal(false)}/>}
        </div>
      );
}

export default Covid;