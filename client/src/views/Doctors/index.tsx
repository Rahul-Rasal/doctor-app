import { Heading } from "../../components/Heading";
import MUITable, {
  StyledTableRow,
  StyledTableCell,
} from "../../components/MUITable";
import Navbar from "../../components/Navbar";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
import { useGetAllDoctorsQuery } from "../../redux/api/doctorSlice";
import { Box } from "@mui/material";
import { formatDateTime, maskingPhoneNumber } from "../../utils";
import CustomChip from "../../components/CustomChip";

const tableHead = [
  "Name",
  "Email",
  "Phone Number",
  "Date",
  "Status",
  "Actions",
];

const Doctors = () => {
  const { data, isLoading, isSuccess } = useGetAllDoctorsQuery({});

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Navbar>
        <Heading>Doctors</Heading>
        <Box
          sx={{
            margin: "20px 0",
            boxShadow: "rgba(0, 0, 0, 0.16) 3px 16px 87px 0px",
          }}
        >
          <MUITable tableHead={tableHead}>
            {isSuccess &&
              data.data.map((row: any) => (
                <StyledTableRow key={`${row.email}`}>
                  <StyledTableCell>{`${row.firstName} ${row.lastName}`}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>
                    {maskingPhoneNumber(row.phoneNumber)}
                  </StyledTableCell>
                  <StyledTableCell>
                    {formatDateTime(row.createdAt)}
                  </StyledTableCell>
                  <StyledTableCell>
                    <CustomChip
                      label={row.status === "pending" ? "Pending" : ""}
                    />
                  </StyledTableCell>
                  {row.status === "pending" ? (
                    <StyledTableCell>Approve</StyledTableCell>
                  ) : (
                    <StyledTableCell>Block</StyledTableCell>
                  )}
                </StyledTableRow>
              ))}
          </MUITable>
        </Box>
      </Navbar>
    </>
  );
};

export default Doctors;
