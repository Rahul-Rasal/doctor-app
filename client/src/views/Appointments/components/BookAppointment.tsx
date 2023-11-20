import { useState } from "react";
import Navbar from "../../../components/Navbar";
import { Box, Grid, Divider, Button, TextField } from "@mui/material";
import { Heading, SubHeading } from "../../../components/Heading";
import { useParams } from "react-router-dom";
import { useGetDoctorQuery } from "../../../redux/api/doctorSlice";
import OverlayLoader from "../../../components/Spinner/OverlayLoader";
import {
  convertToAMPMFormat,
  onKeyDown,
  thousandSeparatorNumber,
} from "../../../utils";
import { RiLuggageDepositLine } from "react-icons/ri";
import { MdOutlineExplicit } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { CiMoneyCheck1 } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { Form, Formik, FormikProps } from "formik";
import * as Yup from "yup";
import DatePicker from "../../../components/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const AppointmentSchema = Yup.object().shape({
  date: Yup.string().required("Date is required"),
  time: Yup.string().required("Time is required"),
});

interface AppointmentForm {
  date: string | null;
  time: string | null;
}

const BookAppointment = () => {
  const { userId } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formValues, setFormValues] = useState<AppointmentForm>({
    date: null,
    time: null,
  });

  const { data, isLoading } = useGetDoctorQuery({
    userId,
  });

  const appointmentHandler = async (data: AppointmentForm) => {
    console.log("data", data);
  };

  return (
    <>
      {isLoading && <OverlayLoader />}
      <Navbar>
        <Heading>Book Appointments</Heading>
        <Box>
          <Grid container rowSpacing={2} columnSpacing={4}>
            <Grid item xs={4}>
              <Box
                sx={{
                  margin: "20px 0",
                  background: "#fff",
                  borderRadius: "6px",
                  padding: "15px 20px 5px 20px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Heading
                    sx={{
                      margin: "5px 0",
                      fontSize: "18px",
                    }}
                  >
                    Timings
                  </Heading>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <IoMdTime />
                    <Box>{`${convertToAMPMFormat(
                      data?.data?.fromTime
                    )} to ${convertToAMPMFormat(data?.data?.toTime)}`}</Box>
                  </Box>
                </Box>
                <Divider />
                <Box sx={{ marginTop: "10px" }}>
                  <Formik
                    initialValues={formValues}
                    onSubmit={(values: AppointmentForm) => {
                      appointmentHandler(values);
                    }}
                    validationSchema={AppointmentSchema}
                    enableReinitialize
                  >
                    {(props: FormikProps<AppointmentForm>) => {
                      const { values, touched, errors, setFieldValue } = props;

                      return (
                        <Form onKeyDown={onKeyDown}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Select Date
                            </SubHeading>
                            <DatePicker
                              label=""
                              minDate={new Date()}
                              value={values.date}
                              handleChange={(value: any) => {
                                setFieldValue("date", value);
                              }}
                            />
                            {errors.date && touched.date && (
                              <Box
                                sx={{
                                  color: "#d32f2f",
                                  marginLeft: "2px",
                                  fontSize: "0.7rem",
                                }}
                              >
                                {errors.date}
                              </Box>
                            )}
                          </Box>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Select Time
                            </SubHeading>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <TimePicker
                                label=""
                                value={values.time}
                                onChange={(value) => {
                                  setFieldValue("time", value);
                                }}
                                renderInput={(params) => (
                                  <TextField
                                    sx={{ width: "100%" }}
                                    {...params}
                                  />
                                )}
                              />
                              {errors.time && touched.time && (
                                <Box
                                  sx={{
                                    color: "#d32f2f",
                                    marginLeft: "2px",
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  {errors.time}
                                </Box>
                              )}
                            </LocalizationProvider>
                          </Box>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "end",
                              marginTop: "10px",
                            }}
                          >
                            <Button
                              type="submit"
                              variant="outlined"
                              fullWidth
                              //   disabled={profileLoading}
                              sx={{
                                padding: "5px 30px",
                                textTransform: "capitalize",
                                margin: "20px 0",
                              }}
                            >
                              {/* {profileLoading ? "Update..." : "Update"} */}
                              Check Availability
                            </Button>
                          </Box>
                        </Form>
                      );
                    }}
                  </Formik>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box
                sx={{
                  margin: "20px 0",
                  background: "#fff",
                  borderRadius: "6px",
                  padding: "15px 20px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
                }}
              >
                <Heading
                  sx={{
                    margin: "5px 0",
                    fontSize: "18px",
                  }}
                >
                  {`${data?.data?.firstName} ${data?.data?.lastName}`}
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
                    <RiLuggageDepositLine />
                    Department
                  </Box>
                  <Box>{data?.data?.specialization}</Box>
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
                    <MdOutlineExplicit />
                    Experience
                  </Box>
                  <Box>{data?.data?.experience} Years </Box>
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
                    <CiMoneyCheck1 />
                    Fee Per Visit
                  </Box>
                  <Box>
                    {thousandSeparatorNumber(data?.data?.feePerConsultation)}
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
                    <CiLocationOn />
                    Location
                  </Box>
                  <Box>{data?.data?.address}</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Navbar>
    </>
  );
};

export default BookAppointment;
