import './scss/index.scss';
import 'bootstrap';
import loadHome from './home';
import loadContact from './contact';
import loadFooter from './footer';
import loadHeader from './header';
import loadAbout from './about';

const content = document.getElementById('content');
let navLiIds = ['homeLink', 'aboutLink', 'contactLink'];

loadHeader(content); // Always constant.


  

  //  Load home page by default
  document.getElementById('homeLink').classList.add('active');
  
  loadHome(content);

  loadFooter(content);

  // Start of Event Listeners to Switch Pages
  
  // for contact
  document.getElementById('contactLink').addEventListener('click', (e) => {
    for (let id of navLiIds) {
        document.getElementById(id).classList.remove('active');
      }
    document.querySelectorAll('.removeables').forEach((element) => element.remove());
    e.target.classList.add('active');
    loadContact(content);
    loadFooter(content);
  });

  // for home

  document.getElementById('homeLink').addEventListener('click', (e) => {
    for (let id of navLiIds) {
        document.getElementById(id).classList.remove('active');
      }
    document.querySelectorAll('.removeables').forEach((element) => element.remove());
    e.target.classList.add('active');
    loadHome(content);
    loadFooter(content);
  });

  // for about us

  document.getElementById('aboutLink').addEventListener('click', (e) => {
    for (let id of navLiIds) {
        let element = document.getElementById(id);
        if ( element.classList.contains('active') ) element.classList.remove('active');

      }
    e.target.classList.add('active');
    document.querySelectorAll('.removeables').forEach((element) => element.remove());
    loadAbout(content);
    loadFooter(content);
  });

    
    
  
  


