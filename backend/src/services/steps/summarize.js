
// export default function summarize(text) {
//   return text.split(".").slice(0,2).join(".") + ".";
// }

// Export a function named summarize
export default function summarize(text) {

  // Split the text into sentences using "." as separator
  // Example: "Hi. How are you. I am fine."
  // → ["Hi", " How are you", " I am fine", ""]
  return text
    .split(".")        // Split text into sentences
    .slice(0, 2)       // Take first 2 sentences
    .join(".")         // Join them back with "."
    + ".";             // Add a period at the end
}
