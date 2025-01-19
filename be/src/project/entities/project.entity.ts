import { DecimalColumnTransformer } from "src/shared/transformers/decimal.transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  name: string;

  @Column({ type: "varchar", length: 100 })
  country: string;

  @Column({ type: "text" })
  image: string;

  @Column({
    type: "decimal",
    precision: 5,
    scale: 2,
    transformer: new DecimalColumnTransformer(),
  })
  pricePerTon: number;

  @Column({ type: "int" })
  offeredVolumeInTons: number;

  @Column("decimal", {
    precision: 5,
    scale: 2,
    transformer: new DecimalColumnTransformer(),
  })
  distributionWeight: number;

  @Column({ type: "varchar", length: 255 })
  supplierName: string;

  @Column({ type: "date" })
  earliestDelivery: Date;

  @Column({ type: "text" })
  description: string;
}
