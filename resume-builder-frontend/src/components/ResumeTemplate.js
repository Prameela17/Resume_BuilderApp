// import React, { useRef } from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Divider,
//   Button,
//   IconButton,
// } from "@mui/material";
// import { Print as PrintIcon, GetApp as GetAppIcon } from "@mui/icons-material";
// import { useReactToPrint } from "react-to-print";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// const ResumeTemplate = ({ data }) => {
//   const educations = Array.isArray(data.education) ? data.education : [];
//   const componentRef = useRef();

//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   });

//   const handleDownloadPDF = () => {
//     html2canvas(componentRef.current).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       const imgHeight = (canvas.height * 208) / canvas.width;
//       pdf.addImage(imgData, 0, 0, 208, imgHeight);
//       pdf.save("resume.pdf");
//     });
//   };

//   return (
//     <Container maxWidth="md" style={{ fontFamily: "Arial, sans-serif" }}>
//       <Grid container spacing={2} justifyContent="center" ref={componentRef}>
//         <Grid item xs={12}>
//           <Typography variant="h3" align="center" gutterBottom>
//             {`${data.firstName} ${data.lastName}`}
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h6" gutterBottom>
//             Contact Information
//           </Typography>
//           <Typography variant="body1">
//             <strong>Email:</strong> {data.email}
//             <br />
//             <strong>Phone:</strong> {data.phoneNumber}
//           </Typography>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Typography variant="h6" gutterBottom>
//             Objective
//           </Typography>
//           <Typography variant="body1">{data.objective}</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Divider style={{ margin: "16px 0" }} />
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h6" gutterBottom>
//             Work Experience
//           </Typography>
//           <Typography variant="body1">{data.experience}</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h6" gutterBottom>
//             Education
//           </Typography>
//           {educations.map((edu, index) => (
//             <Typography variant="body1" key={index}>
//               <strong>{edu.degree}</strong>, {edu.institution}, {edu.year}
//             </Typography>
//           ))}
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="h6" gutterBottom>
//             Skills
//           </Typography>
//           <Typography variant="body1">{data.skills}</Typography>
//         </Grid>
//         <Grid item xs={12} style={{ textAlign: "center" }}>
//           <Button
//             variant="contained"
//             color="primary"
//             startIcon={<PrintIcon />}
//             onClick={handlePrint}
//             style={{ marginRight: "10px" }}
//           >
//             Print
//           </Button>
//           <IconButton
//             variant="contained"
//             color="primary"
//             onClick={handleDownloadPDF}
//           >
//             <GetAppIcon />
//           </IconButton>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ResumeTemplate;
import React, { useRef } from "react";
import {
  Container,
  Typography,
  Grid,
  Divider,
  Button,
  IconButton,
} from "@mui/material";
import { Print as PrintIcon, GetApp as GetAppIcon } from "@mui/icons-material";
import { useReactToPrint } from "react-to-print";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ResumeTemplate = ({ data }) => {
  const educations = Array.isArray(data.education) ? data.education : [];
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadPDF = () => {
    html2canvas(componentRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgHeight = (canvas.height * 208) / canvas.width;
      pdf.addImage(imgData, 0, 0, 208, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <Container maxWidth="md" style={{ fontFamily: "Arial, sans-serif" }}>
      <Grid container spacing={2} justifyContent="center" ref={componentRef}>
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom>
            {`${data.firstName} ${data.lastName}`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {data.email}
            <br />
            <strong>Phone:</strong> {data.phoneNumber}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Objective
          </Typography>
          <Typography variant="body1">{data.objective}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider style={{ margin: "16px 0" }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Work Experience
          </Typography>
          <Typography variant="body1">{data.experience}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          {educations.map((edu, index) => (
            <Typography variant="body1" key={index}>
              <strong>{edu.degree}</strong>, {edu.institution}, {edu.year}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          <Typography variant="body1">{data.skills}</Typography>
        </Grid>
      </Grid>
      {/* Print and Download buttons */}
      <div style={{ position: "fixed", bottom: 20, left: 20, zIndex: 1000 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          style={{ marginRight: "10px" }}
        >
          Print
        </Button>
        <IconButton
          variant="contained"
          color="primary"
          onClick={handleDownloadPDF}
        >
          <GetAppIcon />
        </IconButton>
      </div>
    </Container>
  );
};

export default ResumeTemplate;
