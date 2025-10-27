import { z } from "zod";

// Test individual environment variables
console.log("=== ENVIRONMENT VARIABLES DEBUG ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("DATABASE_URL:", process.env.DATABASE_URL ? "✓ Set" : "✗ Missing");
console.log("BETTER_AUTH_URL:", process.env.BETTER_AUTH_URL ? "✓ Set" : "✗ Missing");
console.log("BETTER_AUTH_SECRET:", process.env.BETTER_AUTH_SECRET ? "✓ Set" : "✗ Missing");
console.log("GOOGLE_CLIENT_ID:", process.env.GOOGLE_CLIENT_ID ? "✓ Set" : "✗ Missing");
console.log("GOOGLE_CLIENT_SECRET:", process.env.GOOGLE_CLIENT_SECRET ? "✓ Set" : "✗ Missing");
console.log("NEXT_PUBLIC_APP_URL:", process.env.NEXT_PUBLIC_APP_URL ? "✓ Set" : "✗ Missing");

// Test schema validation
try {
  const urlSchema = z.string().url();
  console.log("\n=== URL VALIDATION TESTS ===");
  
  if (process.env.DATABASE_URL) {
    try {
      urlSchema.parse(process.env.DATABASE_URL);
      console.log("DATABASE_URL: ✓ Valid URL");
    } catch (e) {
      console.log("DATABASE_URL: ✗ Invalid URL -", e.message);
    }
  }
  
  if (process.env.BETTER_AUTH_URL) {
    try {
      urlSchema.parse(process.env.BETTER_AUTH_URL);
      console.log("BETTER_AUTH_URL: ✓ Valid URL");
    } catch (e) {
      console.log("BETTER_AUTH_URL: ✗ Invalid URL -", e.message);
    }
  }
  
  if (process.env.NEXT_PUBLIC_APP_URL) {
    try {
      urlSchema.parse(process.env.NEXT_PUBLIC_APP_URL);
      console.log("NEXT_PUBLIC_APP_URL: ✓ Valid URL");
    } catch (e) {
      console.log("NEXT_PUBLIC_APP_URL: ✗ Invalid URL -", e.message);
    }
  }
  
} catch (error) {
  console.error("Validation error:", error);
}

console.log("\n=== END DEBUG ===");