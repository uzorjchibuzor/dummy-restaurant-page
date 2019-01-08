import './scss/index.scss';
import 'bootstrap';
import loadHome from './home';

  const content = document.querySelector('#content')


  // Start of Header
  const header = document.createElement('header');

  let nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-inverse navbar-dark bg-primary';
  
  let logo = document.createElement('a');
  logo.href = "#";
  logo.innerHTML = 'Yakooyo Restaurant and Bar';
  logo.className = 'navbar-brand';
  
  

  let navLinkDiv = document.createElement('div');
  navLinkDiv.className = 'collapse navbar-collapse'
  navLinkDiv.id = 'navbarSupportedContent';
  
  let linkList = document.createElement('ul');
  linkList.className = 'nav navbar-nav';
  
  function makeNavLinks(name, styleClass, id) {
    let listItem = document.createElement('li');
    let link = document.createElement('a');
    link.className = 'nav-link';
    link.innerHTML = name;
    listItem.className = styleClass;
    listItem.id = id;
    listItem.appendChild(link);
    return listItem;
  }

  let homeLink = makeNavLinks('Home', 'nav-item', 'homeLink');
  let about = makeNavLinks('About Us', 'nav-item', 'aboutLink');
  let contact = makeNavLinks('Contact Us', 'nav-item', 'contactLink');

  linkList.appendChild(homeLink);
  linkList.appendChild(about);
  linkList.appendChild(contact);
  
  navLinkDiv.appendChild(linkList);

  nav.appendChild(logo);
  nav.appendChild(navLinkDiv);

  header.appendChild(nav);
  content.appendChild(header);
  // End of Header

  // Start of Main Body

  //  Load home page by default
  document.getElementById('homeLink').classList.add('active');
  loadHome(document.getElementById('content'));



  // End of Main Body


// Start of Footer

let footer = document.createElement('footer');
footer.className = 'navbar navbar-default navbar-fixed-bottom';

let footerContainer = document.createElement('div');
footerContainer.className = 'container';

let footerParagraphs = document.createElement('p');
footerParagraphs.className = 'navbar-text pull-left';
footerParagraphs.innerHTML = '&copy; 2018 - Site Built By Chibuzor Efedigbue.'
let footerParagraphsLink = document.createElement('a');
footerParagraphsLink.href = 'https://www.github.com/uzorjchibuzor';
// footerParagraphsLink.target = '_blank';
footerParagraphsLink.innerHTML = 'My GitHub Profile';

footerParagraphs.appendChild(footerParagraphsLink);  // Appending link to P tag

footerContainer.appendChild(footerParagraphs); // Appending P tag to Div

let emailMeLink = document.createElement('a');
emailMeLink.href = 'mailto: cefedigbue@gmail.com';
emailMeLink.target = '_blank';
emailMeLink.className = 'navbar-btn btn-danger btn pull-right';

let emailMeSpan = document.createElement('span');
emailMeSpan.className = 'glyphicon glyphicon-star';
emailMeSpan.innerHTML = 'You can send me an email.';

emailMeLink.appendChild(emailMeSpan); // Appending Span to A tag

footerContainer.appendChild(emailMeLink); //Appending A tag to Div

footer.appendChild(footerContainer);  // Appending Div to Footer Tag
// End of Footer

content.appendChild(footer); // Appending Footer to Content.

  

  
