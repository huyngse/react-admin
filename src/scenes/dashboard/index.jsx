import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import BarChart from "../../components/BarChart";
import LineChart from "../../components/LineChart";
import Geographychart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header
                    title="DASHBOARD"
                    subtitle="Welcome to your Dashboard"
                />
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[700],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px"
                        }}
                    >
                        <DownloadOutlinedIcon
                            sx={{
                                mr: "10px"
                            }}
                        />
                        Download Reports
                    </Button>
                </Box>
            </Box>
            {/* GRID AND CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="12,361"
                        subtitle="Emails sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px"
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="431,225"
                        subtitle="Sales Obtained"
                        progress="0.5"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px"
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="32,441"
                        subtitle="New Clients"
                        progress="0.3"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px"
                                }}
                            />
                        }
                    />
                </Box>
                <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <StatBox
                        title="1,325.134"
                        subtitle="Traffic Inbound"
                        progress="0.8"
                        increase="+45%"
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[600],
                                    fontSize: "26px"
                                }}
                            />
                        }
                    />
                </Box>
                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342,320
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton >
                                <DownloadOutlinedIcon
                                    sx={{
                                        fontSize: "26px",
                                        color: colors.greenAccent[600]
                                    }}
                                />
                            </IconButton>
                        </Box>

                    </Box>
                    <Box height="250px" mt="-20px">
                        <LineChart isDashboard />
                    </Box>
                </Box>
                {/* TRANSACTIONS */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.grey[100]}
                        padding="15px"
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {
                        mockTransactions.map((transaction, i) => (
                            <Box
                                key={`${transaction.txId}-${i}`}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                borderBottom={`4px solid ${colors.primary[500]}`}
                                padding="15px"
                            >
                                <Box>
                                    <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">
                                        {transaction.txId}
                                    </Typography>
                                    <Typography color={colors.grey[100]} >
                                        {transaction.user}
                                    </Typography>
                                </Box>
                                <Box color={colors.grey[100]}>
                                    {transaction.date}
                                </Box>
                                <Box
                                    backgroundColor={colors.greenAccent[500]}
                                    p="5px 10px"
                                    borderRadius="4px"
                                >
                                    ${transaction.cost}
                                </Box>
                            </Box>
                        ))
                    }
                </Box>
                {/* ROW 3 */}
                {/* CAMPAIGN */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ p: "30px 30px 0 30px" }}
                    >
                        Campaign
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        mt="25px"
                    >
                        <ProgressCircle size="125"></ProgressCircle>
                        <Typography
                            variant="h5"
                            color={colors.greenAccent[500]}
                            sx={{ mt: "50px" }}
                        >
                            $48,352 revenue generated
                        </Typography>
                        <Typography

                        >
                            Include extra misc expenditures and costs
                        </Typography>
                    </Box>
                </Box>
                {/* END CAMPAIGN */}
                {/* SALE QUANTITY */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ p: "30px 30px 0 30px" }}
                    >
                        Sales quantity
                    </Typography>
                    <Box
                        height="250px"
                        mt="-20px"
                    >
                        <BarChart isDashBoard />
                    </Box>
                </Box>
                {/* END SALE QUANTITY */}
                {/* GEOGRAPHY */}
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    padding="30px"
                >
                    <Typography
                        variant="h5"
                        fontWeight="600"
                        sx={{ mb: "15px"}}
                    >
                        Geography based traffic
                    </Typography>
                    <Box
                        height="200px"
                    >
                        <Geographychart isDashBoard />
                    </Box>
                </Box>
                {/* END GEOGRAPHY */}
            </Box>
            {/* END GRID */}
        </Box>
    );
};
export default Dashboard;