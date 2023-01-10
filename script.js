'use strict';

const accounts = [
  {
    id: 1,
    company: 'Photosnap',
    logo: './images/photosnap.svg',
    new: true,
    featured: true,
    position: 'Senior Frontend Developer',
    role: 'Frontend',
    level: 'Senior',
    postedAt: '1d ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['HTML', 'CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 2,
    company: 'Manage',
    logo: './images/manage.svg',
    new: true,
    featured: true,
    position: 'Fullstack Developer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1d ago',
    contract: 'Part Time',
    location: 'Remote',
    languages: ['Python'],
    tools: ['React'],
  },
  {
    id: 3,
    company: 'Account',
    logo: './images/account.svg',
    new: true,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2d ago',
    contract: 'Part Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
  {
    id: 4,
    company: 'MyHome',
    logo: './images/myhome.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '5d ago',
    contract: 'Contract',
    location: 'USA Only',
    languages: ['CSS', 'JavaScript'],
    tools: [],
  },
  {
    id: 5,
    company: 'Loop Studios',
    logo: './images/loop-studios.svg',
    new: false,
    featured: false,
    position: 'Software Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '1w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['Ruby', 'Sass'],
  },
  {
    id: 6,
    company: 'FaceIt',
    logo: './images/faceit.svg',
    new: false,
    featured: false,
    position: 'Junior Backend Developer',
    role: 'Backend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'UK Only',
    languages: ['Ruby'],
    tools: ['RoR'],
  },
  {
    id: 7,
    company: 'Shortly',
    logo: './images/shortly.svg',
    new: false,
    featured: false,
    position: 'Junior Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['HTML', 'JavaScript'],
    tools: ['Sass'],
  },
  {
    id: 8,
    company: 'Insure',
    logo: './images/insure.svg',
    new: false,
    featured: false,
    position: 'Junior Frontend Developer',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '2w ago',
    contract: 'Full Time',
    location: 'USA Only',
    languages: ['JavaScript'],
    tools: ['Vue', 'Sass'],
  },
  {
    id: 9,
    company: 'Eyecam Co.',
    logo: './images/eyecam-co.svg',
    new: false,
    featured: false,
    position: 'Full Stack Engineer',
    role: 'Fullstack',
    level: 'Midweight',
    postedAt: '3w ago',
    contract: 'Full Time',
    location: 'Worldwide',
    languages: ['JavaScript', 'Python'],
    tools: ['Django'],
  },
  {
    id: 10,
    company: 'The Air Filter Company',
    logo: './images/the-air-filter-company.svg',
    new: false,
    featured: false,
    position: 'Front-end Dev',
    role: 'Frontend',
    level: 'Junior',
    postedAt: '1mo ago',
    contract: 'Part Time',
    location: 'Worldwide',
    languages: ['JavaScript'],
    tools: ['React', 'Sass'],
  },
];

const mainHtmlDoc = document.querySelector('.main');
const filteredKeysdiv = document.querySelector('.filtered--keys');
const header = document.querySelector('header');
const clearFilter = document.querySelector('.clear--filter');
const mainheaderFiltersDiv = document.querySelector('.header-filtered-keys');

let selectedFilter = [];
const addFilter = function (filter) {
  if (selectedFilter.includes(filter)) return;
  selectedFilter.push(filter);
};

const removeFilter = function (filter) {
  const indexOfFIlter = selectedFilter.indexOf(filter);
  selectedFilter.splice(indexOfFIlter, 1);
};

const getData = function (accs) {
  accs.map(acc => {
    acc.data = [acc.level, acc.role, ...acc.languages, ...acc.tools];
    return acc.data;
  });
};
getData(accounts);

const filterFuncAddDom = function () {
  return accounts.filter(element => {
    return selectedFilter.every(filter => element.data.includes(filter));
  });
};

const displayFunc = function (accs) {
  mainHtmlDoc.innerHTML = '';

  accs.forEach(acc => {
    const checkNewStatus = acc.new === true ? 'New' : '';
    const checkFeaturedStatus = acc.featured === true ? 'Featured' : '';
    const html = ` <div class="container">
      <div class="account-container-section"> <img src="${
        acc.logo
      }" alt="" class="company_logo">
        <div>
          <div class="company_stats_div">
          <h2 class="company_name">${acc.company}</h2>
          
            <p class="new_text" id="new">${checkNewStatus}</p>
            <p class="featured_text">${checkFeaturedStatus}</p>
          </div>

          <h1 class="job_account--text">${acc.position}</h1>
          <div class="personal_stats">
            <p>${acc.postedAt}</p>
            <p>${acc.location}</p>
            <p>${acc.contract}</p>
          </div>

        </div>
      </div>


      <div><button data-role="${acc.role}" class="btn">${acc.role}</button>
        <button data-level="${acc.level}" class="btn">${acc.level}</button>
        ${acc.languages.map(
          lang => `<button data-language="${lang}" class="btn">${lang}</button>`
        )}
        ${acc.tools.map(
          tool => ` <button data-tool="${tool}" class="btn">${tool}</button>`
        )}

      </div>
    </div>`;

    mainHtmlDoc.insertAdjacentHTML('beforeend', html);
  });
};

mainHtmlDoc.addEventListener('click', function (e) {
  const clicked = e.target;
  if (clicked.classList.contains('btn')) {
    const clickedText = clicked.textContent.trim();

    addFilter(clickedText);
    displayFunc(filterFuncAddDom());

    mainheaderFiltersDiv.classList.remove('hidden');
    filteredKeysdiv.innerHTML = '';
    selectedFilter.forEach(key => {
      const keys = ` <button class="close-btn">${key}<img src="images/icon-remove.svg" alt="" class="close--icon">`;
      filteredKeysdiv.insertAdjacentHTML('beforeend', keys);
    });
  }
});

header.addEventListener('click', function (e) {
  const clicked = e.target;
  if (clicked.classList.contains('close--icon')) {
    if (selectedFilter.length <= 1) {
      mainheaderFiltersDiv.classList.add('hidden');
    }
    const removeKey = clicked.closest('.close-btn').textContent;
    clicked.closest('.close-btn').classList.add('hidden');
    removeFilter(removeKey);
    displayFunc(filterFuncAddDom());
  }
});
clearFilter.addEventListener('click', function () {
  selectedFilter = [];
  mainheaderFiltersDiv.classList.add('hidden');
  displayFunc(accounts);
});
