import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const FAQ = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px" >
            <Header
                title="FAQ"
                subtitle="Frequently Asked Questions Page"
            />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        An Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ullam placeat earum recusandae illum non omnis animi obcaecati quos. Ipsum quia eligendi nam possimus iste placeat ut officiis nihil voluptate!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        Another Important Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ullam placeat earum recusandae illum non omnis animi obcaecati quos. Ipsum quia eligendi nam possimus iste placeat ut officiis nihil voluptate!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        Your Favouriate Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ullam placeat earum recusandae illum non omnis animi obcaecati quos. Ipsum quia eligendi nam possimus iste placeat ut officiis nihil voluptate!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        Some Random Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ullam placeat earum recusandae illum non omnis animi obcaecati quos. Ipsum quia eligendi nam possimus iste placeat ut officiis nihil voluptate!
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography
                        color={colors.greenAccent[500]}
                        variant="h5"
                    >
                        The Final Question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, ullam placeat earum recusandae illum non omnis animi obcaecati quos. Ipsum quia eligendi nam possimus iste placeat ut officiis nihil voluptate!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box >
    )
}
export default FAQ;