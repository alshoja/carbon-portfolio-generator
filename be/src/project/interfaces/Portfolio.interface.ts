export interface ProjectPortfolio {
  id: number;
  allocatedTons: number;
  country: string;
  description: string;
  distributionWeight: number;
  earliestDelivery: Date;
  image: string;
  name: string;
  offeredVolumeInTons: number;
  pricePerTon: number;
  summary: string;
  supplierName: string;
}
