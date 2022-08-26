// import React, { Component, useState } from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
// import {
//   TextComponent,
//   InputComponent,
//   Box,
//   DatePick,
//   Dropdown,
// } from "./Components";
// import styled from "styled-components";
// const Header = () => {
//   return (
//     <HeaderStyle>
//       <TextComponent
//         label="INCRESCO TECHNOLOGIES"
//         styleProps={{
//           fontSize: "48px",
//         }}
//       />
//       <br></br>
//       <TextComponent
//         label="CAMPUS HIRING-2023"
//         styleProps={{
//           fontSize: "36px",
//         }}
//       />
//     </HeaderStyle>
//   );
// };

// // const navigate = useNavigate()
// // return (
// //   <Button
   
// //     onPress={() => {
// //       navigation.goFront();
// //     }}
// //   />
// // );
// // }

// const onClickHandler = () => navigate(`https://www.npmjs.com/package/next`)



// const HeaderStyle = styled.div`
//   background-color: #8d19ffb2;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   font-weight: 700;
//   line-height: 41px;
//   color: white;
//   padding: 48px;
//   width: 100%;
//   margin: -5px;
// `;

// // const BulletEntry = () => {
// //   return (
// //     <div>

// //       <TextComponent
// //         label="Gender"
// //         styleProps={{
// //           textAlign: "left",
// //           fontWeight: "700",
// //           fontsize: "16px",
// //           lineheight: "18px",
// //           margin:"10px"
// //         }}
// //         isMandatory="true"
// //       />

// //       <div>

// //         <Box style={{

// //         }}>
// //         <input type="radio" value="Male" name="gender" /> Male
// //         <input type="radio" value="Female" name="gender" /> Female
// //         <input type="radio" value="Other" name="gender" /> Other
// //         </Box>
// //       </div>

// //     </div>
// //   );
// // };

// const Attachments = () => {
//   return (
//     <>
//       {" "}
//       <Attach>
//         <TextComponent
//           styleProps={{
//             // fontSize: "18px",
//             // textAlign: "left",
//             fontWeight: "700",
//           }}
//           label="Add Resume/CV"
//           CustomTag="span"
//         >
//           <TextComponent
//             styleProps={{
//               // fontSize: "18px",
//               // textAlign: "left",
//               fontWeight: 400,
//               padding: "10px",
//             }}
//             CustomTag="span"
//             label="Accept format: doc/.docx/.pdf;Size: 1MB"
//           />
//         </TextComponent>
//         <br></br>
//       </Attach>
//       <button
//         style={{
//           background: "#FFFFFF",
//           border: "1px solid #8D19FF",
//           borderRadius: "13px",
//           padding: "5px",
//           margin: "10px",
//         }}
//       >
//         Choose File
//       </button>
//     </>
//   );
// };
// const Attach = styled.div`
//   font-size: 18px;
//   text-align: left;
// `;
// const TextCom = styled.label`
//   font-family: "Helvetica";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 18px;
//   color: black;
//   padding: 10px 5px;
// `;
// export const App = ({ data }) => {
//   const [firstName, setFirstName] = useState("");
//   const [MiddleName, setMiddleName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [emailid, setemailid] = useState("");
//   const [contact, setcontact] = useState("");
//   const [gender, setGender] = useState("");
//   const [tenth, settenth] = useState("");
//   const [twelth, settwelth] = useState("");
//   const [degree, setdegree] = useState("");
//   const [college, setcollege] = useState("");
//   const [Branch, setBranch] = useState("");
//   const [reg, setreg] = useState("");
//   return (
//     <TextCom>
//       <Header />
//       <form style={{ padding: "70px" }}>
//         <TextComponent
//           label="*Required"
//           styleProps={{
//             fontWeight: "400",
//             fontSize: "20px",
//             lineHeight: "23px",
//           }}
//         />
//         <TextComponent
//           label="Registration form"
//           styleProps={{
//             fontWeight: "700",
//             fontSize: "48px",
//             lineHeight: "55px",
//             padding: "30px",
//           }}
//         />
//         <TextComponent
//           label="Job Details"
//           styleProps={{
//             backgroundColor: "",
//             fontWeight: "700",
//             fontSize: "24px",
//             lineHeight: "28px",
//             padding: "20px",
//           }}
//         />
//         <Box
//           style={{
//             padding: "20px",
//             borderRadius: "20px",
//             backgroundColor: "#E5E5E5",
//           }}
//         >
//           <InputComponent
//             type="text"
//             label={
//               <TextComponent
//                 label="Job Profiles"
//                 isMandatory="true"
//                 styleProps={{
//                   //   fontWeight: "700",
//                   //   fontSize: "15px",
//                   //   lineHeight: "17px",
//                   padding: "10px 5px",
//                 }}
//               ></TextComponent>
//             }
//             placeholder="Software development"
//             style={{ padding: "15px", borderRadius: "10px" }}
//             disabled
//           />
//         </Box>
//         <TextComponent
//           label="Personal Details"
//           styleProps={{
//             fontWeight: "700",
//             fontSize: "24px",
//             lineHeight: "28px",
//             padding: "20px",
//           }}
//         ></TextComponent>
//         <Box
//           style={{ backgroundColor: "#E5E5E5", border: "1px solid #8D19FF" }}
//         >
//           <InputComponent
//             type="text"
//             label={
//               <TextComponent
//                 label="First Name"
//                 isMandatory="true"
//                 styleProps={{
//                   //   fontSize: "16px",
//                   //   textAlign: "left",
//                   //   fontWeight: "700",
//                   padding: "10px 5px",
//                 }}
//               />
//             }
//             placeholder=" First name"
//             style={{ padding: "15px", borderRadius: "10px" }}
//             value={firstName}
//             onChange={(a) => {
//               console.log(a.target.value);
//               setFirstName(a.target.value);
//             }}
//           />

