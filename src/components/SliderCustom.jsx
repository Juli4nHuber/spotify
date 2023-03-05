import * as React from 'react';
import Slider from '@mui/material/Slider';

export default function SliderCustom() {
  return (
      <Slider
        className='text-slate-300'
        boxShadow="0"
        size="medium"
        defaultValue={0}
        sx = {{
            '&:hover': {
                '.MuiSlider-track': {
                  color: "#1DB954" 
                },
                '.MuiSlider-thumb': {
                    boxShadow: 0,
                    width: "12px",
                    height: "12px",
                }                   
            },
            '& .MuiSlider-thumb': { 
                borderRadius: '100%',
                boxShadow: 0,
                width: 0,
                height: 0,
                '&:hover': {
                    boxShadow: 0,
                    width: "12px",
                    height: "12px",
                },
                '&.Mui-focusVisible': {
                    boxShadow: 0
                },
            },
        }}
      />   
  );
}