const authorNames = "Ray Voice, Alina Voice, Anna Voice";
const version = "v0.0.7";

module.exports = {
  lastWords: words => {
    console.log(words);
    process.exit();
  },
  sendJSON: (res, json, late) => {
    //express's send, but can be used on other frameworks
    setTimeout(()=>{
      res.send(json);
    }, late);  
  },
  sendFile: (res, fileURL, late) => {
    //express's sendFile, but can be used on other frameworks
    setTimeout(()=>{
      res.sendFile(fileURL);
    }, late);  
  },
  argAssign: (arg, defaultVal) => {
    if (arg === undefined) return defaultVal;
    return arg;
  }
}
