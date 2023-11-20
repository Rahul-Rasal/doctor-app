import { Box, Grid, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading";
import Navbar from "../../components/Navbar";
import { useGetApprovedDoctorsQuery } from "../../redux/api/doctorSlice";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
import {
  convertToAMPMFormat,
  maskingPhoneNumber,
  thousandSeparatorNumber,
} from "../../utils";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

const Dashboard = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetApprovedDoctorsQuery({});

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Navbar>
        <Heading>Available Doctors</Heading>
        <Box>
          <Grid container rowSpacing={2} columnSpacing={4}>
            {data?.data?.length === 0 ? (
              ""
            ) : (
              <>
                {data?.data?.map((row: any) => {
                  return (
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          margin: "20px 0",
                          background: "#fff",
                          borderRadius: "6px",
                          padding: "15px 20px",
                          boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          navigate(`/book-appointments/${row?.userId}`);
                        }}
                      >
                        <Heading
                          sx={{
                            margin: "5px 0",
                            fontSize: "18px",
                          }}
                        >
                          {`${row?.firstName} ${row?.lastName}`}
                        </Heading>
                        <Divider />
                        <Box
                          sx={{
                            margin: "15px 0 10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "180px",
                              display: "flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <IoPhonePortraitOutline />
                            Phone Number
                          </Box>
                          <Box>{maskingPhoneNumber(row?.phoneNumber)}</Box>
                        </Box>
                        <Box
                          sx={{
                            margin: "15px 0 10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "180px",
                              display: "flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <CiLocationOn />
                            Address
                          </Box>
                          <Box>{row?.address}</Box>
                        </Box>
                        <Box
                          sx={{
                            margin: "15px 0 10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "180px",
                              display: "flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <CiMoneyCheck1 /> Fee Per Visit
                          </Box>
                          <Box>
                            {thousandSeparatorNumber(row?.feePerConsultation)}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            margin: "15px 0 10px 0",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: "180px",
                              display: "flex",
                              alignItems: "center",
                              gap: "3px",
                            }}
                          >
                            <IoMdTime />
                            Timings
                          </Box>
                          <Box>{`${convertToAMPMFormat(
                            row?.fromTime
                          )} to ${convertToAMPMFormat(row?.toTime)}`}</Box>
                        </Box>
                      </Box>
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
        </Box>
      </Navbar>
    </>
  );
};

export default Dashboard;
