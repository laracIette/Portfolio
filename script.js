var Category;
(function (Category) {
    Category["Game"] = "Games";
    Category["Program"] = "Programs";
    Category["Test"] = "Tests";
})(Category || (Category = {}));
function addProjects() {
    var unrealEngine = {
        name: "Unreal Engine",
        pageUrl: "https://www.unrealengine.com",
        imageUrl: "tools/unrealEngine.png"
    };
    var unity = {
        name: "Unity",
        pageUrl: "https://unity.com",
        imageUrl: "tools/unity.png"
    };
    var python = {
        name: "Python",
        pageUrl: "https://www.python.org",
        imageUrl: "tools/python.png"
    };
    var pygame = {
        name: "Pygame",
        pageUrl: "https://www.pygame.org/news",
        imageUrl: "tools/pygame.png"
    };
    var cpp = {
        name: "C++",
        pageUrl: "https://isocpp.org",
        imageUrl: "tools/cpp.png"
    };
    var csharp = {
        name: "C#",
        pageUrl: "https://dotnet.microsoft.com/languages/csharp",
        imageUrl: "tools/csharp.png"
    };
    var sdl2 = {
        name: "SDL2",
        pageUrl: "https://www.libsdl.org",
        imageUrl: "tools/sdl2.png"
    };
    var opentk = {
        name: "OpenTK",
        pageUrl: "https://opentk.net",
        imageUrl: "tools/opentk.png"
    };
    var vulkan = {
        name: "Vulkan",
        pageUrl: "https://www.vulkan.org",
        imageUrl: "tools/vulkan.png"
    };
    var thalassia = {
        name: "Thalassia",
        category: Category.Game,
        pageUrl: "https://youtu.be/GCY0TKGBFfA?si=RbNbSZp0PFaJvlPe",
        imageUrl: "projects/images/thalassia.png",
        gifUrl: "projects/gifs/thalassia.gif",
        description: "A Shoot'em Up Game made in a team of 4 of which I was the only developper. The target of the project was to create a Shoot'em Up game in 6 weeks.",
        date: "May 2024",
        tools: [unity, csharp]
    };
    var maze = {
        name: "Maze",
        category: Category.Game,
        pageUrl: "https://youtu.be/edjYLYggQ_M?si=XSOTVVHwQgjpIerI",
        imageUrl: "projects/images/maze.png",
        gifUrl: "projects/gifs/maze.gif",
        description: "A randomly generated maze game I made using my own maze generation algorithm. This project was my introduction to game development.",
        date: "April 2022",
        tools: [python, pygame]
    };
    var reactionTime = {
        name: "Reaction Time",
        category: Category.Program,
        pageUrl: "https://youtu.be/soree9B7Zs4?si=UjgEidNrgp5tXuxn",
        imageUrl: "projects/images/reactiontime.png",
        gifUrl: "projects/gifs/reactiontime.gif",
        description: "A program whose goal was for me to get used to the C++ language and raw computer graphics with SDL2.",
        date: "August 2022",
        tools: [cpp, sdl2]
    };
    var rhythmGame = {
        name: "Rhythm Game",
        category: Category.Game,
        pageUrl: "https://youtu.be/ZwmMd3aLjXk?si=Q4a69uhPGtkVzlnQ",
        imageUrl: "projects/images/rhythmgame.png",
        gifUrl: "projects/gifs/rhythmgame.gif",
        description: "A project supposed to be a game that ended up being my first attempt at creating a game engine.",
        date: "December 2022",
        tools: [cpp, sdl2]
    };
    var first3DRender = {
        name: "3D Render",
        category: Category.Test,
        pageUrl: "https://youtu.be/A3TB4-_OypA?si=MyJS3uOYRslv0Dd8",
        imageUrl: "projects/images/first3drender.png",
        gifUrl: "projects/gifs/first3drender.gif",
        description: "A test project rendering in 3D on the CPU, made to understand vector math. It inspired me to later make a 3D engine.",
        date: "July 2022",
        tools: [cpp, sdl2]
    };
    var particle2DCollision = {
        name: "Particle Collision",
        category: Category.Test,
        pageUrl: "https://youtu.be/bGIVZxsEAs4?si=mb1Zn7TDQkQWyjtN",
        imageUrl: "projects/images/particle2DCollision.png",
        gifUrl: "projects/gifs/particle2DCollision.gif",
        description: "An attempt at creating a simple 2D collision system for particles and walls, later upgraded to a path finder using collisons.",
        date: "July 2022",
        tools: [cpp, sdl2]
    };
    var kotono = {
        name: "Kotono",
        category: Category.Program,
        pageUrl: "https://youtu.be/DkHal2KlUbM?si=ditjJb_EUEfWp54U",
        imageUrl: "projects/images/kotono.png",
        gifUrl: "projects/gifs/kotono.gif",
        description: "A first attempt at making a 3D game engine in C# using OpenGL with OpenTK.",
        date: "March 2023 - 2024",
        tools: [csharp, opentk]
    };
    var kotonoEngine = {
        name: "Kotono Engine",
        category: Category.Program,
        pageUrl: "https://github.com/laracIette/KotonoEngine",
        imageUrl: "projects/images/kotonoEngine.png",
        gifUrl: "projects/images/kotonoEngine.png", // no gif yet
        description: "The second and current iteration of the Kotono game engine, with an abstraction layer for rendering I called the Kotono Framework.",
        date: "January 2025 - ",
        tools: [cpp, vulkan]
    };
    var twoCrowns = {
        name: "Two Crowns (copy)",
        category: Category.Game,
        pageUrl: "",
        imageUrl: "projects/images/twoCrowns.png",
        gifUrl: "projects/images/twoCrowns.png", // no gif yet
        description: "A reproduction of the game Two Crowns made in a week, the visuals were made by a friend.",
        date: "April 2025",
        tools: [unrealEngine]
    };
    var mazeGenerator = {
        name: "Maze Generator",
        category: Category.Program,
        pageUrl: "https://youtu.be/mQRLY4BPCgo?si=2aXjwJsPjtOf4YR-",
        imageUrl: "projects/images/mazeGenerator.png",
        gifUrl: "projects/gifs/mazeGenerator.gif",
        description: "A very fast maze generator, I used this project to upgrade my maze generator algorithm I first developped in python and to make it as fast as I possibly could.",
        date: "July 2024",
        tools: [csharp]
    };
    var shipShooter = {
        name: "Ship Shooter",
        category: Category.Test,
        pageUrl: "https://youtu.be/8Rn2myJjLbo?si=Bp9i1S-IXVR9_dKw",
        imageUrl: "projects/images/shipShooter.png",
        gifUrl: "projects/gifs/shipShooter.gif",
        description: "A little program made to understand how movement works in a realtime game.",
        date: "September 2022",
        tools: [cpp, sdl2]
    };
    var osu = {
        name: "osu! (copy)",
        category: Category.Game,
        pageUrl: "https://youtu.be/mL0DNwiN798?si=is88izhV0ROeqG_H",
        imageUrl: "projects/images/osu.png",
        gifUrl: "projects/gifs/osu.gif",
        description: "A project about recreating the rhythm game osu!, including saving game data, importing maps from files in a custom file format I made for the game.",
        date: "March 2022",
        tools: [python, pygame]
    };
    var tetris = {
        name: "Tetris (copy)",
        category: Category.Game,
        pageUrl: "https://youtu.be/nDP051pyXOE?si=Je2X_9D_n4l0l8Ij",
        imageUrl: "projects/images/tetris.png",
        gifUrl: "projects/gifs/tetris.gif",
        description: "A recreation of the game Tetris and my first C++ game, the goal was to make it as rapidly as possible to understand basic SDL2 and how a game loop works.",
        date: "June 2022",
        tools: [cpp, sdl2]
    };
    var wanderBlossom = {
        name: "Wander Blossom",
        category: Category.Game,
        pageUrl: "https://laraclette.itch.io/wander-blossom",
        imageUrl: "projects/images/wanderblossom.png",
        gifUrl: "projects/gifs/wanderblossom.gif",
        description: "An original game created in 10 weeks with 3 friends, I was the team's developper. Also the project that made me learn Unreal Engine the most and the project in which I had the most creative liberty so far.",
        date: "April - June 2025",
        tools: [unrealEngine]
    };
    // Order from latest to oldest
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
function addProject(project) {
    var toolsHTML = "";
    project.tools.forEach(function (tool) {
        if (tool.pageUrl) {
            toolsHTML += "\n                <a href=\"".concat(tool.pageUrl, "\" target=\"_blank\">\n                    <img src=\"").concat(tool.imageUrl, "\" alt=\"").concat(tool.name, "\" />\n                </a>\n            ");
        }
        else {
            toolsHTML += "\n                <img src=\"".concat(tool.imageUrl, "\" alt=\"").concat(tool.name, "\" />\n            ");
        }
    });
    var projectPageHTML;
    if (project.pageUrl) {
        projectPageHTML = "\n            <a href=\"".concat(project.pageUrl, "\" target=\"_blank\">\n                <img id=\"").concat(project.name, "-preview-image\" src=\"").concat(project.imageUrl, "\" alt=\"").concat(project.name, "\" />\n            </a>\n        ");
    }
    else {
        projectPageHTML = "\n            <img id=\"".concat(project.name, "-preview-image\" src=\"").concat(project.imageUrl, "\" alt=\"").concat(project.name, "\" />\n        ");
    }
    ;
    var projectHTML = "\n        <div class=\"project\" id=\"".concat(project.name, "\">\n\n            <div class=\"preview\">\n                ").concat(projectPageHTML, "\n            </div>\n\n            <div class=\"infos\">\n\n                <div class=\"title\">\n\n                    <h1>").concat(project.name, "</h1>\n                    <div class=\"date\">\n                        <p>").concat(project.date, "</p>\n                    </div>\n                </div>\n                <p>").concat(project.description, "</p>\n\n                <div class=\"tools\">\n\n                    <div class=\"list\">\n                        ").concat(toolsHTML, "\n                    </div>\n\n                    <div class=\"spacer\"></div>\n                </div>\n\n            </div>\n\n        </div>\n    ");
    var projectsDiv = document.getElementById('projects-div');
    if (!projectsDiv) {
        console.error("no projects div");
        return;
    }
    var projectsCategory = document.getElementById("projects-".concat(project.category));
    if (!projectsCategory) {
        var projectsCategoryHTML = "\n            <div class=\"category\" id=\"projects-".concat(project.category, "\">\n                <h1>").concat(project.category, "</h1>\n            </div>\n        ");
        projectsDiv.insertAdjacentHTML('beforeend', projectsCategoryHTML);
        projectsCategory = document.getElementById("projects-".concat(project.category));
    }
    if (!projectsCategory) {
        console.error("no projects category");
        return;
    }
    projectsCategory.insertAdjacentHTML('beforeend', projectHTML);
    var projectDiv = document.getElementById("".concat(project.name));
    if (!projectDiv) {
        console.error("no project div");
        return;
    }
    // switch to gif
    projectDiv.addEventListener("mouseenter", function () {
        var previewImage = document.getElementById("".concat(project.name, "-preview-image"));
        if (!previewImage) {
            console.error("no preview image");
            return;
        }
        previewImage.src = project.gifUrl;
    });
    // switch to img
    projectDiv.addEventListener("mouseleave", function () {
        var previewImage = document.getElementById("".concat(project.name, "-preview-image"));
        if (!previewImage) {
            console.error("no preview image");
            return;
        }
        previewImage.src = project.imageUrl;
    });
}
// show / hide header
var lastScrollY = 0;
window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    if (!header) {
        console.error("no header");
        return;
    }
    if (window.scrollY > lastScrollY) {
        // scrolling down
        header.style.top = '-4em'; // hide header
    }
    else {
        // scrolling up
        header.style.top = '0'; // show header
    }
    lastScrollY = window.scrollY;
});
