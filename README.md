# 🎖️ Vishwashauryam: Operation THE GAUNTLET Registration

## Project Overview
This project is a functional, cloud-hosted event registration page for Vishwashauryam's technical competition, **"Operation: THE GAUNTLET."** It utilizes a modern, serverless architecture to provide a secure and scalable registration system.

### Key Features
* **Military Club Theme:** Designed with a dark, commanding aesthetic to match the spirit of Vishwashauryam.
* **User Registration:** Collects essential cadet data (Name, Service ID/Roll Number, Email, Phone).
* **Real-time Data Storage:** Submissions are instantly stored in a NoSQL database (Cloud Firestore).
* **Simple Stack:** Built using only HTML, CSS, and vanilla JavaScript for minimal overhead.

---

## ⚙️ Technical Stack & Deployment

| Component | Technology Used | Purpose |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript | Page structure, styling, and client-side logic. |
| **Hosting** | Firebase Hosting | Secure, fast, global content delivery network (CDN) for the website. |
| **Database** | Cloud Firestore | Serverless database used to store all cadet registration records. |
| **Deployment Tool** | Firebase CLI & Git | Command Line Interface for managing and deploying the project. |

---

## 🚀 Deployment Instructions (How to Replicate)

1.  **Prerequisites:** Ensure **Node.js** and the **Firebase CLI** (`npm install -g firebase-tools`) are installed.
2.  **Clone:** Clone this repository to your local machine:
    ```bash
    git clone [YOUR GITHUB REPO URL HERE]
    cd vishwashauryam-event-reg
    ```
3.  **Firebase Configuration:** Update the `firebaseConfig` object in `public/script.js` with your own Firebase project keys.
4.  **Deploy:** Run the Firebase deployment command:
    ```bash
    firebase deploy
    ```

### Live Demo
The registration page is live and fully functional at:
**🎉 **Awesome! You're welcome!**

Glad it's working now! Your registration form is successfully saving data to Firebase Firestore.

**To view your registration data:**

1. Go to **Firebase Console**: https://console.firebase.google.com/project/vishwashauryam-registeration/firestore
2. Look at the **`registrations` collection** to see all submitted registrations
3. Each registration is saved with the Cadet's Service ID (Roll Number) as the document ID

**Your live website is at:** https://winter-accord-472417-d6.web.app **

---

## 👨‍💻 Technical Coordinator
* **Name:** Shaurya Pandey
* **Club:** Vishwashauryam 