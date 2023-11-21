// MUI Imports
import { Box } from "@mui/material";
// Custom Imports
import { Heading } from "../../components/Heading";
import Navbar from "../../components/Navbar";
import MUITable, {
  StyledTableCell,
  StyledTableRow,
} from "../../components/MUITable";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
// Redux
import { useGetAllUsersQuery } from "../../redux/api/userSlice";
// Utils
import { formatDateTime } from "../../utils";
import { MdBlock } from "react-icons/md";
import CustomChip from "../../components/CustomChip";

const tableHead = ["Name", "Email", "Date", "Roles", "Actions"];

const Users = () => {
  const { data, isLoading, isSuccess } = useGetAllUsersQuery({});

  console.log("data", data);

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Navbar>
        <Heading>Users</Heading>
        <Box
          sx={{
            margin: "20px 0",
            boxShadow: "rgba(0, 0, 0, 0.16) 3px 16px 87px 0px",
          }}
        >
          <MUITable tableHead={tableHead}>
            {isSuccess &&
              data.data.map((row: any) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>
                    {formatDateTime(row.createdAt)}
                  </StyledTableCell>
                  <StyledTableCell>
                    <CustomChip
                      label={
                        row?.isAdmin
                          ? "Owner"
                          : row?.isDoctor
                          ? "Doctor"
                          : "User"
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "3px",
                      }}
                    >
                      {row?.isAdmin ? (
                        // <CustomChip label="Admin" />
                        ""
                      ) : (
                        <MdBlock />
                      )}
                      {row?.isAdmin ? "" : "Block"}
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </MUITable>
        </Box>
      </Navbar>
    </>
  );
};

export default Users;
