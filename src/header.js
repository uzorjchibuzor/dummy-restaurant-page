  
  function loadHeader(parentNode) {
  
  const header = document.createElement('header');

  let nav = document.createElement('nav');
  nav.className = 'navbar navbar-expand-lg navbar-inverse navbar-dark bg-primary';
  
  let logo = document.createElement('p');
  logo.href = "#";
  logo.innerHTML = 'Yakooyo Restaurant and Bar';
  logo.className = 'navbar-brand logo';
  
  

  let navLinkDiv = document.createElement('div');
  navLinkDiv.className = 'collapse navbar-collapse'
  navLinkDiv.id = 'navbarSupportedContent';
  
  let linkList = document.createElement('ul');
  linkList.className = 'nav navbar-nav ml-auto';
  
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
  parentNode.appendChild(header);
}

export default loadHeader;