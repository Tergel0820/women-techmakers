import { useMemo } from "react"
import { CssBaseline } from "@mui/material"
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles"
import typography from "./typography"

const ThemeProvider = ({ children }: any) => {
  const themeOptions: any = useMemo(
    () => ({
      shape: { borderRadius: 8 },
      typography,
    }),
    []
  )

  const theme = createTheme(themeOptions)

  return (
    <>
      <StyledEngineProvider injectFirst>
        <MUIThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MUIThemeProvider>
      </StyledEngineProvider>
    </>
  )
}

export default ThemeProvider
