const ACTIVE_CLASS = "c-accordion__title--active";

(function() {
  let accordionElements = Array.from(document.querySelectorAll('.c-accordion__title'));

  const handleClickAccordionElement = (e) => {
    e.preventDefault();
    
    // Remove active class from all elements
    accordionElements.forEach(element => {
      element.classList.remove(ACTIVE_CLASS);
    });

    // Add active class to selected element
    e.currentTarget.classList.add(ACTIVE_CLASS);

    // Change header color depending on accordion title color
    changeHeaderColor(e.currentTarget);
  }
  
  accordionElements.forEach(element => {
    element.addEventListener('click', handleClickAccordionElement)
  });
})();

const changeHeaderColor = () => {
  let elementStyles = getComputedStyle(document.querySelector("." + ACTIVE_CLASS)),
      newStyles = {
        backgroundColor: elementStyles.backgroundColor,
        color: elementStyles.color
      };

  setStylesOnElement(newStyles, document.getElementsByClassName("c-header")[0]);
};

const setStylesOnElement = function(styles, element){
  Object.assign(element.style, styles);
}