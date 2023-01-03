import { ElfCalories } from "../src/index";

describe("test for elf with most calories", () => {
    const elf = new ElfCalories();
    test("should return 2000 for maxCalorie([1000, '', 2000])", () => {
        expect(elf.maxCalorie([1000, "", 2000])).toBe(2000);
    })
    test("should return 3000 for maxCalorie([2000, '', 1000, '', 3000])", () => {
        expect(elf.maxCalorie([2000, "", 1000, "", 3000])).toBe(3000);
    })
    test("should return 3000 for maxCalorie([1000, '', 2000, 3000, '', 4000])", () => {
        expect(elf.maxCalorie([1000, '', 2000, 3000, '', 4000])).toBe(5000);
    })
    test("should return 10000 for maxCalorie([1000, 2000, 3000, '', 4000, '', 5000, 6000, '', 7000, 8000, 9000, '', 10000])", () => {
        expect(elf.maxCalorie([1000, 2000, 3000, '', 4000, '', 5000, 6000, '', 7000, 8000, 9000, '', 10000])).toBe(24000);
    })
})