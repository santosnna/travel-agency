require("dotenv").config();
const { connect, populate, clean, closeDB } = require("./dbConfig");
const { mockPackagesArray, newPackage, mockPackage } = require("./helpers");
const PackageService = require("../src/services/packageService");

const service = new PackageService();

beforeAll(async () => {
	await connect();
	await clean();
	await populate(mockPackagesArray);
});
afterAll(async () => {
	await clean();
	await closeDB();
});

describe("CRUD functions", () => {
	it("should insert a valid package into the database", async () => {
		const result = await service.createPackage(newPackage);
		expect(newPackage.name).toBe(result.name);
	});
	it("should retrieve all packages from the database", async () => {
		const result = await service.getAll();
		expect(result).toHaveLength(4);
	});
	it("should retrieve a specific package from the database", async () => {
		const data = await service.createPackage(mockPackage("Test Package"));
		const result = await service.getById(data._id);
		expect(result.name).toBe("Test Package");
	});
	it("should update a package from the database", async () => {
		const data = await service.getByName("Best Walking Tour of Florence");
		data.price = 100;
		const result = await service.updateById(data._id, data);
		expect(result.price).toEqual(100);
	});
	it("should delete a package from the database", async () => {
		const data = await service.getByName("Test Package");
		const result = await service.deleteById(data._id);
		const confirmation = await service.getById(data._id);
		expect(result).toBeUndefined();
		expect(confirmation).toBeNull();
		expect(await service.getAll()).toHaveLength(4);
	});
});
