import request from "supertest"
import { server } from "../../app"

describe("Test the get all reservations by restaurant id path", () => {
  test("It should respond with an array if given a restaurant id with reservations", done => {
    request(server)
      .get("/restaurants/31485766-b5d2-49d1-9c39-698869e2af0a/open-reservations")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true)
        server.close()
        done();
      });
  });
  test("It should respond with an empty array if given a restaurant id with no reservations", done => {
    request(server)
      .get("/restaurants/145e984f-fe71-4c15-9a6f-c6352d138bab/open-reservations")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toEqual(0);
        server.close()
        done();
      });
  });
  test("It should respond with a validation error if given a restaurant id that is not a valid uuid", done => {
    request(server)
      .get("/restaurants/1/open-reservations")
      .then(response => {
        expect(response.statusCode).toBe(500);
        expect(response.error).toBeTruthy();
        if (response.error) {
          expect(response.error.text).toContain("Validation failed")
        }
        server.close()
        done();
      });
  });
});
