import React from "react";

import { CheckBox } from "@mui/icons-material";
import { Button, FormControl, Grid, Link, TextField } from "@mui/material";
import "./LoginPage.css";

function RegisterPage() {
  return (
    <div>
      <img
        className="imageIcon"
        src={require("../../assets/Images/Register.png")}
        alt="Login Icon"
      />

      <form className="" noValidate>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="FirstName"
              label="First Name"
              name="firstName"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="LastName"
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password1"
              label="Password"
              type="password"
              id="password1"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="passwod2"
              label="Reenter Password"
              type="password"
              id="password2"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              control={<CheckBox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className=""
        >
          Register
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default RegisterPage;
