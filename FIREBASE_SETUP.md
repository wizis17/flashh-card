# Firebase Setup Guide

## 📋 Steps to Setup Firebase

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project" or select existing project
3. Follow the setup wizard

### 2. Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select your location

### 3. Get Firebase Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click the web icon `</>`
4. Register your app
5. Copy the `firebaseConfig` object

### 4. Configure Your App
Replace the config in `frontend/src/firebase.ts`:

```typescript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

### 5. Install Dependencies
```bash
cd frontend
npm install
```

### 6. Add Sample Data (Optional)
Go to Firestore Console and manually add documents to the `words` collection with this structure:

```json
{
  "word": "Eloquent",
  "meaning": "Fluent or persuasive in speaking or writing",
  "example": "She gave an eloquent speech.",
  "createdAt": [Timestamp]
}
```

### 7. Run Your App
```bash
npm run dev
```

## 🔐 Security Rules (Production)

For production, update your Firestore rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /words/{wordId} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users
    }
  }
}
```

## 📊 Differences from SQLite Backend

### Advantages:
✅ No backend server needed
✅ Real-time updates
✅ Automatic scaling
✅ Built-in security rules
✅ Cloud-based (accessible anywhere)
✅ Free tier available

### Trade-offs:
⚠️ Requires internet connection
⚠️ Firestore query costs (free tier: 50k reads/day)
⚠️ Less control over data structure
⚠️ Need Firebase account

## 🚀 Usage

Replace `WordsSection.tsx` with `WordsSection-firebase.tsx`:
```bash
mv src/components/WordsSection-firebase.tsx src/components/WordsSection.tsx
```

The API is the same, just using Firebase instead of REST endpoints!
