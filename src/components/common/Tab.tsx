import * as React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { Button } from "../core"
import { Stack } from "@mui/material"
import { useMediaQuery } from "@mui/material"
import { useTheme } from "@mui/material/styles"

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export const TabItem = ({ panel }: { panel: any }) => {
  const [value, setValue] = React.useState<number>(0)
  const theme = useTheme()

  const isSmallScreen = useMediaQuery(() => theme.breakpoints.down("sm"))

  const handleChange = (newValue: number) => {
    setValue(newValue)
  }

  return (
    <Stack spacing={2}>
      <Stack
        direction={isSmallScreen ? "column" : "row"}
        justifyContent={isSmallScreen ? "center" : "space-between"}
        gap={2}
        flexWrap="wrap"
        alignItems={"center"}
      >
        <Button
          variant={value === 0 ? "primary" : "secondary"}
          onClick={() => handleChange(0)}
        >
          Workshop
        </Button>
        <Button
          variant={value === 1 ? "primary" : "secondary"}
          onClick={() => handleChange(1)}
        >
          Speakers
        </Button>
        <Button
          variant={value === 2 ? "primary" : "secondary"}
          onClick={() => handleChange(2)}
        >
          Mentor
        </Button>
        <Button
          variant={value === 3 ? "primary" : "secondary"}
          onClick={() => handleChange(3)}
        >
          Judges
        </Button>
      </Stack>
      <Stack>
        {panel.map((item: any, index: number) => {
          return (
            <Stack key={index} flexWrap="wrap" flexDirection="column">
              <CustomTabPanel value={value} index={index}>
                {item}
              </CustomTabPanel>
            </Stack>
          )
        })}
      </Stack>
    </Stack>
  )
}
