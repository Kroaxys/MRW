
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

        //addToDiv(div, text)

        // What needs to be extracted from the data Title, Wiki, source, server_side, client_side, enviroment, raw_icon_url, project_type, loaders, updated, gallery.
        console.log(data.title)
        let title = data.title
        console.log(data.description)
        let description = data.description
        let introDiv = document.createElement("div")
        introDiv.className = "intro"
        addToDiv(introDiv, title)
        addToDiv(introDiv, description)
        cDiv.appendChild(introDiv)
             
        // let titleP = document.createElement("p")
        // let descriptionP = document.createElement("p")

        // titleP.textContent = title
        // introDiv.appendChild(titleP)

        // descriptionP.textContent = description
        // introDiv.appendChild(descriptionP)
        


        //temp

        let urlDiv = document.createElement("div")
        console.log(data.wiki_url)  
        let wiki_url = data.wiki_url
        console.log(data.source_url)
        let source_url = data.source_url
        addToDiv(urlDiv, wiki_url)
        addToDiv(urlDiv, source_url)
        cDiv.appendChild(urlDiv)

        let sideDiv = document.createElement("div")
        console.log(data.server_side)
        let server_side = `Server side: ${data.server_side}`
        console.log(data.client_side)
        let client_side = `Client side: ${data.client_side}`
        addToDiv(sideDiv, server_side)
        addToDiv(sideDiv, client_side)
        cDiv.appendChild(sideDiv)

        var envDiv = document.createElement("div");
        data.environment.forEach(n => {
            console.log(n)
            let p = document.createElement("p")
            p.textContent = n
            envDiv.appendChild(p)
        })

        //project
        let projectDiv = document.createElement("div")
        console.log(data.raw_icon_url)
        let raw_icon_url = data.raw_icon_url
        let projectImg = document.createElement("img")
        projectImg.src = raw_icon_url
        
        console.log(data.project_type)
        let project_type = data.project_type
        addToDiv(projectDiv, project_type)
        projectDiv.appendChild(projectImg)
        cDiv.appendChild(projectDiv)
        

        var loadDiv = document.createElement("div")
        data.loaders.forEach(n => {
            console.log(n)
            let p = document.createElement("p")
            p.textContent = n
            loadDiv.appendChild(p)
        })
        cDiv.appendChild(loadDiv)

        console.log(data.updated)
        let updated = data.updated

        var galDiv = document.createElement("div")
        data.gallery.forEach(n => {
            console.log(n.title)
            console.log(n.raw_url)
            let p = document.createElement("p")
            let img = document.createElement("img")
            p.textContent = n.title
            img.src = n.raw_url
            galDiv.appendChild(p)
            galDiv.append(img)
        });
        // var infoP = document.createElement("p") 
        // infoP.textContent = title
        // cDiv.appendChild(infoP)
        cDiv.appendChild(galDiv)
        content.appendChild(cDiv)

        console.log("(-----------------------------------)")
    }


    function addToDiv(div, text){
        let p = document.createElement("p")
        p.textContent = text
        div.appendChild(p)
    }
})