// Generated by LiveScript 1.4.0
(function(){
  var csv, fs, Promise, csvCleaner;
  csv = require('csv');
  fs = require('fs');
  Promise = require('bluebird');
  Promise.promisifyAll(csv);
  Promise.promisifyAll(fs);
  csvCleaner = (function(){
    csvCleaner.displayName = 'csvCleaner';
    var prototype = csvCleaner.prototype, constructor = csvCleaner;
    prototype.removeAllDoubleQuotes = function(csvArray){
      return new Promise(function(resolve, reject){
        var i$, ref$, len$, row;
        for (i$ = 0, len$ = (ref$ = csvArray).length; i$ < len$; ++i$) {
          row = ref$[i$];
          row.forEach(fn$);
        }
        return resolve(csvArray);
        function fn$(element, index){
          if (element.indexOf('"') > 0) {
            return row[index] = removeDoubleQuotesInString;
          }
        }
      });
    };
    prototype.removeDoubleQuotesInString = function(string){
      return string.replace(/"/g, '');
    };
    prototype.start = function(filePath){
      return fs.readFileAsync(filePath).then(csv.parseAsync).then(this.removeAllDoubleQuotes).then(function(data){
        return console.log(data);
      });
    };
    function csvCleaner(){}
    return csvCleaner;
  }());
  module.exports = csvCleaner;
}).call(this);