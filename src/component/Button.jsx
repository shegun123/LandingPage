import React from 'react'
import { Stack, Button } from '@mui/material'

const Button = () => {
  return (
    <div>
      <Stack direction="row" spacing={4} alignItems="center">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#54BD95",
                height: "62px",
                borderRadius: "40px",
                color: "#FFFFFF",
                px: 5,
              }}
            >
              Try Free Trial
            </Button>
    </div>
  )
}

export default Button
