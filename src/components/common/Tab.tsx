import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "../core";
import { Stack } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3, pb: 8 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const TabItem = ({ panel }: { panel: any }) => {
  const [value, setValue] = React.useState<number>(1);
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(() => theme.breakpoints.down("sm"));

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={{ xs: "16px", sm: 2 }} width={"100%"}>
      <Stack
        direction={"row"}
        gap={{ xs: "8px", sm: 2 }}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Button
          width={window.innerWidth < 500 && "22%"}
          variant={value === 0 ? "primary" : "secondary"}
          onClick={() => handleChange(0)}
          disabled
        >
          Workshop
        </Button>
        <Button
          width={window.innerWidth < 500 && "22%"}
          variant={value === 1 ? "primary" : "secondary"}
          onClick={() => handleChange(1)}
        >
          Speakers
        </Button>
        <Button
          width={window.innerWidth < 500 && "22%"}
          variant={value === 2 ? "primary" : "secondary"}
          onClick={() => handleChange(2)}
        >
          Mentor
        </Button>
        <Button
          width={window.innerWidth < 500 && "22%"}
          variant={value === 3 ? "primary" : "secondary"}
          onClick={() => handleChange(3)}
        >
          Judges
        </Button>
      </Stack>
      <Stack width={"100%"}>
        {panel.map((item: any, index: number) => {
          return (
            <Stack key={index} flexWrap="wrap" flexDirection="column">
              <CustomTabPanel value={value} index={index}>
                {item}
              </CustomTabPanel>
            </Stack>
          );
        })}
      </Stack>
    </Stack>
  );
};
