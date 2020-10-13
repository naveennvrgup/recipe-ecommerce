import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

import {changeMsg} from '../RootReducer'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    loaderRoot: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: "100px",
    },
    recipieCardRoot: {
        maxWidth: 300,
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
    },
    recipieMedia: {
        height: 200,
    },
    recipieRoot: {
        paddingTop: theme.spacing(2),
        display: 'flex',
    },
    root: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(5),
    },
    recipieCardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    recipieTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
    },
    recipieDescription: {
        flexGrow: 1,
    }
}));


export const Recipe = ({recipie,msg,changeMsg}) => {
    const classes = useStyles();

    return <div>
        {msg}
        <button onClick={changeMsg}>clickme</button>
    </div>
    // return (
    //     <Grid className={classes.recipieRoot} item xs={4}>
    //         <Card className={classes.recipieCardRoot}>
    //             <CardMedia
    //                 className={classes.recipieMedia}
    //                 image={recipie.image}
    //                 title={recipie.name}
    //             />
    //             <CardContent className={classes.recipieDescription}>
    //                 <div className={classes.recipieTop}>
    //                     <Typography color="textSecondary" gutterBottom>
    //                         {recipie.category}
    //                     </Typography>
    //                     <Typography className={classes.title} color="textSecondary" gutterBottom>
    //                         ${recipie.price}
    //                     </Typography>
    //                 </div>
    //                 <Typography gutterBottom variant="h5" component="h2">
    //                     {recipie.name}
    //                 </Typography>
    //                 <Typography variant="body2" component="p">
    //                     {recipie.description}
    //                 </Typography>
    //             </CardContent>
    //             <CardActions className={classes.recipieTop}>
    //                 <div>
    //                     {recipie.label.length > 0 ?
    //                         <Chip label={recipie.label} size='small' /> :
    //                         null}
    //                 </div>
    //                 <Button size="small" color="primary">
    //                     add to cart
    //                 </Button>
    //             </CardActions>
    //         </Card>
    //     </Grid>
    // )
}

const mapStateToProps = (state) => state

const mapDispatchToProps = dispatch => bindActionCreators({
    changeMsg
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
