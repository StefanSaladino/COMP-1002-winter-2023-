
//adding a function to calculate the total cost on the product page
function calculateTotalCost() {
  //quantities are determined by the value of dropdown menus on the product page
  const quantity1 = parseInt(document.getElementById("ogQuantity").value);
  const quantity2 = parseInt(document.getElementById("miniQuantity").value);
  const quantity3 = parseInt(document.getElementById("refillQuantity").value);
  //these are the cost of each specific unit
  const unit1Cost = 32.99;
  const unit2Cost = 17.99;
  const unit3Cost = 11.99;
  //formula for calculating total cost
  const totalCost = (quantity1 * unit1Cost) + (quantity2 * unit2Cost) + (quantity3 * unit3Cost);
  
  //retrieves HTML element with the ID "totalCost" from the Document Object Model and stores it in the totalCostElement variable.
  const totalCostElement = document.getElementById("totalCost");
  //if the value is not a number, the value printed will be $0
  if (isNaN(totalCost)) {
    totalCostElement.innerHTML = `Total cost: $0.00`;
  //else the user will see the total cost of their current order before they submit it
  } else {
    totalCostElement.innerHTML = `Total cost: $${totalCost.toFixed(2)}`;
  }
}


//need to make sure all html is loaded
//we do this to avoid any render blocking JS
document.addEventListener('DOMContentLoaded', (loaded) => {
  //this will only be seen in console log
  //inspect element in browser and select console tab
  console.log('Document is ready.');

  //initializing header across all html docs with global header id
  fetch('global-header.html')
    //take response from server and return it in a text format
    .then(response => response.text())
    //sets the HTML content of the element with ID 'global-header' to be the fetched HTML content
    .then(html => {
      document.querySelector('#global-header').innerHTML = html;
    });

  fetch('global-footer.html')
    //take response from server and return it in a text format
    .then(response => response.text())
    //sets the HTML content of the element with ID 'global-header' to be the fetched HTML content
    .then(html => {
      document.querySelector('#global-footer').innerHTML = html;
    });

  fetch('meta.html')
    //take response from server and return it in a text format
    .then(response => response.text())
    //sets the HTML content of the element with ID 'global-header' to be the fetched HTML content
    .then(html => {
      document.querySelector('#meta').innerHTML = html;
    });





  //selects all the elements with the class accordion and stores them in a variable called accordion.
  const accordion = document.querySelector('.accordion');

  //listening for a click event
  accordion.addEventListener('click', event => {
    //uses the closest method to find the closest ancestor element of the clicked element that matches the .accordion-header selector    
    const header = event.target.closest('.accordion-header');
    //if it finds a header, the next sibling element becomes an accordionBody variable
    if (header) {
      const accordionBody = header.nextElementSibling;
      //isOpen is displayed as a block when true
      const isOpen = accordionBody.style.display === 'block';
      const accordionHeaders = accordion.querySelectorAll('.accordion-header');
      accordionHeaders.forEach(h => {
        const body = h.nextElementSibling;
        //if a header is selected, other headers are closed (display changed to none)
        if (h !== header && body.style.display === 'block') {
          body.style.display = 'none';
        }
      });
      // Toggle current accordion body
      accordionBody.style.display = isOpen ? 'none' : 'block';
    }
  });




});
