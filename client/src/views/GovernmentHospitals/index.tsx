// // // // src/views/GovernmentHospitals/index.tsx
// // // import React, { useState } from "react";
// // // import { Heading } from "../../components/Heading";

// // // interface Hospital {
// // //   name: string;
// // //   address: string;
// // // }

// // // const hospitalData: Record<string, Hospital[]> = {
// // //   Pune: [
// // //     {
// // //       name: "Sassoon General Hospital",
// // //       address: "Marg, Near Wanowrie, Pune, Maharashtra 411040",
// // //     },
// // //     {
// // //       name: "Deenanath Mangeshkar Hospital",
// // //       address: "Erandwane, Pune, Maharashtra 411004",
// // //     },
// // //     {
// // //       name: "Yerwada Civil Hospital",
// // //       address: "Yerwada, Pune, Maharashtra 411006",
// // //     },
// // //   ],
// // //   Mumbai: [
// // //     {
// // //       name: "KEM Hospital (King Edward Memorial Hospital)",
// // //       address: "Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012",
// // //     },
// // //     {
// // //       name: "Sion Hospital (Lokmanya Tilak Municipal General Hospital)",
// // //       address: "Sion, Mumbai, Maharashtra 400022",
// // //     },
// // //     {
// // //       name: "J J Hospital (Sir Jamshedjee Jeejeebhoy Group of Hospitals)",
// // //       address: "Byculla, Mumbai, Maharashtra 400008",
// // //     },
// // //   ],
// // //   Delhi: [
// // //     {
// // //       name: "Safdarjung Hospital",
// // //       address: "Ring Rd, New Delhi, Delhi 110029",
// // //     },
// // //     {
// // //       name: "AIIMS (All India Institute of Medical Sciences)",
// // //       address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi 110029",
// // //     },
// // //   ],
// // // };

// // // const GovernmentHospitals: React.FC = () => {
// // //   const [city, setCity] = useState<string>("Pune");
// // //   const hospitals = hospitalData[city] || [];

// // //   return (
// // //     <div className="p-4">
// // //       {/* Use children instead of title prop per Heading API */}
// // //       <Heading>Government Hospitals</Heading>

// // //       <div className="my-4">
// // //         <label htmlFor="city" className="block mb-2 font-medium">
// // //           Select City:
// // //         </label>
// // //         <select
// // //           id="city"
// // //           value={city}
// // //           onChange={(e) => setCity(e.target.value)}
// // //           className="border border-gray-300 rounded p-2 w-full max-w-xs"
// // //         >
// // //           {Object.keys(hospitalData).map((cityName) => (
// // //             <option key={cityName} value={cityName}>
// // //               {cityName}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>

// // //       {hospitals.length === 0 ? (
// // //         <p>No hospitals found for {city}.</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // //           {hospitals.map((h, idx) => (
// // //             <div key={idx} className="border rounded p-4 shadow">
// // //               <h2 className="text-xl font-semibold mb-2">{h.name}</h2>
// // //               <p className="text-gray-700">{h.address}</p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default GovernmentHospitals;
// // // import React, { useState } from "react";
// // // import {
// // //   Box,
// // //   Typography,
// // //   FormControl,
// // //   InputLabel,
// // //   Select,
// // //   MenuItem,
// // //   Grid,
// // //   Card,
// // //   CardContent,
// // //   CardActions,
// // //   Button,
// // //   Chip,
// // // } from "@mui/material";
// // // import LocationOnIcon from "@mui/icons-material/LocationOn";
// // // import PhoneIcon from "@mui/icons-material/Phone";
// // // import AccessTimeIcon from "@mui/icons-material/AccessTime";
// // // import CheckBoxIcon from "@mui/icons-material/CheckBox";
// // // import DirectionsIcon from "@mui/icons-material/Directions";

// // // interface Hospital {
// // //   name: string;
// // //   address: string;
// // //   phone: string;
// // //   facilities: string[];
// // //   visitingHours: string;
// // // }

// // // const hospitalData: Record<string, Hospital[]> = {
// // //   Pune: [
// // //     {
// // //       name: "Sassoon General Hospital",
// // //       address: "Marg, Near Wanowrie, Pune, Maharashtra 411040",
// // //       phone: "+91-20-26121650",
// // //       facilities: ["Emergency", "OPD", "Inpatient", "ICU"],
// // //       visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
// // //     },
// // //     {
// // //       name: "Deenanath Mangeshkar Hospital",
// // //       address: "Erandwane, Pune, Maharashtra 411004",
// // //       phone: "+91-20-25431000",
// // //       facilities: ["Emergency", "MRI", "Dialysis", "Pharmacy"],
// // //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// // //     },
// // //     {
// // //       name: "Yerwada Civil Hospital",
// // //       address: "Yerwada, Pune, Maharashtra 411006",
// // //       phone: "+91-20-20203101",
// // //       facilities: ["Emergency", "Surgery", "Maternity", "Blood Bank"],
// // //       visitingHours: "9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
// // //     },
// // //   ],
// // //   Mumbai: [
// // //     {
// // //       name: "KEM Hospital (King Edward Memorial Hospital)",
// // //       address: "Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012",
// // //       phone: "+91-22-24138500",
// // //       facilities: ["Emergency", "Cardiology", "Nephrology", "Pharmacy"],
// // //       visitingHours: "10:00 AM - 12:00 PM, 4:30 PM - 6:30 PM",
// // //     },
// // //     {
// // //       name: "Sion Hospital (Lokmanya Tilak Municipal General Hospital)",
// // //       address: "Sion, Mumbai, Maharashtra 400022",
// // //       phone: "+91-22-24021361",
// // //       facilities: ["Emergency", "Neurosurgery", "Trauma Care", "Blood Bank"],
// // //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// // //     },
// // //     {
// // //       name: "J J Hospital (Sir Jamshedjee Jeejeebhoy Group of Hospitals)",
// // //       address: "Byculla, Mumbai, Maharashtra 400008",
// // //       phone: "+91-22-23735911",
// // //       facilities: ["Emergency", "Oncology", "Pediatrics", "Radiology"],
// // //       visitingHours: "9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
// // //     },
// // //   ],
// // //   Delhi: [
// // //     {
// // //       name: "Safdarjung Hospital",
// // //       address: "Ring Rd, New Delhi, Delhi 110029",
// // //       phone: "+91-11-26101620",
// // //       facilities: ["Emergency", "Trauma Care", "Diagnostics", "Pharmacy"],
// // //       visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
// // //     },
// // //     {
// // //       name: "AIIMS (All India Institute of Medical Sciences)",
// // //       address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi 110029",
// // //       phone: "+91-11-26588500",
// // //       facilities: ["Emergency", "Transplant", "Research Lab", "Outpatient"],
// // //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// // //     },
// // //   ],
// // // };

