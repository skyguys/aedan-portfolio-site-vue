// Module that handles the fade-in animation on startup.

export function runFadeIn(){
  const fadeInElements = document.getElementsByClassName("fade-in")

  function fadeIn(fadeIn){

      for (let i = 0; i < fadeIn.length; i++){
          fadeIn[i].style.opacity = 1;
          fadeIn[i].style.filter = "blur(0)";
      }
  }

  fadeIn(fadeInElements);
}