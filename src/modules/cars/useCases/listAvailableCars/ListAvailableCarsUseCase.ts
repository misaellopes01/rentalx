import { inject, injectable } from "tsyringe";

import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarRepository } from "@modules/cars/repositories/ICarRepository";

interface IRequest {
  brand?: string;
  name?: string;
  category_id?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarRepository
  ) {}

  async execute({ brand, name, category_id }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(
      brand,
      name,
      category_id
    );

    return cars;
  }
}

export { ListAvailableCarsUseCase };
