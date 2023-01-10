# static-job-listings
## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories


### Links

- Solution URL: [Add solution URL here](https://github.com/sylviaosinaku/static-job-listings)
- Live Site URL: [Add live site URL here](https://sylviaosinaku.github.io/static-job-listings/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow
- [Styled Components](https://styled-components.com/) - For styles



### What I learned

More application on es-6 methods ... filter,map,e.t.c
To see how you can add code snippets, see below:


```css
.proud-of-this-css {
  animation: zoomIn .5s;
  transform: translateY(+50%);
}
```
```js
const proudOfThisFunc = () => {
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
}
```


### Continued development

The new and featured properties of each project styles show be added and removed dynamically 





### Useful resources

- [(https://getcssscan.com/css-box-shadow-examples)](https://getcssscan.com/css-box-shadow-examples) - This helped me for box shadows reason. I really liked this pattern and will use it going forward.
- [(https://www.w3schools.com/)] - This is an amazing article which helped me finally understand array methods. I'd recommend it to anyone still learning this concept.



## Author

- Name - [Osinaku ugonna Syvia]()
- Frontend Mentor - [@sylviaosinaku2005](https://www.frontendmentor.io/profile/@sylviaOsinaku2005)
- Twitter - [@yourusername](https://www.twitter.com/sylviaosinaku)



## Acknowledgments

Thank you  Ugochukwu Miracle for your assitance.
