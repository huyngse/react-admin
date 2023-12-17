import { Box } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useTheme } from "@mui/material";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
        },
        {
            field: "registrarId",
            headerName: "Registrar ID",
            flex: 1,
        },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-collumn--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
            flex: 0.5

        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1.5,
        },
        {
            field: "address",
            headerName: "Address",
            flex: 2,
        },
        {
            field: "city",
            headerName: "City",
            flex: 1,
        },
        {
            field: "zipCode",
            headerName: "Zip Code",
            flex: 1,
        },
        
    ];
    return (
        <Box m="20px" >
            <Header
                title="CONTACTS"
                subtitle="List of Contacts for Future Reference"
            />
             <Box
                m="40px 0 0 0"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-collumn--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderColor: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    }, 
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    }, 
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`,
                    }, 
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    components={{
                        Toolbar: GridToolbar
                    }}
                />
            </Box>
        </Box>
    )
}
export default Contacts;