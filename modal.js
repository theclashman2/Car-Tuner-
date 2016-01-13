function firstModal () {

  var italia = document.createElement('div');
  italia.setAttribute('id', 'firstModal');
  italia.setAttribute('role', 'button');
  italia.setAttribute('href', '#myModal');
  italia.setAttribute('data-toggle', 'modal');
  italia.setAttribute('data-target', '.458modal');


  var firstBox = document.createElement('div');
  firstBox.setAttribute('class', 'squareOne');


  var firstVote = document.createElement('div');
  firstVote.setAttribute('class', 'vote1');


  var italiaImage = document.createElement('img');
  italiaImage.setAttribute('src', './images/libertywalk458.jpg');
  italiaImage.setAttribute('class', 'img-responsive');
  italiaImage.setAttribute('class', 'italia458');


  var italiaCaption = document.createElement('p');
  italiaCaption.setAttribute('class', 'italiastyle');


  var italiaOuter = document.createElement('div');
  italiaOuter.setAttribute('class', 'modal');
  italiaOuter.setAttribute('tabindex', '-1');
  italiaOuter.setAttribute('role', 'dialog');


  var italiaBones = document.createElement('div');
  italiaBones.setAttribute('class', 'modal-dialog');
  italiaBones.setAttribute('class', 'modal-sm');


  var italiaContent = document.createElement('div');
  italiaContent.setAttribute('class', 'modal-content');


  var italiaHeader = document.createElement('div');
  italiaHeader.setAttribute('class', 'modal-header');


  var italiaClick = document.createElement('button');
  italiaClick.setAttribute('type', 'button');
  italiaClick.setAttribute('class', 'close');
  italiaClick.setAttribute('data-dismiss', 'modal');
  italiaClick.setAttribute('aria-label', 'Close');
  italiaClick.setAttribute('class', 'close');


  var italiaHide = document.createElement('span');
  var italiaEx = createTextNode('&times;');


  var italiaTitle = document.createElement('h4');
  italiaTitle.setAttribute('class', 'modal-title');
  italiaTitle.createTextNode('Modal Title');


  var italiaBody = document.createElement('div');
  italiaBody.setAttribute('class', 'modal-body');
  italiaBody.createElement('h4');
  italiaBody.createTextNode('Thank you for voting!');


  var italiaFooter = document.createElement('div');
  italiaFooter.setAttribute('class', 'modal-footer');


  var italiaClose = document.createElement('button');
  italiaClose.setAttribute('class', 'btn');
  italiaClose.setAttribute('class', 'btn-default');
  italiaClose.createTextNode('Close');


  document.body.appendChild(italia);
  

  italia.appendChild(firstBox);
  italia.appendChild(firstVote);
  italia.appendChild(italiaImage);
  italia.appendChild(italiaCaption);
  italia.appendChild(italiaOuter);
  italia.appendChild(italiaBones);
  italia.appendChild(italiaContent);
  italia.appendChild(italiaHeader);
  italia.appendChild(italiaClick);
  italia.appendChild(italiaHide);
  italia.appendChild(italiaTitle);
  italia.appendChild(italiaBody);
  italia.appendChild(italiaFooter);
  italia.appendChild(italiaClose);


  firstBox.appendChild(firstVote);
  firstBox.appendChild(italiaImage);
  firstBox.appendChild(italiaCaption);


  firstVote.appendChild(italiaImage);
  firstVote.appendChild(italiaCaption);


  italiaOuter.appendChild(italiaBones);
  italiaOuter.appendChild(italiaContent);
  italiaOuter.appendChild(italiaHeader);
  italiaOuter.appendChild(italiaClick);
  italiaOuter.appendChild(italiaHide);
  italiaOuter.appendChild(italiaTitle);
  italiaOuter.appendChild(italiaBody);
  italiaOuter.appendChild(italiaFooter);
  italiaOuter.appendChild(italiaClose);


  italiaBones.appendChild(italiaContent);
  italiaBones.appendChild(italiaHeader);
  italiaBones.appendChild(italiaClick);
  italiaBones.appendChild(italiaHide);
  italiaBones.appendChild(italiaTitle);
  italiaBones.appendChild(italiaBody);
  italiaBones.appendChild(italiaFooter);
  italiaBones.appendChild(italiaClose);



  italiaContent.appendChild(italiaHeader);
  italiaContent.appendChild(italiaClick);
  italiaContent.appendChild(italiaHide);
  italiaContent.appendChild(italiaTitle);
  italiaContent.appendChild(italiaBody);
  italiaContent.appendChild(italiaFooter);
  italiaContent.appendChild(italiaClose);



  italiaHeader.appendChild(italiaClick);
  italiaHeader.appendChild(italiaHide);
  italiaHeader.appendChild(italiaTitle);


  italiaClick.appendChild(italiaHide);


  italiaHide.appendChild(italiaEx);


  italiaFooter.appendChild(italiaClose);
};

firstModal();





