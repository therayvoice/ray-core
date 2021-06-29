const authorNames = "Ray Voice, Alina Voice, Anna Voice";
const version = "v0.0.9";

module.exports = {
  lastWords: words => {
    console.log(words);
    process.exit();
  },
  funcAnime: function (func) {
    if (func !== undefined) func();
    return this;
  },
  sendJSON: function (res, json, late, callback) {
    //express's send, but can be used on other frameworks
    setTimeout(()=>{
      this.funcArgInit(callback);
      res.send(json);
    }, late);  
  },
  sendFile: function (res, fileURL, late, callback) {
    //express's sendFile, but can be used on other frameworks
    setTimeout(()=>{
      this.funcArgInit(callback);
      res.sendFile(fileURL);
    }, late);  
  },
  argAssign: (arg, defaultVal) => {
    if (arg === undefined) return defaultVal;
    return arg;
  }
}
