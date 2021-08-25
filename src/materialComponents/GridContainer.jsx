import React from 'react'
import {Container,Grid,Paper,makeStyles} from '@material-ui/core'
function GridContainer() {
    let useStyles=makeStyles({
        size:{
            height:"20vh",
            backgroundColor:"red"
        }
    })
    let classes=useStyles();
    return (
        <div>
            <Container>
                <Grid container>
                    <Grid item xs={5}>
                        <Paper className={classes.size}> Hello</Paper>
                    </Grid>
                    <Grid item>
                        <Paper>Hello</Paper>
                    </Grid>
                    <Grid item>
                        <Paper>Hello</Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default GridContainer
