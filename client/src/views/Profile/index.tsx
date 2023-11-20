import { useState, useEffect } from "react";
import { Box, Button, Grid, Stack } from "@mui/material";
import Navbar from "../../components/Navbar";
import OverlayLoader from "../../components/Spinner/OverlayLoader";
import { Heading, SubHeading } from "../../components/Heading";
import ToastAlert from "../../components/ToastAlert/ToastAlert";
import { useGetUserQuery } from "../../redux/api/userSlice";
import { selectedUserId } from "../../redux/auth/authSlice";
import useTypedSelector from "../../hooks/useTypedSelector";
import { Form, Formik, FormikProps } from "formik";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import PrimaryPhoneInput from "../../components/PhoneInput";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { onKeyDown } from "../../utils";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { applyDoctorSchema } from "../ApplyDoctor/components/validationSchema";
import { useUpdateDoctorMutation } from "../../redux/api/doctorSlice";

interface ProfileForm {
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

const stepsStyle = {
  position: "absolute",
  background: "#5bc0de ",
  color: "#fff",
  left: "-40px",
  width: "35px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderTopLeftRadius: "10px",
  borderBottomRightRadius: "10px",
};

const Profile = () => {
  const userId = useTypedSelector(selectedUserId);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [formValues, setFormValues] = useState<ProfileForm>({
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

  const {
    data,
    isLoading,
    isSuccess,
    refetch: refetchUser,
  } = useGetUserQuery({
    userId,
  });

  useEffect(() => {
    if (isSuccess) {
      setFormValues({
        firstName: data?.data?.firstName,
        lastName: data?.data?.lastName,
        phoneNumber: data?.data?.phoneNumber,
        website: data?.data?.website,
        address: data?.data?.address,
        specialization: data?.data?.specialization,
        experience: data?.data?.experience,
        feePerConsultation: data?.data?.feePerConsultation,
        fromTime: data?.data?.fromTime,
        toTime: data?.data?.toTime,
      });
    }
  }, [data, isSuccess]);

  const [updateProfile, { isLoading: profileLoading }] =
    useUpdateDoctorMutation({});

  const profileHandler = async (data: ProfileForm) => {
    try {
      const payload = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        phoneNumber: data?.phoneNumber,
        website: data?.website,
        address: data?.address,
        specialization: data?.specialization,
        experience: data?.experience,
        feePerConsultation: data?.feePerConsultation,
        fromTime: data?.fromTime,
        toTime: data?.toTime,
      };
      const response: any = await updateProfile({
        userId,
        body: payload,
      });

      if (response?.data?.status) {
        refetchUser();
        setToast({
          ...toast,
          message: "Profile updated successfully",
          appearence: true,
          type: "success",
        });
      }
      if (response?.error) {
        setToast({
          ...toast,
          message: response?.error?.data?.message,
          appearence: true,
          type: "error",
        });
      }
    } catch (error) {
      setToast({
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
        <Box>
          <Heading>Profile</Heading>
          <Box
            sx={{
              margin: "20px 0",
              background: "#fff",
              borderRadius: "6px",
              padding: "20px 25px",
              boxShadow: "rgba(0, 0, 0, 0.16) 3px 16px 87px 0px",
            }}
          >
            <SubHeading
              sx={{
                marginBottom: "20px",
                fontSize: "17px",
                position: "relative",
              }}
            >
              <Box sx={stepsStyle}>1</Box>
              Basic Information
            </SubHeading>
            <Box>
              <Formik
                initialValues={formValues}
                onSubmit={(values: ProfileForm) => {
                  profileHandler(values);
                }}
                validationSchema={applyDoctorSchema}
                enableReinitialize
              >
                {(props: FormikProps<ProfileForm>) => {
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
                      <SubHeading
                        sx={{
                          margin: "20px 0",
                          fontSize: "17px",
                          position: "relative",
                        }}
                      >
                        <Box sx={stepsStyle}>2</Box>
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
                          disabled={profileLoading}
                          sx={{
                            padding: "5px 30px",
                            textTransform: "capitalize",
                            margin: "20px 0",
                          }}
                        >
                          {profileLoading ? "Update..." : "Update"}
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
    </>
  );
};

export default Profile;
