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
    const {
      distributionWeight,
      offeredVolumeInTons,
      pricePerTon,
      country,
      id,
    } = project;

    let maxAllocation = Math.floor(
      (distributionWeight / totalWeight) * requestedCreditsInTons
    );
    let allocation = maxAllocation;

    if (allocation > offeredVolumeInTons) {
      allocation = offeredVolumeInTons;
    }

    if (allocation >= remainingTons) {
      allocation = remainingTons;
    }

    remainingTons -= allocation;

    return {
      id,
      ...project,
      allocatedTons: allocation,
      summary: `${project.name} (${country}) offers ${offeredVolumeInTons} tons of carbon credits at $${pricePerTon} per ton.`,
    };
  });

  return portfolio.filter((p) => p.allocatedTons > 0);
}
