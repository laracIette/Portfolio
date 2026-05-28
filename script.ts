import data from './data.json' with { type: 'json' };

enum Category {
    All = "All",
    Game = "Games",
    Program = "Programs",
    Other = "Other"
}

type Tool = {
    id: string;
    name: string;
    pageUrl: string;
    imageUrl: string;
};

type Project = {
    id: string;
    name: string;
    category: Category;
    pageUrl: string | null;
    githubUrl: string | null;
    imageUrl: string;
    gifUrl: string;
    description: string;
    pageText: string;
    date: string;
    tools: string[];
};

const tools = new Map<string, Tool>();
const projects = new Map<string, Project>();

let lastScrollY: number = 0;

let touchStart: number = 0;
let touchTime: number = 0;

let currentCategory: Category | null = null;
let currentProject: Project | null = null;

let wasHeaderVisible: boolean = false;
const HEADER_VISIBLE: string = '0px';
const HEADER_HIDDEN: string = '-5.5em';

function addProjects(): void {
    (data["tools"] as Array<Tool>).forEach(tool => tools.set(tool.id, tool));
    (data["projects"] as Array<Project>).forEach(proj => projects.set(proj.id, proj));

    data["pinned"].forEach(proj => {
        addPinned(projects.get(proj)!);
    });

    data["structure"].forEach(proj => {
        addProject(projects.get(proj)!);
    });
}

function addPinned(project: Project): void {
    const pinnedDiv = document.querySelector<HTMLDivElement>('#pinned-div');
    if (!pinnedDiv) {
        console.error("no pinned div");
        return;
    }

    const projectHTML: string = `
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

    document.querySelector<HTMLDivElement>(`#pin-${project.id}-link`)?.addEventListener('click', () => showProjectPage(project));
    document.querySelector<HTMLAnchorElement>(`#pin-${project.id}-navigate-link`)?.addEventListener('click', () => navigateTab(project.category));
}

function addProject(project: Project): void {
    const projectsDiv = document.querySelector<HTMLDivElement>(`#projects-div`);
    if (!projectsDiv) {
        console.error("no projects div");
        return;
    }

    let githubHTML: string = "";
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

    let toolsHTML: string = "";
    project.tools.forEach(toolStr => {
        const tool: Tool = tools.get(toolStr)!;
        toolsHTML += `
            <a class="tool" href="${tool.pageUrl}" target="_blank" title="Open ${tool.name}'s website">
                <img src="${tool.imageUrl}" alt="${tool.name}" />
            </a>
        `;
    });

    const projectHTML: string = `
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

    document.querySelector<HTMLDivElement>(`#${project.id}-link`)?.addEventListener('click', () => showProjectPage(project));
}

function getVisibleProjects(): Array<Project> {
    const projs: Array<Project> = [];
    document.querySelectorAll<HTMLDivElement>('.project.active')
        .forEach(projDiv => projs.push(projects.get(projDiv.id)!)
    );
    return projs;
}

function findPreviousProject(project: Project): Project | null {
    const projs: Array<Project> = getVisibleProjects();
    const projIndex: number = projs.indexOf(project);
    if (projIndex > 0) {
        return projs[projIndex - 1];
    }
    return null;
}

function findNextProject(project: Project): Project | null {
    const projs: Array<Project> = getVisibleProjects();
    const projIndex: number = projs.indexOf(project);
    if (projIndex < projs.length - 1) {
        return projs[projIndex + 1];
    }
    return null;
}

function showProjectPage(project: Project): void {
    const header = document.querySelector<HTMLElement>('#header');
    if (header) {
        wasHeaderVisible = header.style.top == HEADER_VISIBLE;
        header.style.top = HEADER_HIDDEN;
    }

    document.querySelector<HTMLImageElement>('#project-page-preview-image')?.setAttribute('src', project.imageUrl);
    const infosName = document.querySelector<HTMLHeadingElement>('#project-page-infos-name');
    if (infosName) {
        infosName.textContent = project.name;
    }
    const pageDate = document.querySelector<HTMLParagraphElement>('#project-page-infos-date');
    if (pageDate) {
        pageDate.textContent = project.date;
    }
    const infosDesc = document.querySelector<HTMLParagraphElement>('#project-page-infos-desc');
    if (infosDesc) {
        infosDesc.textContent = project.description;
    }
    const pageText = document.querySelector<HTMLParagraphElement>('#project-page-text');
    if (pageText) {
        pageText.textContent = project.pageText;
    }

    populateProjectPageTools(project);
    populateProjectPageLinks(project);
    populateProjectPageDots(project);

    document.querySelector<HTMLDivElement>(`#project-page`)?.setAttribute('class', 'project-page active');
    document.querySelector<HTMLDivElement>('#previous-project-button')?.setAttribute('class', `button ${findPreviousProject(project) ? 'active' : 'innactive'}`);
    document.querySelector<HTMLDivElement>('#next-project-button')?.setAttribute('class', `button ${findNextProject(project) ? 'active' : 'innactive'}`);

    document.body.classList.add("remove-scrolling");

    currentProject = project;
}

