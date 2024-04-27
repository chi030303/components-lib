let currentPageDropdown = 1;
let itemsPerPageDropdown = 10;
const totalItemsDropdown = 100; // 总项目数
let totalPagesDropdown = Math.ceil(totalItemsDropdown / itemsPerPageDropdown); // 总页数

let currentPageWithoutDropdown = 1;
const itemsPerPageWithoutDropdown = 10;
const totalItemsWithoutDropdown = 100; // 总项目数
let totalPagesWithoutDropdown = Math.ceil(totalItemsWithoutDropdown / itemsPerPageWithoutDropdown); // 总页数

const paginationElementWithDropdown = document.getElementById('pagination-with-dropdown');
const itemsPerPageSelectDropdown = document.getElementById('items-per-page-dropdown');
const prevPageButtonDropdown = document.getElementById('prev-page-dropdown');
const nextPageButtonDropdown = document.getElementById('next-page-dropdown');

const paginationElementWithoutDropdown = document.getElementById('pagination-without-dropdown');
const prevPageButtonWithoutDropdown = document.getElementById('prev-page-without-dropdown');
const nextPageButtonWithoutDropdown = document.getElementById('next-page-without-dropdown');

function renderPaginationWithDropdown() {
    totalPagesDropdown = Math.ceil(totalItemsDropdown / itemsPerPageDropdown);

    paginationElementWithDropdown.innerHTML = '';

    const startPage = Math.max(1, currentPageDropdown - 2);
    let endPage = Math.min(totalPagesDropdown, startPage + 4);

    if (startPage > 1) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        li.innerText = '1';
        li.addEventListener('click', () => onPageClickWithDropdown(1));
        paginationElementWithDropdown.appendChild(li);

        if (startPage > 2) {
            const span = document.createElement('span');
            span.innerText = '...';
            paginationElementWithDropdown.appendChild(span);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === currentPageDropdown) {
            li.classList.add('active');
        }
        li.innerText = i;
        li.addEventListener('click', () => onPageClickWithDropdown(i));
        paginationElementWithDropdown.appendChild(li);
    }

    if (endPage < totalPagesDropdown) {
        if (endPage < totalPagesDropdown - 1) {
            const span = document.createElement('span');
            span.innerText = '...';
            paginationElementWithDropdown.appendChild(span);
        }

        const li = document.createElement('li');
        li.classList.add('page-item');
        li.innerText = totalPagesDropdown;
        li.addEventListener('click', () => onPageClickWithDropdown(totalPagesDropdown));
        paginationElementWithDropdown.appendChild(li);
    }

    prevPageButtonDropdown.disabled = (currentPageDropdown === 1);
    nextPageButtonDropdown.disabled = (currentPageDropdown === totalPagesDropdown);
}

function renderPaginationWithoutDropdown() {
    totalPagesWithoutDropdown = Math.ceil(totalItemsWithoutDropdown / itemsPerPageWithoutDropdown);

    paginationElementWithoutDropdown.innerHTML = '';

    const startPage = Math.max(1, currentPageWithoutDropdown - 2);
    const endPage = Math.min(totalPagesWithoutDropdown, startPage + 4);

    for (let i = startPage; i <= endPage; i++) {
        const li = document.createElement('li');
        li.classList.add('page-item');
        if (i === currentPageWithoutDropdown) {
            li.classList.add('active');
        }
        li.innerText = i;
        li.addEventListener('click', () => onPageClickWithoutDropdown(i));
        paginationElementWithoutDropdown.appendChild(li);
    }

    prevPageButtonWithoutDropdown.disabled = (currentPageWithoutDropdown === 1);
    nextPageButtonWithoutDropdown.disabled = (currentPageWithoutDropdown === totalPagesWithoutDropdown);
}

function onPageClickWithDropdown(page) {
    currentPageDropdown = page;
    renderPaginationWithDropdown();
    // 在这里执行获取特定页数据的操作，例如通过 AJAX 请求等
}

function onPageClickWithoutDropdown(page) {
    currentPageWithoutDropdown = page;
    renderPaginationWithoutDropdown();
    // 在这里执行获取特定页数据的操作，例如通过 AJAX 请求等
}

function onItemsPerPageChangeDropdown() {
    itemsPerPageDropdown = parseInt(itemsPerPageSelectDropdown.value);
    currentPageDropdown = 1;
    renderPaginationWithDropdown();
    // 在这里执行获取特定页数据的操作，例如通过 AJAX 请求等
}

function onPrevPageClickDropdown() {
    if (currentPageDropdown > 1) {
        currentPageDropdown--;
        renderPaginationWithDropdown();
        // 在这里执行获取特定页数据的操作，例如通过 AJAX 请求等
    }
}

function onNextPageClickDropdown() {
    if (currentPageDropdown < totalPagesDropdown) {
        currentPageDropdown++;
        renderPaginationWithDropdown();
        // 在这里执行获取特定页数据的操作，例如通过 AJAX 请求等
    }
}

function onPrevPageClickWithoutDropdown() {
    if (currentPageWithoutDropdown > 1) {
        currentPageWithoutDropdown--;
        renderPaginationWithoutDropdown();
        // 在这里执行获取特定页数据的操作，例如通过 AJAX 请求等
    }
}

function onNextPageClickWithoutDropdown() {
    if (currentPageWithoutDropdown < totalPagesWithoutDropdown) {
        currentPageWithoutDropdown++;
        renderPaginationWithoutDropdown();
        // 在这里执行获取特定页数据的操作，例如通过 AJAX 请求等
    }
}

renderPaginationWithDropdown(); // 初始渲染带下拉菜单的分页
renderPaginationWithoutDropdown(); // 初始渲染不带下拉菜单的分页
