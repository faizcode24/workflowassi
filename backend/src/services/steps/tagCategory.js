
// export default function tagCategory(text) {
//   if (text.toLowerCase().includes("tech")) return "Technology";
//   if (text.toLowerCase().includes("health")) return "Health";
//   return "General";
// }


// Export a function named tagCategory
export default function tagCategory(text) {

  // Convert text to lowercase to make checking case-insensitive
  const lowerText = text.toLowerCase();

  // If text contains the word "tech"
  if (lowerText.includes("tech")) 
    return "Technology";

  // If text contains the word "health"
  if (lowerText.includes("health")) 
    return "Health";

  // If no keywords matched
  return "General";
}
