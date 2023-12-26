import request from "supertest";
import { server } from "../../app";
import { CreateTableConfigurationsRequestInput } from "../../types";

const mockTableConfig: CreateTableConfigurationsRequestInput = {
  restaurantId: "31485766-b5d2-49d1-9c39-698869e2af0a",
  tableConfigurations: [
    {
      seats: 3,
      isIndoor: true
    }
  ]
}

const mockTableConfiWithValidationError = {
  restaurantId: "31485766-b5d2-49d1-9c39-698869e2af0a",
  tableConfigurations: [
    {
      isIndoor: true
    }
  ]
}

afterEach(() => {
  server.close();
});

describe("Test the post table confiuration path", () => {
  test("It should respond with an array of new table configuration given the appropriate input", done => {
    request(server)
      .post("/table-configurations")
      .send(mockTableConfig)
      .then(response => {
        expect(response.statusCode).toBe(201);
        expect(Array.isArray(response.body)).toBe(true);
        done();
      });
  });
  test("It should respond with a validation error if given an incorrect request body", done => {
    request(server)
      .post("/table-configurations")
      .send(mockTableConfiWithValidationError)
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.error).toBeTruthy();
        if (response.error) {
          expect(response.error.text).toContain("Validation failed")
        }
        done();
      });
  });
});
