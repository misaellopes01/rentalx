import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

class CreateCarsSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { specifications_id } = request.body;

        const creatCarSpecificationUseCase = container.resolve(
            CreateCarSpecificationUseCase
        );

        const cars = await creatCarSpecificationUseCase.execute({
            car_id: id,
            specifications_id,
        });

        return response.json(cars);
    }
}

export { CreateCarsSpecificationController };