// // // const GovernmentHospitals: React.FC = () => {
// // //   const [city, setCity] = useState<string>("Pune");
// // //   const hospitals = hospitalData[city] || [];

// // //   return (
// // //     <Box p={4} bgcolor="background.default" minHeight="100vh">
// // //       <Typography variant="h4" gutterBottom>
// // //         Government Hospitals Directory
// // //       </Typography>

// // //       <FormControl variant="outlined" sx={{ mb: 4, minWidth: 200 }}>
// // //         <InputLabel id="city-select-label">Select City</InputLabel>
// // //         <Select
// // //           labelId="city-select-label"
// // //           value={city}
// // //           onChange={(e) => setCity(e.target.value as string)}
// // //           label="Select City"
// // //         >
// // //           {Object.keys(hospitalData).map((cityName) => (
// // //             <MenuItem key={cityName} value={cityName}>
// // //               {cityName}
// // //             </MenuItem>
// // //           ))}
// // //         </Select>
// // //       </FormControl>

// // //       <Grid container spacing={4}>
// // //         {hospitals.map((h, idx) => {
// // //           const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
// // //             h.address
// // //           )}`;

// // //           return (
// // //             <Grid item xs={12} sm={6} md={4} key={idx}>
// // //               <Card
// // //                 elevation={3}
// // //                 sx={{
// // //                   height: "100%",
// // //                   display: "flex",
// // //                   flexDirection: "column",
// // //                 }}
// // //               >
// // //                 <CardContent sx={{ flexGrow: 1 }}>
// // //                   <Typography variant="h6" gutterBottom color="primary">
// // //                     {h.name}
// // //                   </Typography>
// // //                   <Typography
// // //                     variant="body2"
// // //                     color="textSecondary"
// // //                     sx={{ display: "flex", alignItems: "center", mb: 1 }}
// // //                   >
// // //                     <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
// // //                     {h.address}
// // //                   </Typography>
// // //                   <Typography
// // //                     variant="body2"
// // //                     color="textSecondary"
// // //                     sx={{ display: "flex", alignItems: "center", mb: 1 }}
// // //                   >
// // //                     <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
// // //                     {h.phone}
// // //                   </Typography>
// // //                   <Typography
// // //                     variant="body2"
// // //                     color="textSecondary"
// // //                     sx={{ display: "flex", alignItems: "center", mb: 2 }}
// // //                   >
// // //                     <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
// // //                     Visiting Hours: {h.visitingHours}
// // //                   </Typography>

// // //                   <Box sx={{ mb: 2 }}>
// // //                     {h.facilities.map((f, i) => (
// // //                       <Chip
// // //                         key={i}
// // //                         icon={<CheckBoxIcon />}
// // //                         label={f}
// // //                         variant="outlined"
// // //                         size="small"
// // //                         sx={{ mr: 1, mb: 1 }}
// // //                       />
// // //                     ))}
// // //                   </Box>
// // //                 </CardContent>
// // //                 <CardActions>
// // //                   <Button
// // //                     size="small"
// // //                     endIcon={<DirectionsIcon />}
// // //                     href={mapsUrl}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                   >
// // //                     Directions
// // //                   </Button>
// // //                 </CardActions>
// // //               </Card>
// // //             </Grid>
// // //           );
// // //         })}
// // //       </Grid>
// // //     </Box>
// // //   );
// // // };

// // // export default GovernmentHospitals;

// // // import React, { useState } from "react";
// // // import {
// // //   Box,
// // //   Typography,
// // //   FormControl,
// // //   InputLabel,
// // //   Select,
// // //   MenuItem,
// // //   Grid,
// // //   Card,
// // //   CardContent,
// // //   CardActions,
// // //   Button,
// // //   Chip,
// // // } from "@mui/material";
// // // import LocationOnIcon from "@mui/icons-material/LocationOn";
// // // import PhoneIcon from "@mui/icons-material/Phone";
// // // import AccessTimeIcon from "@mui/icons-material/AccessTime";
// // // import CheckBoxIcon from "@mui/icons-material/CheckBox";
// // // import DirectionsIcon from "@mui/icons-material/Directions";

// // // interface Hospital {
// // //   name: string;
// // //   address: string;
// // //   phone: string;
// // //   facilities: string[];
// // //   visitingHours: string;
// // //   lat: number;
// // //   lng: number;
// // // }

