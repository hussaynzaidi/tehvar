import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import CheckBox from "./CheckBox";
import stylesheet from '../index.css';

function FormPropsTextFields() {
    const [attend, setAttend] = React.useState('');

    const handleChange = (event) => {
        setAttend(event.target.value);
    };
    const [firstName, setFirstName] = React.useState("");

    const handleFocus = (event) => {

    };

    const handleName = (event) => {
        setFirstName(event.target.value);
    };



    return (
        <>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                display: 'flex', flexDirection: 'column',
                justifyContent: 'center'
            }}
            noValidate
            autoComplete="off"

        >
            <div id="Details"> Personal Details
                
            <div >
                <TextField
                    required
                    id="standard-required"
                    label="First Name"
                    value={firstName}
                    variant='standard'
                    onFocus={handleFocus}
                    onChange={handleName}
                />
                <TextField
                    required
                    id="standard-required"
                    label="Last Name"
                    variant='standard'
                    value={firstName}
                    onFocus={handleFocus}
                    onChange={handleName}
                />
            </div>

            <FormControl sx={{ m: 1, maxWidth: 200 }}>
                <InputLabel sx={{ padding: '0 5px', backgroundColor: 'white' }} id="demo-simple-select-autowidth-label" >Attend as</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={attend}
                    onChange={handleChange}
                    fullWidth
                    label="Attend"
                >
                    <MenuItem value={10}>Attendee</MenuItem>
                    <MenuItem value={21}>Artist</MenuItem>
                    <MenuItem value={22}>Speaker</MenuItem>
                </Select>
            </FormControl>

            <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                <FilledInput
                    id="filled-adornment-email"
                    type="email"
                    endAdornment={<InputAdornment position="end">@email.com</InputAdornment>}
                    aria-describedby="filled-email-helper-text"
                    inputProps={{
                        'aria-label': 'email',
                    }}
                />
                <FormHelperText id="filled-email-helper-text">Please enter your email</FormHelperText>
            </FormControl>
            </div>

            <CheckBox/>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ width: '200px', marginTop: '30px' }}
                    endIcon={<SendIcon />}
                    size="large"
                    onClick={() => {
                        alert('clicked');
                    }}
                >
                    Submit
                </Button>
            </Box>
        </Box>
        </>
    );
}

export default FormPropsTextFields;