import { Heading } from "../../components/Heading";
import MUITable, {
  StyledTableRow,
  StyledTableCell,
} from "../../components/MUITable";
import Navbar from "../../components/Navbar";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
import {
  useChangeDoctorStatusMutation,
  useGetAllDoctorsQuery,
} from "../../redux/api/doctorSlice";
import { Box, Tooltip } from "@mui/material";
import { formatDateTime, maskingPhoneNumber } from "../../utils";
import CustomChip from "../../components/CustomChip";
import { useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import ToastAlert from "../../components/ToastAlert/ToastAlert";
import Spinner from "../../components/Spinner";
import { MdBlock } from "react-icons/md";

const tableHead = [
  "Name",
  "Email",
  "Phone Number",
  "Date",
  "Status",
  "Actions",
];

const Doctors = () => {
  const [doctorId, setDoctorId] = useState("");
  const [toast, setToast] = useState({
    message: "",
    appearence: false,
    type: "",
  });

  const { data, isLoading, isSuccess } = useGetAllDoctorsQuery({});

  const handleCloseToast = () => {
    setToast({ ...toast, appearence: false });
  };

  const [doctorStatus, { isLoading: doctorLoading }] =
    useChangeDoctorStatusMutation();

  const doctorHandler = async (data: any, status: string) => {
    try {
      const payload = {
        doctorId: data._id,
        status: status,
        userId: data.userId,
      };

      const doctor: any = await doctorStatus(payload);

      if (doctor?.data?.status) {
        setToast({
          ...toast,
          message: "Doctor Status Changed Successfully",
          appearence: true,
          type: "success",
        });
      }
      if (doctor?.error) {
        setToast({
          ...toast,
          message: doctor?.error?.data?.message,
          appearence: true,
          type: "error",
        });
      }
    } catch (error) {
      console.error("Doctor Status Changed Error:", error);
      setToast({
        ...toast,
        message: "Something went wrong",
        appearence: true,
        type: "error",
      });
    }
  };

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
            {isSuccess && data?.data?.length > 0 ? (
              data?.data?.map((row: any) => (
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
                      label={
                        row.status === "pending"
                          ? "Pending"
                          : row.status === "approved"
                          ? "Approved"
                          : ""
                      }
                    />
                  </StyledTableCell>
                  {row.status === "pending" ? (
                    <Tooltip title="Approve Doctor" placement="bottom">
                      <StyledTableCell
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          doctorHandler(row, "approved");
                          setDoctorId(row._id);
                        }}
                      >
                        {doctorId === row._id && doctorLoading ? (
                          <Spinner size={20} />
                        ) : (
                          <>
                            <TiTickOutline style={{ fontSize: "20px" }} />
                            Approve
                          </>
                        )}
                      </StyledTableCell>
                    </Tooltip>
                  ) : (
                    <Tooltip title="Banned User" placement="bottom">
                      <StyledTableCell
                        sx={{
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                        }}
                        onClick={() => {
                          doctorHandler(row, "blocked");
                          setDoctorId(row._id);
                        }}
                      >
                        {doctorId === row._id && doctorLoading ? (
                          <Spinner size={20} />
                        ) : (
                          <>
                            <MdBlock />
                            Block
                          </>
                        )}
                      </StyledTableCell>
                    </Tooltip>
                  )}
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={tableHead?.length} align="center">
                  {data?.data?.length === 0 ? "No records found" : ""}
                </StyledTableCell>
              </StyledTableRow>
            )}
          </MUITable>
        </Box>
      </Navbar>
      <ToastAlert
        appearence={toast.appearence}
        type={toast.type}
        message={toast.message}
        handleClose={handleCloseToast}
      />
    </>
  );
};

export default Doctors;
