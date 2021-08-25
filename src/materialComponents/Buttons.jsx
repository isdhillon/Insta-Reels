import React from 'react'
import Button from '@material-ui/core/Button';
import {IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
function Buttons() {
    return (
        <div>
            <Button variant="contained" style={{marginRight:"8px"}}>Hello</Button>
            <Button variant="contained" onClick={()=>{alert("hello")}}>Hello</Button>
            <Button color="primary" startIcon={<DeleteIcon></DeleteIcon>} endIcon={<DeleteIcon></DeleteIcon>} size="large">hello</Button> 
            <IconButton>
            <DeleteIcon onClick={()=>{
                alert("Delete")
            }}></DeleteIcon>
            </IconButton>
        </div>
    )
}

export default Buttons
