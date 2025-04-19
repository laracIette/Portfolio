var Category;
(function (Category) {
    Category[Category["Game"] = 0] = "Game";
    Category[Category["Program"] = 1] = "Program";
    Category[Category["Test"] = 2] = "Test";
})(Category || (Category = {}));
var unrealEngine = {
    name: "Unreal Engine",
    pageUrl: "https://www.unrealengine.com",
    imageUrl: "https://logowik.com/content/uploads/images/unreal-engine-icon1721420032.logowik.com.webp"
};
function addProjects() {
    var project1 = {
        name: "Test",
        category: Category.Game,
        pageUrl: "https://www.google.com",
        imageUrl: "https://cdn.discordapp.com/attachments/1103224489078181889/1360005469992915006/image.png?ex=67f98b4b&is=67f839cb&hm=db4ad30aa62616eb8d564850325402d23a2033ca32eda29d535b335a4a49c248&",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium voluptatibus officiis placeat quaerat mollitia voluptatem doloribus architecto itaque deserunt.",
        tools: [unrealEngine]
    };
    addProject(project1);
    var project2 = {
        name: "Test",
        category: Category.Program,
        pageUrl: "https://www.google.com",
        imageUrl: "https://cdn.discordapp.com/attachments/1103224489078181889/1360005469992915006/image.png?ex=67f98b4b&is=67f839cb&hm=db4ad30aa62616eb8d564850325402d23a2033ca32eda29d535b335a4a49c248&",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        tools: [unrealEngine]
    };
    addProject(project2);
}
function addProject(project) {
    var toolsHTML = "";
    project.tools.forEach(function (tool) {
        toolsHTML += "\n            <a href=\"".concat(tool.pageUrl, "\" target=\"_blank\">\n                <img class=\"tool\"\n                    src=\"").concat(tool.imageUrl, "\"\n                    alt=\"").concat(tool.name, "\" />\n            </a>\n        ");
    });
    var projectHTML = "\n    <div class=\"project\">\n\n        <div class=\"left-shit\">\n            <a href=\"".concat(project.pageUrl, "\" target=\"_blank\">\n                <img class=\"image\"\n                    src=\"").concat(project.imageUrl, "\"\n                    alt=\"").concat(project.name, "\" />\n            </a>\n        </div>\n\n        <div class=\"reft-shit\">\n\n            <div>\n                <h1>").concat(project.name, "</h1>\n                <p>").concat(project.description, "</p>\n            </div>\n\n            <div class=\"tools-list\">\n                ").concat(toolsHTML, "\n            </div>\n        </div>\n    </div>\n    ");
    var projectsDiv = document.getElementById('projects-div');
    if (!projectsDiv) {
        return;
    }
    var projectsCategory = document.getElementById("projects-".concat(project.category));
    if (!projectsCategory) {
        var projectsCategoryHTML = "\n        <div id=\"projects-".concat(project.category, "\">\n            <p>").concat(project.category, "</p>\n        </div>\n        ");
        projectsDiv.insertAdjacentHTML('beforeend', projectsCategoryHTML);
    }
    projectsCategory = document.getElementById("projects-".concat(project.category));
    if (projectsCategory) {
        projectsCategory.insertAdjacentHTML('beforeend', projectHTML);
    }
}
