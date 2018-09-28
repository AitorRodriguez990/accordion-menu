(function() {
  const ACTIVE_CLASS = "c-accordion__title--active";

  let accordionElements = Array.from(document.querySelectorAll('.c-accordion__title'));

  const handleClickAccordionElement = (e) => {
    e.preventDefault();
    
    accordionElements.forEach(element => {
      element.classList.remove(ACTIVE_CLASS);
    });

    e.currentTarget.classList.add(ACTIVE_CLASS);
  }
  
  accordionElements.forEach(element => {
    element.addEventListener('click', handleClickAccordionElement)
  });
})();