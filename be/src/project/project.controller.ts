import {
  Body,
  Controller,
  Post
} from "@nestjs/common";
import { RequestTonsDto } from "./dto/request-tons.dto";
import { ProjectService } from "./project.service";

@Controller("project")
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post("generate/portfolio")
  async generatePortfolio(@Body() requestTonsDto: RequestTonsDto) {
    return this.projectService.generatePortfolio(requestTonsDto);
  }
}
