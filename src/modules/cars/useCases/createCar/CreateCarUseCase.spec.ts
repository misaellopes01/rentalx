import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it("should be able to create a new car", async () => {
    const car = await createCarUseCase.execute({
      name: "Hilux",
      description: "4x4",
      daily_rate: 100,
      license_plate: "LB-AO-2020",
      fine_amount: 50,
      brand: "Toyota",
      category_id: "category",
    });

    expect(car).toHaveProperty("id");
  });

  it("should not be able to create a car with existing license plate", () => {
    expect(async () => {
      await createCarUseCase.execute({
        name: "Ford",
        description: "4x4",
        daily_rate: 100,
        license_plate: "LB-AO-2020",
        fine_amount: 50,
        brand: "Toyota",
        category_id: "category",
      });

      await createCarUseCase.execute({
        name: "Ford2",
        description: "4x4",
        daily_rate: 100,
        license_plate: "LB-AO-2020",
        fine_amount: 50,
        brand: "Toyota",
        category_id: "category",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a car with existing license plate", async () => {
    const car = await createCarUseCase.execute({
      name: "Ford",
      description: "4x4",
      daily_rate: 100,
      license_plate: "LB-AO-2020",
      fine_amount: 50,
      brand: "Toyota",
      category_id: "category",
    });

    expect(car.available).toBe(true);
  });
});
