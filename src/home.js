

  function loadHome(parentNode) {
    let homePage = document.createElement('div');
    homePage.className = 'homepage container';
    let welcomeMessage = document.createElement('h1');
    welcomeMessage.innerHTML = 'Welcome to Yakooyo Restaurant and Bar';
    let homeImage = document.createElement('img');
    homeImage.className = 'home-image';
    homeImage.src = 'https://www.theshoresrestaurant.com/var/theshoresrestaurant/storage/images/media/images/the-shores-restaurant/home-page-headers/5.17.17-bar-food-2/91742-1-eng-US/5.17.17-Bar-Food-2.jpg';
    homeImage.alt = 'restaurant image';

    let briefStoryDiv = document.createElement('div');
    briefStoryDiv.className = 'story-div';

    let aLittleStory = document.createElement('p');
    aLittleStory.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere amet sapiente culpa ut fugit optio quam nisi, molestiae eius, natus doloremque! Veritatis magnam aperiam officia maiores atque ab est.Ab soluta iure quidem harum ad. Perspiciatis, asperiores? Tempora distinctio facere necessitatibus quisquam voluptates debitis, quasi optio officia eaque ipsa dicta harum ea a soluta ratione sed quas cupiditate vero?'

    aLittleStory.className = 'little-story';    
    
    // Appending Children!
    briefStoryDiv.appendChild(aLittleStory);

    homePage.appendChild(welcomeMessage);
    homePage.appendChild(homeImage);
    homePage.appendChild(briefStoryDiv);

    parentNode.appendChild(homePage);
  }

  export default loadHome;




  
