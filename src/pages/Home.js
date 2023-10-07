import { Button, useTheme } from '@mui/material';
import React, { useContext } from 'react';
import { ThemeProvider2 } from '..';


export default function Home({mycolor2}) {
  const theme = useTheme()
  console.log('mc2',mycolor2);
  const color = useContext(ThemeProvider2)
  console.log(color)
  return (
    <>
        <div>Home</div>
        <Button style={{ color:mycolor2}}>OKLABS1 - Using ProDrilling</Button><br />
        <Button style={{ color:color}}>OKLABS2 - Using useContext React Hook</Button><br />
        <Button style={{ color:theme.palette.primary.main}}>OKLABS3</Button>
    </>
  )
}