// // // const hospitalData: Record<string, Hospital[]> = {
// // //   Pune: [
// // //     {
// // //       name: "Sassoon General Hospital",
// // //       address: "Marg, Near Wanowrie, Pune, Maharashtra 411040",
// // //       phone: "+91-20-26121650",
// // //       facilities: ["Emergency", "OPD", "Inpatient", "ICU"],
// // //       visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
// // //       lat: 18.525946684132727,
// // //       lng: 73.8706986082799,
// // //     },
// // //     {
// // //       name: "Deenanath Mangeshkar Hospital",
// // //       address: "Erandwane, Pune, Maharashtra 411004",
// // //       phone: "+91-20-25431000",
// // //       facilities: ["Emergency", "MRI", "Dialysis", "Pharmacy"],
// // //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// // //       lat: 18.502007822700648,
// // //       lng: 73.83273356672994,
// // //     },
// // //     {
// // //       name: "Yerwada Civil Hospital",
// // //       address: "Yerwada, Pune, Maharashtra 411006",
// // //       phone: "+91-20-20203101",
// // //       facilities: ["Emergency", "Surgery", "Maternity", "Blood Bank"],
// // //       visitingHours: "9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
// // //       lat: 18.5549,
// // //       lng: 73.8797,
// // //     },
// // //   ],
// // //   Mumbai: [
// // //     {
// // //       name: "KEM Hospital (King Edward Memorial Hospital)",
// // //       address: "Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012",
// // //       phone: "+91-22-24138500",
// // //       facilities: ["Emergency", "Cardiology", "Nephrology", "Pharmacy"],
// // //       visitingHours: "10:00 AM - 12:00 PM, 4:30 PM - 6:30 PM",
// // //       lat: 18.9982,
// // //       lng: 72.8405,
// // //     },
// // //     {
// // //       name: "Sion Hospital (Lokmanya Tilak Municipal General Hospital)",
// // //       address: "Sion, Mumbai, Maharashtra 400022",
// // //       phone: "+91-22-24021361",
// // //       facilities: ["Emergency", "Neurosurgery", "Trauma Care", "Blood Bank"],
// // //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// // //       lat: 19.039,
// // //       lng: 72.861,
// // //     },
// // //     {
// // //       name: "J J Hospital (Sir Jamshedjee Jeejeebhoy Group of Hospitals)",
// // //       address: "Byculla, Mumbai, Maharashtra 400008",
// // //       phone: "+91-22-23735911",
// // //       facilities: ["Emergency", "Oncology", "Pediatrics", "Radiology"],
// // //       visitingHours: "9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
// // //       lat: 18.9698,
// // //       lng: 72.8359,
// // //     },
// // //   ],
// // //   Delhi: [
// // //     {
// // //       name: "Safdarjung Hospital",
// // //       address: "Ring Rd, New Delhi, Delhi 110029",
// // //       phone: "+91-11-26101620",
// // //       facilities: ["Emergency", "Trauma Care", "Diagnostics", "Pharmacy"],
// // //       visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
// // //       lat: 28.5675,
// // //       lng: 77.2011,
// // //     },
// // //     {
// // //       name: "AIIMS (All India Institute of Medical Sciences)",
// // //       address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi 110029",
// // //       phone: "+91-11-26588500",
// // //       facilities: ["Emergency", "Transplant", "Research Lab", "Outpatient"],
// // //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// // //       lat: 28.5673,
// // //       lng: 77.2091,
// // //     },
// // //   ],
// // // };

// // // const GovernmentHospitals: React.FC = () => {
// // //   const [city, setCity] = useState<string>("Pune");
// // //   const hospitals = hospitalData[city] || [];

// // //   return (
// // //     <Box p={4} bgcolor="background.default" minHeight="100vh">
// // //       <Typography variant="h4" gutterBottom>
// // //         Government Hospitals Directory
// // //       </Typography>

// // //       <FormControl variant="outlined" sx={{ mb: 4, minWidth: 200 }}>
// // //         <InputLabel id="city-select-label">Select City</InputLabel>
// // //         <Select
// // //           labelId="city-select-label"
// // //           value={city}
// // //           onChange={(e) => setCity(e.target.value as string)}
// // //           label="Select City"
// // //         >
// // //           {Object.keys(hospitalData).map((cityName) => (
// // //             <MenuItem key={cityName} value={cityName}>
// // //               {cityName}
// // //             </MenuItem>
// // //           ))}
// // //         </Select>
// // //       </FormControl>

// // //       <Grid container spacing={4}>
// // //         {hospitals.map((h, idx) => {
// // //           const mapsUrl = `https://www.google.com/maps?q=${h.lat},${h.lng}`;

// // //           return (
// // //             <Grid item xs={12} sm={6} md={4} key={idx}>
// // //               <Card
// // //                 elevation={3}
// // //                 sx={{
// // //                   height: "100%",
// // //                   display: "flex",
// // //                   flexDirection: "column",
// // //                 }}
// // //               >
// // //                 <CardContent sx={{ flexGrow: 1 }}>
// // //                   <Typography variant="h6" gutterBottom color="primary">
// // //                     {h.name}
// // //                   </Typography>
// // //                   <Typography
// // //                     variant="body2"
// // //                     color="textSecondary"
// // //                     sx={{ display: "flex", alignItems: "center", mb: 1 }}
// // //                   >
// // //                     <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
// // //                     {h.address}
// // //                   </Typography>
// // //                   <Typography
// // //                     variant="body2"
// // //                     color="textSecondary"
// // //                     sx={{ display: "flex", alignItems: "center", mb: 1 }}
// // //                   >
// // //                     <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
// // //                     {h.phone}
// // //                   </Typography>
// // //                   <Typography
// // //                     variant="body2"
// // //                     color="textSecondary"
// // //                     sx={{ display: "flex", alignItems: "center", mb: 2 }}
// // //                   >
// // //                     <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
// // //                     Visiting Hours: {h.visitingHours}
// // //                   </Typography>

