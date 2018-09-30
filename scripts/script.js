const ACCORDION_TITLE = "c-accordion__title",
      ACCORDION_TITLE_ACTIVE = "c-accordion__title--active",
      HEADER = "c-header";

(function() {
  let accordionElements = Array.from(document.querySelectorAll("." + ACCORDION_TITLE));

  // Remove/Add active class on target element
  const handleClickAccordionElement = (e) => {
    e.preventDefault();
    
    // Remove active class from all elements
    accordionElements.forEach(element => {
      element.classList.remove(ACCORDION_TITLE_ACTIVE);
    });

    // Add active class to selected element
    e.currentTarget.classList.add(ACCORDION_TITLE_ACTIVE);

    // Change header color depending on accordion title color
    changeHeaderColor(e.currentTarget);
  }
  
  // Assign click function to all elements
  accordionElements.forEach(element => {
    element.addEventListener("click", handleClickAccordionElement)
  });
})();

// Change header color depending on clicked accordion title
const changeHeaderColor = () => {
  let elementStyles = getComputedStyle(document.querySelector("." + ACCORDION_TITLE_ACTIVE)),
      newStyles = {
        backgroundColor: elementStyles.backgroundColor,
        color: elementStyles.color
      };

  setStylesOnElement(newStyles, document.getElementsByClassName(HEADER)[0]);
};

// Helper function to add multiple styles on element
const setStylesOnElement = function(styles, element){
  Object.assign(element.style, styles);
}