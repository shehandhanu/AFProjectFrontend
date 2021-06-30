import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import CookieService from '../../API/Cookie'
import { ToastContainer, toast } from 'react-toastify';

import { registerUser } from '../../actions/userActions';

import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    title: {
        marginTop: theme.spacing(4),
    },
    input: {
        display: 'none',
    },
}));

const Checkout = ({ location, history }) => {
    const inputRef = useRef()
    const [selectedImg, setselectedImg] = useState()
    const [uploadedImg, setuploadedImg] = useState()

    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [fullName, setfullName] = useState("")
    const [birthday, setbirthday] = useState("")
    const [gender, setgender] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [userType, setuserType] = useState("")
    const [contactNumber, setcontactNumber] = useState("")
    const [address1, setaddress1] = useState("")
    const [address2, setaddress2] = useState("")
    const [city, setcity] = useState("")
    const [state, setstate] = useState("")
    const [zip, setzip] = useState("")
    const [country, setcountry] = useState("")
    const [qulificaton, setqulificaton] = useState("")
    const [certifiedDate, setcertifiedDate] = useState("")
    const [institute, setinstitute] = useState("")

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth);

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {

        const token = CookieService.get()
        if (token) {
            history.push(redirect)
        }
    }, [history, auth, redirect]);

    const data = {
        "firstName": firstName,
        "lastName": lastName,
        "fullName": fullName,
        "birthday": birthday,
        "email": email,
        "password": password,
        "url": uploadedImg,
        "role": userType,
        "contactNumber": contactNumber,
        "gender": gender,
        "street1": address1,
        "street2": address2,
        "city": city,
        "zipCode": zip,
        "country": country,
        "highestEducation": qulificaton,
        "certifiedDate": certifiedDate,
        "institued": institute
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        dispatch(registerUser(data))
    }

    const uploadImage = async () => {
        const formData = new FormData()
        formData.append("file", selectedImg);
        formData.append("upload_preset", "afproject");

        const response = await axios.post("https://api.cloudinary.com/v1_1/dxz8wbaqv/image/upload", formData)

        setuploadedImg(response.data.url)
        console.log(uploadedImg);
        toast.info('Photo Uploaded');
    }

    const classes = useStyles();

    return (
        <React.Fragment>
            <ToastContainer />
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" className={classes.title} variant="h4" align="center">
                        Sign Up
                    </Typography>
                    <React.Fragment>
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <React.Fragment>
                                <Typography variant="h6" gutterBottom>
                                    Personal Data
                                </Typography>
                                <Grid container spacing={3} >
                                    <Grid item xs={6} >
                                        <Grid item xs={12} >
                                            <TextField
                                                required
                                                id="firstName"
                                                name="firstName"
                                                label="First name"
                                                fullWidth
                                                value={firstName}
                                                onChange={(e) => setfirstName(e.target.value)} />
                                        </Grid>
                                        <Grid item xs={12} style={{ marginTop: 30 }}>
                                            <TextField
                                                required
                                                id="lastName"
                                                name="lastName"
                                                label="Last name"
                                                fullWidth
                                                value={lastName}
                                                onChange={(e) => setlastName(e.target.value)} />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} xs={6}>
                                        <div className="row">
                                            <div className="col-6">
                                                <Grid item xs={6} xm={3}>
                                                    <input
                                                        required
                                                        accept="image/*"
                                                        className={classes.input}
                                                        id="contained-button-file"
                                                        type="file"
                                                        onChange={() => setselectedImg(inputRef.current.files[0])}
                                                        ref={inputRef}
                                                    />
                                                    <label htmlFor="contained-button-file">
                                                        <Button
                                                            style={{ width: 175 }}
                                                            variant="contained"
                                                            color="primary"
                                                            align="center"
                                                            component="span"
                                                            className={classes.button}>
                                                            Select Profile Picture
                                                        </Button>
                                                    </label>
                                                </Grid>
                                            </div>
                                            <div className="col-6">
                                                <Grid item xs={6} xm={3} >
                                                    {!uploadedImg ?
                                                        <div>
                                                            {!selectedImg ?
                                                                <img src="https://res.cloudinary.com/dxz8wbaqv/image/upload/v1624826768/afproject/user_ntvbpp.png" style={{ width: 150, height: 150 }} />
                                                                :
                                                                <img src={URL.createObjectURL(selectedImg)} style={{ width: 150, height: 150 }} />
                                                            }
                                                        </div>
                                                        :
                                                        <img src={uploadedImg} style={{ width: 150, height: 150 }} />
                                                    }

                                                </Grid>
                                            </div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="fullName"
                                            name="FullName"
                                            label="Full Name"
                                            fullWidth
                                            value={fullName}
                                            onChange={(e) => setfullName(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="birthday"
                                            name="firstName"
                                            label="Birthday"
                                            fullWidth
                                            value={birthday}
                                            onChange={(e) => setbirthday(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="lastName"
                                            name="lastName"
                                            label="Gender"
                                            fullWidth
                                            value={gender}
                                            onChange={(e) => setgender(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address1"
                                            name="address1"
                                            label="Email"
                                            fullWidth
                                            value={email}
                                            onChange={(e) => setemail(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address2"
                                            name="address2"
                                            label="Password"
                                            fullWidth
                                            value={password}
                                            onChange={(e) => setpassword(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="city"
                                            name="city"
                                            label="User Type"
                                            fullWidth
                                            value={userType}
                                            onChange={(e) => setuserType(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="city"
                                            name="city"
                                            label="Contact Number"
                                            fullWidth
                                            value={contactNumber}
                                            onChange={(e) => setcontactNumber(e.target.value)} />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address11"
                                            name="address2"
                                            label="Address 1"
                                            fullWidth
                                            value={address1}
                                            onChange={(e) => setaddress1(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="address22"
                                            name="address2"
                                            label="Address 2"
                                            fullWidth
                                            value={address2}
                                            onChange={(e) => setaddress2(e.target.value)} />
                                    </Grid>

                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="city"
                                            name="city"
                                            label="City"
                                            fullWidth
                                            value={city}
                                            onChange={(e) => setcity(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            id="state"
                                            name="state"
                                            label="State/Province/Region"
                                            fullWidth
                                            value={state}
                                            onChange={(e) => setstate(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="zip"
                                            name="zip"
                                            label="Zip / Postal code"
                                            fullWidth
                                            value={zip}
                                            onChange={(e) => setzip(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            required
                                            id="country"
                                            name="country"
                                            label="Country"
                                            fullWidth
                                            value={country}
                                            onChange={(e) => setcountry(e.target.value)} />
                                    </Grid>
                                </Grid>
                                <Typography variant="h6" className={classes.title} gutterBottom>
                                    Education Details
                                </Typography>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            id="cardName"
                                            label="Highest Education Qualification"
                                            fullWidth
                                            value={qulificaton}
                                            onChange={(e) => setqulificaton(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id="certifiedDate"
                                            label="Certified Date"
                                            fullWidth
                                            value={certifiedDate}
                                            onChange={(e) => setcertifiedDate(e.target.value)} />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            required
                                            id="institute"
                                            label="Institute"
                                            fullWidth
                                            value={institute}
                                            onChange={(e) => setinstitute(e.target.value)} />
                                    </Grid>
                                </Grid>
                                <div className={classes.buttons}>
                                    <Button className={classes.button}>
                                        Back
                                    </Button>
                                    {uploadedImg ?
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            value="Submit"
                                            className={classes.button}
                                        >
                                            Submit Details
                                        </Button>
                                        :
                                        <div>
                                            {selectedImg ?
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={uploadImage}
                                                    className={classes.button}
                                                >
                                                    Upload Photo
                                                </Button>
                                                :
                                                <Button
                                                    disabled
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={uploadImage}
                                                    className={classes.button}
                                                >
                                                    Please Select Profile Picture
                                                </Button>
                                            }
                                        </div>
                                    }
                                </div>
                            </React.Fragment>

                        </form>
                    </React.Fragment>
                </Paper>
            </main>
        </React.Fragment>
    )
}

export default Checkout
