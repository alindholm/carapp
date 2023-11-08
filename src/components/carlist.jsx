import { useEffect, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import { Button } from "@mui/material";
import {Snackbar} from "@mui/material";

export default function Carlist() {
     //states
  const [cars, setCars]=useState([]);
  const[msg, setMsg]=useState('');
  const [open, setOpen]=useState(false);


  const rest_url='https://carrestapi.herokuapp.com/cars/';
  useEffect(()=>getCars(), [])

  //columns for ag grid

  const columns= [
    {field: 'brand'},
    {field: 'model'},
    {field: 'color'},
    {field: 'fuel'},
    {field: 'year'},
    {field: 'price'},
    {cellRenderer: params=>
        <Button size="small" color="error" onClick={() => deleteCar(params)}>
            Delete
        </Button>,
        width:120
    }
  ]

  const getCars=()=>{
    fetch(rest_url)
    .then(Response=>Response.json())
    .then(responseData=> {
        console.dir("responseData"+ responseData._embedded.cars)
        setCars(responseData._embedded.cars)
    })
    .catch(error => console.error(error));
  }
    const deleteCar= (params) => {
        fetch(params.data._links.car.href, {method:'DELETE'})
        .then(response=>
            {if (response.ok){
                setMsg('car is deleted succesfully');
                setOpen(true);
                getCars();
            } else {
                alert('Something went wrong');
            }
            })
            .catch(error => console.error(error));
    }
    return(
        <div className="ag-theme-material"
        style={{height: '700px', width: '70%', margin: 'auto'}}>
            <AgGridReact 
            rowData={cars}
            columnDefs={columns}
            pagination={true}
            paginationPageSize={10}>
                
            </AgGridReact>
            <Snackbar
            open={open}
            autoHideDuration={3000}
            message={msg}
            onClose={()=> setOpen(false)} />
        </div>
    )
}