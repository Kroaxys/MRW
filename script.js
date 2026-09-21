
document.addEventListener("DOMContentLoaded", async function () {
    const testresponse = await fetch("https://api.modrinth.com/v2/search?query=sodium");
    const response = await fetch("https://api.modrinth.com/v2/project/AANobbMI")

    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    const testdata = await testresponse.json();

    console.log(data);
    console.log(testdata)
})