// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by template-package.js.
import { name as packageName } from "meteor/template-package";

// Write your tests here!
// Here is an example.
Tinytest.add('template-package - example', function (test) {
  test.equal(packageName, "template-package");
});