//           <InputComponent
//             type="text"
//             label={
//               <TextComponent
//                 label="Middle Name"
//                 styleProps={{
//                   //   fontSize: "16px",
//                   //   textAlign: "left",
//                   //   fontWeight: "700",
//                   padding: "10px 5px",
//                 }}
//               />
//             }
//             placeholder="Middle Name"
//             style={{ padding: "15px", borderRadius: "10px" }}
//             value={MiddleName}
//             onChange={(a) => {
//               console.log(a.target.value);
//               setMiddleName(a.target.value);
//             }}
//           />
//           <InputComponent
//             type="text"
//             label={
//               <TextComponent
//                 label="Last Name"
//                 isMandatory="true"
//                 styleProps={{
//                   //fontSize: "16px",
//                   //textAlign: "left",
//                   //fontWeight: "700",
//                   padding: "10px 5px",
//                   //borderRadius: "10px",
//                 }}
//               />
//             }
//             placeholder=" last name"
//             style={{ padding: "15px", borderRadius: "10px" }}
//             value={lastName}
//             onChange={(a) => {
//               console.log(a.target.value);
//               setLastName(a.target.value);
//             }}
//           />

//           <InputComponent
//             type="text"
//             label={
//               <TextComponent
//                 label="Emailid"
//                 isMandatory="true"
//                 styleProps={{
//                   //   fontSize: "16px",
//                   //   textAlign: "left",
//                   //   fontWeight: "700",
//                   padding: "10px 5px",
//                 }}
//               />
//             }
//             placeholder="loganayaki@gmail.com"
//             style={{ padding: "15px", borderRadius: "10px" }}
//             value={emailid}
//             onChange={(a) => {
//               console.log(a.target.value);
//               setemailid(a.target.value);
//             }}
//           />
//           <InputComponent
//             type="text"
//             label={
//               <TextComponent
//                 label="Contact Number"
//                 isMandatory="true"
//                 styleProps={{
//                   //   fontSize: "16px",
//                   //   textAlign: "left",
//                   //   fontWeight: "700",
//                   padding: "10px 5px",
//                 }}
//               />
//             }
//             placeholder="999999999h"
//             style={{ padding: "15px", borderRadius: "10px" }}
//             value={contact}
//             onChange={(a) => {
//               console.log(a.target.value);
//               setcontact(a.target.value);
//             }}
//           />
//           <TextComponent
//             label="DOB-(DD/MM/YY)"
//             isMandatory="true"
//             styleProps={{
//               fontSize: "16px",
//               textAlign: "left",
//               fontWeight: 700,
//               padding: "10px 5px",
//             }}
//           />
//           <DatePick />

//           <TextComponent
//             label="Gender"
//             isMandatory="true"
//             styleProps={{
//               fontSize: "16px",
//               textAlign: "left",
//               fontWeight: 700,
//               padding: "10px 5px",
//             }}
//           />
//           <InputComponent
//             type="radio"
//             value={gender}
//             name="gender"
//             label="Male"
//             onChange={(a) => {
//               console.log(a.target.value);
//               setGender(a.target.value);
//             }}
//           />
//           <InputComponent
//             type="radio"
//             value={gender}
//             name="gender"
//             label="Female"
//             onChange={(a) => {
//               console.log(a.target.value);
//               setGender(a.target.value);
//             }}
//           />
//           <InputComponent
//             type="radio"
//             value={gender}
//             name="gender"
//             label="Other"
//             onChange={(a) => {
//               console.log(a.target.value);
//               setGender(a.target.value);
//             }}
//           />
//         </Box>
//         <h3
//           style={{
//             padding: "20px",
//             fontSize: "24px",
//           }}
//         >
//           Educational Details
//         </h3>
//         <Box>
//           <h3
//             style={{
//               padding: "20px",
//             }}
//           >
//             {" "}
//             Lowest education profile
//           </h3>
//           <Box
//             style={{
//               padding: "20px",
//               borderRadius: "10px",
//               backgroundColor: "#E5E5E5",
//             }}
//           >
//             <TextComponent
//               label="10th percentage%"
//               isMandatory="true"
//               styleProps={{
//                 //   fontSize: "16px",
//                 //   textAlign: "left",
//                 //   fontWeight: "700",
//                 padding: "10px 5px",
//               }}
//             />
//             <InputComponent
//               type="text"
//               value={tenth}
//               placeholder="63%"
//               style={{ padding: "15px", borderRadius: "10px" }}
//               onChange={(a) => {
//                 console.log(a.target.value);
//                 settenth(a.target.value);
//               }}
//             />
//             <TextComponent
//               label="12th percentage%"
//               isMandatory="true"
//               styleProps={{
//                 //   fontSize: "16px",
//                 //   textAlign: "left",
//                 //   fontWeight: "700",
//                 padding: "10px 5px",
//               }}
//             />

