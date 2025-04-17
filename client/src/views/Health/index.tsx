// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   TextField,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Link,
// } from "@mui/material";
// // Removed icon imports to fix errors

// interface HealthScheme {
//   id: number;
//   name: string;
//   category: "general" | "women" | "children";
//   description: string;
//   eligibility: string;
//   link: string;
// }

// const HealthSchemes = () => {
//   const [schemes, setSchemes] = useState<HealthScheme[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState<
//     "all" | "general" | "women" | "children"
//   >("all");

//   useEffect(() => {
//     const sampleSchemes: HealthScheme[] = [
//       {
//         id: 1,
//         name: "Ayushman Bharat Yojana (PM-JAY)",
//         category: "general",
//         description:
//           "World's largest health protection scheme providing coverage of ₹5 lakh per family per year",
//         eligibility:
//           "Deprived rural families and identified occupational categories in urban areas",
//         link: "https://pmjay.gov.in",
//       },
//       {
//         id: 2,
//         name: "Pradhan Mantri Surakshit Matritva Abhiyan",
//         category: "women",
//         description:
//           "Free antenatal care for pregnant women on 9th of every month",
//         eligibility: "All pregnant women",
//         link: "https://nhm.gov.in",
//       },
//       {
//         id: 3,
//         name: "National Health Mission",
//         category: "general",
//         description:
//           "Improvement of health systems and service delivery in rural and urban areas",
//         eligibility: "All citizens",
//         link: "https://nhm.gov.in",
//       },
//       {
//         id: 4,
//         name: "Rashtriya Bal Swasthya Karyakram",
//         category: "children",
//         description: "Child health screening and early intervention services",
//         eligibility: "Children 0-18 years",
//         link: "https://wcd.nic.in",
//       },
//     ];
//     setSchemes(sampleSchemes);
//   }, []);

//   const filteredSchemes = schemes.filter((scheme) => {
//     const matchesSearch =
//       scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" || scheme.category === selectedCategory;
//     return matchesSearch && matchesCategory;
//   });

//   const getCategoryIcon = (category: "general" | "women" | "children") => {
//     return null; // Temporarily disable icons to remove errors
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 4 }}>
//       <Typography
//         variant="h4"
//         gutterBottom
//         align="center"
//         sx={{ fontWeight: "bold", color: "#1a237e" }}
//       >
//         {/* Temporarily removed icon */}
//         Government Health Schemes
//       </Typography>

//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         <Grid item xs={12} sm={6}>
//           <TextField
//             fullWidth
//             label="Search Schemes"
//             variant="outlined"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//           <FormControl fullWidth>
//             <InputLabel>Filter by Category</InputLabel>
//             <Select
//               value={selectedCategory}
//               onChange={(e) =>
//                 setSelectedCategory(
//                   e.target.value as "all" | "general" | "women" | "children"
//                 )
//               }
//               label="Filter by Category"
//             >
//               <MenuItem value="all">All Categories</MenuItem>
//               <MenuItem value="general">General</MenuItem>
//               <MenuItem value="women">Women & Maternal Health</MenuItem>
//               <MenuItem value="children">Child Health</MenuItem>
//             </Select>
//           </FormControl>
//         </Grid>
//       </Grid>

//       <Grid container spacing={3}>
//         {filteredSchemes.map((scheme) => (
//           <Grid item xs={12} sm={6} md={4} key={scheme.id}>
//             <Card
//               sx={{ height: "100%", display: "flex", flexDirection: "column" }}
//             >
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6" gutterBottom>
//                   {getCategoryIcon(scheme.category)}
//                   {scheme.name}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   {scheme.description}
//                 </Typography>
//                 <Typography variant="body2" paragraph sx={{ mt: 2 }}>
//                   <strong>Eligibility:</strong> {scheme.eligibility}
//                 </Typography>
//                 <Link
//                   href={scheme.link}
//                   target="_blank"
//                   rel="noopener"
//                   sx={{ display: "flex", alignItems: "center" }}
//                 >
//                   Official Website
//                 </Link>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// };

// export default HealthSchemes;

import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
} from "@mui/material";

interface HealthScheme {
  id: number;
  name: string;
  category: "general" | "women" | "children";
  description: string;
  eligibility: string;
  link: string;
}

