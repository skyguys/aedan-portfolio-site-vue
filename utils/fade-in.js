// Module that handles the fade-in animation on startup.

export function runFadeIn(){
  const fadeInElements = document.getElementsByClassName("fade-in")

  function fadeIn(fadeIn){
      for (let i = 0; i < fadeIn.length; i++){
        runFadeInSingleElement(fadeIn[i])      }
  }

  fadeIn(fadeInElements);
}

export function runFadeInSingleElement(element){
  element.style.opacity = 1;
  element.style.filter = "blur(0)";
}