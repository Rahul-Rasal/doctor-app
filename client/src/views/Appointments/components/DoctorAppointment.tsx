import React from "react";
import Navbar from "../../../components/Navbar";
import { Heading } from "../../../components/Heading";
import { Box } from "@mui/material";
import { useDoctorAppointmentsQuery } from "../../../redux/api/doctorSlice";
import useTypedSelector from "../../../hooks/useTypedSelector";
import { selectedUserId } from "../../../redux/auth/authSlice";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";
import MUITable, {
  StyledTableCell,
  StyledTableRow,
} from "../../../components/MUITable";
import { formatDate, formatTime } from "../../../utils";
import CustomChip from "../../../components/CustomChip";
import { IoBookOutline } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { FcCancel } from "react-icons/fc";

const tableHead = ["Id", "Patient", "Phone", "Date", "Status", "Actions"];

const DoctorAppointment = () => {
  const userId = useTypedSelector(selectedUserId);

  const { data, isLoading, isSuccess } = useDoctorAppointmentsQuery({
    userId,
  });

  return (
    <>
      {isLoading && <OverlayLoader />}

      <Navbar>
        <Heading>Appointments</Heading>
        <Box
          sx={{
            margin: "20px 0",
            boxShadow: "rgba(0, 0, 0, 0.16) 3px 16px 87px 0px",
          }}
        >
          <MUITable tableHead={tableHead}>
            {isSuccess && data.data.length > 0 ? (
              data.data.map((row: any) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell>{row._id}</StyledTableCell>
                  <StyledTableCell>{`${row.userInfo?.name}`}</StyledTableCell>
                  <StyledTableCell>
                    {/* {maskingPhoneNumber(row?.doctorInfo?.phoneNumber)} */}
                    090078601
                  </StyledTableCell>
                  <StyledTableCell>{`${formatDate(row?.date)} ${formatTime(
                    row?.time
                  )}`}</StyledTableCell>
                  <StyledTableCell>
                    <CustomChip
                      label={
                        row.status === "pending"
                          ? "Pending"
                          : row.status === "approved"
                          ? "Approved"
                          : ""
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
                      <Box>
                        {row.status === "pending" ? (
                          <TiTickOutline style={{ fontSize: "20px" }} />
                        ) : (
                          <FcCancel />
                        )}
                      </Box>
                      <Box>
                        {row.status === "pending" ? "Approve" : "Reject"}
                      </Box>
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell
                  sx={{ height: "100px" }}
                  colSpan={tableHead?.length}
                  align="center"
                >
                  <Box
                    sx={{
                      fontSize: "18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    <IoBookOutline />
                    {data?.data?.length === 0 ? "No records found" : ""}
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            )}
          </MUITable>
        </Box>
      </Navbar>
    </>
  );
};

export default DoctorAppointment;
