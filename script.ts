enum Category {
    Game = "Games",
    Program = "Programs",
    Test = "Tests"
}

type Tool = {
    name: string;
    pageUrl: string;
    imageUrl: string;
};

type Project = {
    name: string;
    category: Category;
    pageUrl: string | null;
    githubUrl: string | null;
    imageUrl: string;
    gifUrl: string;
    description: string;
    date: string;
    tools: Tool[];
};

function addProjects(){
    const unrealEngine: Tool = {
        name: "Unreal Engine",
        pageUrl: "https://www.unrealengine.com",
        imageUrl: "tools/unrealEngine.png"
    };
    const unity: Tool = {
        name: "Unity",
        pageUrl: "https://unity.com",
        imageUrl: "tools/unity.png"
    };
    const python: Tool = {
        name: "Python",
        pageUrl: "https://www.python.org",
        imageUrl: "tools/python.png"
    };
    const pygame: Tool = {
        name: "Pygame",
        pageUrl: "https://www.pygame.org/news",
        imageUrl: "tools/pygame.png"
    };
    const cpp: Tool = {
        name: "C++",
        pageUrl: "https://isocpp.org",
        imageUrl: "tools/cpp.png"
    };
    const csharp: Tool = {
        name: "C#",
        pageUrl: "https://dotnet.microsoft.com/languages/csharp",
        imageUrl: "tools/csharp.png"
    };
    const sdl2: Tool = {
        name: "SDL2",
        pageUrl: "https://www.libsdl.org",
        imageUrl: "tools/sdl2.png"
    };
    const opentk: Tool = {
        name: "OpenTK",
        pageUrl: "https://opentk.net",
        imageUrl: "tools/opentk.png"
    };
    const vulkan: Tool = {
        name: "Vulkan",
        pageUrl: "https://www.vulkan.org",
        imageUrl: "tools/vulkan.png"
    };
    const flutter: Tool = {
        name: "Flutter",
        pageUrl: "https://flutter.dev",
        imageUrl: "tools/flutter.png"
    };




    const thalassia: Project = {
        name: "Thalassia",
        category: Category.Game,
        githubUrl: null,
        pageUrl: "https://youtu.be/GCY0TKGBFfA",
        imageUrl: "projects/images/thalassia.png",
        gifUrl: "projects/gifs/thalassia.gif",
        description: "A Shoot'em Up Game made in a team of 4 of which I was the only developper. The target of the project was to create a Shoot'em Up game in 6 weeks.",
        date: "May 2024",
        tools: [unity, csharp]
    };
    const maze: Project = {
        name: "Maze",
        category: Category.Game,
        githubUrl: null,
        pageUrl: "https://youtu.be/edjYLYggQ_M",
        imageUrl: "projects/images/maze.png",
        gifUrl: "projects/gifs/maze.gif",
        description: "A randomly generated maze game I made using my own maze generation algorithm. This project was my introduction to game development.",
        date: "April 2022",
        tools: [python, pygame]
    };
    const reactionTime: Project = {
        name: "Reaction Time",
        category: Category.Program,
        githubUrl: null,
        pageUrl: "https://youtu.be/soree9B7Zs4",
        imageUrl: "projects/images/reactionTime.png",
        gifUrl: "projects/gifs/reactionTime.gif",
        description: "A program whose goal was for me to get used to the C++ language and raw computer graphics with SDL2.",
        date: "August 2022",
        tools: [cpp, sdl2]
    };
    const rhythmGame: Project = {
        name: "Rhythm Game",
        category: Category.Game,
        githubUrl: "https://github.com/laracIette/SDL_RhythmGame",
        pageUrl: "https://youtu.be/ZwmMd3aLjXk",
        imageUrl: "projects/images/rhythmGame.png",
        gifUrl: "projects/gifs/rhythmGame.gif",
        description: "A project supposed to be a game that ended up being my first attempt at creating a game engine.",
        date: "December 2022",
        tools: [cpp, sdl2]
    };
    const first3DRender: Project = {
        name: "3D Render",
        category: Category.Test,
        githubUrl: null,
        pageUrl: "https://youtu.be/A3TB4-_OypA",
        imageUrl: "projects/images/first3DRender.png",
        gifUrl: "projects/gifs/first3DRender.gif",
        description: "A test project rendering in 3D on the CPU, made to understand vector math. It inspired me to later make a 3D engine.",
        date: "July 2022",
        tools: [cpp, sdl2]
    };
    const particle2DCollision: Project = {
        name: "Particle Collision",
        category: Category.Test,
        githubUrl: null,
        pageUrl: "https://youtu.be/bGIVZxsEAs4",
        imageUrl: "projects/images/particle2DCollision.png",
        gifUrl: "projects/gifs/particle2DCollision.gif",
        description: "An attempt at creating a simple 2D collision system for particles and walls, later upgraded to a path finder using collisons.",
        date: "July 2022",
        tools: [cpp, sdl2]
    };
    const kotono: Project = {
        name: "Kotono",
        category: Category.Program,
        githubUrl: "https://github.com/laracIette/Kotono",
        pageUrl: "https://youtu.be/DkHal2KlUbM",
        imageUrl: "projects/images/kotono.png",
        gifUrl: "projects/gifs/kotono.gif",
        description: "A first attempt at making a 3D game engine in C# using OpenGL with OpenTK.",
        date: "March 2023 - 2024",
        tools: [csharp, opentk]
    };
    const kotonoEngine: Project = {
        name: "Kotono Engine",
        category: Category.Program,
        githubUrl: "https://github.com/laracIette/KotonoEngine",
        pageUrl: "https://github.com/laracIette/KotonoEngine", // no page
        imageUrl: "projects/images/kotonoEngine.png",
        gifUrl: "projects/images/kotonoEngine.png", // no gif
        description: "The second and current iteration of the Kotono game engine, with an abstraction layer for rendering I called the Kotono Framework.",
        date: "January 2025 - ",
        tools: [cpp, vulkan]
    };
    const twoCrowns: Project = {
        name: "Two Crowns (copy)",
        category: Category.Game,
        githubUrl: null,
        pageUrl: null,
        imageUrl: "projects/images/twoCrowns.png",
        gifUrl: "projects/images/twoCrowns.png", // no gif
        description: "A reproduction of the game Two Crowns made in a week, the visuals were made by a friend.",
        date: "April 2025",
        tools: [unrealEngine]
    };
    const mazeGenerator: Project = {
        name: "Maze Generator",
        category: Category.Program,
        githubUrl: "https://github.com/laracIette/MazeGenerator",
        pageUrl: "https://youtu.be/mQRLY4BPCgo",
        imageUrl: "projects/images/mazeGenerator.png",
        gifUrl: "projects/gifs/mazeGenerator.gif",
        description: "A very fast maze generator, I used this project to upgrade my maze generator algorithm I first developped in python and to make it as fast as I possibly could.",
        date: "July 2024",
        tools: [csharp]
    };
    const shipShooter: Project = {
        name: "Ship Shooter",
        category: Category.Test,
        githubUrl: null,
        pageUrl: "https://youtu.be/8Rn2myJjLbo",
        imageUrl: "projects/images/shipShooter.png",
        gifUrl: "projects/gifs/shipShooter.gif",
        description: "A little program made to understand how movement works in a realtime game.",
        date: "September 2022",
        tools: [cpp, sdl2]
    };
    const osu: Project = {
        name: "osu! (copy)",
        category: Category.Game,
        githubUrl: "https://github.com/laracIette/projet_osu",
        pageUrl: "https://youtu.be/mL0DNwiN798",
        imageUrl: "projects/images/osu.png",
        gifUrl: "projects/gifs/osu.gif",
        description: "A project about recreating the rhythm game osu!, including saving game data, importing maps from files in a custom file format I made for the game.",
        date: "March 2022",
        tools: [python, pygame]
    };
    const tetris: Project = {
        name: "Tetris (copy)",
        category: Category.Game,
        githubUrl: null,
        pageUrl: "https://youtu.be/nDP051pyXOE",
        imageUrl: "projects/images/tetris.png",
        gifUrl: "projects/gifs/tetris.gif",
        description: "A recreation of the game Tetris and my first C++ game, the goal was to make it as rapidly as possible to understand basic SDL2 and how a game loop works.",
        date: "June 2022",
        tools: [cpp, sdl2]
    };
    const wanderBlossom: Project = {
        name: "Wander Blossom",
        category: Category.Game,
        githubUrl: "https://github.com/laracIette/Wander-Blossom",
        pageUrl: "https://laraclette.itch.io/wander-blossom",
        imageUrl: "projects/images/wanderBlossom.png",
        gifUrl: "projects/gifs/wanderBlossom.gif",
        description: "An original game created in 10 weeks with 3 friends, I was the team's developper. Also the project that made me learn Unreal Engine the most and the project in which I had the most creative liberty so far.",
        date: "April - June 2025",
        tools: [unrealEngine]
    };
    const mcdoMenuGenerator: Project = {
        name: "McDo Menu Generator",
        category: Category.Program,
        githubUrl: "https://github.com/laracIette/mcdo_menu_generator",
        pageUrl: "https://youtube.com/shorts/0dnF7b_WPw0",
        imageUrl: "projects/images/mcdoMenuGenerator.png",
        gifUrl: "projects/gifs/mcdoMenuGenerator.gif",
        description: "An application made in Flutter in about 10 days, this is a tool to generate McDonald's menus given a target calories count. It gets restaurants products from the McDonald's API (France only), you can filter which products are required or excluded from the menu. This is my also first try at making anything using Flutter.",
        date: "August 2025",
        tools: [flutter]
    };

    // Order from latest to oldest
    addProject(mcdoMenuGenerator);
    addProject(wanderBlossom);
    //addProject(twoCrowns);
    addProject(kotonoEngine);
    addProject(mazeGenerator);
    addProject(thalassia);
    addProject(kotono);
    addProject(rhythmGame);
    addProject(shipShooter);
    addProject(reactionTime);
    addProject(particle2DCollision);
    addProject(first3DRender);
    addProject(tetris);
    addProject(osu);
    addProject(maze);
}

