import React from 'react'
import { useHistory } from 'react-router'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const useStyles = makeStyles((theme) => ({
    bgDrop: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#F5F5F5',
        height: '100vh',
    },
    wrapper: {
        height: '80vh',
        flexGrow: 1,
        background: 'white',
        display: 'flex',
        alignItems: 'stretch',
    },
    left: {
        background: '#F7F6C2',
        padding: theme.spacing(6),
        width: '30%'
    },
    right: {
        padding: theme.spacing(6),
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    backBtn: {
        fontWeight: 'bold',
        marginLeft: theme.spacing(2),
    },
    brand: {
        marginTop: theme.spacing(8),
    },
    info: {
        marginTop: theme.spacing(8),
    },
    boldText: {
        fontWeight: 'bold'
    },
    mTop: {
        marginTop: theme.spacing(2),
    },
    cardLogo: {
        height: '25px',
        paddingRight: theme.spacing(3),
    },
    cardLogos: {
        marginBottom: theme.spacing(4),
    },
    pRight: {
        paddingRight: theme.spacing(3),
    },
    flexing: {
        display: 'flex',
    },
    buttonWrapper: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: theme.spacing(6),
    }
}))

export default function GatewayScreen({ location: { state } }) {
    const classes = useStyles();
    const history = useHistory()

    return (
        <div className={classes.bgDrop}>
            <Container maxWidth="md">
                <Paper elevation={3} className={classes.wrapper}>
                    <div className={classes.left}>
                        <Button onClick={history.goBack}>
                            <ArrowBackIcon />
                            <div className={classes.backBtn}>Back</div>
                        </Button>
                        <Typography className={classes.brand} variant='h4'>Powered by Freecharge</Typography>
                        <Typography className={classes.info} variant='body1'>Payment of ${state.price} to <span className={classes.boldText}>RecipieZilla</span></Typography>

                    </div>
                    <div className={classes.right}>
                        <div>
                            <div className={classes.cardLogos}>
                                <img className={classes.cardLogo} src={require('../assets/visa.png')} />
                                <img className={classes.cardLogo} src={require('../assets/mastercard.png')} />
                                <img className={classes.cardLogo} src={require('../assets/american.png')} />
                                <img className={classes.cardLogo} src={require('../assets/rupay.jpg')} />
                            </div>
                            <TextField
                                variant='outlined'
                                fullWidth
                                label="Credit/Debit Card Number"
                                labelWidth={60}
                            />
                            <div className={classes.flexing}>
                                <TextField
                                    className={[classes.mTop, classes.pRight]}
                                    variant='outlined'
                                    label="Expirty (MM/YY)"
                                    labelWidth={60}
                                />
                                <TextField
                                    className={classes.mTop}
                                    variant='outlined'
                                    label="CVV"
                                    labelWidth={60}
                                />
                            </div>
                            <TextField
                                className={classes.mTop}
                                variant='outlined'
                                fullWidth
                                label="Name on card"
                                labelWidth={60}
                            />
                            <div className={[classes.buttonWrapper]}>
                                <Button variant="contained" color='primary'>Proceed</Button>
                            </div>
                        </div>
                    </div>
                </Paper>
            </Container>
        </div>
    )
}
