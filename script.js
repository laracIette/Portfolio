import toolData from './data/tools.json' with { type: 'json' };
import projectData from './data/projects.json' with { type: 'json' };
var Category;
(function (Category) {
    Category["Game"] = "Games";
    Category["Program"] = "Programs";
    Category["Other"] = "Other";
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
        <div class="project" id="pin-${project.id}">

            <a class="link" href="#${project.id}-scrollDest"></a>

            <div class="preview">
                <img id="pin-${project.id}-preview-image" src="${project.imageUrl}" alt="${project.name}" />
            </div>

            <div class="infos">

                <div class="title">
                    <h3>${project.name}</h3>
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
            <div class="category active" id="${project.category}">
                <h2 id="category-${project.category}">${project.category}</h2>
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
        <div class="project" id="${project.id}">

            <div class="scrollDest" id="${project.id}-scrollDest"></div>

            <div class="preview">
                <img loading="lazy" class="static" id="${project.id}-preview-image-static" src="${project.imageUrl}" alt="${project.name}" />
                <img loading="lazy" class="gif" id="${project.id}-preview-image-gif" src="${project.gifUrl}" alt="${project.name}" />
            </div>

            <div class="infos">

                <div class="title">

                    <h3>${project.name}</h3>
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
    document.querySelector(`#${project.id}`)?.addEventListener('click', () => showProjectPage(project));
}
function getVisibleProjects() {
    const projs = [];
    document.querySelectorAll('.projects')
        .forEach(projsDiv => projsDiv.querySelectorAll('.project')
        .forEach(projDiv => projs.push(projects[projDiv.id])));
    return projs;
}
function findPreviousProject(project) {
    const projs = getVisibleProjects();
    const projIndex = projs.indexOf(project);
    if (projIndex > 0) {
        return projs[projIndex - 1];
    }
    return null;
}
function findNextProject(project) {
    const projs = getVisibleProjects();
    const projIndex = projs.indexOf(project);
    if (projIndex < projs.length - 1) {
        return projs[projIndex + 1];
    }
    return null;
}
let currentProject = null;
function showProjectPage(project) {
    document.querySelector('#project-page-preview-image')?.setAttribute('src', project.imageUrl);
    const infosName = document.querySelector('#project-page-infos-name');
    if (infosName) {
        infosName.textContent = project.name;
    }
    const infosDesc = document.querySelector('#project-page-infos-desc');
    if (infosDesc) {
        infosDesc.textContent = project.description;
    }
    document.querySelector(`#project-page`)?.setAttribute('class', 'project-page active');
    document.querySelector('#previous-project-button')?.setAttribute('class', `button ${findPreviousProject(project) ? 'active' : 'innactive'}`);
    document.querySelector('#next-project-button')?.setAttribute('class', `button ${findNextProject(project) ? 'active' : 'innactive'}`);
    currentProject = project;
    document.body.classList.add("remove-scrolling");
}
function hideProjectPage() {
    document.querySelector(`#project-page`)?.setAttribute('class', 'project-page innactive');
    document.body.classList.remove("remove-scrolling");
}
function previousProjectPage() {
    if (!currentProject) {
        console.log('no current project');
        return;
    }
    const prevProj = findPreviousProject(currentProject);
    if (prevProj) {
        showProjectPage(prevProj);
    }
}
function nextProjectPage() {
    if (!currentProject) {
        console.log('no current project');
        return;
    }
    const nextProj = findNextProject(currentProject);
    if (nextProj) {
        showProjectPage(nextProj);
    }
}
document.querySelector('#project-page-close-button')?.addEventListener('click', () => hideProjectPage());
document.querySelector('#project-page-background')?.addEventListener('click', () => hideProjectPage());
document.querySelector('#previous-project-button')?.addEventListener('click', () => previousProjectPage());
document.querySelector('#next-project-button')?.addEventListener('click', () => nextProjectPage());
let currentCategory = null;
function navigateAll() {
    if (!currentCategory) {
        return;
    }
    currentCategory = null;
    document.querySelector(`#categories-div`)?.querySelectorAll('.category')
        .forEach(e => {
        e.classList = "category active";
    });
    document.querySelector('#tab-all')?.setAttribute('class', 'tab active');
    document.querySelector('#tab-Games')?.setAttribute('class', 'tab innactive');
    document.querySelector('#tab-Programs')?.setAttribute('class', 'tab innactive');
    document.querySelector('#tab-Other')?.setAttribute('class', 'tab innactive');
}
function navigateTab(category) {
    if (currentCategory == category) {
        return;
    }
    currentCategory = category;
    document.querySelector(`#categories-div`)?.querySelectorAll('.category')
        .forEach(e => {
        if (e.id.includes(category)) {
            e.classList = "category active";
        }
        else {
            e.classList = "category innactive";
        }
    });
    document.querySelector(`#tabs-div`)?.querySelectorAll('.tab')
        .forEach(e => {
        if (e.id.includes(category)) {
            e.classList = "tab active";
        }
        else {
            e.classList = "tab innactive";
        }
    });
}
document.querySelector('#tab-all')?.addEventListener('click', () => navigateAll());
document.querySelector('#tab-Games')?.addEventListener('click', () => navigateTab(Category.Game));
document.querySelector('#tab-Programs')?.addEventListener('click', () => navigateTab(Category.Program));
document.querySelector('#tab-Other')?.addEventListener('click', () => navigateTab(Category.Other));
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