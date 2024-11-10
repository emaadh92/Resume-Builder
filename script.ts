document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement | null;
    const ResumeDisplayElement = document.getElementById("resume-display") as HTMLDivElement | null;

    if (form && ResumeDisplayElement) {
        // Handle Submission form
        form.addEventListener("submit", (event: Event) => {
            event.preventDefault();

            // Collect input values
            const name = (document.getElementById("name") as HTMLInputElement).value;
            const email = (document.getElementById("email") as HTMLInputElement).value;
            const phone = (document.getElementById("phone") as HTMLInputElement).value;
            const education = (document.getElementById("education") as HTMLInputElement).value;
            const experience = (document.getElementById("experience") as HTMLInputElement).value;
            const skills = (document.getElementById("skills") as HTMLInputElement).value;

            // HTML template
            const resumeHTML = `
                <h2><b>Resume</b></h2>
                <h3>Personal Information</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Phone:</b> ${phone}</p>

                <h3>Education</h3>
                <p>${education}</p>

                <h3>Experience</h3>
                <p>${experience}</p>

                <h3>Skills</h3>
                <p>${skills}</p>
            `;

            // Display resume
            ResumeDisplayElement.innerHTML = resumeHTML;
        });
    } else {
        console.error("Form or Resume display element not found");
    }
});
