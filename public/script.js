// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-py6-aOWjka9_uhJzquyvxj5Y7MeM9vg",
  authDomain: "vishwashauryam-registeration.firebaseapp.com",
  projectId: "vishwashauryam-registeration",
  storageBucket: "vishwashauryam-registeration.firebasestorage.app",
  messagingSenderId: "985028194748",
  appId: "1:985028194748:web:3e05d35418f513924bfbb9",
  measurementId: "G-S0D41BB5PV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a reference to the Firestore database
const db = getFirestore(app);

// Wait for DOM to load before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registration-form');
    const feedbackMessage = document.getElementById('feedback-message');

    if (!registrationForm) {
        console.error("Registration form not found!");
        return;
    }

    if (!feedbackMessage) {
        console.error("Feedback message element not found!");
        return;
    }

    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const cadetName = document.getElementById('cadet-name').value;
        const cadetId = document.getElementById('cadet-id').value;
        const cadetEmail = document.getElementById('cadet-email').value;
        const cadetPhone = document.getElementById('cadet-phone').value;
        
        // Simple validation (can be expanded)
        if (!cadetName || !cadetId || !cadetEmail) {
            showFeedback("All required fields must be completed!", 'error');
            return;
        }

        // Prepare data for the database
        const registrationData = {
            name: cadetName,
            rollNumber: cadetId, // Using rollNumber for clarity
            email: cadetEmail,
            phone: cadetPhone,
            timestamp: serverTimestamp() // Record the time
        };

        try {
            // Add a new document to the 'registrations' collection. 
            // We use the Roll Number as the Document ID for easy lookup and to prevent duplicate entries.
            const registrationsRef = collection(db, "registrations");
            await setDoc(doc(registrationsRef, cadetId), registrationData);
            
            showFeedback(`Registration Success! Cadet ${cadetName} with Service ID ${cadetId} is now deployed. Check your email for mission updates.`, 'success');
            registrationForm.reset(); // Clear the form on success
        } catch (error) {
            console.error("Error during deployment (registration): ", error);
            showFeedback("ERROR: Registration failed. Code: " + error.code + " Message: " + error.message, 'error');
        }
    });

    function showFeedback(message, type) {
        feedbackMessage.textContent = message;
        feedbackMessage.className = 'feedback-text'; // Reset classes
        feedbackMessage.classList.add(`feedback-${type}`);
    }
});