import { tableConfigurationsServiceInstance } from "../dependencyInjection"
import { RestaurantDao } from "../types"

const mockRestaurantDao: RestaurantDao = {
  id: "31485766-b5d2-49d1-9c39-698869e2af0a",
  open_time: 8,
  close_time: 13
}


describe("Test the tableConfigurations service", () => {
  test("createTimeSlots, given a restaurant with an open time of 9 and close time of 20 should return an array with the correct slots", (done) => {
    const slots = tableConfigurationsServiceInstance.createTimeSlots(mockRestaurantDao);
    expect(Array.isArray(slots)).toBe(true);
    expect(slots.length).toBe(4);
    expect(slots[0].startTime).toBe(8)
    expect(slots[0].endTime).toBe(10)
    expect(slots[1].startTime).toBe(9)
    expect(slots[1].endTime).toBe(11)
    expect(slots[2].startTime).toBe(10)
    expect(slots[2].endTime).toBe(12)
    expect(slots[3].startTime).toBe(11)
    expect(slots[3].endTime).toBe(13)
    done()
  })
});
