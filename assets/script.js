
document.addEventListener("DOMContentLoaded", async function () {
    const apicalls = await fetch("assets/temp.json")
    const apijson = await apicalls.json()
    console.log(apijson)
    // apicalls.forEach(proj => {
    //     const response = await fetch(`https://api.modrinth.com/v2/project/${proj}`)
    // });
    const content = document.getElementById("content");
    for (const proj of apijson) {

        const response = await fetch(`https://api.modrinth.com/v2/project/${proj}`)

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const data = await response.json();

        console.log(data);


        const cDiv = document.createElement("div");
        cDiv.className = "infoView"

        //addToDivText(div, text)

        // What needs to be extracted from the data Title, Wiki, source, server_side, client_side, enviroment, raw_icon_url, project_type, loaders, updated, gallery.

        //project
        let projectDiv = document.createElement("div")
        projectDiv.className = "project"
        console.log(data.raw_icon_url)
        let raw_icon_url = data.raw_icon_url
        let projectImg = document.createElement("img")
        projectImg.src = raw_icon_url

        console.log(data.project_type)
        let project_type = data.project_type.toUpperCase()
        addToDivText(projectDiv, project_type, "text0.6")
        projectDiv.appendChild(projectImg)
        cDiv.appendChild(projectDiv)
        //---

        console.log(data.title)
        let title = data.title
        console.log(data.description)
        let description = data.description
        let introDiv = document.createElement("div")
        introDiv.className = "intro"
        addToDivText(introDiv, title, "text1.5")
        addToDivText(introDiv, description, "description")
        cDiv.appendChild(introDiv)

        // let titleP = document.createElement("p")
        // let descriptionP = document.createElement("p")

        // titleP.textContent = title
        // introDiv.appendChild(titleP)

        // descriptionP.textContent = description
        // introDiv.appendChild(descriptionP)



        //temp

        let urlDiv = document.createElement("div")
        urlDiv.className = "url"
        console.log(data.wiki_url)
        let wiki_url = data.wiki_url
        console.log(data.source_url)
        let source_url = data.source_url
        console.log(data.discord_url)
        let discord_url = data.discord_url
        addToDivLink(urlDiv, wiki_url, "Wiki")
        addToDivLink(urlDiv, source_url, "Source")
        addToDivLink(urlDiv, discord_url, "Discord")
        cDiv.appendChild(urlDiv)

        let sideDiv = document.createElement("div")
        sideDiv.className = "side"
        console.log(data.server_side)
        let server_side = `Server side: ${data.server_side}`
        console.log(data.client_side)
        let client_side = `Client side: ${data.client_side}`
        addToDivText(sideDiv, server_side)
        addToDivText(sideDiv, client_side)
        cDiv.appendChild(sideDiv)

        var envDiv = document.createElement("div");
        envDiv.className = "enviroment"
        data.environment.forEach(n => {
            console.log(n)
            let p = document.createElement("p")
            p.textContent = n
            envDiv.appendChild(p)
        })



        var loadDiv = document.createElement("div")
        loadDiv.className = "load"
        data.loaders.forEach(n => {
            console.log(n)
            let p = document.createElement("p")
            p.textContent = n
            loadDiv.appendChild(p)
        })
        cDiv.appendChild(loadDiv)

        console.log(data.updated)
        let updated = data.updated

        // var galDiv = document.createElement("div")
        // galDiv.className = "gallery"
        // data.gallery.forEach(n => {
        //     console.log(n.title)
        //     console.log(n.raw_url)
        //     let p = document.createElement("p")
        //     let img = document.createElement("img")
        //     p.textContent = n.title
        //     img.src = n.raw_url
        //     galDiv.appendChild(p)
        //     galDiv.append(img)
        // });
        // // var infoP = document.createElement("p") 
        // // infoP.textContent = title
        // // cDiv.appendChild(infoP)
        // cDiv.appendChild(galDiv)
        content.appendChild(cDiv)

        console.log("(-----------------------------------)")
    }



    function addToDivText(div, text, helloCodeReader) {
        let p = document.createElement("p")
        p.textContent = text
        if (helloCodeReader) {
            p.className = helloCodeReader
        }
        div.appendChild(p)
    }
    function addToDivLink(div, link, text) {
        let a = document.createElement("a")
        if (link == null){
            return
        }
        a.href = link
        a.textContent = text
        div.appendChild(a)
    }
})