// // //                   <Box sx={{ mb: 2 }}>
// // //                     {h.facilities.map((f, i) => (
// // //                       <Chip
// // //                         key={i}
// // //                         icon={<CheckBoxIcon />}
// // //                         label={f}
// // //                         variant="outlined"
// // //                         size="small"
// // //                         sx={{ mr: 1, mb: 1 }}
// // //                       />
// // //                     ))}
// // //                   </Box>
// // //                 </CardContent>
// // //                 <CardActions>
// // //                   <Button
// // //                     size="small"
// // //                     endIcon={<DirectionsIcon />}
// // //                     href={mapsUrl}
// // //                     target="_blank"
// // //                     rel="noopener noreferrer"
// // //                   >
// // //                     Directions
// // //                   </Button>
// // //                 </CardActions>
// // //               </Card>
// // //             </Grid>
// // //           );
// // //         })}
// // //       </Grid>
// // //     </Box>
// // //   );
// // // };

// // // export default GovernmentHospitals;

// // import React, { useState } from "react";
// // import {
// //   Box,
// //   Typography,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// //   Grid,
// //   Card,
// //   CardContent,
// //   CardActions,
// //   Button,
// //   Chip,
// // } from "@mui/material";
// // import LocationOnIcon from "@mui/icons-material/LocationOn";
// // import PhoneIcon from "@mui/icons-material/Phone";
// // import AccessTimeIcon from "@mui/icons-material/AccessTime";
// // import CheckBoxIcon from "@mui/icons-material/CheckBox";
// // import DirectionsIcon from "@mui/icons-material/Directions";

// // interface Hospital {
// //   name: string;
// //   address: string;
// //   phone: string;
// //   facilities: string[];
// //   visitingHours: string;
// //   lat: number;
// //   lng: number;
// // }

// // const hospitalData: Record<string, Hospital[]> = {
// //   Pune: [
// //     {
// //       name: "Sassoon General Hospital",
// //       address: "Marg, Near Wanowrie, Pune, Maharashtra 411040",
// //       phone: "+91-20-26121650",
// //       facilities: ["Emergency", "OPD", "Inpatient", "ICU"],
// //       visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
// //       lat: 18.525946684132727,
// //       lng: 73.8706986082799,
// //     },
// //     {
// //       name: "Deenanath Mangeshkar Hospital",
// //       address: "Erandwane, Pune, Maharashtra 411004",
// //       phone: "+91-20-25431000",
// //       facilities: ["Emergency", "MRI", "Dialysis", "Pharmacy"],
// //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// //       lat: 18.502007822700648,
// //       lng: 73.83273356672994,
// //     },
// //     {
// //       name: "Yerwada Civil Hospital",
// //       address: "Yerwada, Pune, Maharashtra 411006",
// //       phone: "+91-20-20203101",
// //       facilities: ["Emergency", "Surgery", "Maternity", "Blood Bank"],
// //       visitingHours: "9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
// //       lat: 18.5549032,
// //       lng: 73.8796581,
// //     },
// //     {
// //       name: "Ruby Hall Clinic (Grant Medical Foundation)",
// //       address: "40, Sassoon Road, Pune, Maharashtra 411001",
// //       phone: "+91-20-66455555",
// //       facilities: ["Cardiology", "Oncology", "Neurology", "Transplant"],
// //       visitingHours: "10:00 AM - 7:00 PM",
// //       lat: 18.5174873,
// //       lng: 73.8662481,
// //     },
// //   ],
// //   Mumbai: [
// //     {
// //       name: "KEM Hospital (King Edward Memorial Hospital)",
// //       address: "Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012",
// //       phone: "+91-22-24138500",
// //       facilities: ["Emergency", "Cardiology", "Nephrology", "Pharmacy"],
// //       visitingHours: "10:00 AM - 12:00 PM, 4:30 PM - 6:30 PM",
// //       lat: 19.0016145,
// //       lng: 72.8407336,
// //     },
// //     {
// //       name: "Sion Hospital (Lokmanya Tilak Municipal General Hospital)",
// //       address: "Sion, Mumbai, Maharashtra 400022",
// //       phone: "+91-22-24021361",
// //       facilities: ["Emergency", "Neurosurgery", "Trauma Care", "Blood Bank"],
// //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// //       lat: 19.0390664,
// //       lng: 72.8609197,
// //     },
// //     {
// //       name: "J J Hospital (Sir Jamshedjee Jeejeebhoy Group of Hospitals)",
// //       address: "Byculla, Mumbai, Maharashtra 400008",
// //       phone: "+91-22-23735911",
// //       facilities: ["Emergency", "Oncology", "Pediatrics", "Radiology"],
// //       visitingHours: "9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
// //       lat: 18.9698044,
// //       lng: 72.8359517,
// //     },
// //     {
// //       name: "Cooper Hospital",
// //       address: "Bhaktivedanta Swami Marg, Juhu, Mumbai 400049",
// //       phone: "+91-22-26207254",
// //       facilities: ["Trauma Care", "Burn Unit", "Orthopedics", "Pediatrics"],
// //       visitingHours: "10:00 AM - 1:00 PM, 4:00 PM - 6:00 PM",
// //       lat: 19.1159364,
// //       lng: 72.8255331,
// //     },
// //   ],
// //   Delhi: [
// //     {
// //       name: "Safdarjung Hospital",
// //       address: "Ring Rd, New Delhi, Delhi 110029",
// //       phone: "+91-11-26101620",
// //       facilities: ["Emergency", "Trauma Care", "Diagnostics", "Pharmacy"],
// //       visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
// //       lat: 28.5676145,
// //       lng: 77.2011719,
// //     },
// //     {
// //       name: "AIIMS (All India Institute of Medical Sciences)",
// //       address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi 110029",
// //       phone: "+91-11-26588500",
// //       facilities: ["Emergency", "Transplant", "Research Lab", "Outpatient"],
// //       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
// //       lat: 28.5661654,
// //       lng: 77.2061343,
// //     },
// //     {
// //       name: "Lady Hardinge Medical College",
// //       address: "Connaught Place, New Delhi 110001",
// //       phone: "+91-11-23344371",
// //       facilities: ["Maternity", "Pediatrics", "Gynecology", "Neonatal"],
// //       visitingHours: "9:00 AM - 12:00 PM, 2:00 PM - 4:00 PM",
// //       lat: 28.6349148,
// //       lng: 77.2164603,
// //     },
// //   ],
// //   Bangalore: [
// //     {
// //       name: "Victoria Hospital",
// //       address: "Fort Rd, Near City Market, Bengaluru 560002",
// //       phone: "+91-80-26701110",
// //       facilities: ["Emergency", "Trauma Care", "Cancer Center", "Blood Bank"],
// //       visitingHours: "10:00 AM - 1:00 PM, 3:00 PM - 5:00 PM",
// //       lat: 12.9617257,
// //       lng: 77.5747392,
// //     },
// //     {
// //       name: "Bowring & Lady Curzon Hospital",
// //       address: "Shivaji Nagar, Bengaluru 560001",
// //       phone: "+91-80-25591363",
// //       facilities: ["Dialysis", "Cardiology", "Orthopedics", "ICU"],
// //       visitingHours: "9:30 AM - 12:30 PM, 4:00 PM - 6:00 PM",
// //       lat: 12.9778393,
// //       lng: 77.5963617,
// //     },
// //     {
// //       name: "KC General Hospital",
// //       address: "Malleshwaram, Bengaluru 560003",
// //       phone: "+91-80-23341631",
// //       facilities: ["Pediatrics", "Maternity", "Surgery", "Radiology"],
// //       visitingHours: "10:00 AM - 1:00 PM, 3:30 PM - 5:30 PM",
// //       lat: 13.0048764,
// //       lng: 77.5782103,
// //     },
// //   ],
// // };

