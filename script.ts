enum Category {
    Game = "Game",
    Program = "Program",
    Test = "Test"
}

type Tool = {
    name: string;
    pageUrl: string;
    imageUrl: string;
};

type Project = {
    name: string;
    category: Category;
    pageUrl: string;
    imageUrl: string;
    description: string;
    date: string;
    tools: Tool[];
};

function addProjects(){
    const unrealEngine: Tool = {
        name: "Unreal Engine",
        pageUrl: "https://www.unrealengine.com",
        imageUrl: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/video-games/unreal-engine-qdh1c46xy8c1nedruo2v5.png/unreal-engine-xwo7bd8vu6fzpnkcifgtu.png?_a=DAJFJtWIZAAC"
    };
    const unity: Tool = {
        name: "Unity",
        pageUrl: "https://unity.com",
        imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/unity-game-engine-icon.png"
    };
    const python: Tool = {
        name: "Python",
        pageUrl: "https://www.python.org",
        imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030224.png?f=webp"
    };
    const pygame: Tool = {
        name: "Pygame",
        pageUrl: "https://www.pygame.org/news",
        imageUrl: "https://www.pygame.org/ftp/pygame-head-party.png"
    };
    const cpp: Tool = {
        name: "C++",
        pageUrl: "https://isocpp.org",
        imageUrl: "https://img.icons8.com/?size=512&id=40669&format=png"
    };
    const csharp: Tool = {
        name: "C#",
        pageUrl: "https://dotnet.microsoft.com/languages/csharp",
        imageUrl: "https://www.vikingsoftware.com/wp-content/uploads/2024/02/C.png"
    };
    const sdl2: Tool = {
        name: "SDL2",
        pageUrl: "https://www.libsdl.org",
        imageUrl: "https://icon.icepanel.io/Technology/png-shadow-512/Simple-DirectMedia-Layer-%28SDL%29.png"
    };
    const opentk: Tool = {
        name: "OpenTK",
        pageUrl: "https://opentk.net",
        imageUrl: "https://avatars.githubusercontent.com/u/5914736?s=280&v=4"
    };
    const vulkan: Tool = {
        name: "Vulkan",
        pageUrl: "https://www.vulkan.org",
        imageUrl: "https://cdn.fosstodon.org/accounts/avatars/109/643/629/499/755/890/original/0210aa2f69b05ebc.png"
    };




    const thalassia: Project = {
        name: "Thalassia",
        category: Category.Game,
        pageUrl: "https://www.youtube.com/watch?v=GCY0TKGBFfA",
        imageUrl: "thalassia.png",
        description: "Shoot'em Up Game",
        date: "May 2024",
        tools: [unity, csharp]
    };
    const maze: Project = {
        name: "Maze",
        category: Category.Game,
        pageUrl: "https://youtu.be/edjYLYggQ_M?si=XSOTVVHwQgjpIerI",
        imageUrl: "maze.png",
        description: "Randomly Generated Maze Game",
        date: "April 2022",
        tools: [python, pygame]
    };
    const reactionTime: Project = {
        name: "Reaction Time",
        category: Category.Program,
        pageUrl: "https://www.youtube.com/watch?v=soree9B7Zs4",
        imageUrl: "reactiontime.png",
        description: "Reaction Time Program",
        date: "August 2022",
        tools: [cpp, sdl2]
    };
    const rhythmGame: Project = {
        name: "Rhythm Game",
        category: Category.Game,
        pageUrl: "https://www.youtube.com/watch?v=ZwmMd3aLjXk",
        imageUrl: "rhythmgame.png",
        description: "Rhythm Game",
        date: "December 2022",
        tools: [cpp, sdl2]
    };

    addProject(thalassia);
    addProject(maze);
    addProject(reactionTime);
    addProject(rhythmGame);
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

        <div class="left">
            <a href="${project.pageUrl}" target="_blank">
                <img
                    src="${project.imageUrl}"
                    alt="${project.name}" />
            </a>
        </div>

        <div class="right">

            <div class="title">
                <h1>${project.name}</h1>
                <div class="date">
                    <p>${project.date}</p>
                </div>
            </div>
            <p>${project.description}</p>

            <div class="tools-list">
                ${toolsHTML}
            </div>
        </div>
    </div>
    `;

    const projectsDiv: HTMLElement | null = document.getElementById('projects-div');

    if (!projectsDiv){
        return;
    }

    let projectsCategory: HTMLElement | null = document.getElementById(`projects-${project.category}`);

    if (!projectsCategory){
        const projectsCategoryHTML: string = `
        <div id="projects-${project.category}">
            <h1>${project.category}</h1>
        </div>
        `;
        projectsDiv.insertAdjacentHTML('beforeend', projectsCategoryHTML);
        projectsCategory = document.getElementById(`projects-${project.category}`);
    }

    if (projectsCategory){
        projectsCategory.insertAdjacentHTML('beforeend', projectHTML);
    }
}

