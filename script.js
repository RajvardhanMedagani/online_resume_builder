// =========================================
// GENERATE RESUME FUNCTION
// =========================================

function generateResume() {


    // =====================================
    // NAME
    // =====================================

    let name =
        document.getElementById("name").value;

    document.getElementById("r-name").innerText =
        name || "Your Name";


    // =====================================
    // EMAIL
    // =====================================

    let email =
        document.getElementById("email").value;

    document.getElementById("r-email").innerText =
        email || "Email";


    // =====================================
    // PHONE
    // =====================================

    let phone =
        document.getElementById("phone").value;

    document.getElementById("r-phone").innerText =
        phone || "Phone";


    // =====================================
    // LOCATION
    // =====================================

    let location =
        document.getElementById("location").value;

    document.getElementById("r-location").innerText =
        location || "Location";


    // =====================================
    // CAREER OBJECTIVE
    // =====================================

    let objective =
        document.getElementById("objective").value;

    document.getElementById("r-objective").innerText =
        objective ||
        "Your career objective will appear here.";


    // =====================================
    // EDUCATION
    // =====================================

    let education =
        document.getElementById("education").value;

    document.getElementById("r-education").innerText =
        education ||
        "Your education details will appear here.";


    // =====================================
    // SKILLS
    // =====================================

    let skills =
        document.getElementById("skills").value;

    document.getElementById("r-skills").innerText =
        skills ||
        "Your skills will appear here.";


    // =====================================
    // PROJECTS
    // =====================================

    let projects =
        document.getElementById("projects").value;

    document.getElementById("r-projects").innerText =
        projects ||
        "Your projects will appear here.";


    // =====================================
    // EXPERIENCE
    // =====================================

    let experience =
        document.getElementById("experience").value;

    document.getElementById("r-experience").innerText =
        experience ||
        "Your experience will appear here.";


    // =====================================
    // CERTIFICATIONS
    // =====================================

    let certifications =
        document.getElementById("certifications").value;

    document.getElementById("r-certifications").innerText =
        certifications ||
        "Your certifications will appear here.";

}
