// import { useState } from "react";
// import CustomCard from "./CustomCard.jsx";
// import dbCard1 from "../assets/dbCard1.jpeg";
// import { FaUser, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import Row from "react-bootstrap/Row";
// import { Col } from "react-bootstrap";
// function Home() {
//   // const [type, setType] = useState("");
//   // const [q, setQ] = useState("");
//   // const [items, setItems] = useState([]);

//   // const handleTypeChange = (event) => {
//   //   setType(event.target.value);
//   // };

//   // const handleQChange = (event) => {
//   //   setQ(event.target.value);
//   // };

//   // const getTracks = async () => {
//   //   if (!type || !q) {
//   //     alert("Enter the input");
//   //   } else {
//   //     try {
//   //       let data = await fetch(
//   //         `https://v1.nocodeapi.com/ahtisham/spotify/zCYntfNuzDSTlmtQ/search?type=${type}&q=${q}`
//   //       );
//   //       let dataConvertedJson = await data.json();
//   //       console.log(dataConvertedJson);
//   //       setItems(dataConvertedJson[type + "s"].items);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   }
//   // };

//   return (
//     <div class="desktopHome">
//       {/* <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <h1 data-aos="fade-left" data-aos-duration="3000">
//           Spot Music <FaUser />
//         </h1>
//       </motion.div>
//       <input type="text" value={type} onChange={handleTypeChange} />
//       <input type="text" value={q} onChange={handleQChange} />
//       <button onClick={getTracks}>Search</button>
//       {items.map((element) => (
//         <div key={element.id}>
//           <h1>{element.name}</h1>
//         </div>
//       ))} */}

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <div className="routing_btn">
//           <div className="routeViewAll">
//             <button className="arrow_btn">
//               <FaAngleLeft />
//             </button>
//             <button className="arrow_btn">
//               <FaAngleRight />
//             </button>
//           </div>
//           <Link to="/">View all</Link>
//         </div>
//       </motion.div>
//       <motion.div>
//         <div className="desk_body">
//           <h2>Recently Played</h2>

//           <div className="dbCards">
//             <Row>
//               <Col xs={3}>
//                 <div className="dbCardItem">
//                   <img src={dbCard1} alt="" />
//                   <div>
//                     <h5>Song Name</h5>
//                     <p>track</p>
//                   </div>
//                 </div>
//               </Col>
//               <Col xs={3}>
//                 <div className="dbCardItem">
//                   <img src={dbCard1} alt="" />
//                   <div>
//                     <h5>Song Name</h5>
//                     <p>track</p>
//                   </div>
//                 </div>
//               </Col>
//               <Col xs={3}>
//                 <div className="dbCardItem">
//                   <img src={dbCard1} alt="" />
//                   <div>
//                     <h5>Song Name</h5>
//                     <p>track</p>
//                   </div>
//                 </div>
//               </Col>
//             </Row>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Home;
import { useState } from "react";
import CustomCard from "./CustomCard.jsx";
import dbCard1 from "../assets/dbCard1.jpeg";
import { FaUser, FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; // Import Col component
import Image from "react-bootstrap/Image";

function Home() {
  return (
    <div className="desktopHome">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="routing_btn">
          <div className="routeViewAll">
            <button className="arrow_btn">
              <FaAngleLeft />
            </button>
            <button className="arrow_btn">
              <FaAngleRight />
            </button>
          </div>
          <Link to="/">View all</Link>
        </div>
      </motion.div>
      <motion.div>
        <div className="desk_body">
          <h2>Recently Played</h2>

          <div className="dbCards">
            <Row>
              <Col xs={3}>
                <div className="dbCardItem">
                  <Image src={dbCard1} rounded fluid />
                  <div>
                    <h5>Song Name</h5>
                    <p>track</p>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <div className="dbCardItem">
                  <Image src={dbCard1} rounded fluid />
                  <div>
                    <h5>Song Name</h5>
                    <p>track</p>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <div className="dbCardItem">
                  <Image src={dbCard1} rounded fluid />
                  <div>
                    <h5>Song Name</h5>
                    <p>track</p>
                  </div>
                </div>
              </Col>
              <Col xs={3}>
                <div className="dbCardItem">
                  <Image src={dbCard1} rounded fluid />
                  <div>
                    <h5>Song Name</h5>
                    <p>track</p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
