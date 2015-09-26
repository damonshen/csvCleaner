csvCleaner = require '../csvCleaner.js'
assert = require 'assert'



cleaner = new csvCleaner!

describe \csvCleaner, ->
  specify 'should remove double quotes in the string', ->
    testStr   = 'This is a "test" "string"'
    expectStr = 'This is a test string'

    resultStr = cleaner.removeDoubleQuotesInString testStr
    assert.equal expectStr, resultStr