// // const GovernmentHospitals: React.FC = () => {
// //   const [city, setCity] = useState<string>("Pune");
// //   const hospitals = hospitalData[city] || [];

// //   return (
// //     <Box p={4} bgcolor="background.default" minHeight="100vh">
// //       <Typography variant="h4" gutterBottom>
// //         Government Hospitals Directory
// //       </Typography>

// //       <FormControl variant="outlined" sx={{ mb: 4, minWidth: 200 }}>
// //         <InputLabel id="city-select-label">Select City</InputLabel>
// //         <Select
// //           labelId="city-select-label"
// //           value={city}
// //           onChange={(e) => setCity(e.target.value as string)}
// //           label="Select City"
// //         >
// //           {Object.keys(hospitalData).map((cityName) => (
// //             <MenuItem key={cityName} value={cityName}>
// //               {cityName}
// //             </MenuItem>
// //           ))}
// //         </Select>
// //       </FormControl>

// //       <Grid container spacing={4}>
// //         {hospitals.map((h, idx) => {
// //           const mapsUrl = `https://www.google.com/maps?q=${h.lat},${h.lng}&z=17&layer=1`;

// //           return (
// //             <Grid item xs={12} sm={6} md={4} key={idx}>
// //               <Card
// //                 elevation={3}
// //                 sx={{
// //                   height: "100%",
// //                   display: "flex",
// //                   flexDirection: "column",
// //                 }}
// //               >
// //                 <CardContent sx={{ flexGrow: 1 }}>
// //                   <Typography variant="h6" gutterBottom color="primary">
// //                     {h.name}
// //                   </Typography>
// //                   <Typography
// //                     variant="body2"
// //                     color="textSecondary"
// //                     sx={{ display: "flex", alignItems: "center", mb: 1 }}
// //                   >
// //                     <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
// //                     {h.address}
// //                   </Typography>
// //                   <Typography
// //                     variant="body2"
// //                     color="textSecondary"
// //                     sx={{ display: "flex", alignItems: "center", mb: 1 }}
// //                   >
// //                     <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
// //                     {h.phone}
// //                   </Typography>
// //                   <Typography
// //                     variant="body2"
// //                     color="textSecondary"
// //                     sx={{ display: "flex", alignItems: "center", mb: 2 }}
// //                   >
// //                     <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
// //                     Visiting Hours: {h.visitingHours}
// //                   </Typography>

// //                   <Box sx={{ mb: 2 }}>
// //                     {h.facilities.map((f, i) => (
// //                       <Chip
// //                         key={i}
// //                         icon={<CheckBoxIcon />}
// //                         label={f}
// //                         variant="outlined"
// //                         size="small"
// //                         sx={{ mr: 1, mb: 1 }}
// //                       />
// //                     ))}
// //                   </Box>
// //                 </CardContent>
// //                 <CardActions>
// //                   <Button
// //                     size="small"
// //                     endIcon={<DirectionsIcon />}
// //                     href={mapsUrl}
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                   >
// //                     Directions
// //                   </Button>
// //                 </CardActions>
// //               </Card>
// //             </Grid>
// //           );
// //         })}
// //       </Grid>
// //     </Box>
// //   );
// // };

