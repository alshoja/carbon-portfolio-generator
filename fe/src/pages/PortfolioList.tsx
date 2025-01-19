import { useState, useEffect } from "react";
import Card from "../components/Card";
import PortfolioGenerator from "../components/Portfolio";

const _cardsData = [
  {
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    name: "EverGreen CarbonScape",
    company: "Carbon Solutions (India)",
    deliveryDate: "25th January 2025",
    description:
      "The 'EverGreen CarbonScape' project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.",
    price: 250,
    volume: 168,
    weight: 168,
  },
  {
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    name: "EverGreen CarbonScape",
    company: "Carbon Solutions (India)",
    deliveryDate: "25th January 2025",
    description:
      "The 'EverGreen CarbonScape' project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.",
    price: 250,
    volume: 168,
    weight: 168,
  },
  {
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    name: "EverGreen CarbonScape",
    company: "Carbon Solutions (India)",
    deliveryDate: "25th January 2025",
    description:
      "The 'EverGreen CarbonScape' project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.",
    price: 250,
    volume: 168,
    weight: 168,
  },
  {
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    name: "EverGreen CarbonScape",
    company: "Carbon Solutions (India)",
    deliveryDate: "25th January 2025",
    description:
      "The 'EverGreen CarbonScape' project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.",
    price: 250,
    volume: 168,
    weight: 168,
  },
  {
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    name: "EverGreen CarbonScape",
    company: "Carbon Solutions (India)",
    deliveryDate: "25th January 2025",
    description:
      "The 'EverGreen CarbonScape' project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.",
    price: 250,
    volume: 168,
    weight: 168,
  },
];

const PortFolioList = () => {
  const [cardsData, setCardsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCardData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        console.log("🚀 ~ fetchCardData ~ data:", data)
        setCardsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PortfolioGenerator />
      <div className="container-fluid">
        <div className="row justify-content-between">
          {_cardsData.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PortFolioList;