const HealthSchemes = () => {
  const [schemes, setSchemes] = useState<HealthScheme[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "general" | "women" | "children"
  >("all");

  useEffect(() => {
    const sampleSchemes: HealthScheme[] = [
      {
        id: 1,
        name: "Ayushman Bharat Yojana (PM-JAY)",
        category: "general",
        description:
          "World's largest health protection scheme providing coverage of ₹5 lakh per family per year",
        eligibility:
          "Deprived rural families and identified occupational categories in urban areas",
        link: "https://pmjay.gov.in",
      },
      {
        id: 2,
        name: "Pradhan Mantri Surakshit Matritva Abhiyan",
        category: "women",
        description:
          "Free antenatal care for pregnant women on 9th of every month",
        eligibility: "All pregnant women",
        link: "https://nhm.gov.in",
      },
      {
        id: 3,
        name: "National Health Mission",
        category: "general",
        description:
          "Improvement of health systems and service delivery in rural and urban areas",
        eligibility: "All citizens",
        link: "https://nhm.gov.in",
      },
      {
        id: 4,
        name: "Rashtriya Bal Swasthya Karyakram",
        category: "children",
        description: "Child health screening and early intervention services",
        eligibility: "Children 0-18 years",
        link: "https://wcd.nic.in",
      },
      {
        id: 5,
        name: "Janani Suraksha Yojana",
        category: "women",
        description:
          "Cash assistance for institutional deliveries to reduce maternal and neonatal mortality",
        eligibility: "Pregnant women below poverty line",
        link: "https://nhm.gov.in",
      },
      {
        id: 6,
        name: "Mission Indradhanush",
        category: "children",
        description:
          "Vaccination program to immunize children under 2 years and pregnant women",
        eligibility: "Children up to 2 years and pregnant women",
        link: "https://nhm.gov.in",
      },
      {
        id: 7,
        name: "Universal Immunization Programme (UIP)",
        category: "children",
        description:
          "Provides free vaccines to protect children against life-threatening diseases",
        eligibility: "Children up to 5 years of age",
        link: "https://main.mohfw.gov.in",
      },
      {
        id: 8,
        name: "Pradhan Mantri Matru Vandana Yojana",
        category: "women",
        description:
          "Cash incentive for pregnant and lactating women for first live birth",
        eligibility: "Pregnant and lactating women above 19 years",
        link: "https://wcd.nic.in",
      },
      {
        id: 9,
        name: "Employees’ State Insurance Scheme (ESIS)",
        category: "general",
        description:
          "Health insurance for workers in the organized sector and their families",
        eligibility:
          "Employees earning up to ₹21,000/month in covered establishments",
        link: "https://www.esic.nic.in",
      },
      {
        id: 10,
        name: "Bal Swasthya Poshan Mah (BSPM)",
        category: "children",
        description:
          "Focuses on nutrition and health check-ups for children through schools and Anganwadis",
        eligibility: "School-going and preschool children",
        link: "https://wcd.nic.in",
      },
    ];
    setSchemes(sampleSchemes);
  }, []);

  const filteredSchemes = schemes.filter((scheme) => {
    const matchesSearch =
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (category: "general" | "women" | "children") => {
    return null; // Placeholder for icons
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "bold", color: "#1a237e" }}
      >
        Government Health Schemes
      </Typography>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Search Schemes"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Filter by Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(
                  e.target.value as "all" | "general" | "women" | "children"
                )
              }
              label="Filter by Category"
            >
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="general">General</MenuItem>
              <MenuItem value="women">Women & Maternal Health</MenuItem>
              <MenuItem value="children">Child Health</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {filteredSchemes.map((scheme) => (
          <Grid item xs={12} sm={6} md={4} key={scheme.id}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {getCategoryIcon(scheme.category)}
                  {scheme.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {scheme.description}
                </Typography>
                <Typography variant="body2" paragraph sx={{ mt: 2 }}>
                  <strong>Eligibility:</strong> {scheme.eligibility}
                </Typography>
                <Link
                  href={scheme.link}
                  target="_blank"
                  rel="noopener"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  Official Website
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HealthSchemes;
