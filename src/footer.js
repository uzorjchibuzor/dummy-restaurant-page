  
function loadFooter(parentNode) {

  let footer = document.createElement('footer');
  footer.className = 'navbar navbar-default navbar-fixed-bottom footer-style removeables';
  let footerContainer = document.createElement('div');
  footerContainer.className = 'container';
  let footerParagraphs = document.createElement('p');
  footerParagraphs.className = 'navbar-text pull-left';
  footerParagraphs.innerHTML = '&copy; 2018 - Site Built By Chibuzor Efedigbue.';
  let footerParagraphsLink = document.createElement('a');
  footerParagraphsLink.href = 'https://www.github.com/uzorjchibuzor';
  footerParagraphsLink.target = '_blank';
  footerParagraphsLink.className = 'github-link';
  footerParagraphsLink.innerHTML = 'My GitHub Profile';
  footerParagraphs.appendChild(footerParagraphsLink); // Appending link to P tag

  footerContainer.appendChild(footerParagraphs); // Appending P tag to Div

  let emailMeLink = document.createElement('a');
  emailMeLink.href = 'mailto: cefedigbue@gmail.com';
  emailMeLink.className = 'navbar-btn btn-danger btn pull-right';
  let emailMeSpan = document.createElement('span');
  emailMeSpan.className = 'glyphicon glyphicon-star';
  emailMeSpan.innerHTML = 'You can send me an email.';
  emailMeLink.appendChild(emailMeSpan); // Appending Span to A tag

  footerContainer.appendChild(emailMeLink); //Appending A tag to Div

  footer.appendChild(footerContainer); // Appending Div to Footer Tag

  // End of Footer
  parentNode.appendChild(footer); // Appending Footer to Content.
}

export default loadFooter;
