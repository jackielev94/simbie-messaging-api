import request from "supertest";
import { server } from "../../app";
import { CreateReservationRequestInput } from "../../types";

const mockReservation: CreateReservationRequestInput = {
  startTime: 10,
  restaurantId: "31485766-b5d2-49d1-9c39-698869e2af0a",
  numPeople: 2,
  isIndoor: true
}

const mockReservationWithValidationError = {
  startTime: 10,
  restaurantId: "31485766-b5d2-49d1-9c39-698869e2af0a",
  isIndoor: true
}

const mockReservationWithNoOpenReservations: CreateReservationRequestInput = {
  startTime: 1,
  restaurantId: "31485766-b5d2-49d1-9c39-698869e2af0a",
  numPeople: 2,
  isIndoor: true
}

afterEach(() => {
  server.close();
});

describe("Test the put reservation path", () => {
  test("It should respond with an updated reservation and 200 status code, the right location, a number of people between request # and request # +2, and it should no longer be open if reservation was successfully updated", done => {
    request(server)
      .put("/reservations")
      .send(mockReservation)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body.open).toBe(false);
        expect(response.body.isIndoor).toBe(true);
        expect(response.body.seats).toBeLessThanOrEqual(mockReservation.numPeople + 1);
        expect(response.body.seats).toBeGreaterThanOrEqual(mockReservation.numPeople);
        done();
      });
  });
  test("It should respond with a validation error if given an incorrect request body", done => {
    request(server)
      .put("/reservations")
      .send(mockReservationWithValidationError)
      .then(response => {
        expect(response.error).toBeTruthy();
        if (response.error) {
          expect(response.error.text).toContain("Validation failed");
        }
        expect(response.statusCode).toBe(500);
        done();
      });
  });
  test("It should respond with a 400 error if reservation cannot be successfully made", done => {
    request(server)
      .put("/reservations")
      .send(mockReservationWithNoOpenReservations)
      .then(response => {
        expect(response.error).toBeTruthy();
        if (response.error) {
          expect(response.error.text).toContain("no reservations");
        }
        expect(response.statusCode).toBe(400);
        done();
      });
  });
});
