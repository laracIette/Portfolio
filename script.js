var Category;
(function (Category) {
    Category["Game"] = "Game";
    Category["Program"] = "Program";
    Category["Test"] = "Test";
})(Category || (Category = {}));
function addProjects() {
    var unrealEngine = {
        name: "Unreal Engine",
        pageUrl: "https://www.unrealengine.com",
        imageUrl: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/video-games/unreal-engine-qdh1c46xy8c1nedruo2v5.png/unreal-engine-xwo7bd8vu6fzpnkcifgtu.png?_a=DAJFJtWIZAAC"
    };
    var unity = {
        name: "Unity",
        pageUrl: "https://unity.com",
        imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/unity-game-engine-icon.png"
    };
    var python = {
        name: "Python",
        pageUrl: "https://www.python.org",
        imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030224.png?f=webp"
    };
    var pygame = {
        name: "Pygame",
        pageUrl: "https://www.pygame.org/news",
        imageUrl: "https://www.pygame.org/ftp/pygame-head-party.png"
    };
    var cpp = {
        name: "C++",
        pageUrl: "https://isocpp.org",
        imageUrl: "https://img.icons8.com/?size=512&id=40669&format=png"
    };
    var csharp = {
        name: "C#",
        pageUrl: "https://dotnet.microsoft.com/languages/csharp",
        imageUrl: "https://www.vikingsoftware.com/wp-content/uploads/2024/02/C.png"
    };
    var sdl2 = {
        name: "SDL2",
        pageUrl: "https://www.libsdl.org",
        imageUrl: "https://icon.icepanel.io/Technology/png-shadow-512/Simple-DirectMedia-Layer-%28SDL%29.png"
    };
    var opentk = {
        name: "OpenTK",
        pageUrl: "https://opentk.net",
        imageUrl: "https://avatars.githubusercontent.com/u/5914736?s=280&v=4"
    };
    var vulkan = {
        name: "Vulkan",
        pageUrl: "https://www.vulkan.org",
        imageUrl: "https://cdn.fosstodon.org/accounts/avatars/109/643/629/499/755/890/original/0210aa2f69b05ebc.png"
    };
    var thalassia = {
        name: "Thalassia",
        category: Category.Game,
        pageUrl: "https://www.youtube.com/watch?v=GCY0TKGBFfA",
        imageUrl: "thalassia.png",
        description: "Shoot'em Up Game",
        date: "May 2024",
        tools: [unity, csharp]
    };
    var maze = {
        name: "Maze",
        category: Category.Game,
        pageUrl: "https://youtu.be/edjYLYggQ_M?si=XSOTVVHwQgjpIerI",
        imageUrl: "maze.png",
        description: "Randomly Generated Maze Game",
        date: "April 2022",
        tools: [python, pygame]
    };
    var reactionTime = {
        name: "Reaction Time",
        category: Category.Program,
        pageUrl: "https://www.youtube.com/watch?v=soree9B7Zs4",
        imageUrl: "reactiontime.png",
        description: "Reaction Time Program",
        date: "August 2022",
        tools: [cpp, sdl2]
    };
    var rhythmGame = {
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
function addProject(project) {
    var toolsHTML = "";
    project.tools.forEach(function (tool) {
        toolsHTML += "\n            <a href=\"".concat(tool.pageUrl, "\" target=\"_blank\">\n                <img\n                    src=\"").concat(tool.imageUrl, "\"\n                    alt=\"").concat(tool.name, "\" />\n            </a>\n        ");
    });
    var projectHTML = "\n        <div class=\"project\">\n\n            <div class=\"preview\">\n                <a href=\"".concat(project.pageUrl, "\" target=\"_blank\">\n                    <img\n                        src=\"").concat(project.imageUrl, "\"\n                        alt=\"").concat(project.name, "\" />\n                </a>\n            </div>\n\n            <div class=\"infos\">\n\n                <div class=\"title\">\n                    <h1>").concat(project.name, "</h1>\n                    <div class=\"date\">\n                        <p>").concat(project.date, "</p>\n                    </div>\n                </div>\n                <p>").concat(project.description, "</p>\n\n                <div class=\"tools\">\n                    ").concat(toolsHTML, "\n                </div>\n            </div>\n        </div>\n    ");
    var projectsDiv = document.getElementById('projects-div');
    if (!projectsDiv) {
        return;
    }
    var projectsCategory = document.getElementById("projects-".concat(project.category));
    if (!projectsCategory) {
        var projectsCategoryHTML = "\n            <div class=\"category\" id=\"projects-".concat(project.category, "\">\n                <h1>").concat(project.category, "</h1>\n            </div>\n        ");
        projectsDiv.insertAdjacentHTML('beforeend', projectsCategoryHTML);
        projectsCategory = document.getElementById("projects-".concat(project.category));
    }
    if (projectsCategory) {
        projectsCategory.insertAdjacentHTML('beforeend', projectHTML);
    }
}
