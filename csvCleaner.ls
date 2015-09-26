csv = require 'csv'
fs = require 'fs'
Promise = require 'bluebird'

Promise.promisifyAll csv
Promise.promisifyAll fs

class csvCleaner

  # remove double quote in csv entries
  removeAllDoubleQuotes: (csvArray) ->
    new Promise (resolve, reject) ->
      for row in csvArray
        element, index <- row.forEach
        if element.indexOf(\") > 0
          row[index] = removeDoubleQuotesInString
      resolve csvArray

  removeDoubleQuotesInString: (string) ->
    string.replace /"/g, ''

  start: (filePath)->
    fs.readFileAsync filePath
      .then csv.parseAsync
      .then @removeAllDoubleQuotes
      # .then csv.transform
      .then (data) ->
        console.log data
module.exports = csvCleaner
