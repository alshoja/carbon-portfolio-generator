import { Test, TestingModule } from "@nestjs/testing";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { RequestTonsDto } from "./dto/request-tons.dto";
import { ProjectPortfolio } from "./interfaces/Portfolio.interface";

describe("ProjectController", () => {
  let controller: ProjectController;

  const mockProjectService = {
    generatePortfolio: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [
        {
          provide: ProjectService,
          useValue: mockProjectService,
        },
      ],
    }).compile();

    controller = module.get<ProjectController>(ProjectController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });

  describe("generatePortfolio", () => {
    it("should call projectService.generatePortfolio with the correct parameters", async () => {
      const requestTonsDto: RequestTonsDto = {
        requestedTons: 1000,
      };

      await controller.generatePortfolio(requestTonsDto);
      expect(mockProjectService.generatePortfolio).toHaveBeenCalledWith(
        requestTonsDto
      );
    });

    it("should return the correct result from projectService", async () => {
      const requestTonsDto: RequestTonsDto = {
        requestedTons: 100,
      };

      const mockResult: ProjectPortfolio[] = [
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
          allocatedTons: 10,
          summary:
            "EverGreen CarbonScape (Germany) offers 15 tons of carbon credits at $650 per ton.",
        },
      ];

      mockProjectService.generatePortfolio.mockResolvedValue(mockResult);
      const result = await controller.generatePortfolio(requestTonsDto);
      expect(result).toEqual(mockResult);
    });

    it("should throw an error if projectService fails", async () => {
      const requestTonsDto: RequestTonsDto = {
        requestedTons: 1000,
      };

      mockProjectService.generatePortfolio.mockRejectedValue(
        new Error("Something went wrong")
      );

      await expect(
        controller.generatePortfolio(requestTonsDto)
      ).rejects.toThrow("Something went wrong");
    });
  });
});
