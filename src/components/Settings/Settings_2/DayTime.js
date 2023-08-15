import React, { useState } from "react";
import {
  Box,
  Switch,
  Typography,
  IconButton,
  Grid,
} from "@mui/material";
import { AddCircle, RemoveCircle, MoreVert } from "@mui/icons-material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./DayTime.css";

function DayTime({ id, day, count, getId, forDec }) {
  const [flag, setFlag] = useState(false);
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isRemoveOpen, setIsRemoveOpen] = useState(false);

  let arr2 = [];
  for (let i = 0; i < count; i++) {
    arr2.push(i);
  }

  const handleSwitchChange = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("4:00 PM");

  const handleTimeChange = (isStart, increment, index) => {
    const timeArray = isStart ? startTime.split(" ") : endTime.split(" ");
    let [time, ampm] = timeArray[0].split(":");
    let newTime = parseInt(time) + increment;

    if (newTime > 12) {
      newTime -= 12;
      ampm = ampm === "AM" ? "PM" : "AM";
    }

    if (newTime < 1) {
      newTime = 12;
      ampm = ampm === "AM" ? "PM" : "AM";
    }

    const newTimeStr = `${newTime}:${timeArray[1]} ${ampm}`;

    if (isStart) {
      setStartTime(newTimeStr);
    } else {
      setEndTime(newTimeStr);
    }
  };

  const handleRemoveClick = () => {
    setIsRemoveOpen(!isRemoveOpen);
    setFlag(!flag);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <Typography variant="subtitle1" id="day">
          {day}
        </Typography>
      </Grid>
      <Grid item xs={3}>
        <Box display="flex" alignItems="center">
          <Switch
            color="success"
            size="medium"
            checked={isSwitchOn}
            onChange={handleSwitchChange}
          />
          <Typography variant="body2" id="swtch">
            {isSwitchOn ? "Open" : "Closed"}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <Box display="flex" gap={2} alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            border="1px solid #ccc"
            borderRadius="4px"
            padding="4px"
          >
            <Typography variant="body2" id="swtch">
              {startTime}
            </Typography>
            <IconButton className="no-underline">
              <Box display="flex" flexDirection="column" alignItems="center">
                <ExpandLessIcon onClick={() => handleTimeChange(true, 1)} />
                <ExpandMoreIcon onClick={() => handleTimeChange(true, -1)} />
              </Box>
            </IconButton>
          </Box>
          <Typography variant="body2" id="swtch">
            To
          </Typography>
          <Box
            display="flex"
            alignItems="center"
            border="1px solid #ccc"
            borderRadius="4px"
            padding="4px"
          >
            <Typography variant="body2" id="swtch">
              {endTime}
            </Typography>
            <IconButton className="no-underline">
              <Box display="flex" flexDirection="column" alignItems="center">
                <ExpandLessIcon onClick={() => handleTimeChange(false, 1)} />
                <ExpandMoreIcon onClick={() => handleTimeChange(false, -1)} />
              </Box>
            </IconButton>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box display="flex" alignItems="center" justifyContent="flex-end">
          {flag ? (
            <RemoveCircle
              onClick={() => forDec(id)}
              color="error"
              cursor="pointer"
            />
          ) : (
            <AddCircle onClick={() => getId(id)} cursor="pointer" />
          )}
          <IconButton>
            <MoreVert onClick={() => setIsRemoveOpen(!isRemoveOpen)} />
          </IconButton>
          {isRemoveOpen && (
            <Box
              display="flex"
              alignItems="center"
              style={{
                background: "red",
                borderRadius: "50%",
                padding: "6px",
              }}
              onClick={handleRemoveClick}
            >
              Remove
            </Box>
          )}
        </Box>
      </Grid>
      {arr2.map((el, index) => (
        <Grid item xs={12} key={el}>
          <Box display="flex" gap={2} alignItems="center">
            <Box display="flex" gap={2} alignItems="center">
              <Box
                display="flex"
                alignItems="center"
                border="1px solid #ccc"
                borderRadius="4px"
                padding="4px"
              >
                <Typography variant="body2" id="swtch">
                  {startTime}
                </Typography>
                <IconButton className="no-underline">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <ExpandLessIcon
                      onClick={() => handleTimeChange(true, 1, index)}
                    />
                    <ExpandMoreIcon
                      onClick={() => handleTimeChange(true, -1, index)}
                    />
                  </Box>
                </IconButton>
              </Box>
              <Typography variant="body2" id="swtch">
                To
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                border="1px solid #ccc"
                borderRadius="4px"
                padding="4px"
              >
                <Typography variant="body2" id="swtch">
                  {endTime}
                </Typography>
                <IconButton className="no-underline">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <ExpandLessIcon
                      onClick={() => handleTimeChange(false, 1, index)}
                    />
                    <ExpandMoreIcon
                      onClick={() => handleTimeChange(false, -1, index)}
                    />
                  </Box>
                </IconButton>
              </Box>
            </Box>
            {flag && (
              <RemoveCircle
                onClick={() => forDec(id)}
                color="error"
                cursor="pointer"
              />
            )}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default DayTime;
