import '../styles/normalize.css';
import '../styles/main.scss';

const ACCORDION_TITLE = "Accordion-title",
      ACCORDION_TITLE_ACTIVE = "is-active",
      HEADER = "Header";

(function() {
  let accordionElements = Array.from(document.querySelectorAll("." + ACCORDION_TITLE));

  // Remove/Add active class on target element
  const handleClickAccordionElement = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Object to control max-height property on description div
    let newStyles = {
      maxHeight: 0
    };
    
    // Remove active class and height from all elements
    accordionElements.forEach(element => {
      element.classList.remove(ACCORDION_TITLE_ACTIVE);
      setStylesOnElement(newStyles, element.nextElementSibling);
    });

    // Change max-height value to description height
    newStyles.maxHeight = e.currentTarget.nextElementSibling.scrollHeight + "px";

    // Add active class and new height to selected element
    e.currentTarget.classList.add(ACCORDION_TITLE_ACTIVE);
    setStylesOnElement(newStyles, e.currentTarget.nextElementSibling);

    // Change header color depending on accordion title color
    changeHeaderColor(e.currentTarget);
  };
  
  // Assign click function to all elements
  accordionElements.forEach(element => {
    element.addEventListener("click", handleClickAccordionElement);
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
};