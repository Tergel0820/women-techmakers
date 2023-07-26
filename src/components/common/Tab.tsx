import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "../core";
import { Stack } from "@mui/material";

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

export const TabItem = ({ data }: { data: any }) => {
  const [value, setValue] = React.useState<number>(1);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack gap={{ sm: 2 }} width={"100%"}>
      <Stack
        direction={"row"}
        gap={{ xs: "8px", sm: 2 }}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {Object.keys(data).map((el, index) => (
          <Button
            width={window.innerWidth < 500 && "22%"}
            variant={value === index ? "primary" : "secondary"}
            onClick={() => handleChange(index)}
            disabled={Object.values(data)[index].length === 0 ? true : false}
          >
            {el}
          </Button>
        ))}
      </Stack>
      <Box width={"100%"} overflow={"hidden"} style={{ overflowX: "scroll" }}>
        {Object.values(data).map((item, index) => (
          <CustomTabPanel value={value} index={index}>
            <Stack
              direction="row"
              justifyContent={"space-between"}
              gap={{ xs: 2, sm: 3 }}
              flexWrap={{ sm: "wrap" }}
            >
              {item.map((e) => (
                <Box
                  width={270}
                  height={{ xs: 168, sm: 341 }}
                  minWidth={120}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  overflow={"hidden"}
                  borderRadius={{ xs: "10px", sm: 0 }}
                >
                  <img
                    height={"100%"}
                    src={e}
                    alt="1"
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              ))}
            </Stack>
          </CustomTabPanel>
        ))}
      </Box>
    </Stack>
  );
};
