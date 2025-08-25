import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        maxWidth={400}
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        padding={3}
        borderRadius={5}
        boxShadow="5px 5px 10px #ccc"
        sx={{
          ":hover": {
            boxShadow: '10px 10px 20px #ccc',
          },
        }}
      >
        <Typography variant="h4" padding={3} textAlign="center">
          {isSignup ? 'Sign Up' : 'Login'}
        </Typography>

        {isSignup && (
          <TextField
            name="name"
            value={input.name}
            onChange={handleChange}
            margin="normal"
            type="text"
            variant="outlined"
            placeholder="Name"
          />
        )}

        <TextField
          name="email"
          value={input.email}
          onChange={handleChange}
          margin="normal"
          type="email"
          variant="outlined"
          placeholder="Email"
        />

        <TextField
          name="password"
          value={input.password}
          onChange={handleChange}
          margin="normal"
          type="password"
          variant="outlined"
          placeholder="Password"
        />

        <Button
          type="submit"
          sx={{ marginTop: 3, borderRadius: 3 }}
          variant="contained"
          color="warning"
        >
          {isSignup ? 'Sign Up' : 'Login'}
        </Button>

        <Button
          onClick={() => setIsSignup(!isSignup)}
          sx={{ marginTop: 3, borderRadius: 3 }}
        >
          {isSignup ? 'Have an account? Login' : 'New here? Sign Up'}
        </Button>
      </Box>
    </form>
  );
};

export default Auth;
