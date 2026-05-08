import toolData from './data/tools.json' with { type: 'json' };
import projectData from './data/projects.json' with { type: 'json' };
var Category;
(function (Category) {
    Category["Game"] = "Games";
    Category["Program"] = "Programs";
    Category["Test"] = "Tests";
})(Category || (Category = {}));
const tools = toolData;
const projects = projectData["projects"];
function addProjects() {
    projectData["pinned"].forEach(proj => {
        addPinned(projects[proj]);
    });
    projectData["structure"].forEach(proj => {
        addProject(projects[proj]);
    });
}
function addPinned(project) {
    const pinnedDiv = document.querySelector('#pinned-div');
    if (!pinnedDiv) {
        console.error("no pinned div");
        return;
    }
    const projectHTML = `
        <div class="project" id="pin-${project.name}">

            <a class="link" href="#${project.name}"></a>

            <div class="preview">
                <img id="pin-${project.name}-preview-image" src="${project.imageUrl}" alt="${project.name}" />
            </div>

            <div class="infos">

                <div class="title">
                    <h2>${project.name}</h2>
                </div>

                <p>${project.description.split('.')[0]}.</p>

            </div>

        </div>

    `;
    pinnedDiv.insertAdjacentHTML('beforeend', projectHTML);
}
function addProject(project) {
    const categoriesDiv = document.querySelector(`#categories-div`);
    if (!categoriesDiv) {
        console.error("no projects div");
        return;
    }
    let projectsCategory = document.querySelector(`#projects-${project.category}`);
    if (!projectsCategory) {
        const projectsCategoryHTML = `
            <div class="category">
                <h1 id="category-${project.category}">${project.category}</h1>
                <div class="projects" id="projects-${project.category}">
            </div>
        `;
        categoriesDiv.insertAdjacentHTML('beforeend', projectsCategoryHTML);
        projectsCategory = document.querySelector(`#projects-${project.category}`);
    }
    if (!projectsCategory) {
        console.error("no projects category");
        return;
    }
    let githubHTML = "";
    if (project.githubUrl) { // TODO: github logo is temporarly a tool
        githubHTML += `
            <a class="tool" href="${project.githubUrl}" target="_blank">
                <img src="images/github.png" alt="${project.name} GitHub" />
            </a>
        `;
        if (project.tools.length != 0) {
            githubHTML += `<div class="separator"></div>`;
        }
    }
    let toolsHTML = "";
    project.tools.forEach(toolStr => {
        const tool = tools[toolStr];
        if (tool.pageUrl) {
            toolsHTML += `
                <a class="tool" href="${tool.pageUrl}" target="_blank">
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
    const projectHTML = `
        <div class="project" id="${project.name}">

            <a class="link" href="${project.pageUrl ?? '#' + project.name}" ${project.pageUrl ? "target=\"_blank\"" : ""}></a>

            <div class="preview">
                <img class="static" id="${project.name}-preview-image-static" src="${project.imageUrl}" alt="${project.name}" />
                <img class="gif" id="${project.name}-preview-image-gif" src="${project.gifUrl}" alt="${project.name}" />
            </div>

            <div class="infos">

                <div class="title">

                    <h2>${project.name}</h2>
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

                </div>

            </div>

        </div>
    `;
    projectsCategory.insertAdjacentHTML('beforeend', projectHTML);
}
// show / hide header
let lastScrollY = 0;
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (!header) {
        console.error("no header");
        return;
    }
    if (window.scrollY > lastScrollY) {
        // scrolling down
        header.style.top = '-5.5em'; // hide header
    }
    else {
        // scrolling up
        header.style.top = '0'; // show header
    }
    lastScrollY = window.scrollY;
});
addProjects();
//# sourceMappingURL=script.js.map