function populateProjectPageTools(project: Project): void {
    const toolsList = document.querySelector<HTMLDivElement>(`#project-page-tools-list`);
    if (!toolsList) {
        console.log('no tools list div');
        return;
    }

    if (project.tools.length === 0) {
        document.querySelector<HTMLDivElement>(`#project-page-tools`)?.setAttribute('class', 'tools innactive');
        toolsList.innerHTML = '';
        return;
    }

    let toolsHTML: string = '';
    project.tools.forEach(toolId => toolsHTML += `
        <a href="${tools.get(toolId)!.pageUrl}" target="_blank">
            <p>${tools.get(toolId)!.name}</p>
        </a>
    `);

    document.querySelector<HTMLDivElement>(`#project-page-tools`)?.setAttribute('class', 'tools active');
    toolsList.innerHTML = toolsHTML;
}

function populateProjectPageLinks(project: Project): void {
    const linksList = document.querySelector<HTMLDivElement>(`#project-page-links-list`);
    if (!linksList) {
        console.log('no links list div');
        return;
    }

    if (!(project.pageUrl || project.githubUrl)) {
        document.querySelector<HTMLDivElement>(`#project-page-links`)?.setAttribute('class', 'links innactive');
        linksList.innerHTML = '';
        return;
    }

    let linksHTML: string = '';

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

    document.querySelector<HTMLDivElement>(`#project-page-links`)?.setAttribute('class', 'links active');
    linksList.innerHTML = linksHTML;
}

function populateProjectPageDots(project: Project): void {
    const dotsDiv = document.querySelector<HTMLDivElement>(`#project-page-dots`);
    if (!dotsDiv) {
        console.log('no dots div');
        return;
    }

    dotsDiv.innerHTML = '';
    getVisibleProjects().forEach(p => {
        dotsDiv.insertAdjacentHTML('beforeend', `<div class="${p === project ? 'dot active' : 'dot innactive'}" id="dot-${p.id}" title="${p.name}"></div>`);
        if (p !== project) {
            dotsDiv.querySelector<HTMLDivElement>(`#dot-${p.id}`)?.addEventListener('click', () => showProjectPage(p));
        }
    });
}

function hideProjectPage(): void {
    document.querySelector<HTMLDivElement>(`#project-page`)?.setAttribute('class', 'project-page innactive');
    document.body.classList.remove("remove-scrolling");

    if (wasHeaderVisible) {
        const header = document.querySelector<HTMLElement>('#header');
        if (header) {
            header.style.top = HEADER_VISIBLE;
        }
    }
}

function previousProjectPage(): void {
    if (!currentProject) {
        console.log('no current project');
        return;
    }
    const prevProj: Project | null = findPreviousProject(currentProject);
    if (prevProj) {
        showProjectPage(prevProj);
    }
}

function nextProjectPage(): void {
     if (!currentProject) {
        console.log('no current project');
        return;
    }
    const nextProj: Project | null = findNextProject(currentProject);
    if (nextProj) {
        showProjectPage(nextProj);
    }
}

document.querySelector<HTMLImageElement>('#project-page-close-button')?.addEventListener('click', () => hideProjectPage());
document.querySelector<HTMLDivElement>('#project-page-background')?.addEventListener('click', () => hideProjectPage());
document.querySelector<HTMLDivElement>('#previous-project-button')?.addEventListener('click', () => previousProjectPage());
document.querySelector<HTMLDivElement>('#next-project-button')?.addEventListener('click', () => nextProjectPage());

document.querySelector<HTMLDivElement>('#project-page')?.addEventListener('touchstart', e => {
    touchStart = e.changedTouches[0].screenX;
    touchTime = Date.now();
});
document.querySelector<HTMLDivElement>('#project-page')?.addEventListener('touchend', e => {
    const THRESHOLD: number = 400; // milliseconds
    if (Date.now() - touchTime > THRESHOLD) {
        return;
    }

    const touchEnd: number = e.changedTouches[0].screenX;
    const DEAD_ZONE: number = 100;

    if (touchEnd < touchStart - DEAD_ZONE) {
        nextProjectPage();
    }
    else if (touchEnd > touchStart + DEAD_ZONE) {
        previousProjectPage();
    }
});

function navigateTab(category: Category): void {
    if (currentCategory == category) {
        return;
    }
    currentCategory = category;

    document.querySelector<HTMLDivElement>(`#projects-div`)?.querySelectorAll<HTMLDivElement>('.project')
        .forEach(projDiv => {
            const proj = projects.get(projDiv.id)!;
            projDiv.classList = proj.category === category || category === Category.All
                ? "project active"
                : "project innactive";
        });

    document.querySelector<HTMLDivElement>(`#tabs-div`)?.querySelectorAll<HTMLDivElement>('.tab')
        .forEach(e => e.classList = e.id.includes(category) ? "tab active" : "tab innactive");
}

document.querySelector<HTMLDivElement>('#tab-All')?.addEventListener('click', () => navigateTab(Category.All));
document.querySelector<HTMLDivElement>('#tab-Games')?.addEventListener('click', () => navigateTab(Category.Game));
document.querySelector<HTMLDivElement>('#tab-Programs')?.addEventListener('click', () => navigateTab(Category.Program));
document.querySelector<HTMLDivElement>('#tab-Other')?.addEventListener('click', () => navigateTab(Category.Other));

window.addEventListener('scroll', () => {
    const header = document.querySelector<HTMLElement>('#header');
    if (!header) {
        console.error("no header");
        return;
    }

    if (window.scrollY > lastScrollY) {
        // scrolling down
        header.style.top = HEADER_HIDDEN;
    } else {
        // scrolling up
        header.style.top = HEADER_VISIBLE;
    }
    lastScrollY = window.scrollY;
});

addProjects();