function addProject(project: Project) {
    let githubHTML: string = "";
    if (project.githubUrl) {
        githubHTML += `
            <a href="${project.githubUrl}" target="_blank">
                <img src="images/github.png" alt="${project.name} GitHub" />
            </a>
        `;
        if (project.tools.length != 0) {
            githubHTML += `<div class="separator"></div>`;
        }
    }

    let toolsHTML: string = "";
    project.tools.forEach(tool => {
        if (tool.pageUrl) {
            toolsHTML += `
                <a href="${tool.pageUrl}" target="_blank">
                    <img src="${tool.imageUrl}" alt="${tool.name}" />
                </a>
            `;
        }
        else {
            toolsHTML += `
                <img src="${tool.imageUrl}" alt="${tool.name}" />
            `;
        }
    });

    let projectPageHTML: string;
    if (project.pageUrl) {
        projectPageHTML = `
            <a href="${project.pageUrl}" target="_blank">
                <img id="${project.name}-preview-image" src="${project.imageUrl}" alt="${project.name}" />
            </a>
        `;
    }
    else {
        projectPageHTML = `
            <img id="${project.name}-preview-image" src="${project.imageUrl}" alt="${project.name}" />
        `;
    };

    const projectHTML: string = `
        <div class="project" id="${project.name}">

            <div class="preview">
                ${projectPageHTML}
            </div>

            <div class="infos">

                <div class="title">

                    <h1>${project.name}</h1>
                    <div class="date">
                        <p>${project.date}</p>
                    </div>
                </div>
                <p>${project.description}</p>

                <div class="tools">

                    <div class="list">
                        ${githubHTML}
                        ${toolsHTML}
                    </div>

                    <div class="spacer"></div>
                </div>

            </div>

        </div>
    `;

    const categoriesDiv: HTMLDivElement | null = document.getElementById('categories-div') as HTMLDivElement;

    if (!categoriesDiv) {
        console.error("no projects div");
        return;
    }

    let projectsCategory: HTMLDivElement | null = document.getElementById(`projects-${project.category}`) as HTMLDivElement;

    if (!projectsCategory) {
        const projectsCategoryHTML: string = `
            <div class="category">
                <h1>${project.category}</h1>
                <div class="projects" id="projects-${project.category}">
            </div>
        `;
        categoriesDiv.insertAdjacentHTML('beforeend', projectsCategoryHTML);
        projectsCategory = document.getElementById(`projects-${project.category}`) as HTMLDivElement;
    }

    if (!projectsCategory) {
        console.error("no projects category");
        return;
    }

    projectsCategory.insertAdjacentHTML('beforeend', projectHTML);

    const projectDiv: HTMLElement | null = document.getElementById(`${project.name}`);
    if (!projectDiv) {
        console.error("no project div");
        return;
    }

    // switch to gif
    projectDiv.addEventListener("mouseenter", () => {
        const previewImage = document.getElementById(`${project.name}-preview-image`) as HTMLImageElement;
        if (!previewImage) {
            console.error("no preview image");
            return;
        }
        previewImage.src = project.gifUrl;
    });

    // switch to img
    projectDiv.addEventListener("mouseleave", () => {
        const previewImage = document.getElementById(`${project.name}-preview-image`) as HTMLImageElement;
        if (!previewImage) {
            console.error("no preview image");
            return;
        }
        previewImage.src = project.imageUrl;
    });
}

// show / hide header
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const header: HTMLElement | null = document.getElementById('header');

    if (!header) {
        console.error("no header");
        return;
    }

    if (window.scrollY > lastScrollY) {
        // scrolling down
        header.style.top = '-4em'; // hide header
    } else {
        // scrolling up
        header.style.top = '0'; // show header
    }
    lastScrollY = window.scrollY;
});









