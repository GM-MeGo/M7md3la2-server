// Show a specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Login function
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "Resala" && password === "Resala@admin") {
        showSection("home"); // Show home page on successful login
    }
    else if (username === "Resala" && password === "Resala@123") {
        showSection("home"); // Show user page on successful login
    }

    else {
        alert("خطا في التسجيل حاول مرة اخري !!.");
        alert("أسم المستخدم أو كلمة المرور خاظئة");
    }
}

// Dummy image compression function
function compressImage() {
    alert("Image compressed successfully!");
}
