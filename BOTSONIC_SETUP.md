# Botsonic Chatbox Integration Setup

## Overview
This agricultural app now includes a Botsonic AI chatbox that can help users with agricultural queries, crop recommendations, and farming advice.

## Setup Instructions

### 1. Get Botsonic Credentials
1. Go to [https://botsonic.ai/](https://botsonic.ai/)
2. Create an account or sign in
3. Create a new bot or use an existing one
4. Get your **Bot ID** and **API Key** from the dashboard

### 2. Configure Environment Variables
Create a `.env` file in your project root with:
```
VITE_BOTSONIC_BOT_ID=your_actual_bot_id
VITE_BOTSONIC_API_KEY=your_actual_api_key
```

### 3. Update Configuration (Alternative)
If you prefer not to use environment variables, edit `src/config/botsonic.ts`:
```typescript
export const BOTSONIC_CONFIG = {
  BOT_ID: "your_actual_bot_id",
  API_KEY: "your_actual_api_key",
  // ... other settings
};
```

### 4. Customize Your Bot
1. In your Botsonic dashboard, customize your bot's:
   - Name and description
   - Knowledge base (upload agricultural documents, FAQs)
   - Personality and responses
   - Welcome message

### 5. Test the Integration
1. Run your app: `npm run dev`
2. Look for the green chat button in the bottom-right corner
3. Click it to open the chatbox
4. Test with agricultural queries like:
   - "What crops grow best in Karnataka?"
   - "How to improve soil quality?"
   - "When should I plant rice?"

## Features

### Chatbox Features
- **Floating Button**: Green chat button that appears on all pages
- **Smooth Animations**: Open/close with smooth transitions
- **Minimizable**: Can be minimized to save space
- **Responsive**: Works on desktop and mobile
- **Customizable Position**: Can be positioned in any corner
- **Theme Support**: Light/dark theme options

### Customization Options
- **Position**: `bottom-right`, `bottom-left`, `top-right`, `top-left`
- **Theme**: `light` or `dark`
- **Colors**: Matches your app's green color scheme
- **Size**: Responsive sizing for different screen sizes

## Troubleshooting

### Common Issues
1. **Chatbox not appearing**: Check your Bot ID and API Key
2. **Script loading errors**: Ensure you have internet connection
3. **Styling issues**: Check if Tailwind CSS is properly loaded

### Debug Mode
To debug, open browser console and look for:
- Botsonic initialization messages
- API connection status
- Any error messages

## Security Notes
- Never commit your `.env` file to version control
- Keep your API keys secure
- Use environment variables for production deployments

## Support
- Botsonic Documentation: [https://docs.botsonic.ai/](https://docs.botsonic.ai/)
- Botsonic Support: Contact through their dashboard
