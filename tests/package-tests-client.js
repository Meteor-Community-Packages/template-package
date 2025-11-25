import { expect } from "chai";

// Import and rename a variable exported by client index.
import { name as packageNameClient } from "meteor/template-package";

describe("template-package - client", () => {
	// Write your tests here!
	// Here is an example.
	it("export its name to the client", () => {
		expect(packageNameClient).to.equal("template-package-client");
	});
});
