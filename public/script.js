// =================== DARK MODE TOGGLE ===================
document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        document.getElementById("modeToggle").innerText = "☀️ Light Mode";
    } else {
        document.getElementById("modeToggle").innerText = "🌙 Dark Mode";
    }
});


// =================== PLAYER SEARCH FUNCTION ===================
document.querySelector(".button").addEventListener("click", async () => {

    const playerName = document.querySelector(".input").value.trim();

    if (!playerName) {
        alert("Please enter a player name");
        return;
    }

    try {
        const res = await fetch(`/player?name=${playerName}`);
        const data = await res.json();
        const resultDiv = document.getElementById("result");

        if (res.ok) {
            resultDiv.style.display = "block"; // show result
            resultDiv.innerHTML = `
               <div class="player-card">
                    <h2>${data.Player}</h2>
                    <p><b>Span:</b> ${data.Span}</p>
                    <p><b>Matches:</b> ${data.Mat}</p>
                    <p><b>Innings:</b> ${data.Inns}</p>
                    <p><b>Runs:</b> ${data.Runs}</p>
                    <p><b>Highest Score:</b> ${data.HS}</p>
                    <p><b>Average:</b> ${data.Ave}</p>
                    <p><b>100s:</b> ${data["100"]}</p>
                    <p><b>50s:</b> ${data["50"]}</p>
               </div>
            `;

            // animation refresh
            resultDiv.classList.remove("fade");
            void resultDiv.offsetWidth;
            resultDiv.classList.add("fade");

        } else {
            resultDiv.style.display = "block";
            resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
        }

    } catch (err) {
        console.error(err);
        alert("Error connecting to backend");
    }
});
