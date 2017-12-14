var exec = require('cordova/exec');



function honeywellScanner() {
  console.log("honeywell.js: is created");
 }

var honeywellScanner = new honeywellScanner();

honeywellScanner.prototype.listenForScans = function(success, failure) {
  return exec(success, failure, "HoneywellScannerPlugin", "listenForScans", []);
}



module.exports = honeywellScanner;

