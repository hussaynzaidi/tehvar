import React from 'react';
import { Chip, Box, Typography } from '@mui/material';


const roundtables = [
    'The Future of AI', 'Sustainable Energy Solutions', 'Blockchain in Healthcare',
    'Education Technology Advances', 'Cybersecurity Trends', 'Innovations in Biotechnology',
    'Space Exploration and Tourism', 'Quantum Computing', 'Climate Change Mitigation',
    'Fintech Disruptions', 'Smart Cities Development', 'Virtual Reality Applications',
    'Autonomous Vehicles', 'Next-gen Wireless Technologies', 'Human-Machine Interaction'
];

const talks = [
    'AI Ethics and Regulations', 'Renewable Energy Innovations', 'Cryptocurrency Impact',
    'Online Learning Post-Pandemic', 'Protecting Digital Privacy', 'Genetic Engineering',
    'Mars Colonization', 'Quantum Internet', 'Global Warming Solutions',
    'Digital Banking Revolution', 'IoT in Urban Areas', 'VR in Education',
    'Self-driving Car Technology', '5G and Beyond', 'Cyborgs and Biohacking'
];

export default function RoundtableTalkSelector({ selectedRoundtables, setSelectedRoundtables, selectedTalks, setSelectedTalks }) {
    const handleSelectChip = (chip, setSelectedChips, selectedChips) => {
        if (selectedChips.length < 4 || selectedChips.includes(chip)) {
            setSelectedChips((prev) =>
                prev.includes(chip) ? prev.filter((c) => c !== chip) : [...prev, chip]
            );
        } else if (selectedChips.length === 4 && !selectedChips.includes(chip)) {
            setSelectedChips((prev) => [...prev.slice(1), chip]);
        }
    };

    const handleDeleteChip = (chipToDelete, setSelectedChips) => () => {
        setSelectedChips((chips) => chips.filter((chip) => chip !== chipToDelete));
    };

    return (
        <Box sx={{ display: 'flex', gap: 4 }}>
            <Box className="checkBox" sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
                <Typography variant="h6">Your selected roundtables</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, border: '1px solid rgb(193, 190, 190)', borderRadius: '7px', padding: 2 }}>
                    {selectedRoundtables.map((chip, index) => (
                        <Chip
                            key={index}
                            label={chip}
                            onDelete={handleDeleteChip(chip, setSelectedRoundtables)}
                            color="primary"
                        />
                    ))}
                </Box>
                <Typography variant="h6">Roundtables Happening</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, border: '1px solid rgb(193, 190, 190)', borderRadius: '7px', padding: 2 }}>
                    {roundtables.map((roundtable, index) => (
                        <Chip
                            key={index}
                            label={roundtable}
                            onClick={() => handleSelectChip(roundtable, setSelectedRoundtables, selectedRoundtables)}
                            color={selectedRoundtables.includes(roundtable) ? "primary" : "default"}
                            variant={selectedRoundtables.includes(roundtable) ? "filled" : "outlined"}
                        />
                    ))}
                </Box>
            </Box>
            <Box className="checkBox" sx={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
                <Typography variant="h6">Your selected talks</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, border: '1px solid rgb(193, 190, 190)', borderRadius: '7px', padding: 2 }}>
                    {selectedTalks.map((chip, index) => (
                        <Chip
                            key={index}
                            label={chip}
                            onDelete={handleDeleteChip(chip, setSelectedTalks)}
                            color="success"
                        />
                    ))}
                </Box>
                <Typography variant="h6">Talks Happening</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, border: '1px solid rgb(193, 190, 190)', borderRadius: '7px', padding: 2 }}>
                    {talks.map((talk, index) => (
                        <Chip
                            key={index}
                            label={talk}
                            onClick={() => handleSelectChip(talk, setSelectedTalks, selectedTalks)}
                            color={selectedTalks.includes(talk) ? "success" : "default"}
                            variant={selectedTalks.includes(talk) ? "filled" : "outlined"}
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
