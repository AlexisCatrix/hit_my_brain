// import React, { useState, useEffect } from "react";
// import { MainContent } from "../homepage/HomepageStyled";
// import axios from "axios";
// import { Quizz } from "";

// export default function QuizzMovies() {
//   const [dataQuizz, setDataQuizz] = useState([{}]);

//   useEffect(() => {
//     fetchDataQuizz();
//   });

//   const fetchDataQuizz = () => {
//     axios
//       .get(
//         "https://www.kiwime.com/oqdb/files/3241454997/OpenQuizzDB_241/openquizzdb_241.json"
//       )
//       .then(({ data }) => {
//         setDataQuizz(data);
//       })
//       .catch((err) => {
//         console.warn("Something went poorly");
//       });
//   };

//   return (
//     <MainContent>
//       {dataQuizz.map((quizz) => (
//         <Quizz>{quizz.fr.question}</Quizz>
//       ))}
//     </MainContent>
//   );
// }
