

  function loadContact(parentNode) {
    let contactPage = document.createElement('div');
    contactPage.className = 'removeables contact-page container';
    let contactMessage = document.createElement('h1');
    contactMessage.innerHTML = 'How can you find Us!';
    let contactMap = document.createElement('iframe');
    contactMap.className = 'contact-map';
    contactMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8298033027663!2d3.2828814142014906!3d6.66800159517875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b973b93fc65d9%3A0x43db31de46d6ef00!2s7+Adeogun+St%2C+Ifako-Ijaiye%2C+Lagos!5e0!3m2!1sen!2sng!4v1547024889888" allowfullscreen';


    let contactDiv = document.createElement('div');
    contactDiv.className = 'contact-div';

    let contactAddress = document.createElement('p');
    contactAddress.innerHTML = `<strong>You can find us at:</strong> 7, Adeogun Street, Alagbado, Ifako Ijaiye, Lagos, Nigeria`
    contactAddress.className = 'contact-address-p';
    let workingHours = document.createElement('p');
    workingHours.innerHTML = `<strong>Working Hours:</strong> 07.00AM-09.30PM (WAT)`
    
    // Appending Children!
    contactDiv.appendChild(contactAddress);
    contactDiv.appendChild(workingHours);

    contactPage.appendChild(contactMessage);
    contactPage.appendChild(contactMap);
    contactPage.appendChild(contactDiv);

    parentNode.appendChild(contactPage);
  }

  export default loadContact;




  
