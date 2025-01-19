import { Test, TestingModule } from "@nestjs/testing";

type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};
import { ProjectService } from "./project.service";
import { Repository } from "typeorm";
import { Project } from "./entities/project.entity";
import { getRepositoryToken } from "@nestjs/typeorm";
import * as utils from "../utilities/analyze.portfolio";
import { RequestTonsDto } from "./dto/request-tons.dto";
import { ProjectPortfolio } from "./interfaces/Portfolio.interface";

export const repositoryMockFactory: () => MockType<Repository<Project>> =
  jest.fn(() => ({
    findOne: jest.fn(),
    find: jest.fn<Promise<Project[]>, []>(),
  }));
describe("ProjectService", () => {
  let service: ProjectService;
  let repositoryMock: MockType<Repository<Project>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        {
          provide: getRepositoryToken(Project),
          useFactory: repositoryMockFactory,
        },
      ],
    }).compile();

    service = module.get<ProjectService>(ProjectService);
    repositoryMock = module.get(getRepositoryToken(Project));
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  it("should generate portfolio based on requested tons", async () => {
    const mockProjects: ProjectPortfolio[] = [
      {
        id: 1,
        name: "Test Project 1",
        country: "Test Country 1",
        image: "test-image-1",
        pricePerTon: 100,
        offeredVolumeInTons: 500,
        distributionWeight: 0.05,
        supplierName: "Test Supplier 1",
        earliestDelivery: new Date(),
        description: "Test Description 1",
        summary: "xxx",
        allocatedTons: 10,
      },
      {
        id: 2,
        name: "Test Project 2",
        country: "Test Country 2",
        image: "test-image-2",
        pricePerTon: 200,
        offeredVolumeInTons: 1000,
        distributionWeight: 0.1,
        supplierName: "Test Supplier 2",
        earliestDelivery: new Date(),
        description: "Test Description 2",
        summary: "xx",
        allocatedTons: 10,
      },
    ];

    const analyzeProjects = jest
      .spyOn(utils, "analyzeProjects")
      .mockReturnValueOnce(mockProjects);

    repositoryMock.find.mockResolvedValue(mockProjects as never);
    const requestTonsDto: RequestTonsDto = { requestedTons: 500 };

    const result = await service.generatePortfolio(requestTonsDto);
    repositoryMock.find.mockResolvedValue(mockProjects as never);

    expect(result).toEqual(mockProjects);
    expect(repositoryMock.find).toHaveBeenCalledTimes(1);
    expect(analyzeProjects).toHaveBeenCalledWith(
      requestTonsDto.requestedTons,
      mockProjects
    );
  });
});
