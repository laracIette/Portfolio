type Tool = {
    name: string;
    pageUrl: string;
    imageUrl: string;
};

type Project = {
    name: string;
    pageUrl: string;
    imageUrl: string;
    description: string;
    tools: Tool[];
};

const unrealEngine: Tool = {
    name: "Unreal Engine",
    pageUrl: "https://www.unrealengine.com",
    imageUrl: "https://logowik.com/content/uploads/images/unreal-engine-icon1721420032.logowik.com.webp"
};

function addProjects(){
    const project1: Project = {
        name: "Test",
        pageUrl: "https://www.google.com",
        imageUrl: "https://cdn.discordapp.com/attachments/1103224489078181889/1360005469992915006/image.png?ex=67f98b4b&is=67f839cb&hm=db4ad30aa62616eb8d564850325402d23a2033ca32eda29d535b335a4a49c248&",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptatibus officiis placeat quaerat mollitia voluptatem doloribus architecto itaque deserunt.",
        tools: [unrealEngine]
    };
    addProject(project1);

    const project2: Project = {
        name: "Test",
        pageUrl: "https://www.google.com",
        imageUrl: "https://cdn.discordapp.com/attachments/1103224489078181889/1360005469992915006/image.png?ex=67f98b4b&is=67f839cb&hm=db4ad30aa62616eb8d564850325402d23a2033ca32eda29d535b335a4a49c248&",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        tools: [unrealEngine]
    };
    addProject(project2);
}

function addProject(project: Project) {
    let toolsHTML: string = "";
    project.tools.forEach(tool => {
        toolsHTML += `
            <a href="${tool.pageUrl}" target="_blank">
                <img class="tool"
                    src="${tool.imageUrl}"
                    alt="${tool.name}" />
            </a>
        `;
    });

    const projectHTML: string = `
    <div class="project">

        <div class="left-shit">
            <a href="${project.pageUrl}" target="_blank">
                <img class="image"
                    src="${project.imageUrl}"
                    alt="${project.name}" />
            </a>
        </div>

        <div class="reft-shit">

            <div>
                <h1>${project.name}</h1>
                <p>${project.description}</p>
            </div>

            <div class="tools-list">
                ${toolsHTML}
            </div>
        </div>
    </div>
    `;

    // Grab the parent div where you want to add the project
    const projectsDiv: HTMLElement | null = document.getElementById('projects-div'); // replace this with your actual ID

    if (projectsDiv){
        projectsDiv.insertAdjacentHTML('beforeend', projectHTML);
    }


}