// // export default GovernmentHospitals;

// import React, { useState } from "react";
// import {
//   Box,
//   Typography,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Button,
//   Chip,
//   useTheme,
// } from "@mui/material";
// import {
//   LocationOn,
//   Phone,
//   AccessTime,
//   CheckBox,
//   Directions,
// } from "@mui/icons-material";

// interface Hospital {
//   name: string;
//   address: string;
//   phone: string;
//   facilities: string[];
//   visitingHours: string;
//   lat: number;
//   lng: number;
// }

// const hospitalData: Record<string, Hospital[]> = {
//   Pune: [
//     {
//       name: "Sassoon General Hospital",
//       address: "Marg, Near Wanowrie, Pune, Maharashtra 411040",
//       phone: "+91-20-26121650",
//       facilities: ["Emergency", "OPD", "Inpatient", "ICU"],
//       visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
//       lat: 18.525946684132727,
//       lng: 73.8706986082799,
//     },
//     {
//       name: "Deenanath Mangeshkar Hospital",
//       address: "Erandwane, Pune, Maharashtra 411004",
//       phone: "+91-20-25431000",
//       facilities: ["Emergency", "MRI", "Dialysis", "Pharmacy"],
//       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
//       lat: 18.502007822700648,
//       lng: 73.83273356672994,
//     },
//     {
//       name: "Yerwada Civil Hospital",
//       address: "Yerwada, Pune, Maharashtra 411006",
//       phone: "+91-20-20203101",
//       facilities: ["Emergency", "Surgery", "Maternity", "Blood Bank"],
//       visitingHours: "9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
//       lat: 18.5549032,
//       lng: 73.8796581,
//     },
//   ],
//   Mumbai: [
//     {
//       name: "KEM Hospital (King Edward Memorial Hospital)",
//       address: "Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012",
//       phone: "+91-22-24138500",
//       facilities: ["Emergency", "Cardiology", "Nephrology", "Pharmacy"],
//       visitingHours: "10:00 AM - 12:00 PM, 4:30 PM - 6:30 PM",
//       lat: 19.0016145,
//       lng: 72.8407336,
//     },
//     {
//       name: "Sion Hospital (Lokmanya Tilak Municipal General Hospital)",
//       address: "Sion, Mumbai, Maharashtra 400022",
//       phone: "+91-22-24021361",
//       facilities: ["Emergency", "Neurosurgery", "Trauma Care", "Blood Bank"],
//       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
//       lat: 19.0390664,
//       lng: 72.8609197,
//     },
//   ],
//   Delhi: [
//     {
//       name: "Safdarjung Hospital",
//       address: "Ring Rd, New Delhi, Delhi 110029",
//       phone: "+91-11-26101620",
//       facilities: ["Emergency", "Trauma Care", "Diagnostics", "Pharmacy"],
//       visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
//       lat: 28.5676145,
//       lng: 77.2011719,
//     },
//     {
//       name: "AIIMS (All India Institute of Medical Sciences)",
//       address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi, Delhi 110029",
//       phone: "+91-11-26588500",
//       facilities: ["Emergency", "Transplant", "Research Lab", "Outpatient"],
//       visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
//       lat: 28.5661654,
//       lng: 77.2061343,
//     },
//   ],
//   Bangalore: [
//     {
//       name: "Victoria Hospital",
//       address: "Fort Rd, Near City Market, Bengaluru 560002",
//       phone: "+91-80-26701110",
//       facilities: ["Emergency", "Trauma Care", "Cancer Center", "Blood Bank"],
//       visitingHours: "10:00 AM - 1:00 PM, 3:00 PM - 5:00 PM",
//       lat: 12.9617257,
//       lng: 77.5747392,
//     },
//     {
//       name: "KC General Hospital",
//       address: "Malleshwaram, Bengaluru 560003",
//       phone: "+91-80-23341631",
//       facilities: ["Pediatrics", "Maternity", "Surgery", "Radiology"],
//       visitingHours: "10:00 AM - 1:00 PM, 3:30 PM - 5:30 PM",
//       lat: 13.0048764,
//       lng: 77.5782103,
//     },
//   ],
// };

// const GovernmentHospitals: React.FC = () => {
//   const theme = useTheme();
//   const [city, setCity] = useState<string>("Pune");
//   const hospitals = hospitalData[city] || [];

//   return (
//     <Box
//       p={{ xs: 2, sm: 4 }}
//       bgcolor="background.default"
//       minHeight="100vh"
//       sx={{
//         maxWidth: 1600,
//         margin: "0 auto",
//       }}
//     >
//       <Box textAlign="center" mb={6}>
//         <Typography
//           variant="h3"
//           gutterBottom
//           sx={{
//             fontWeight: 700,
//             color: theme.palette.primary.dark,
//             fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
//             mb: 4,
//           }}
//         >
//           Government Hospitals Directory
//         </Typography>

