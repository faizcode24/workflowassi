
// export default function cleanText(text) {
//   return text.replace(/\s+/g, " ").trim();
// }


// Export a function named cleanText
export default function cleanText(text) {

  // Replace multiple spaces (\s+) with a single space
  // \s+ means one or more whitespace characters (space, tab, newline)
  // "g" flag means apply globally (to whole string)
  // trim() removes extra spaces from start and end
  return text.replace(/\s+/g, " ").trim();
}