//             <InputComponent
//               type="text"
//               value={twelth}
//               placeholder="70%"
//               style={{ padding: "15px", borderRadius: "10px" }}
//               onChange={(a) => {
//                 console.log(a.target.value);
//                 settwelth(a.target.value);
//               }}
//             />
//           </Box>
//           <h3
//             style={{
//               padding: "20px",
//             }}
//           >
//             Highest education profile
//           </h3>
//           <Box>
//             <TextComponent
//               styleProps={{
//                 //   fontSize: "16px",
//                 //   textAlign: "left",
//                 //   fontWeight: "700",
//                 padding: "10px 5px",
//               }}
//             />

//             <TextComponent
//               label="Education Type"
//               isMandatory
//               styleProps={{
//                 fontSize: "16px",
//                 textAlign: "left",
//                 fontWeight: 700,
//                 paddingTop: "10px",
//               }}
//             />
//             <Dropdown options={[...data[0].map((a) => a.displayText)]} />

//             <TextComponent
//               label="Degree"
//               isMandatory="true"
//               styleProps={{
//                 //   fontSize: "16px",
//                 //   textAlign: "left",
//                 //   fontWeight: "700",
//                 padding: "10px 5px",
//               }}
//             />
//             <Dropdown options={[...data[1].map((a) => a.displayText)]} />

//             <TextComponent
//               label="College"
//               isMandatory="true"
//               styleProps={{
//                 //   fontSize: "16px",
//                 //   textAlign: "left",
//                 //   fontWeight: "700",
//                 //   height: "10px",
//                 padding: "10px 5px",
//               }}
//             />
//             <InputComponent
//               type="text"
//               value={college}
//               placeholder="college"
//               style={{ padding: "15px", borderRadius: "10px" }}
//               onChange={(a) => {
//                 console.log(a.target.value);
//                 setcollege(a.target.value);
//               }}
//             />
//             <TextComponent
//               label="Reg No"
//               isMandatory="true"
//               styleProps={{
//                 //   fontSize: "16px",
//                 //   textAlign: "left",
//                 //   fontWeight: "700",
//                 padding: "10px 5px",
//               }}
//             />
//             <InputComponent
//               type="text"
//               value={reg}
//               placeholder="19tuit046"
//               style={{ padding: "15px", borderRadius: "10px" }}
//               onChange={(a) => {
//                 console.log(a.target.value);
//                 setreg(a.target.value);
//               }}
//             />
//             <TextComponent
//               type="text"
//               label="Branch"
//               isMandatory="true"
//               styleProps={{
//                 //   fontSize: "16px",
//                 //   textAlign: "left",
//                 //   fontWeight: "700",
//                 padding: "10px 5px",
//               }}
//             />
//             <Dropdown options={[...data[2].map((a) => a.displayText)]} />

//             <TextComponent
//               label="Backlogs"
//               isMandatory="true"
//               styleProps={{
//                 // fontSize: "16px",
//                 // textAlign: "left",
//                 // fontWeight: "700",
//                 padding: "10px 5px",
//               }}
//             />
//             <Dropdown options={["yes", "no"]} />
//           </Box>
//         </Box>

//         <TextComponent
//           label="Attachment"
//           styleProps={{
//             padding: "20px",
//             fontSize: "24px",
//           }}
//         ></TextComponent>
//         <Box>
//           <Attachments />
//         </Box> <>
//         <Router>
//         <Switch>
//         <button
//           style={{
//             backgroundColor: "#8D19FFB2",
//             width: "150px",
//             height: "48px",
//             left: "40px",
//             top: "2500px",
//             borderRadius: "13px",
//             color: "#FFFFFF",
//           }}
//         >

// <Route path="https://github.com/MDmubarak786/marvel-Movie" component={} />SUBMIT
          
//         </button>
        
//         </Switch></Router></>
//       </form>
//     </TextCom>
//   );
// };

// // const ButtonStyle=styled.div`
// // background-color: #8D19FFB2;
// // width: 150px;
// // height: 48px;
// // left: 40px;
// // top: 2500px;
// // borderRadius: 13px;
// // color: #FFFFFF;
// // `

// //ReactDOM.render(<App />, document.getElementById("app"));
