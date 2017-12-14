var exec = require('cordova/exec');



function honeywellScanner() {
  console.log("honeywell.js: is created");
 }

honeywellScanner.prototype.listenForScans = function(success, failure) {
  return exec(success, failure, "HoneywellScannerPlugin", "listenForScans", []);
}

var honeywellScanner = new honeywellScanner();


module.exports = honeywellScanner;

