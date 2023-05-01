import React, {useState} from 'react'
// import { useLocation, useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { css } from '@emotion/react';


const FormStyles = css `
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
max-width: 500px;
`;
const labelStyles = css`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const selectStyles = css`
  width: 200px;
  margin-bottom: 20px;
`;
const buttonStyles = css`
  background-color: #ffb347;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #cfb930;
  }
`;

const backButtonStyles = css`
  background-color: #6c757d;
  color: white;
  font-weight: bold;
  margin-right: 10px;
  &:hover {
    background-color: #495057;
  }
`;
function Filter({ navigate }) {
    const [petTypes, setPetTypes] = useState([]);
    const [distances, setDistances] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const queryParams = new URLSearchParams({
            petTypes: petTypes.join(','),
            distances: distances.join(',')
        });
       navigate('/', { search: queryParams.toString() })
            
        };
    

  const handleBackButtonClick = () => {
    navigate('/');
  };
    return (
        <Box sx={{ backgroundColor: '#F2F3F4', padding: '30px 20px' }}>
            <form css={FormStyles} onSubmit={handleSubmit}>
                <h2>Filter Pets</h2>
                <label css={labelStyles}>
                    Pet Type:
                    <Select css={selectStyles} multiple displayEmpty value={petTypes} onChange={(event) => setPetTypes(event.target.value)}>
                        <MenuItem value="">All</MenuItem>
                        <MenuItem value="dog">Dog</MenuItem>
                        <MenuItem value="cat">Cat</MenuItem>
                        <MenuItem value="snake">Snake</MenuItem>
                        <MenuItem value="reptile">Reptile</MenuItem>
                        <MenuItem value="spider">Spider</MenuItem>
                        <MenuItem value="fish">Fish</MenuItem>
                        <MenuItem value="bird">Bird</MenuItem>
                        <MenuItem value="others">Others</MenuItem>
                    </Select>
                </label>
                
                <label css={labelStyles}>
                Maximum Distance:
                    <Select css={selectStyles} multiple value={distances} onChange={(event) => setDistances(event.target.value)}>
                        <MenuItem value="">Any Distance</MenuItem>
                        <MenuItem value="3"> 3 miles </MenuItem>
                        <MenuItem value="5">5 miles</MenuItem>
                        <MenuItem value="10">10 miles</MenuItem>
                        <MenuItem value="25">25 miles</MenuItem>
                        <MenuItem value="50">50 miles</MenuItem>
                        <MenuItem value="100">100 miles</MenuItem>

                    </Select>
                </label>
                <Box sx={{ display: 'flex', alignItems: 'center' }} >
                <Button css={[buttonStyles, backButtonStyles]} variant="contained" onClick={handleBackButtonClick}>Take me back</Button>
                <Button css={buttonStyles} variant="contained" type="submit">Apply Filters</Button>
                </Box>
      </form>
    </Box>
                );
    }
    
    export default Filter;