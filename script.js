var _a, _b;
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
        imageUrl: "projects/thalassia.png",
        gifURL: "",
        description: "A Shoot'em Up Game made in a team of 4 of which I was the only developper. The target of the project was to create a Shoot'em Up game in 6 weeks.",
        date: "May 2024",
        tools: [unity, csharp]
    };
    var maze = {
        name: "Maze",
        category: Category.Game,
        pageUrl: "https://youtu.be/edjYLYggQ_M?si=XSOTVVHwQgjpIerI",
        imageUrl: "projects/maze.png",
        gifURL: "",
        description: "A randomly generated maze game I made using my own maze generation algorithm. This project was my introduction to game development.",
        date: "April 2022",
        tools: [python, pygame]
    };
    var reactionTime = {
        name: "Reaction Time",
        category: Category.Program,
        pageUrl: "https://youtu.be/soree9B7Zs4?si=UjgEidNrgp5tXuxn",
        imageUrl: "projects/reactiontime.png",
        gifURL: "",
        description: "A program whose goal was for me to get used to the C++ language and raw computer graphics with SDL2.",
        date: "August 2022",
        tools: [cpp, sdl2]
    };
    var rhythmGame = {
        name: "Rhythm Game",
        category: Category.Game,
        pageUrl: "https://youtu.be/ZwmMd3aLjXk?si=Q4a69uhPGtkVzlnQ",
        imageUrl: "projects/rhythmgame.png",
        gifURL: "",
        description: "A project supposed to be a game that ended up being my first attempt at creating a game engine.",
        date: "December 2022",
        tools: [cpp, sdl2]
    };
    var first3DRender = {
        name: "3D Render",
        category: Category.Test,
        pageUrl: "https://youtu.be/A3TB4-_OypA?si=MyJS3uOYRslv0Dd8",
        imageUrl: "projects/first3drender.png",
        gifURL: "",
        description: "A test project made to understand vector math that inspired me to later make a 3D engine.",
        date: "July 2022",
        tools: [cpp, sdl2]
    };
    var particle2DCollision = {
        name: "Particle Collision",
        category: Category.Test,
        pageUrl: "https://youtu.be/bGIVZxsEAs4?si=mb1Zn7TDQkQWyjtN",
        imageUrl: "projects/particle2DCollision.png",
        gifURL: "",
        description: "An attempt at creating a simple 2D collision system for particles and walls, later upgraded to a path finder using collisons.",
        date: "July 2022",
        tools: [cpp, sdl2]
    };
    var kotono = {
        name: "Kotono",
        category: Category.Program,
        pageUrl: "https://youtu.be/DkHal2KlUbM?si=ditjJb_EUEfWp54U",
        imageUrl: "projects/kotono.png",
        gifURL: "",
        description: "A first attempt at making a 3D game engine in C# using OpenGL with OpenTK.",
        date: "March 2023 - 2024",
        tools: [csharp, opentk]
    };
    var kotonoEngine = {
        name: "Kotono Engine",
        category: Category.Program,
        pageUrl: "",
        imageUrl: "projects/kotonoEngine.png",
        gifURL: "",
        description: "The second and current iteration of the Kotono game engine, with an abstraction layer for rendering I called the Kotono Framework.",
        date: "January 2025 - ",
        tools: [cpp, vulkan]
    };
    var twoCrowns = {
        name: "Two Crowns (copy)",
        category: Category.Game,
        pageUrl: "",
        imageUrl: "projects/twoCrowns.png",
        gifURL: "",
        description: "A reproduction of the game Two Crowns, the visuals were made by a friend.",
        date: "April 2025",
        tools: [unrealEngine]
    };
    var mazeGenerator = {
        name: "Maze Generator",
        category: Category.Program,
        pageUrl: "https://youtu.be/mQRLY4BPCgo?si=2aXjwJsPjtOf4YR-",
        imageUrl: "projects/mazeGenerator.png",
        gifURL: "",
        description: "A very fast maze generator, I used this project to upgrade my maze generator algorithm I first developped in python and to make it as fast as I possibly could.",
        date: "July 2024",
        tools: [csharp]
    };
    var shipShooter = {
        name: "Ship Shooter",
        category: Category.Test,
        pageUrl: "https://youtu.be/8Rn2myJjLbo?si=Bp9i1S-IXVR9_dKw",
        imageUrl: "projects/shipShooter.png",
        gifURL: "",
        description: "A little program made to understand how movement works in a realtime game.",
        date: "September 2022",
        tools: [cpp, sdl2]
    };
    var osu = {
        name: "osu! (copy)",
        category: Category.Game,
        pageUrl: "https://youtu.be/mL0DNwiN798?si=is88izhV0ROeqG_H",
        imageUrl: "projects/osu.png",
        gifURL: "",
        description: "A project about recreating the rhythm game osu!, including saving game data, importing maps from files in a custom file format I made for the game.",
        date: "March 2022",
        tools: [python, pygame]
    };
    var tetris = {
        name: "Tetris (copy)",
        category: Category.Game,
        pageUrl: "https://youtu.be/nDP051pyXOE?si=Je2X_9D_n4l0l8Ij",
        imageUrl: "projects/tetris.png",
        gifURL: "",
        description: "A recreation of the game Tetris and my first C++ game, the goal was to make it as rapidly as possible to understand basic SDL2 and how a game loop works.",
        date: "June 2022",
        tools: [cpp, sdl2]
    };
    // Order from latest to oldest
    addProject(twoCrowns);
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
// todo: replace vid by gif, link to github / site
function addProject(project) {
    var toolsHTML = "";
    project.tools.forEach(function (tool) {
        if (tool.pageUrl) {
            toolsHTML += "\n                <a href=\"".concat(tool.pageUrl, "\" target=\"_blank\">\n                    <img\n                        src=\"").concat(tool.imageUrl, "\"\n                        alt=\"").concat(tool.name, "\" />\n                </a>\n            ");
        }
        else {
            toolsHTML += "\n                <img\n                    src=\"".concat(tool.imageUrl, "\"\n                    alt=\"").concat(tool.name, "\" />\n            ");
        }
    });
    var projectPageHTML;
    if (project.pageUrl) {
        projectPageHTML = "\n            <a href=\"".concat(project.pageUrl, "\" target=\"_blank\">\n                <img\n                    src=\"").concat(project.imageUrl, "\"\n                    alt=\"").concat(project.name, "\" />\n            </a>\n        ");
    }
    else {
        projectPageHTML = "\n            <img\n                src=\"".concat(project.imageUrl, "\"\n                alt=\"").concat(project.name, "\" />\n        ");
    }
    ;
    var projectHTML = "\n        <div class=\"project\">\n\n            <div class=\"preview\">\n                ".concat(projectPageHTML, "\n            </div>\n\n\n\n            <div class=\"infos\">\n\n                <div class=\"title\">\n\n                    <h1>").concat(project.name, "</h1>\n                    <div class=\"date\">\n                        <p>").concat(project.date, "</p>\n                    </div>\n                </div>\n                <p>").concat(project.description, "</p>\n\n                <div class=\"tools\">\n\n                    <div class=\"list\">\n                        ").concat(toolsHTML, "\n                    </div>\n\n                    <div class=\"spacer\"></div>\n                </div>\n\n            </div>\n\n        </div>\n    ");
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
}
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
var gif = document.getElementById("myGif");
var originalSrc = gif.src; // Save the original src to reset later
(_a = document.getElementById("play")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    // To "play" a GIF, reset the src to restart it
    gif.src = "";
    setTimeout(function () {
        gif.src = originalSrc;
    }, 10); // Tiny delay so the browser registers the change
});
(_b = document.getElementById("stop")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    // Replace with a static frame (you need a static image of the first frame for this)
    gif.src = "your-static-frame.png"; // You need this image yourself
});
