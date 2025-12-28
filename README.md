# 🚦 Road Safety Reporter - ImpactThon @KSV

## 📌 Project Information
* **Team ID:** ID_30_The Bit Bros
* **Track Number:** Track 3
* **Track Name:** Technology for Social Good & Sustainable Progress
* **Institute:** NPCCSM (KSV)

---

## 📱 Download the App (APK)
We have built a working prototype! You can download and test the Android App directly from here:  
👉 **[Click Here to Download APK (Google Drive Link)](https://drive.google.com/drive/folders/1k-0_mjnLqTb-VbkIcqr63kr-kuM4l87Z?usp=sharing)**

*(Note: Since this is a hackathon prototype, your phone might show an "Unsafe App" warning during installation. Please ignore it—it is safe to install!)*

---

## 👋 About the Project
We all face problems with potholes and bad roads every day. The biggest issue is that complaining takes too long, and authorities often don't have proof or exact location data to fix things quickly.

**Road Safety Reporter** solves this. It is a simple mobile app that lets any citizen report road damage in just 3 clicks:
1. **Open App** 📸
2. **Click Photo & Select Severity** (Low/Medium/High) 📝
3. **Upload!** 🚀

The data (Photo + Location) is instantly sent to an Admin Dashboard where authorities can see live reports.

---

## 🚀 Key Features
* **Live Camera Only:** Users cannot upload fake photos from their gallery. They must be on the spot.
* **Auto-GPS:** The app automatically fetches the exact location (Latitude/Longitude).
* **Hybrid Verification:** Currently, users select the severity manually (Prototype phase). We plan to add AI auto-detection in the future.
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
![Screenshot_2025-12-28-11-00-42-09_da2750305817db4ed614531f56fffa59](https://github.com/user-attachments/assets/12b6082e-3cb9-462e-8f4e-bb7c162bb9d5)
![Screenshot_2025-12-28-11-00-47-11_da2750305817db4ed614531f56fffa59](https://github.com/user-attachments/assets/2adba68b-94eb-402f-ba3c-094495f767f7)
![Screenshot_2025-12-28-11-01-09-57_da2750305817db4ed614531f56fffa59](https://github.com/user-attachments/assets/bac291d5-1a0b-4660-a258-99c4539c5208)
![Screenshot_2025-12-28-11-04-37-82_40deb401b9ffe8e1df2f1cc5ba480b12](https://github.com/user-attachments/assets/7a76cbfd-42e5-4eb6-9d9c-3aac8adba2b9)


---

## 💻 How to Run the Code Locally

If you want to run this project on your laptop to check the code, follow these steps:

### 1. Mobile App (Frontend)
Make sure you have Node.js installed.

```bash
# Clone this repository
git clone https://github.com/thebitbros/The_Bit_Bros.git

# Go into the app folder
cd RoadSafetyReporter

# Install dependencies
npm install

# Start the app
npx expo start

```

Once the server starts, scan the QR code using the **Expo Go** app on your Android phone.

### 2. Admin Dashboard

The admin panel is very simple and doesn't require a server installation.

1. Go to the `WebDashboard` folder inside the project.
2. Simply double-click the `index.html` file to open it in Chrome, Edge, or any browser.
3. You will see the reports appearing there live!

---

## 👥 Team Members

* **Mohammad Zishan Bhoyaniwala** (Team Leader)
* **Nikhil Parmar** (Co-Team Leader)

---

### ❤️ Built for ImpactThon @KSV 2025-26

```

```
