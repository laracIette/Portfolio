var Category;
(function (Category) {
    Category["Game"] = "Game";
    Category["Program"] = "Program";
    Category["Test"] = "Test";
})(Category || (Category = {}));
var unrealEngine = {
    name: "Unreal Engine",
    pageUrl: "https://www.unrealengine.com",
    imageUrl: "https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/video-games/unreal-engine-qdh1c46xy8c1nedruo2v5.png/unreal-engine-xwo7bd8vu6fzpnkcifgtu.png?_a=DAJFJtWIZAAC"
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
var sdl2 = {
    name: "SDL2",
    pageUrl: "https://www.libsdl.org",
    imageUrl: "https://icon.icepanel.io/Technology/png-shadow-512/Simple-DirectMedia-Layer-%28SDL%29.png"
};
function addProjects() {
    var project1 = {
        name: "Maze",
        category: Category.Game,
        pageUrl: "https://youtu.be/edjYLYggQ_M?si=XSOTVVHwQgjpIerI",
        imageUrl: "maze.png",
        description: "Randomly Generated Maze Game",
        date: "April 2022",
        tools: [python, pygame]
    };
    var project2 = {
        name: "Test",
        category: Category.Program,
        pageUrl: "https://www.youtube.com/watch?v=soree9B7Zs4",
        imageUrl: "reactiontime.png",
        description: "Reaction Time Test",
        date: "August 2022",
        tools: [cpp, sdl2]
    };
    var project3 = {
        name: "Rhythm Game",
        category: Category.Game,
        pageUrl: "https://www.youtube.com/watch?v=ZwmMd3aLjXk",
        imageUrl: "rhythmgame.png",
        description: "Rhythm Game",
        date: "December 2022",
        tools: [cpp, sdl2]
    };
    addProject(project1);
    addProject(project2);
    addProject(project3);
}
function addProject(project) {
    var toolsHTML = "";
    project.tools.forEach(function (tool) {
        toolsHTML += "\n            <a href=\"".concat(tool.pageUrl, "\" target=\"_blank\">\n                <img class=\"tool\"\n                    src=\"").concat(tool.imageUrl, "\"\n                    alt=\"").concat(tool.name, "\" />\n            </a>\n        ");
    });
    var projectHTML = "\n    <div class=\"project\">\n\n        <div class=\"left-shit\">\n            <a href=\"".concat(project.pageUrl, "\" target=\"_blank\">\n                <img class=\"image\"\n                    src=\"").concat(project.imageUrl, "\"\n                    alt=\"").concat(project.name, "\" />\n            </a>\n        </div>\n\n        <div class=\"reft-shit\">\n\n            <div class=\"title\">\n                <h1>").concat(project.name, "</h1>\n                <div class=\"date\">\n                    <p>").concat(project.date, "</p>\n                </div>\n            </div>\n            <p>").concat(project.description, "</p>\n\n            <div class=\"tools-list\">\n                ").concat(toolsHTML, "\n            </div>\n        </div>\n    </div>\n    ");
    var projectsDiv = document.getElementById('projects-div');
    if (!projectsDiv) {
        return;
    }
    var projectsCategory = document.getElementById("projects-".concat(project.category));
    if (!projectsCategory) {
        var projectsCategoryHTML = "\n        <div id=\"projects-".concat(project.category, "\">\n            <h1>").concat(project.category, "</h1>\n        </div>\n        ");
        projectsDiv.insertAdjacentHTML('beforeend', projectsCategoryHTML);
        projectsCategory = document.getElementById("projects-".concat(project.category));
    }
    if (projectsCategory) {
        projectsCategory.insertAdjacentHTML('beforeend', projectHTML);
    }
}