//         <FormControl variant="filled" sx={{ minWidth: 240 }}>
//           <InputLabel id="city-select-label">Select City</InputLabel>
//           <Select
//             labelId="city-select-label"
//             value={city}
//             onChange={(e) => setCity(e.target.value as string)}
//             label="Select City"
//             sx={{
//               backgroundColor: theme.palette.background.paper,
//               borderRadius: 2,
//               "& .MuiSelect-filled": {
//                 py: 1.5,
//               },
//             }}
//           >
//             {Object.keys(hospitalData).map((cityName) => (
//               <MenuItem key={cityName} value={cityName}>
//                 <Typography variant="subtitle1">{cityName}</Typography>
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>

//       <Grid container spacing={4}>
//         {hospitals.map((h, idx) => {
//           const mapsUrl = `https://www.google.com/maps?q=${h.lat},${h.lng}&z=17&layer=1`;

//           return (
//             <Grid item xs={12} sm={6} md={4} key={idx}>
//               <Card
//                 elevation={3}
//                 sx={{
//                   height: "100%",
//                   display: "flex",
//                   flexDirection: "column",
//                   transition: "transform 0.2s, box-shadow 0.2s",
//                   "&:hover": {
//                     transform: "translateY(-4px)",
//                     boxShadow: theme.shadows[6],
//                   },
//                 }}
//               >
//                 <CardContent sx={{ flexGrow: 1, p: 3 }}>
//                   <Typography
//                     variant="h5"
//                     gutterBottom
//                     sx={{
//                       fontWeight: 600,
//                       minHeight: 64,
//                       color: theme.palette.primary.main,
//                       fontSize: { xs: "1.3rem", sm: "1.4rem" },
//                     }}
//                   >
//                     {h.name}
//                   </Typography>

//                   <Box
//                     sx={{ display: "flex", flexDirection: "column", gap: 2 }}
//                   >
//                     <Box sx={{ display: "flex", alignItems: "flex-start" }}>
//                       <LocationOn
//                         fontSize="small"
//                         sx={{
//                           color: theme.palette.text.secondary,
//                           mr: 1.5,
//                           mt: 0.4,
//                         }}
//                       />
//                       <Typography variant="body2" color="textSecondary">
//                         {h.address}
//                       </Typography>
//                     </Box>

//                     <Box sx={{ display: "flex", alignItems: "center" }}>
//                       <Phone
//                         fontSize="small"
//                         sx={{ color: theme.palette.text.secondary, mr: 1.5 }}
//                       />
//                       <Typography variant="body2" color="textSecondary">
//                         {h.phone}
//                       </Typography>
//                     </Box>

//                     <Box sx={{ display: "flex", alignItems: "center" }}>
//                       <AccessTime
//                         fontSize="small"
//                         sx={{ color: theme.palette.text.secondary, mr: 1.5 }}
//                       />
//                       <Typography variant="body2" color="textSecondary">
//                         Visiting Hours: {h.visitingHours}
//                       </Typography>
//                     </Box>

//                     <Box
//                       sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
//                     >
//                       {h.facilities.map((f, i) => (
//                         <Chip
//                           key={i}
//                           icon={<CheckBox fontSize="small" />}
//                           label={f}
//                           variant="outlined"
//                           size="small"
//                           sx={{
//                             borderRadius: 1,
//                             borderColor: theme.palette.divider,
//                             "& .MuiChip-label": {
//                               fontSize: "0.75rem",
//                             },
//                           }}
//                         />
//                       ))}
//                     </Box>
//                   </Box>
//                 </CardContent>

//                 <CardActions sx={{ p: 2, pt: 0 }}>
//                   <Button
//                     fullWidth
//                     variant="contained"
//                     color="primary"
//                     endIcon={<Directions />}
//                     href={mapsUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     sx={{
//                       py: 1.2,
//                       borderRadius: 1,
//                       textTransform: "none",
//                       fontWeight: 500,
//                     }}
//                   >
//                     Get Directions
//                   </Button>
//                 </CardActions>
//               </Card>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default GovernmentHospitals;

import React, { useState } from "react";
import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  useTheme,
  InputAdornment,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  AccessTime,
  CheckBox,
  Directions,
  Search,
} from "@mui/icons-material";

interface Hospital {
  name: string;
  address: string;
  phone: string;
  facilities: string[];
  visitingHours: string;
  lat: number;
  lng: number;
}

