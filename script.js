
let kannada = false;

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function changeLanguage() {
    kannada = !kannada;

    const translations = {
        heading: [
            "Scholarship & Government Scheme Eligibility Checker",
            "ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳ ಅರ್ಹತಾ ಪರಿಶೀಲಕ"
        ],
        description: [
            "Find scholarships and government schemes suitable for your education and eligibility.",
            "ನಿಮ್ಮ ಶಿಕ್ಷಣ ಮತ್ತು ಅರ್ಹತೆಗೆ ಸೂಕ್ತವಾದ ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಸರ್ಕಾರಿ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಿ."
        ],
        studentTitle: ["Student Portal", "ವಿದ್ಯಾರ್ಥಿ ಪೋರ್ಟಲ್"],
        studentDesc: [
            "Find scholarships for students.",
            "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳನ್ನು ಹುಡುಕಿ."
        ],
        adminTitle: ["Administrator Portal", "ನಿರ್ವಾಹಕರ ಪೋರ್ಟಲ್"],
        adminDesc: [
            "Manage scholarships and users.",
            "ವಿದ್ಯಾರ್ಥಿವೇತನ ಮತ್ತು ಬಳಕೆದಾರರನ್ನು ನಿರ್ವಹಿಸಿ."
        ],
        studentBtn: ["Student Login", "ವಿದ್ಯಾರ್ಥಿ ಲಾಗಿನ್"],
        adminBtn: ["Admin Login", "ನಿರ್ವಾಹಕರ ಲಾಗಿನ್"]
    };

    for (const id in translations) {
        document.getElementById(id).textContent =
            translations[id][kannada ? 1 : 0];
    }

    document.getElementById("message").textContent = "";
    document.documentElement.lang = kannada ? "kn" : "en";
}

function showMessage(role) {
    document.getElementById("message").textContent =
        kannada
        ? "ಲಾಗಿನ್ ವ್ಯವಸ್ಥೆಯನ್ನು ಮುಂದಿನ ಹಂತದಲ್ಲಿ ಸೇರಿಸುತ್ತೇವೆ."
        : role + " login will be added in Level 2.";
}
