  
  function loadAbout(parentNode) {
    let aboutPage = document.createElement('div');
    aboutPage.className = 'removeables about-page container';
    let aboutMessage = document.createElement('h1');
    aboutMessage.innerHTML = 'This Is Yakooyo Restaurant and Bar!';

    let menuDiv = document.createElement('div');
    menuDiv.className = 'menu-div';

    function makeMenuList(divNode) {
      const menuList = [
        {
         name: 'Pounded Yam and Egusi Soup', link: 'http://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Pounded-Yam1.jpg'
        },
        {
          name: 'Tuwo Sinkafa', link: 'http://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Tuwo-780x520.jpg',
  
        },
        {
          name: 'Ewa Aganyin', link: 'http://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Ewa-Agoyin.jpg',
  
        },
        {
          name: 'Jollof Rice', link: 'http://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Party-Jollof-Rice.jpg',
  
        },
        {
          name: 'Amala and Ewedu Soup', link: 'http://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Amala-and-Ewedu-and-fish-Stew.jpg',
  
        },
        {
          name: 'Poundo-Cocoyam and Oha Soup', link: 'http://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Oha-Soup-and-Pondo-cocoyam.jpg',
  
        },
        {
          name: 'Abacha and Ugba', link: 'http://www.travelstart.com.ng/blog/wp-content/uploads/2014/03/Abacha-and-Ugba.jpg'
  
        }
      ];

      for (let menu of menuList) {
        let menuWrapper = document.createElement('div');
        menuWrapper.className = 'menu-wrapper';

        let menuName = document.createElement('h4');
        let menuImage = document.createElement('img');
        menuImage.className = 'food-image';
        
        menuName.innerHTML = menu.name;
        menuImage.src = menu.link;
        menuImage.alt = menu.name;

        menuWrapper.appendChild(menuName);
        menuWrapper.appendChild(menuImage);

        divNode.appendChild(menuWrapper);
      }
      return divNode;
    }

    menuDiv.appendChild(makeMenuList(document.createElement('div')));
    


    // Appending Children!
    aboutPage.appendChild(aboutMessage);

    
    aboutPage.appendChild(menuDiv);

    parentNode.appendChild(aboutPage);
  }

  export default loadAbout;
