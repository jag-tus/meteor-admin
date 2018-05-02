// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by yogiben-admin.js.
import { name as packageName } from "meteor/jag82:yogiben-admin";

// Write your tests here!
// Here is an example.
Tinytest.add('yogiben-admin - example', function (test) {
  test.equal(packageName, "yogiben-admin");
});
