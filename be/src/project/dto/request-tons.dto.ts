import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class RequestTonsDto {
  @IsNotEmpty({ message: "Requested tons required." })
  @IsNumber()
  @Min(1, { message: "Requested tons must be at least 1." })
  requestedTons: number;
}