const hospitalData: Record<string, Hospital[]> = {
  Pune: [
    {
      name: "Sassoon General Hospital",
      address: "Marg, Near Wanowrie, Pune, Maharashtra 411040",
      phone: "+91-20-26121650",
      facilities: ["Emergency", "OPD", "Inpatient", "ICU"],
      visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
      lat: 18.525946684132727,
      lng: 73.8706986082799,
    },
    {
      name: "Deenanath Mangeshkar Hospital",
      address: "Erandwane, Pune, Maharashtra 411004",
      phone: "+91-20-25431000",
      facilities: ["Emergency", "MRI", "Dialysis", "Pharmacy"],
      visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
      lat: 18.502007822700648,
      lng: 73.83273356672994,
    },
    {
      name: "Yerwada Civil Hospital",
      address: "Yerwada, Pune, Maharashtra 411006",
      phone: "+91-20-20203101",
      facilities: ["Emergency", "Surgery", "Maternity", "Blood Bank"],
      visitingHours: "9:00 AM - 11:00 AM, 3:00 PM - 5:00 PM",
      lat: 18.5549032,
      lng: 73.8796581,
    },
  ],
  Mumbai: [
    {
      name: "KEM Hospital",
      address: "Acharya Donde Marg, Parel, Mumbai, Maharashtra 400012",
      phone: "+91-22-24138500",
      facilities: ["Emergency", "Cardiology", "Nephrology", "Pharmacy"],
      visitingHours: "10:00 AM - 12:00 PM, 4:30 PM - 6:30 PM",
      lat: 19.0016145,
      lng: 72.8407336,
    },
    {
      name: "Sion Hospital",
      address: "Sion, Mumbai, Maharashtra 400022",
      phone: "+91-22-24021361",
      facilities: ["Emergency", "Neurosurgery", "Trauma Care", "Blood Bank"],
      visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
      lat: 19.0390664,
      lng: 72.8609197,
    },
  ],
  Delhi: [
    {
      name: "Safdarjung Hospital",
      address: "Ring Rd, New Delhi, Delhi 110029",
      phone: "+91-11-26101620",
      facilities: ["Emergency", "Trauma Care", "Diagnostics", "Pharmacy"],
      visitingHours: "10:00 AM - 12:00 PM, 4:00 PM - 6:00 PM",
      lat: 28.5676145,
      lng: 77.2011719,
    },
    {
      name: "AIIMS Hospital",
      address: "Sri Aurobindo Marg, Ansari Nagar, New Delhi",
      phone: "+91-11-26588500",
      facilities: ["Emergency", "Transplant", "Research Lab", "Outpatient"],
      visitingHours: "11:00 AM - 1:00 PM, 5:00 PM - 7:00 PM",
      lat: 28.5661654,
      lng: 77.2061343,
    },
  ],
  Bengaluru: [
    {
      name: "Victoria Hospital",
      address: "Fort Rd, Near City Market, Bengaluru 560002",
      phone: "+91-80-26701110",
      facilities: ["Emergency", "Trauma Care", "Cancer Center", "Blood Bank"],
      visitingHours: "10:00 AM - 1:00 PM, 3:00 PM - 5:00 PM",
      lat: 12.9617257,
      lng: 77.5747392,
    },
    {
      name: "KC General Hospital",
      address: "Malleshwaram, Bengaluru 560003",
      phone: "+91-80-23341631",
      facilities: ["Pediatrics", "Maternity", "Surgery", "Radiology"],
      visitingHours: "10:00 AM - 1:00 PM, 3:30 PM - 5:30 PM",
      lat: 13.0048764,
      lng: 77.5782103,
    },
  ],
};

const GovernmentHospitals: React.FC = () => {
  const theme = useTheme();
  const [city, setCity] = useState<string>("Pune");

  return (
    <Box
      sx={{
        maxWidth: 1440,
        margin: "0 auto",
        p: { xs: 2, md: 4 },
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
            fontSize: { xs: "2rem", sm: "2.5rem" },
            mb: 3,
            letterSpacing: "-0.5px",
          }}
        >
          Government Hospital Network
        </Typography>

        {/* City Selector */}
        <FormControl variant="outlined" sx={{ minWidth: 300 }}>
          <InputLabel id="city-select-label">Select City</InputLabel>
          <Select
            labelId="city-select-label"
            value={city}
            onChange={(e) => setCity(e.target.value as string)}
            label="Select City"
            startAdornment={
              <InputAdornment position="start">
                <LocationOn sx={{ color: theme.palette.primary.main, mr: 1 }} />
              </InputAdornment>
            }
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.divider,
                borderRadius: 3,
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main,
              },
              bgcolor: "background.paper",
              transition: "border-color 0.3s ease",
            }}
          >
            {Object.keys(hospitalData).map((cityName) => (
              <MenuItem key={cityName} value={cityName} sx={{ py: 1.5 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {cityName}
                </Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {/* Hospital Cards Grid */}
      <Grid container spacing={3}>
        {hospitalData[city].map((hospital, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: theme.shadows[2],
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1, p: 3 }}>
                {/* Hospital Name */}
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: "1.4rem",
                    mb: 2.5,
                    lineHeight: 1.3,
                  }}
                >
                  {hospital.name}
                </Typography>

                {/* Hospital Details */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* Address */}
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <LocationOn
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "1.2rem",
                        mt: "3px",
                        mr: 1.5,
                      }}
                    />
                    <Typography variant="body2" color="textSecondary">
                      {hospital.address}
                    </Typography>
                  </Box>

                  {/* Phone Number */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Phone
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "1.2rem",
                        mr: 1.5,
                      }}
                    />
                    <Typography variant="body2" color="textSecondary">
                      {hospital.phone}
                    </Typography>
                  </Box>

                  {/* Visiting Hours */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccessTime
                      sx={{
                        color: theme.palette.text.secondary,
                        fontSize: "1.2rem",
                        mr: 1.5,
                      }}
                    />
                    <Typography variant="body2" color="textSecondary">
                      {hospital.visitingHours}
                    </Typography>
                  </Box>

                  {/* Facilities */}
                  <Box
                    sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
                  >
                    {hospital.facilities.map((facility, idx) => (
                      <Chip
                        key={idx}
                        label={facility}
                        size="small"
                        icon={<CheckBox sx={{ fontSize: "1rem" }} />}
                        sx={{
                          borderRadius: 1.5,
                          borderColor: theme.palette.divider,
                          bgcolor: theme.palette.action.hover,
                          "& .MuiChip-label": {
                            fontSize: "0.75rem",
                            fontWeight: 500,
                            color: theme.palette.text.secondary,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>

              {/* Directions Button */}
              <CardActions sx={{ p: 3, pt: 0 }}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  endIcon={<Directions />}
                  href={`https://www.google.com/maps?q=${hospital.lat},${hospital.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    letterSpacing: "-0.25px",
                    boxShadow: "none",
                    "&:hover": {
                      boxShadow: theme.shadows[2],
                    },
                  }}
                >
                  View on Map
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GovernmentHospitals;
