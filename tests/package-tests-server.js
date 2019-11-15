// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from 'meteor/tinytest'

// Import and rename a variable exported by client index.
import { name as packageNameServer } from 'meteor/template-package'

// Write your tests here!
// Here is an example.

Tinytest.add('template-package - server', function (test) {
  test.equal(packageNameServer, 'template-package-server')
})
