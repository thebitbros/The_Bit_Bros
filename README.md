# 🚦 Road Safety Reporter - ImpactThon @KSV

## 📌 Project Information
* **Team ID:** ID_30_The Bit Bros
* **Track Number:** Track 3
* **Track Name:** Technology for Social Good & Sustainable Progress
* **Institute:** NPCCSM (KSV)

---

## 📱 Download the App (APK)
We have built a working prototype. You can download and test the Android App from here:  
👉 **[Click Here to Download APK (Google Drive Link)](PASTE_YOUR_GOOGLE_DRIVE_LINK_HERE)**

*(Note: Since this is a prototype, please ignore any "Unsafe App" warnings during installation. It's safe!)*

---

## 👋 About the Project
We all face problems with potholes and bad roads every day. The biggest issue is that complaining takes too long, and authorities often don't have proof or exact location data.

**Road Safety Reporter** solves this. It is a simple mobile app that lets any citizen report road damage in just 3 clicks:
1. Open App 📸
2. Click Photo & Select Severity (Low/Medium/High) 📝
3. Upload! 🚀

The data (Photo + Location) is instantly sent to an Admin Dashboard where authorities can see live reports.

---

## 🚀 Key Features
* **Live Camera Only:** Users cannot upload fake photos from the gallery. They must be on the spot.
* **Auto-GPS:** The app automatically fetches the exact location (Latitude/Longitude).
* **Hybrid Verification:** Currently, users verify the severity manually (Prototype phase). We plan to add AI auto-detection in the future.
* **Instant Sync:** We used Firebase, so the moment a user submits a report, it appears on the Admin Dashboard immediately.
* **Cross-Platform:** Built using React Native Expo, so it works on Android (and iOS in future).

---

## 🛠️ Tech Stack Used
* **Mobile App:** React Native (Expo)
* **Backend:** Firebase Realtime Database
* **Images:** Base64 Encoding (Stored directly in DB)
* **Admin Panel:** HTML, CSS, JavaScript

---

## 📸 Screenshots
*(You can add screenshots of your app here later)*

---

## 💻 How to Run the Code Locally

If you want to run this project on your laptop, follow these steps:

### 1. Mobile App (Frontend)
Make sure you have Node.js installed.
```bash
# Clone this repository
git clone [https://github.com/](https://github.com/)[YOUR_USERNAME]/RoadSafetyReporter.git

# Go into the app folder
cd RoadSafetyReporter

# Install dependencies
npm install

# Start the app
npx expo start

# Scan the QR code with the Expo Go app on your phone.

### 2. Admin Dashboard
# Go to the WebDashboard folder.

# Simply open the index.html file in Chrome or any browser.

# You will see the reports appearing there live!

## 👥 Team Members

# Mohammad Zishan Bhoyaniwala (Team Leader)

# Nikhil Parmar (Co-Team Leader)

❤️ Built for ImpactThon @KSV 2025-26
