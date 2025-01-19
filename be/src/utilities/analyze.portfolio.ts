import { Project } from "src/project/entities/project.entity";
import { ProjectPortfolio } from "src/project/interfaces/Portfolio.interface";

export function analyzeProjects(
  requestedCreditsInTons: number,
  projects: Project[]
): ProjectPortfolio[] {
  let remainingTons = requestedCreditsInTons;
  const totalWeight = projects.reduce(
    (sum, project) => sum + project.distributionWeight,
    0
  );
  const portfolio: ProjectPortfolio[] = projects.map((project) => {
    let maxAllocation = Math.floor(
      (project.distributionWeight / totalWeight) * requestedCreditsInTons
    );
    let allocation = maxAllocation;

    if (allocation > project.offeredVolumeInTons) {
      allocation = project.offeredVolumeInTons;
    }

    if (allocation > remainingTons) {
      allocation = remainingTons;
    }

    remainingTons -= allocation;

    return {
      id: project.id,
      ...project,
      allocatedTons: allocation,
      summary: `${project.name} (${project.country}) offers ${project.offeredVolumeInTons} tons of carbon credits at $${project.pricePerTon} per ton.`,
    };
  });

  return portfolio.filter((p) => p.allocatedTons > 0);
}
