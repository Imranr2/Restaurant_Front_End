import React from "react";
import NavBar from "../../components/Navbar";
import { Typography, Box, IconButton, Grid, TextField } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import ActionButton from "../../components/ActionButton";
import TableDropdown from "./TableDropdown";

const CreateReservation = () => {
  const [customerName, setCustomerName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [pax, setPax] = useState(0);

  return (
    <Grid
      container
      direction="column"
      sx={{
        backgroundColor: "secondary.main",
        height: "100vh",
      }}
    >
      <NavBar></NavBar>
      <Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "20px",
            paddingBottom: "19px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              paddingLeft: "56px",
              color: "primary.contrastText",
              alignSelf: "flex-start",
            }}
          >
            Create Reservation
          </Typography>
          <Grid
            container
            direction="row"
            alignSelf="center"
            sx={{
              width: "1438px",
              height: "530px",
              backgroundColor: "primary.main",
              marginTop: "24px",
              padding: "38px 34px",
              borderRadius: "10px",
              position: "relative",
            }}
          >
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignContent="center"
              alignSelf="center"
              gap={0.7}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "primary.contrastText",
                }}
              >
                Customer Name
              </Typography>
              <TextField
                value={customerName}
                variant="outlined"
                label={customerName === "" ? "Customer name" : ""}
                inputProps={{ maxLength: 38 }}
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#A9A9A9",
                  },
                }}
                sx={{
                  backgroundColor: "secondary.main",
                  width: "370px",
                  input: {
                    color: "#A9A9A9",
                  },
                }}
                onChange={(e) => setCustomerName(e.target.value)}
              />
              <Typography
                variant="body1"
                sx={{
                  color: "primary.contrastText",
                }}
              >
                Contact No.
              </Typography>
              <TextField
                value={contactNo}
                variant="outlined"
                label={contactNo === "" ? "+1 (xxx) xxx-xxxx" : ""}
                inputProps={{ maxLength: 38 }}
                InputLabelProps={{
                  shrink: false,
                  style: {
                    color: "#A9A9A9",
                  },
                }}
                sx={{
                  backgroundColor: "secondary.main",
                  width: "370px",
                  input: {
                    color: "#A9A9A9",
                  },
                }}
                onChange={(e) => setContactNo(e.target.value)}
              />
              <Box sx={{ display: "flex", gap: "10px" }}>
                <Grid container direction="column">
                  <Typography
                    variant="body1"
                    sx={{
                      color: "primary.contrastText",
                    }}
                  >
                    Date
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      value={date || null}
                      onChange={(newDate) => setDate(newDate)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          inputProps={{
                            maxLength: 38,
                            ...params.inputProps,
                            placeholder: "MM/DD/YYYY",
                          }}
                          sx={{
                            backgroundColor: "secondary.main",
                            width: "180px",
                            input: {
                              color: "#A9A9A9",
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid container direction="column">
                  <Typography
                    variant="body1"
                    sx={{
                      color: "primary.contrastText",
                    }}
                  >
                    Time
                  </Typography>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      value={time || null}
                      onChange={(newTime) => setTime(newTime)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="outlined"
                          inputProps={{
                            maxLength: 38,
                            ...params.inputProps,
                            placeholder: "09:11 PM",
                          }}
                          sx={{
                            backgroundColor: "secondary.main",
                            width: "180px",
                            input: {
                              color: "#A9A9A9",
                            },
                          }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Grid>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "primary.contrastText",
                }}
              >
                No. of Pax
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignContent: "center",
                  gap: 2,
                }}
              >
                <IconButton
                  disabled={pax == 0}
                  sx={{
                    type: "submit",
                    backgroundColor: "secondary.main",
                    width: 30,
                    height: 30,
                    borderRadius: 2,
                  }}
                  onClick={() => setPax(pax - 1)}
                >
                  <RemoveIcon sx={{ color: "secondary.contrastText" }} />
                </IconButton>
                <Typography
                  display="flex"
                  alignItems="center"
                  sx={{ color: "primary.contrastText" }}
                >
                  {pax}
                </Typography>
                <IconButton
                  sx={{
                    type: "submit",
                    backgroundColor: "secondary.main",
                    width: 30,
                    height: 30,
                    borderRadius: 2,
                  }}
                  onClick={() => setPax(pax + 1)}
                >
                  <AddIcon sx={{ color: "secondary.contrastText" }} />
                </IconButton>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  color: "primary.contrastText",
                }}
              >
                Table No.
              </Typography>
              <TableDropdown></TableDropdown>
            </Grid>
            <Box
              sx={{
                display: "flex",
                gap: "28px",
                bottom: 20,
                right: "38px",
                position: "absolute",
              }}
            >
              <ActionButton
                onClick={() => console.log("edit")}
                bgHover="secondary.light"
                colorHover="#3D3C3A"
                bgColor="transparent"
                color="primary.light"
                sx={{
                  width: "140px",
                  padding: "5px 40px",
                  margin: "0px",
                  border: 2,
                }}
              >
                Cancel
              </ActionButton>
              <ActionButton
                onClick={() => console.log("fulfill")}
                bgColor="primary.light"
                bgHover="secondary.light"
                sx={{
                  width: "258px",
                  padding: "5px 40px",
                  margin: "0px",
                }}
              >
                Add Reservation
              </ActionButton>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
};

export default CreateReservation;
