
// export default function extractPoints(text) {
//   return text.split(" ").slice(0,10).join(" ");
// }

// Export a function named extractPoints
export default function extractPoints(text) {

  // Split the text into an array of words using space as separator
  // Example: "Hello world today" → ["Hello", "world", "today"]
  return text
    .split(" ")        // Convert text into array of words
    .slice(0, 10)      // Take first 10 words only
    .join(" ");        // Join them back into a single string
}
