import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory
    );
  });

  it("should be able to list all available cars", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Suzuki",
      category_id: "uuid",
      daily_rate: 110.0,
      description: "Carro Usável",
      fine_amount: 50,
      license_plate: "LB-AC-2020",
      name: "Auto",
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by brand", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Suzuki2",
      category_id: "uuid",
      daily_rate: 110.0,
      description: "Carro Usável",
      fine_amount: 50,
      license_plate: "LB-AC-2020",
      name: "Auto",
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: "Suzuki2",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by name", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Suzuki2",
      category_id: "uuid",
      daily_rate: 110.0,
      description: "Carro Usável",
      fine_amount: 50,
      license_plate: "LB-AC-2020",
      name: "Auto1",
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: "Auto1",
    });

    expect(cars).toEqual([car]);
  });

  it("should be able to list all available cars by category_id", async () => {
    const car = await carsRepositoryInMemory.create({
      brand: "Suzuki2",
      category_id: "uuidV1000",
      daily_rate: 110.0,
      description: "Carro Usável",
      fine_amount: 50,
      license_plate: "LB-AC-2020",
      name: "Auto1",
    });

    const cars = await listAvailableCarsUseCase.execute({
      category_id: "uuidV1000",
    });

    expect(cars).toEqual([car]);
  });
});
