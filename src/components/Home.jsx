import { useState } from "react";
import CustomCard from "./CustomCard.jsx"; // Remove curly braces around Card
import { FaUser } from "react-icons/fa6";

function Home() {
  const [type, setType] = useState("");
  const [q, setQ] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleQChange = (event) => {
    setQ(event.target.value);
  };

  const getTracks = async () => {
    try {
      let data = await fetch(
        `https://v1.nocodeapi.com/ahtisham/spotify/zCYntfNuzDSTlmtQ/search?type=${type}&q=${q}`
      );
      let dataConvertedJson = await data.json();
      setType(dataConvertedJson[type + "s"].items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1 data-aos="fade-left" data-aos-duration="3000">
        Spot Music <FaUser />
      </h1>
      <input type="text" value={type} onChange={handleTypeChange} />
      <input type="text" value={q} onChange={handleQChange} />
      <button onClick={getTracks}>Search</button>
      {type.map((i) => {})}
      {/* <CustomCard />  */}
    </div>
  );
}

export default Home;
