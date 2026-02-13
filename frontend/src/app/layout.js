// export const metadata = {
//   title: "Workflow Builder Lite",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <body>{children}</body>
//     </html>
//   );
// }

// Set page metadata (used in Next.js App Router)
export const metadata = {
  title: "Workflow Builder Lite",  
  // This sets the browser tab title
};


// Root layout component
// This wraps all pages in your Next.js app
export default function RootLayout({ children }) {

  return (
    <html>
      {/* Main HTML structure */}

      <body>
        {/* children represents all page content */}
        {children}
      </body>

    </html>
  );
}
