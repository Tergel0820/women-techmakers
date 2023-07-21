import { styled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import Typography from "@mui/material/Typography"
import MuiAccordionDetails from "@mui/material/AccordionDetails"
import AddIcon from "@mui/icons-material/Add"

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  width: "567px",
  borderTop: `3px solid #D7DEF0`,
  borderBottom: `3px solid #D7DEF0`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  paddingLeft: 0,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: 3,
}))

interface AccordionDetails {
  question: string
  answer: string
}

export const Answer = ({ question, answer }: AccordionDetails) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<AddIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ fontWeight: 500 }}>{question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography color="#8690A2" sx={{ fontWeight: 300 }} fontSize={"16px"}>
          {answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}
