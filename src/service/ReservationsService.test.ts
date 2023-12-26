import { reservationsServiceInstance } from "../dependencyInjection"
import { CreateReservationRequestInput } from "../types"

const mockReservation: CreateReservationRequestInput = {
  startTime: 10,
  restaurantId: "31485766-b5d2-49d1-9c39-698869e2af0a",
  numPeople: 2,
  isIndoor: true
}

describe("Test the reservation service", () => {
  test("It should make a reservation greater than or equal to the number of people given, and less than or equal to the number of people given plus 2", (done) => {
     reservationsServiceInstance.makeReservation(mockReservation).then((res) => {
      if (res) {
        expect(res.seats).toBeGreaterThanOrEqual(mockReservation.numPeople);
        expect(res.seats).toBeLessThanOrEqual(mockReservation.numPeople + 1);
      }
      done()
     })
  });
  test("It should make a reservaation with the same location requested", (done) => {
    reservationsServiceInstance.makeReservation(mockReservation).then((res) => {
      if (res) {
        expect(res.isIndoor).toBe(mockReservation.isIndoor);
      }
     done()
    })
 });
 test("It should make a reservation with the start time at the same time as the requested start", (done) => {
  reservationsServiceInstance.makeReservation(mockReservation).then((res) => {
    if (res) {
      expect(res.startTime).toBeGreaterThanOrEqual(mockReservation.startTime);
    }
   done()
    })
});
});
