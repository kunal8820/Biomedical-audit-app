# Biomedical Waste Audit Web App

This is a mobile-friendly web application for conducting biomedical waste audits in hospitals. It allows staff to record the presence of waste bins in various hospital areas and rooms, along with optional photo uploads and automatic GPS location tracking. Submissions are directly stored in a connected Google Sheet using Google Apps Script.

## 🔧 Features

- ✅ Select hospital Block and Room
- ✅ Mark presence of Yellow, Red, Blue, Black bins, and PPC
- ✅ Write optional remarks
- ✅ Upload photo (optional)
- ✅ Auto-capture GPS location (latitude & longitude)
- ✅ Submit data directly to Google Sheet
- ✅ No backend server required
- ✅ 100% free hosting using GitHub Pages

## 📝 Fields Captured

- **Block** (dropdown)
- **Room** (text input)
- **Yellow Bin Present?** (Yes/No)
- **Red Bin Present?** (Yes/No)
- **Blue Bin Present?** (Yes/No)
- **Black Bin Present?** (Yes/No)
- **PPC Present?** (Yes/No)
- **Remark** (text input)
- **Photo Upload** (file input, optional)
- **Latitude** (auto-filled)
- **Longitude** (auto-filled)

## 🚀 How It Works

1. User opens the form hosted on GitHub Pages.
2. Fills out the audit details and allows location access.
3. Submits the form, which sends data to a Google Apps Script Web App.
4. The script saves the data in a connected Google Sheet.

## 📂 Files Included

- `index.html` – The main form UI
- `style.css` – Styling for a clean, mobile-friendly layout
- `script.js` – Logic to send form data to Google Apps Script
- `README.md` – This file

## 🌐 Hosting Instructions

1. Create a GitHub repository (e.g., `bmw-audit-app`)
2. Upload `index.html`, `style.css`, and `script.js`
3. Go to **Settings > Pages**
4. Choose `Deploy from branch`, select `main`, and set folder to `/root`
5. Save and get your live URL like:  
   `https://<your-username>.github.io/bmw-audit-app/`

## 📊 Google Apps Script Setup

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getSheetByName("Sheet1");
  var data = e.parameter;
  sheet.appendRow([
    new Date(),
    data.Block,
    data.Room,
    data.Yellow,
    data.Red,
    data.Blue,
    data.Black,
    data.PPC,
    data.Remark,
    data.Latitude,
    data.Longitude,
    data.Photo || "N/A"
  ]);
  return ContentService.createTextOutput("Success");
}

function doGet(e) {
  return ContentService.createTextOutput("BMW Audit Script is Live");
}
```

> 🔐 Ensure you deploy the script as a **Web App**, with access set to **Anyone**.

## 📞 Support

Built by Kunal Pakhare with help from ChatGPT.  
Contact: kunalpakhare23@gmail.com
