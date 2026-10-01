
document.addEventListener("DOMContentLoaded", async function () {
    const apicalls = await fetch("assets/temp.json")
    const apijson = await apicalls.json()
    console.log(apijson)
    // apicalls.forEach(proj => {
    //     const response = await fetch(`https://api.modrinth.com/v2/project/${proj}`)
    // });
    for (const proj of apijson) {

        const response = await fetch(`https://api.modrinth.com/v2/project/${proj}`)

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

        // What needs to be extracted from the data Title, Wiki, source, server_side, client_side, enviroment, raw_icon_url, project_type, loaders, updated, gallery.
        console.log(data.title)
        console.log(data.wiki_url)
        console.log(data.source_url)
        console.log(data.server_side)
        console.log(data.client_side)
        data.environment.forEach(n => {
            console.log(n)
        })
        console.log(data.raw_icon_url)
        console.log(data.project_type)
        data.loaders.forEach(n => {
            console.log(n)
        })
        console.log(data.updated)
        data.gallery.forEach(n => {
            console.log(n.title)
            console.log(n.raw_url)
        });
        console.log("(-----------------------------------)")
    }



})