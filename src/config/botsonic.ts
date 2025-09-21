// Botsonic Widget Configuration
// Replace the token with your actual Botsonic token

export const BOTSONIC_CONFIG = {
  // Get this from your Botsonic dashboard widget code
  TOKEN: import.meta.env.VITE_BOTSONIC_TOKEN || "8fff29eb-adb5-46ec-8cce-81f1109dfd2a",
  
  // Widget settings
  SERVICE_BASE_URL: "https://api-bot.writesonic.com",
  WIDGET_URL: "https://widget.botsonic.com/CDN/botsonic.min.js",
  
  // Chatbox settings
  POSITION: "bottom-right" as const, // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  THEME: "light" as const, // 'light' | 'dark'
  
  // Optional: Customize the appearance
  CUSTOM_STYLES: {
    primaryColor: "#16a34a", // Green color matching your app
    borderRadius: "8px",
    fontSize: "14px"
  }
};

// Instructions for setup:
// 1. Go to https://botsonic.ai/
// 2. Create an account and set up your bot
// 3. Go to the "Embed" or "Widget" section in your dashboard
// 4. Copy the widget script code
// 5. Extract the token from the script (it's the value after "token:")
// 6. Create a .env file in your project root with:
//    VITE_BOTSONIC_TOKEN=your_actual_token
// 7. Or replace the token value directly in this file
