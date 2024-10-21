import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import LoginPage from "../../pages/auth/LoginPage";
import RegisterPage from "../../pages/auth/RegisterPage";
import Grid from "@mui/material/Grid";

function LoginRegister() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "80%" }}
    >
      <div className="LoginRegisterForm">
        <Box sx={{ width: "100%", typography: "body" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                className="LoginRegister_Tabs"
                onChange={handleChange}
                aria-label="lab API tabs example"
                centered
              >
                <Tab style={{ paddingRight: '5%' }} label="Register" value="1" />
                <Tab label="Login" value="2" />
              </TabList>
            </Box>

            {/* Register page section */}
            <TabPanel value="1">
              <RegisterPage />
            </TabPanel>

            {/* Login Page section */}
            <TabPanel value="2">
              <LoginPage />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </Grid>
  );
}

export default LoginRegister;
