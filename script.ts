import toolData from './data/tools.json' with { type: 'json' };
import projectData from './data/projects.json' with { type: 'json' };

enum Category {
    Game = "Games",
    Program = "Programs",
    Other = "Other"
}

type Tool = {
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
    date: string;
    tools: string[];
};

const tools = toolData as Record<string, Tool>;
const projects = projectData["projects"] as Record<string, Project>;

function addProjects(): void {
    projectData["pinned"].forEach(proj => {
        addPinned(projects[proj]);
    });

    projectData["structure"].forEach(proj => {
        addProject(projects[proj]);
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

function addProject(project: Project): void {
    const categoriesDiv = document.querySelector<HTMLDivElement>(`#categories-div`);
    if (!categoriesDiv) {
        console.error("no projects div");
        return;
    }

    let projectsCategory = document.querySelector<HTMLDivElement>(`#projects-${project.category}`);
    if (!projectsCategory) {
        const projectsCategoryHTML: string = `
            <div class="category active" id="${project.category}">
                <h2 id="category-${project.category}">${project.category}</h2>
                <div class="projects" id="projects-${project.category}">
            </div>
        `;
        categoriesDiv.insertAdjacentHTML('beforeend', projectsCategoryHTML);
        projectsCategory = document.querySelector<HTMLDivElement>(`#projects-${project.category}`);
    }

    if (!projectsCategory) {
        console.error("no projects category");
        return;
    }



    let githubHTML: string = "";
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

    let toolsHTML: string = "";
    project.tools.forEach(toolStr => {
        const tool: Tool = tools[toolStr];
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

    const projectHTML: string = `
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

    document.querySelector<HTMLDivElement>(`#${project.id}`)?.addEventListener('click', () => showProjectPage(project));
}

function getVisibleProjects(): Array<Project> {
    const projs: Array<Project> = [];
    document.querySelectorAll<HTMLDivElement>('.projects')
        .forEach(projsDiv => projsDiv.querySelectorAll<HTMLDivElement>('.project')
            .forEach(projDiv => projs.push(projects[projDiv.id])) 
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

let currentProject: Project | null = null;

function showProjectPage(project: Project): void {
    document.querySelector<HTMLImageElement>('#project-page-preview-image')?.setAttribute('src', project.imageUrl);
    const infosName = document.querySelector<HTMLHeadingElement>('#project-page-infos-name');
    if (infosName) {
        infosName.textContent = project.name;
    }
    const infosDesc = document.querySelector<HTMLParagraphElement>('#project-page-infos-desc');
    if (infosDesc) {
        infosDesc.textContent = project.description;
    }

    document.querySelector<HTMLDivElement>(`#project-page`)?.setAttribute('class', 'project-page active');
    document.querySelector<HTMLDivElement>('#previous-project-button')?.setAttribute('class', `button ${findPreviousProject(project) ? 'active' : 'innactive'}`);
    document.querySelector<HTMLDivElement>('#next-project-button')?.setAttribute('class', `button ${findNextProject(project) ? 'active' : 'innactive'}`);

    currentProject = project;
    document.body.classList.add("remove-scrolling");
}

function hideProjectPage(): void {
    document.querySelector<HTMLDivElement>(`#project-page`)?.setAttribute('class', 'project-page innactive');
    document.body.classList.remove("remove-scrolling"); 
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

document.querySelector<HTMLDivElement>('#project-page-close-button')?.addEventListener('click', () => hideProjectPage());
document.querySelector<HTMLDivElement>('#project-page-background')?.addEventListener('click', () => hideProjectPage());
document.querySelector<HTMLDivElement>('#previous-project-button')?.addEventListener('click', () => previousProjectPage());
document.querySelector<HTMLDivElement>('#next-project-button')?.addEventListener('click', () => nextProjectPage());

let currentCategory: Category | null = null;

function navigateAll(): void {
    if (!currentCategory) {
        return;
    }
    currentCategory = null;

    document.querySelector<HTMLDivElement>(`#categories-div`)?.querySelectorAll('.category')
        .forEach(e => {
            e.classList = "category active";
        });

    document.querySelector<HTMLDivElement>('#tab-all')?.setAttribute('class', 'tab active');
    document.querySelector<HTMLDivElement>('#tab-Games')?.setAttribute('class', 'tab innactive');
    document.querySelector<HTMLDivElement>('#tab-Programs')?.setAttribute('class', 'tab innactive');
    document.querySelector<HTMLDivElement>('#tab-Other')?.setAttribute('class', 'tab innactive');
}

function navigateTab(category: Category): void {
    if (currentCategory == category) {
        return;
    }
    currentCategory = category;

    document.querySelector<HTMLDivElement>(`#categories-div`)?.querySelectorAll('.category')
        .forEach(e => {
            if (e.id.includes(category)) {
                e.classList = "category active";
            }
            else {
                e.classList = "category innactive";
            }
        });

    document.querySelector<HTMLDivElement>(`#tabs-div`)?.querySelectorAll('.tab')
        .forEach(e => {
            if (e.id.includes(category)) {
                e.classList = "tab active";
            }
            else {
                e.classList = "tab innactive";
            }
        });
}

document.querySelector<HTMLDivElement>('#tab-all')?.addEventListener('click', () => navigateAll());
document.querySelector<HTMLDivElement>('#tab-Games')?.addEventListener('click', () => navigateTab(Category.Game));
document.querySelector<HTMLDivElement>('#tab-Programs')?.addEventListener('click', () => navigateTab(Category.Program));
document.querySelector<HTMLDivElement>('#tab-Other')?.addEventListener('click', () => navigateTab(Category.Other));

// show / hide header
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const header = document.querySelector<HTMLElement>('#header');
    if (!header) {
        console.error("no header");
        return;
    }

    if (window.scrollY > lastScrollY) {
        // scrolling down
        header.style.top = '-5.5em'; // hide header
    } else {
        // scrolling up
        header.style.top = '0'; // show header
    }
    lastScrollY = window.scrollY;
});

addProjects();
