//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//video pop-up

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_close();
  }
}

function lightbox_open() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  window.scrollTo(0, 0);
  document.getElementById('light').style.display = 'block';
  document.getElementById('fade').style.display = 'block';
  lightBoxVideo.play();
}

function lightbox_close() {
  var lightBoxVideo = document.getElementById("VisaChipCardVideo");
  document.getElementById('light').style.display = 'none';
  document.getElementById('fade').style.display = 'none';
  lightBoxVideo.pause();
}

function lightbox_openReact() {
  var lightBoxVideo1 = document.getElementById("myflix-react");
  window.scrollTo(0, 0);
  document.getElementById('lightReact').style.display = 'block';
  document.getElementById('fadeReact').style.display = 'block';
  lightBoxVideo1.play();
}

function lightbox_closeReact() {
  var lightBoxVideo1 = document.getElementById("myflix-react");
  document.getElementById('lightReact').style.display = 'none';
  document.getElementById('fadeReact').style.display = 'none';
  lightBoxVideo1.pause();
}

//Form Pop-up

document.querySelector('#contact-me').addEventListener("click", function() {
  document.querySelector(".popup").classList.add('active');
});

document.querySelector('#contact-me2').addEventListener("click", function() {
  document.querySelector(".popup").classList.add('active');
});

document.querySelector('.popup .close-btn').addEventListener("click", function() {
  document.querySelector(".popup").classList.remove('active');
});




//Resume Pop-up

window.document.onkeydown = function(e) {
  if (!e) {
    e = event;
  }
  if (e.keyCode == 27) {
    lightbox_closeResume();
  }
}

function lightbox_openResume() {
  window.scrollTo(0, 0);
  document.getElementById('lightResume').style.display = 'block';
  document.getElementById('fadeResume').style.display = 'block';
}

function lightbox_closeResume() {
  document.getElementById('lightResume').style.display = 'none';
  document.getElementById('fadeResume').style.display = 'none';
}