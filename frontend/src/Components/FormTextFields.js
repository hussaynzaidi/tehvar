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
import Checkbox from './CheckBox';
import axios from 'axios';


function FormTextFields() {
    const [attend, setAttend] = React.useState('');
    const [selectedRoundtables, setSelectedRoundtables] = React.useState([]);
    const [selectedTalks, setSelectedTalks] = React.useState([]);
    const [formData, setFormData] = React.useState({
        fName: '',
        lName: '',
        email: '',
        genre: '',
        phone: ''
    });

    const roundtables = [
        'The Future of AI','Sustainable Energy Solutions','Blockchain in Healthcare','Education Technology Advances',
        'Cybersecurity Trends','Innovations in Biotechnology','Space Exploration and Tourism','Quantum Computing',
        'Climate Change Mitigation','Fintech Disruptions','Smart Cities Development','Virtual Reality Applications',
        'Autonomous Vehicles','Next-gen Wireless Technologies','Human-Machine Interaction'];

    const talks = [
        'AI Ethics and Regulations', 'Renewable Energy Innovations', 'Cryptocurrency Impact','Online Learning Post-Pandemic',
        'Protecting Digital Privacy', 'Genetic Engineering','Mars Colonization', 'Quantum Internet', 
        'Global Warming Solutions','Digital Banking Revolution', 'IoT in Urban Areas', 'VR in Education',
        'Self-driving Car Technology', '5G and Beyond', 'Cyborgs and Biohacking'];

    const handleChange = (event) => {
        setAttend(event.target.value);
    };

    const handleName = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { fName, lName, email, genre, phone } = formData;
            if (!fName || !lName || !email || (attend === 20 && !genre) || (attend === 30 && !phone)) {
                alert("Please fill in all required fields.");
                return;
            }

            let rtid = [];
            for (let index = 0; index < selectedRoundtables.length; index++) {
                const element = selectedRoundtables[index];
                for (let j = 0; j < roundtables.length; j++) {
                    if (roundtables[j] == element) {
                        rtid.push(j + 50);
                    }
                }
            }

            let tid = [];
            for (let index = 0; index < selectedTalks.length; index++) {
                const talk = selectedTalks[index];
                for (let j = 0; j < talks.length; j++) {
                    if (talks[j] == talk) {
                        tid.push(j + 80);
                    }
                }
            }
            switch (attend) {
                case 10:
                    let prevAttendee = await axios.get("http://localhost:8000/getAttendee")
                    let prevAid = prevAttendee.data.aid
                    await axios.post("http://localhost:8000/registerAttendee", {
                        fName,
                        lName,
                        email,
                        tid,
                        rtid,
                        aid: prevAid + 1
                    });
                    break;
                case 20:
                    await axios.post("http://localhost:8000/registerArtist", {
                        fName,
                        genre
                    })
                    break;
                case 30:
                    let prevSpeaker = await axios.get("http://localhost:8000/getSpeaker")
                    let prevSid = prevSpeaker.data.sid
                    await axios.post("http://localhost:8000/registerSpeaker", {
                        fName,
                        lName,
                        email,
                        phone,
                        tid,
                        rtid,
                        sid: prevSid + 1
                    });
                    break;
                default:
                    break;
            }

            setFormData({
                fName: '',
                lName: '',
                email: '',
                genre: '',
                phone: ''
            });
            setSelectedRoundtables([]);
            setSelectedTalks([]);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
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
                    <div>
                        <TextField
                            required
                            className="standard-required"
                            label="First Name"
                            name="fName"
                            value={formData.fName}
                            variant='standard'
                            onChange={handleName}
                        />
                        <TextField
                            required
                            className="standard-required"
                            label="Last Name"
                            name="lName"
                            variant='standard'
                            value={formData.lName}
                            onChange={handleName}
                        />
                    </div>
                    <FormControl sx={{ m: 1, maxWidth: 200 }}>
                        <InputLabel sx={{ padding: '0 5px', backgroundColor: 'white' }} className="select">Attend as</InputLabel>
                        <Select
                            labelId="select"
                            id="select"
                            value={attend}
                            onChange={handleChange}
                            fullWidth
                            label="Attend"
                        >
                            <MenuItem value={10}>Attendee</MenuItem>
                            <MenuItem value={20}>Artist</MenuItem>
                            <MenuItem value={30}>Speaker</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                        <FilledInput
                            id="email"
                            type="email"
                            name="email"
                            value={formData.email}
                            endAdornment={<InputAdornment position="end">@email.com</InputAdornment>}
                            aria-describedby="filled-email-helper-text"
                            inputProps={{
                                'aria-label': 'email',
                            }}
                            onChange={handleName}
                        />
                        <FormHelperText id="email-helper-text">Please enter your email</FormHelperText>
                    </FormControl>
                    {attend === 30 && (
                        <TextField
                            required
                            className="standard-required"
                            label="Phone Number"
                            name="phone"
                            value={formData.phone}
                            variant='standard'
                            onChange={handleName}
                        />
                    )}
                    {attend === 20 && (
                        <TextField
                            required
                            className="standard-required"
                            label="Music Genre"
                            name="genre"
                            value={formData.genre}
                            variant='standard'
                            onChange={handleName}
                        />
                    )}
                </div>
                <Box sx={{ mt: 2, fontSize: 'medium' }}>
                    <p>
                        {attend !== 20
                            ? "Please select up to 4 Roundtables or Talks."
                            : "Just add your details and we'll be in touch with you soon!"}
                    </p>
                </Box>
                {attend !== 20 && <Checkbox
                    selectedRoundtables={selectedRoundtables}
                    setSelectedRoundtables={setSelectedRoundtables}
                    selectedTalks={selectedTalks}
                    setSelectedTalks={setSelectedTalks}
                />}
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ width: '200px', marginTop: '30px' }}
                        endIcon={<SendIcon />}
                        size="large"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default FormTextFields;
