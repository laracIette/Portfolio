import data from './data.json' with { type: 'json' };
var Category;
(function (Category) {
    Category["All"] = "All";
    Category["Game"] = "Games";
    Category["Program"] = "Programs";
    Category["Other"] = "Other";
})(Category || (Category = {}));
const tools = new Map();
const projects = new Map();
let lastScrollY = 0;
let touchStart = 0;
let touchTime = 0;
let currentCategory = null;
let currentProject = null;
let wasHeaderVisible = false;
const HEADER_VISIBLE = '0px';
const HEADER_HIDDEN = '-5.5em';
function addProjects() {
    data["tools"].forEach(tool => tools.set(tool.id, tool));
    data["projects"].forEach(proj => projects.set(proj.id, proj));
    data["pinned"].forEach(proj => {
        addPinned(projects.get(proj));
    });
    data["structure"].forEach(proj => {
        addProject(projects.get(proj));
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

            <div class="link" id="pin-${project.id}-link" title="Open ${project.name}'s page"></div>

            <div class="preview">
                <img id="pin-${project.id}-preview-image" src="${project.imageUrl}" alt="${project.name}" />
            </div>

            <div class="right">

                <div class="infos">
                    <div class="title">
                        <h3>${project.name}</h3>
                    </div>

                    <p>${project.description.split('.')[0]}.</p>
                </div>

                <a class="navigate-link" id="pin-${project.id}-navigate-link" href="#${project.id}-scrollDest" title="Navigate to ${project.name}">
                    <img src="images/chevronDown.png"/>
                </a>

            </div>
        </div>
    `;
    pinnedDiv.insertAdjacentHTML('beforeend', projectHTML);
    document.querySelector(`#pin-${project.id}-link`)?.addEventListener('click', () => showProjectPage(project));
    document.querySelector(`#pin-${project.id}-navigate-link`)?.addEventListener('click', () => navigateTab(project.category));
}
function addProject(project) {
    const projectsDiv = document.querySelector(`#projects-div`);
    if (!projectsDiv) {
        console.error("no projects div");
        return;
    }
    let githubHTML = "";
    if (project.githubUrl) { // TODO: github logo is temporarly a tool
        githubHTML += `
            <a class="tool" href="${project.githubUrl}" target="_blank" title="Open ${project.name} on GitHub">
                <img src="images/github.png" alt="${project.name} GitHub" />
            </a>
        `;
        if (project.tools.length != 0) {
            githubHTML += `<div class="separator"></div>`;
        }
    }
    let toolsHTML = "";
    project.tools.forEach(toolStr => {
        const tool = tools.get(toolStr);
        toolsHTML += `
            <a class="tool" href="${tool.pageUrl}" target="_blank" title="Open ${tool.name}'s website">
                <img src="${tool.imageUrl}" alt="${tool.name}" />
            </a>
        `;
    });
    const projectHTML = `
        <div class="project active" id="${project.id}">

            <div class="link" id="${project.id}-link" title="Open ${project.name}'s page"></div>

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
    projectsDiv.insertAdjacentHTML('beforeend', projectHTML);
    document.querySelector(`#${project.id}-link`)?.addEventListener('click', () => showProjectPage(project));
}
function getVisibleProjects() {
    const projs = [];
    document.querySelectorAll('.project.active')
        .forEach(projDiv => projs.push(projects.get(projDiv.id)));
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
function showProjectPage(project) {
    const header = document.querySelector('#header');
    if (header) {
        wasHeaderVisible = header.style.top == HEADER_VISIBLE;
        header.style.top = HEADER_HIDDEN;
    }
    document.querySelector('#project-page-preview-image')?.setAttribute('src', project.imageUrl);
    const infosName = document.querySelector('#project-page-infos-name');
    if (infosName) {
        infosName.textContent = project.name;
    }
    const pageDate = document.querySelector('#project-page-infos-date');
    if (pageDate) {
        pageDate.textContent = project.date;
    }
    const infosDesc = document.querySelector('#project-page-infos-desc');
    if (infosDesc) {
        infosDesc.textContent = project.description;
    }
    const pageText = document.querySelector('#project-page-text');
    if (pageText) {
        pageText.textContent = project.pageText;
    }
    populateProjectPageTools(project);
    populateProjectPageLinks(project);
    populateProjectPageDots(project);
    document.querySelector(`#project-page`)?.setAttribute('class', 'project-page active');
    document.querySelector('#previous-project-button')?.setAttribute('class', `button ${findPreviousProject(project) ? 'active' : 'innactive'}`);
    document.querySelector('#next-project-button')?.setAttribute('class', `button ${findNextProject(project) ? 'active' : 'innactive'}`);
    document.body.classList.add("remove-scrolling");
    currentProject = project;
}
function populateProjectPageTools(project) {
    const toolsList = document.querySelector(`#project-page-tools-list`);
    if (!toolsList) {
        console.log('no tools list div');
        return;
    }
    if (project.tools.length === 0) {
        document.querySelector(`#project-page-tools`)?.setAttribute('class', 'tools innactive');
        toolsList.innerHTML = '';
        return;
    }
    let toolsHTML = '';
    project.tools.forEach(toolId => toolsHTML += `
        <a href="${tools.get(toolId).pageUrl}" target="_blank">
            <p>${tools.get(toolId).name}</p>
        </a>
    `);
    document.querySelector(`#project-page-tools`)?.setAttribute('class', 'tools active');
    toolsList.innerHTML = toolsHTML;
}
function populateProjectPageLinks(project) {
    const linksList = document.querySelector(`#project-page-links-list`);
    if (!linksList) {
        console.log('no links list div');
        return;
    }
    if (!(project.pageUrl || project.githubUrl)) {
        document.querySelector(`#project-page-links`)?.setAttribute('class', 'links innactive');
        linksList.innerHTML = '';
        return;
    }
    let linksHTML = '';
    if (project.pageUrl) {
        linksHTML += `
            <a href="${project.pageUrl}" target="_blank">
                <p>Project page</p>
            </a>
        `;
    }
    if (project.githubUrl) {
        linksHTML += `
            <a href="${project.githubUrl}" target="_blank">
                <p>Project repository</p>
            </a>
        `;
    }
    document.querySelector(`#project-page-links`)?.setAttribute('class', 'links active');
    linksList.innerHTML = linksHTML;
}
function populateProjectPageDots(project) {
    const dotsDiv = document.querySelector(`#project-page-dots`);
    if (!dotsDiv) {
        console.log('no dots div');
        return;
    }
    dotsDiv.innerHTML = '';
    getVisibleProjects().forEach(p => {
        dotsDiv.insertAdjacentHTML('beforeend', `<div class="${p === project ? 'dot active' : 'dot innactive'}" id="dot-${p.id}" title="${p.name}"></div>`);
        if (p !== project) {
            dotsDiv.querySelector(`#dot-${p.id}`)?.addEventListener('click', () => showProjectPage(p));
        }
    });
}
function hideProjectPage() {
    document.querySelector(`#project-page`)?.setAttribute('class', 'project-page innactive');
    document.body.classList.remove("remove-scrolling");
    if (wasHeaderVisible) {
        const header = document.querySelector('#header');
        if (header) {
            header.style.top = HEADER_VISIBLE;
        }
    }
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
document.querySelector('#project-page')?.addEventListener('touchstart', e => {
    touchStart = e.changedTouches[0].screenX;
    touchTime = Date.now();
});
document.querySelector('#project-page')?.addEventListener('touchend', e => {
    const THRESHOLD = 400; // milliseconds
    if (Date.now() - touchTime > THRESHOLD) {
        return;
    }
    const touchEnd = e.changedTouches[0].screenX;
    const DEAD_ZONE = 100;
    if (touchEnd < touchStart - DEAD_ZONE) {
        nextProjectPage();
    }
    else if (touchEnd > touchStart + DEAD_ZONE) {
        previousProjectPage();
    }
});
function navigateTab(category) {
    if (currentCategory == category) {
        return;
    }
    currentCategory = category;
    document.querySelector(`#projects-div`)?.querySelectorAll('.project')
        .forEach(projDiv => {
        const proj = projects.get(projDiv.id);
        projDiv.classList = proj.category === category || category === Category.All
            ? "project active"
            : "project innactive";
    });
    document.querySelector(`#tabs-div`)?.querySelectorAll('.tab')
        .forEach(e => e.classList = e.id.includes(category) ? "tab active" : "tab innactive");
}
document.querySelector('#tab-All')?.addEventListener('click', () => navigateTab(Category.All));
document.querySelector('#tab-Games')?.addEventListener('click', () => navigateTab(Category.Game));
document.querySelector('#tab-Programs')?.addEventListener('click', () => navigateTab(Category.Program));
document.querySelector('#tab-Other')?.addEventListener('click', () => navigateTab(Category.Other));
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (!header) {
        console.error("no header");
        return;
    }
    if (window.scrollY > lastScrollY) {
        // scrolling down
        header.style.top = HEADER_HIDDEN;
    }
    else {
        // scrolling up
        header.style.top = HEADER_VISIBLE;
    }
    lastScrollY = window.scrollY;
});
addProjects();
//# sourceMappingURL=script.js.map