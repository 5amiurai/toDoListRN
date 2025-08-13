# Enhanced Todo List App - React Native/Expo

A React Native mobile application built with Expo, implementing Option A (JSON file-based random task generation) for the lab assignment. This app runs on both Android and iOS devices and can be tested using Expo Go or Android Studio.

## Features

### Option A: JSON File-Based Task Generation ✅
- Random task selection from a predefined JSON file (`assets/tasks.json`)
- Tasks are fetched using `useEffect` hook on component mount
- "Generate Random Task" button with `handleAddTask` function
- Random task displays in controlled TextInput component
- Fully functional controlled components for forms

### Core Todo Functionality
- Add tasks (both random and custom)
- Mark tasks as complete/incomplete with visual feedback
- Edit existing tasks inline
- Delete tasks with confirmation alerts
- Task counter showing completion progress
- Modern, mobile-optimized UI with React Native components
- Responsive design optimized for touch interactions

## Technologies Used

- **React Native** - Mobile app framework
- **Expo SDK 53** - Development platform and tools
- **React Hooks** - State management (useState, useEffect)
- **React Native Components** - TouchableOpacity, TextInput, FlatList, etc.
- **StyleSheet** - React Native styling
- **JSON** - Local data storage for predefined tasks

## Project Structure

```
TodoListRN/
├── components/
│   ├── TodoForm.js       # Form for adding tasks with random generation
│   └── TodoList.js       # List display and management with FlatList
├── assets/
│   └── tasks.json        # Predefined tasks for random selection
├── App.js                # Main application component
├── app.json              # Expo configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (installed globally)
- For Android: Android Studio with Android SDK
- For iOS: Xcode (macOS only)

### Step 1: Clone and Install
```bash
# Clone the repository
git clone [repository-url]
cd TodoListRN

# Install dependencies
npm install
```

### Step 2: Install Expo CLI (if not already installed)
```bash
npm install -g @expo/cli
```

## Running the App

### Option 1: Expo Go (Recommended for Testing)
1. Install Expo Go app on your mobile device:
   - Android: [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
   - iOS: [App Store](https://apps.apple.com/app/expo-go/id982107779)

2. Start the development server:
   ```bash
   npx expo start
   ```

3. Scan the QR code with:
   - **Android**: Expo Go app
   - **iOS**: Camera app (will open in Expo Go)

### Option 2: Android Studio Emulator
1. Set up Android Studio and create an Android Virtual Device (AVD)
2. Start the emulator
3. Run the app:
   ```bash
   npx expo start --android
   ```

### Option 3: Web Browser (for Testing)
```bash
# Install web dependencies (if not already installed)
npx expo install react-dom react-native-web @expo/metro-runtime

# Start web version
npx expo start --web
```

### Option 4: Physical Android Device (USB Debugging)
1. Enable Developer Options and USB Debugging on your Android device
2. Connect via USB
3. Run:
   ```bash
   npx expo start --android
   ```

## Usage Instructions

### Adding Tasks
1. **Random Task Generation**: 
   - Tap "Generate Random Task" button
   - A random task from the JSON file will appear in the first input field
   - Tap "Add Task" to add it to your list

2. **Custom Tasks**: 
   - Type your own task in the "Enter your own task..." field
   - Tap "Add Task" to add it to your list

### Managing Tasks
- **Complete**: Tap the circle checkbox to mark tasks as complete
- **Edit**: Tap the edit icon (✎) to modify task text
- **Delete**: Tap the delete icon (🗑) to remove tasks (with confirmation)

### Visual Feedback
- Progress counter shows completion status
- Completed tasks have visual strikethrough effect
- Form fields clear automatically after adding tasks
- Add button is disabled when no text is entered

## Assignment Requirements Met

### Option A Implementation ✅
- ✅ Created `assets` folder inside project root
- ✅ Added `tasks.json` file with predefined tasks
- ✅ Used `useEffect` hook to fetch tasks from JSON
- ✅ Implemented `handleAddTask` function for random selection
- ✅ Added "Generate Random Task" button
- ✅ Display selected task in TextInput field
- ✅ Implemented controlled components for forms

### React Native Specific Features ✅
- ✅ Uses React Native components (View, Text, TouchableOpacity, etc.)
- ✅ Optimized for mobile touch interactions
- ✅ FlatList for efficient list rendering
- ✅ StyleSheet for React Native styling
- ✅ SafeAreaView for proper mobile layout
- ✅ Alert dialogs for user confirmations

## Development Notes

- The app uses React Native's built-in components for optimal mobile performance
- FlatList is used instead of ScrollView for better performance with large lists
- TouchableOpacity provides proper touch feedback for mobile users
- StyleSheet creates optimized styles for React Native
- Alert component provides native mobile dialogs
- The app is compatible with both Android and iOS platforms

## Troubleshooting

### Common Issues

1. **Metro bundler issues**:
   ```bash
   npx expo start --clear
   ```

2. **Android emulator not detected**:
   - Ensure Android Studio is properly installed
   - Check that the emulator is running
   - Verify Android SDK path in environment variables

3. **Expo Go connection issues**:
   - Ensure both devices are on the same network
   - Try restarting the Expo development server
   - Check firewall settings

4. **Dependencies issues**:
   ```bash
   rm -rf node_modules
   npm install
   ```

## Building for Production

### Android APK
```bash
# Build APK
npx expo build:android

# Or create development build
npx expo run:android
```

### iOS App (macOS only)
```bash
# Build for iOS
npx expo build:ios

# Or create development build
npx expo run:ios
```

## Submission Guidelines

### For D2L Submission
1. Create a ZIP file containing all project files (excluding `node_modules`)
2. Include this README.md with setup instructions
3. Ensure the project can be run with `npm install` and `npx expo start`

### For GitHub Submission
1. Push all files to a public GitHub repository
2. Include proper `.gitignore` to exclude `node_modules`
3. Provide the repository link in D2L comments

## Testing Checklist

- ✅ App starts successfully with `npx expo start`
- ✅ Random task generation works from JSON file
- ✅ Custom task input functions properly
- ✅ Tasks can be added, edited, and deleted
- ✅ Checkbox functionality for marking complete
- ✅ Progress counter updates correctly
- ✅ Mobile touch interactions work smoothly
- ✅ App runs on Expo Go mobile app
- ✅ Compatible with Android Studio emulator

## License

This project is created for educational purposes as part of a lab assignment.

## Support

For issues with setup or running the app:
1. Check the troubleshooting section above
2. Verify all prerequisites are installed
3. Ensure you're using compatible Node.js and Expo CLI versions
4. Check Expo documentation: https://docs.expo.dev/

