// React Imports
import { useState } from "react";
import { Heading, SubHeading } from "../../components/Heading";
import Navbar from "../../components/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack } from "@mui/material";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import { onKeyDown } from "../../utils";
// Formik Imports
import { Form, Formik, FormikProps } from "formik";
import { applyDoctorSchema } from "./components/validationSchema";
import PrimaryPhoneInput from "../../components/PhoneInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ToastAlert from "../../components/ToastAlert/ToastAlert";
import { alertsLoader, hideLoading, showLoading } from "../../redux/alertSlice";
import { useDoctorSignupMutation } from "../../redux/api/doctorSlice";
import useTypedSelector from "../../hooks/useTypedSelector";
import { selectedUserEmail, selectedUserId } from "../../redux/auth/authSlice";

interface applyDoctorForm {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  website: string;
  address: string;
  specialization: string;
  experience: string;
  feePerConsultation: string;
  fromTime: string | null;
  toTime: string | null;
}

const ApplyDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useTypedSelector(selectedUserEmail);
  const userId = useTypedSelector(selectedUserId);
  const loader = useTypedSelector(alertsLoader);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formValues, setFormValues] = useState<applyDoctorForm>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    website: "",
    address: "",
    specialization: "",
    experience: "",
    feePerConsultation: "",
    fromTime: null,
    toTime: null,
  });

  const [toast, setToast] = useState({
    message: "",
    appearence: false,
    type: "",
  });

  const handleCloseToast = () => {
    setToast({ ...toast, appearence: false });
  };

  const [applyDoctor, { isLoading }] = useDoctorSignupMutation();

  const applyDoctorHandler = async (data: applyDoctorForm) => {
    try {
      // dispatch(showLoading());
      const payload = {
        userId,
        firstName: data.firstName,
        lastName: data.lastName,
        email: userEmail,
        phoneNumber: data.phoneNumber,
        website: data.website,
        address: data.address,
        specialization: data.specialization,
        experience: data.experience,
        feePerConsultation: data.feePerConsultation,
        fromTime: data?.fromTime,
        toTime: data?.toTime,
      };

      const user: any = await applyDoctor(payload);

      if (user?.data?.status) {
        // dispatch(hideLoading());
        setToast({
          ...toast,
          message: "Doctor Account Applied Successfully",
          appearence: true,
          type: "success",
        });
        setTimeout(() => {
          navigate("/");
        }, 1500);
      }
      if (user?.error) {
        // dispatch(hideLoading());
        setToast({
          ...toast,
          message: user?.error?.data?.message,
          appearence: true,
          type: "error",
        });
      }
    } catch (error) {
      console.error("Doctor Sign Up Error:", error);
      // dispatch(hideLoading());
      setToast({
        ...toast,
        message: "Something went wrong",
        appearence: true,
        type: "error",
      });
    }
  };

  return (
    <div>
      <Navbar>
        <Box sx={{ margin: "" }}>
          <Heading>Apply For Doctor</Heading>
          <Box
            sx={{
              margin: "20px 0",
              background: "#fff",
              borderRadius: "6px",
              padding: "20px",
              boxShadow: "rgba(0, 0, 0, 0.16) 3px 16px 87px 0px",
            }}
          >
            <SubHeading sx={{ marginBottom: "20px", fontSize: "17px" }}>
              Basic Information
            </SubHeading>
            <Box>
              <Formik
                initialValues={formValues}
                onSubmit={(values: applyDoctorForm) => {
                  applyDoctorHandler(values);
                }}
                validationSchema={applyDoctorSchema}
              >
                {(props: FormikProps<applyDoctorForm>) => {
                  const {
                    values,
                    touched,
                    errors,
                    handleBlur,
                    handleChange,
                    setFieldValue,
                  } = props;

                  return (
                    <Form onKeyDown={onKeyDown}>
                      <Grid container rowSpacing={2} columnSpacing={4}>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              First Name
                            </SubHeading>
                            <PrimaryInput
                              type="text"
                              label=""
                              name="firstName"
                              placeholder="First Name"
                              value={values.firstName}
                              helperText={
                                errors.firstName && touched.firstName
                                  ? errors.firstName
                                  : ""
                              }
                              error={
                                errors.firstName && touched.firstName
                                  ? true
                                  : false
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Last Name
                            </SubHeading>
                            <PrimaryInput
                              type="text"
                              label=""
                              name="lastName"
                              placeholder="Last Name"
                              value={values.lastName}
                              helperText={
                                errors.lastName && touched.lastName
                                  ? errors.lastName
                                  : ""
                              }
                              error={
                                errors.lastName && touched.lastName
                                  ? true
                                  : false
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Mobile Number
                            </SubHeading>
                            <PrimaryPhoneInput
                              value={values.phoneNumber}
                              name="phoneNumber"
                              formik={props}
                              variant="outlined"
                              label=""
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Website
                            </SubHeading>
                            <PrimaryInput
                              type="text"
                              label=""
                              name="website"
                              placeholder="Website"
                              value={values.website}
                              helperText={
                                errors.website && touched.website
                                  ? errors.website
                                  : ""
                              }
                              error={
                                errors.website && touched.website ? true : false
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Address
                            </SubHeading>
                            <PrimaryInput
                              type="text"
                              label=""
                              name="address"
                              placeholder="Address"
                              value={values.address}
                              helperText={
                                errors.address && touched.address
                                  ? errors.address
                                  : ""
                              }
                              error={
                                errors.address && touched.address ? true : false
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Grid>
                      </Grid>
                      <SubHeading sx={{ margin: "20px 0", fontSize: "17px" }}>
                        Professional Information
                      </SubHeading>

                      <Grid container rowSpacing={2} columnSpacing={4}>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Specialization
                            </SubHeading>
                            <PrimaryInput
                              type="text"
                              label=""
                              name="specialization"
                              placeholder="Specialization"
                              value={values.specialization}
                              helperText={
                                errors.specialization && touched.specialization
                                  ? errors.specialization
                                  : ""
                              }
                              error={
                                errors.specialization && touched.specialization
                                  ? true
                                  : false
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Experience
                            </SubHeading>
                            <PrimaryInput
                              type="number"
                              label=""
                              name="experience"
                              placeholder="Experience"
                              value={values.experience}
                              helperText={
                                errors.experience && touched.experience
                                  ? errors.experience
                                  : ""
                              }
                              error={
                                errors.experience && touched.experience
                                  ? true
                                  : false
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Grid>

                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Fee Per Consultation
                            </SubHeading>
                            <PrimaryInput
                              type="number"
                              label=""
                              name="feePerConsultation"
                              placeholder="Fee Per Consultation"
                              value={values.feePerConsultation}
                              helperText={
                                errors.feePerConsultation &&
                                touched.feePerConsultation
                                  ? errors.feePerConsultation
                                  : ""
                              }
                              error={
                                errors.feePerConsultation &&
                                touched.feePerConsultation
                                  ? true
                                  : false
                              }
                              onChange={handleChange}
                              onBlur={handleBlur}
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              Start Time
                            </SubHeading>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <Stack spacing={3}>
                                <TimePicker
                                  label=""
                                  value={values.fromTime}
                                  onChange={(value) => {
                                    setFieldValue("fromTime", value);
                                  }}
                                />
                              </Stack>
                              {errors.fromTime && touched.fromTime && (
                                <Box
                                  sx={{
                                    color: "#d32f2f",
                                    marginLeft: "2px",
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  {errors.fromTime}
                                </Box>
                              )}
                            </LocalizationProvider>
                          </Box>
                        </Grid>
                        <Grid item xs={4}>
                          <Box sx={{ marginBottom: "10px" }}>
                            <SubHeading sx={{ marginBottom: "5px" }}>
                              End Time
                            </SubHeading>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <Stack spacing={3}>
                                <TimePicker
                                  label=""
                                  value={values.toTime}
                                  onChange={(value) => {
                                    setFieldValue("toTime", value);
                                  }}
                                />
                              </Stack>
                              {errors.toTime && touched.toTime && (
                                <Box
                                  sx={{
                                    color: "#d32f2f",
                                    marginLeft: "2px",
                                    fontSize: "0.7rem",
                                  }}
                                >
                                  {errors.toTime}
                                </Box>
                              )}
                            </LocalizationProvider>
                          </Box>
                        </Grid>
                      </Grid>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "end",
                          marginTop: "20px",
                        }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          disabled={isLoading}
                          sx={{
                            padding: "5px 30px",
                            textTransform: "capitalize",
                            margin: "20px 0",
                          }}
                        >
                          {isLoading ? "Apply..." : "Apply"}
                        </Button>
                      </Box>
                    </Form>
                  );
                }}
              </Formik>
            </Box>
          </Box>
        </Box>
      </Navbar>
      <ToastAlert
        appearence={toast.appearence}
        type={toast.type}
        message={toast.message}
        handleClose={handleCloseToast}
      />
    </div>
  );
};

export default ApplyDoctor;
