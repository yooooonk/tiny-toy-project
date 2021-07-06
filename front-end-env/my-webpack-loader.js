module.exports = function myebpackLoader(content) {
  return content.replace('console.log(', 'alert(');
};
