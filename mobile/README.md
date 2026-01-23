# Mobile App Setup

This is the mobile application for the Special Project 3002, built with React Native, Expo, TypeScript, and NativeWind (Tailwind CSS for React Native).

## Prerequisites

- Node.js (version 18 or higher)
- npm
- For iOS development: macOS with Xcode
- For Android development: Android Studio or Visual Studio Code with Android SDK
- The backend API running (see backend README)

## Installation

1. Navigate to the mobile directory:

   ```bash
   cd mobile
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

1. Start the Expo development server:

   ```bash
   npx expo start
   ```

   or

   ```bash
   npx expo start --offline
   ```

2. This will open the Expo Developer Tools in your browser. You can then:
   - Scan the QR code with the Expo Go app on your phone
   - Press `a` for Android emulator
   - Press `i` for iOS simulator (macOS only)
   - Press `w` for web version

## Platform-Specific Development

### Android

```bash
npm run android
```

### iOS (macOS only)

```bash
npm run ios
```

### Web

```bash
npm run web
```

## Technologies Used

- React Native 0.81.5
- Expo SDK 54
- TypeScript
- Expo Router for navigation
- NativeWind for styling
- Zustand for state management
- React Hook Form for forms
- Axios for API calls
- Moti for animations
- Zod for validation
- And more...

## Environment Variables

Create an `.env` file in the mobile directory for API URLs and other configuration. The app is configured to connect to the backend API.

## API Integration

The app uses Axios to communicate with the Laravel backend API. Ensure the backend is running on the configured URL.
