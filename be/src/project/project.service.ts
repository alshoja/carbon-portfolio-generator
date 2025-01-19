import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "./entities/project.entity";
import { ProjectPortfolio } from "./interfaces/Portfolio.interface";
import { RequestTonsDto } from "./dto/request-tons.dto";
import { analyzeProjects } from "src/utilities/analyze.portfolio";

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>
  ) {}

  async generatePortfolio({
    requestedTons,
  }: RequestTonsDto): Promise<ProjectPortfolio[]> {
    const projects = await this.projectRepository.find();
    const projectPortfolioAnalysis = analyzeProjects(requestedTons, projects);
    return projectPortfolioAnalysis;
  }
}
