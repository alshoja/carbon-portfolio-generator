import { Project } from "src/project/entities/project.entity";
import { ProjectPortfolio } from "src/project/interfaces/Portfolio.interface";
import { analyzeProjects } from "./analyze.portfolio";
const projects: Project[] = [
  {
    id: 1,
    name: "EverGreen CarbonScape",
    country: "Germany",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
    pricePerTon: 650.0,
    offeredVolumeInTons: 15,
    distributionWeight: 0.05,
    supplierName: "Klom",
    earliestDelivery: new Date(),
    description:
      'The "EverGreen CarbonScape" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation.',
  },
  {
    id: 2,
    name: "VerdeCarbon",
    country: "India",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Mineralisation/ben-karpinski-ctWw2S9VqOI-unsplash-min.jpg",
    pricePerTon: 200.0,
    offeredVolumeInTons: 900,
    distributionWeight: 0.1,
    supplierName: "Klom",
    earliestDelivery: new Date(),
    description:
      "A transformative carbon credit project dedicated to revitalizing ecosystems and fighting climate change.\nBy strategically planting native trees and adopting sustainable forest practices, we're creating a potent solution that not only absorbs carbon dioxide but also nurtures biodiversity and empowers local communities.\nThrough verified carbon credits, VerdeCarbon is a beacon of environmental stewardship and positive impact.",
  },
  {
    id: 3,
    name: "SustainaForest Carbon",
    country: "Brazil",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg",
    pricePerTon: 50.85,
    offeredVolumeInTons: 1500,
    distributionWeight: 0.15,
    supplierName: "EcoCarbon",
    earliestDelivery: new Date(),
    description:
      'The "SustainaForest Carbon" project tackles climate change by restoring and protecting vital forest ecosystems.\nThrough reforestation, sustainable management, and community engagement, we\'re creating resilient carbon sinks that benefit the environment, biodiversity, and local communities.\nVerified carbon credits will be generated as we capture CO2, fostering a sustainable future for all.',
  },
  {
    id: 4,
    name: "EcoRespire",
    country: "India",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Climate+fund/climate-fund.png",
    pricePerTon: 25.0,
    offeredVolumeInTons: 1100,
    distributionWeight: 0.25,
    supplierName: "Pure Planet",
    earliestDelivery: new Date(),
    description:
      "A project dedicated to revitalizing our planet by rejuvenating and conserving critical forest ecosystems.\nBy planting native trees, practicing sustainable forest management, and engaging with local communities, EcoRespire aims to capture carbon dioxide, promote biodiversity, and empower communities.\nVerified carbon credits will be generated, offering a sustainable solution to combat climate change while fostering environmental and societal well-being.",
  },
  {
    id: 5,
    name: "EverGreen Carbon",
    country: "Egipt",
    image:
      "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Renewable+energy/andreas-gucklhorn-Ilpf2eUPpUE-unsplash-min.jpg",
    pricePerTon: 10.5,
    offeredVolumeInTons: 16000,
    distributionWeight: 0.45,
    supplierName: "Carbon Solutions",
    earliestDelivery: new Date(),
    description:
      'The "EverGreen Carbon" project is a transformative carbon credit initiative aimed at restoring and maintaining vital forest ecosystems.\nThrough reforestation, afforestation, and sustainable forest management, we will sequester significant carbon dioxide, enhance biodiversity, empower local communities, and combat deforestation. Verified carbon credits will be generated, reflecting the project\'s positive impact on the environment. Join us in creating a sustainable and greener future with EverGreen Carbon.',
  },
];
describe("analyzeProjects", () => {
  it("should allocate credits with respect to distributionWeight ", () => {
    const requestedCreditsInTons = 60;

    const expected: ProjectPortfolio[] = [
      {
        id: 1,
        name: "EverGreen CarbonScape",
        country: "Germany",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
        pricePerTon: 650,
        offeredVolumeInTons: 15,
        distributionWeight: 0.05,
        supplierName: "Klom",
        earliestDelivery: new Date("2023-09-01"),
        description:
          'The "EverGreen CarbonScape" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems. Through reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation.',
        allocatedTons: 3,
        summary:
          "EverGreen CarbonScape (Germany) offers 15 tons of carbon credits at $650 per ton.",
      },
      {
        id: 2,
        name: "VerdeCarbon",
        country: "India",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Mineralisation/ben-karpinski-ctWw2S9VqOI-unsplash-min.jpg",
        pricePerTon: 200,
        offeredVolumeInTons: 900,
        distributionWeight: 0.1,
        supplierName: "Klom",
        earliestDelivery: new Date("2022-04-01"),
        description:
          "A transformative carbon credit project dedicated to revitalizing ecosystems and fighting climate change. By strategically planting native trees and adopting sustainable forest practices, we`re creating a potent solution that not only absorbs carbon dioxide but also nurtures biodiversity and empowers local communities. Through verified carbon credits, VerdeCarbon is a beacon of environmental stewardship and positive impact.",
        allocatedTons: 6,
        summary:
          "VerdeCarbon (India) offers 900 tons of carbon credits at $200 per ton.",
      },
      {
        id: 3,
        name: "SustainaForest Carbon",
        country: "Brazil",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg",
        pricePerTon: 50.85,
        offeredVolumeInTons: 1500,
        distributionWeight: 0.15,
        supplierName: "EcoCarbon",
        earliestDelivery: new Date("2024-01-01"),
        description:
          'The "SustainaForest Carbon" project tackles climate change by restoring and protecting vital forest ecosystems. Through reforestation, sustainable management, and community engagement, we`re creating resilient carbon sinks that benefit the environment, biodiversity, and local communities. Verified carbon credits will be generated as we capture CO2, fostering a sustainable future for all.',
        allocatedTons: 9,
        summary:
          "SustainaForest Carbon (Brazil) offers 1500 tons of carbon credits at $50.85 per ton.",
      },
      {
        id: 4,
        name: "EcoRespire",
        country: "India",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Climate+fund/climate-fund.png",
        pricePerTon: 25,
        offeredVolumeInTons: 1100,
        distributionWeight: 0.25,
        supplierName: "Pure Planet",
        earliestDelivery: new Date("2023-05-15"),
        description:
          "A project dedicated to revitalizing our planet by rejuvenating and conserving critical forest ecosystems. By planting native trees, practicing sustainable forest management, and engaging with local communities, EcoRespire aims to capture carbon dioxide, promote biodiversity, and empower communities. Verified carbon credits will be generated, offering a sustainable solution to combat climate change while fostering environmental and societal well-being.",
        allocatedTons: 15,
        summary:
          "EcoRespire (India) offers 1100 tons of carbon credits at $25 per ton.",
      },
      {
        id: 5,
        name: "EverGreen Carbon",
        country: "Egypt",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Renewable+energy/andreas-gucklhorn-Ilpf2eUPpUE-unsplash-min.jpg",
        pricePerTon: 11.5,
        offeredVolumeInTons: 16000,
        distributionWeight: 0.45,
        supplierName: "Carbon Solutions",
        earliestDelivery: new Date("2023-12-01"),
        description:
          'The "EverGreen Carbon" project is a transformative carbon credit initiative aimed at restoring and maintaining vital forest ecosystems. Through reforestation, afforestation, and sustainable forest management, we will sequester significant carbon dioxide, enhance biodiversity, empower local communities, and combat deforestation. Verified carbon credits will be generated, reflecting the project`s positive impact on the environment. Join us in creating a sustainable and greener future with EverGreen Carbon.',
        allocatedTons: 27,
        summary:
          "EverGreen Carbon (Egypt) offers 16000 tons of carbon credits at $11.5 per ton.",
      },
    ];

    const result = analyzeProjects(requestedCreditsInTons, projects);

    result.forEach((v, i) => {
      v.allocatedTons === expected[i].allocatedTons;
    });
  });

  it("should allocate credits more than offeredVolumeInTons", () => {
    const requestedCreditsInTons = 600;

    const expected: ProjectPortfolio[] = [
      {
        id: 1,
        name: "EverGreen CarbonScape",
        country: "Germany",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Fugitives/38bb530f5caf513be9f2a41f2d909f47-min.jpeg",
        pricePerTon: 650,
        offeredVolumeInTons: 15,
        distributionWeight: 0.05,
        supplierName: "Klom",
        earliestDelivery: new Date("2023-09-01"),
        description:
          'The "EverGreen CarbonScape" project is dedicated to combatting climate change by restoring and preserving vital forest ecosystems. Through reforestation, afforestation, and sustainable forest management, we aim to create robust carbon sinks while promoting biodiversity, engaging local communities, and preventing deforestation.',
        allocatedTons: 3,
        summary:
          "EverGreen CarbonScape (Germany) offers 15 tons of carbon credits at $650 per ton.",
      },
      {
        id: 2,
        name: "VerdeCarbon",
        country: "India",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Mineralisation/ben-karpinski-ctWw2S9VqOI-unsplash-min.jpg",
        pricePerTon: 200,
        offeredVolumeInTons: 900,
        distributionWeight: 0.1,
        supplierName: "Klom",
        earliestDelivery: new Date("2022-04-01"),
        description:
          "A transformative carbon credit project dedicated to revitalizing ecosystems and fighting climate change. By strategically planting native trees and adopting sustainable forest practices, we`re creating a potent solution that not only absorbs carbon dioxide but also nurtures biodiversity and empowers local communities. Through verified carbon credits, VerdeCarbon is a beacon of environmental stewardship and positive impact.",
        allocatedTons: 6,
        summary:
          "VerdeCarbon (India) offers 900 tons of carbon credits at $200 per ton.",
      },
      {
        id: 3,
        name: "SustainaForest Carbon",
        country: "Brazil",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Afforestation+reforestation/marita-kavelashvili-ugnrXk1129g-unsplash-min.jpg",
        pricePerTon: 50.85,
        offeredVolumeInTons: 1500,
        distributionWeight: 0.15,
        supplierName: "EcoCarbon",
        earliestDelivery: new Date("2024-01-01"),
        description:
          'The "SustainaForest Carbon" project tackles climate change by restoring and protecting vital forest ecosystems. Through reforestation, sustainable management, and community engagement, we`re creating resilient carbon sinks that benefit the environment, biodiversity, and local communities. Verified carbon credits will be generated as we capture CO2, fostering a sustainable future for all.',
        allocatedTons: 9,
        summary:
          "SustainaForest Carbon (Brazil) offers 1500 tons of carbon credits at $50.85 per ton.",
      },
      {
        id: 4,
        name: "EcoRespire",
        country: "India",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Climate+fund/climate-fund.png",
        pricePerTon: 25,
        offeredVolumeInTons: 1100,
        distributionWeight: 0.25,
        supplierName: "Pure Planet",
        earliestDelivery: new Date("2023-05-15"),
        description:
          "A project dedicated to revitalizing our planet by rejuvenating and conserving critical forest ecosystems. By planting native trees, practicing sustainable forest management, and engaging with local communities, EcoRespire aims to capture carbon dioxide, promote biodiversity, and empower communities. Verified carbon credits will be generated, offering a sustainable solution to combat climate change while fostering environmental and societal well-being.",
        allocatedTons: 15,
        summary:
          "EcoRespire (India) offers 1100 tons of carbon credits at $25 per ton.",
      },
      {
        id: 5,
        name: "EverGreen Carbon",
        country: "Egypt",
        image:
          "https://ceezer-public-assets.s3.eu-central-1.amazonaws.com/project_type_sample_images/Renewable+energy/andreas-gucklhorn-Ilpf2eUPpUE-unsplash-min.jpg",
        pricePerTon: 11.5,
        offeredVolumeInTons: 16000,
        distributionWeight: 0.45,
        supplierName: "Carbon Solutions",
        earliestDelivery: new Date("2023-12-01"),
        description:
          'The "EverGreen Carbon" project is a transformative carbon credit initiative aimed at restoring and maintaining vital forest ecosystems. Through reforestation, afforestation, and sustainable forest management, we will sequester significant carbon dioxide, enhance biodiversity, empower local communities, and combat deforestation. Verified carbon credits will be generated, reflecting the project`s positive impact on the environment. Join us in creating a sustainable and greener future with EverGreen Carbon.',
        allocatedTons: 27,
        summary:
          "EverGreen Carbon (Egypt) offers 16000 tons of carbon credits at $11.5 per ton.",
      },
    ];

    const result = analyzeProjects(requestedCreditsInTons, projects);

    result.forEach((v, i) => {
      v.allocatedTons < expected[i].offeredVolumeInTons;
    });
  });

  it("should cap allocation to remainingTons when allocation exceeds remainingTons during processing", () => {
    const requestedCreditsInTons = 200;
    const projects: Project[] = [
      {
        id: 1,
        name: "Project A",
        offeredVolumeInTons: 300,
        distributionWeight: 100,
        pricePerTon: 100,
        country: "TestLand",
        supplierName: "Supplier A",
        earliestDelivery: new Date("2024-01-01"),
        description: "Test project description",
        image: "test_image_url",
      },
      {
        id: 1,
        name: "Project A",
        offeredVolumeInTons: 300,
        distributionWeight: 100,
        pricePerTon: 100,
        country: "TestLand",
        supplierName: "Supplier A",
        earliestDelivery: new Date("2024-01-01"),
        description: "Test project description",
        image: "test_image_url",
      },
    ];

    const result = analyzeProjects(requestedCreditsInTons, projects);

    expect(result).toHaveLength(2);
    expect(result[1].allocatedTons).not.toBe(10);
    expect(result[0].allocatedTons).not.toBe(15);
  });
});
