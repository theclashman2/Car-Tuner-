<<<<<<< HEAD
function firstModal () {

  var italiaContainer = document.getElementById('testing');
=======
function italiaModal () {

  var italiaContainer = document.getElementById('fModal');
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaContainer.setAttribute('class', 'container votesection');

  var italiaRow = document.createElement('div');
  italiaRow.setAttribute('class', 'row votesquares');

  var italiaCol = document.createElement('div');
  italiaCol.setAttribute('class', 'col-sm-6');

  var italia = document.createElement('a');
  italia.setAttribute('id', 'firstModal');
  italia.setAttribute('role', 'button');
<<<<<<< HEAD
  italia.setAttribute('href', '#myModal');
=======
  italia.setAttribute('href', '#siteModal');
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italia.setAttribute('data-toggle', 'modal');
  italia.setAttribute('data-target', '.modalOne');

  var firstBox = document.createElement('div');
  firstBox.setAttribute('class', 'squareOne');

  var firstVote = document.createElement('div');
  firstVote.setAttribute('class', 'vote1');

  var italiaImage = document.createElement('img');
  italiaImage.setAttribute('src', './images/libertywalk458.jpg');
  italiaImage.setAttribute('class', 'img-responsive italia458');

  var italiaCaption = document.createElement('p');
  italiaCaption.setAttribute('class', 'italiastyle');
  var italiaOverlay = document.createTextNode('Ferrari 458 LB');

<<<<<<< HEAD

=======
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  var italiaOuter = document.createElement('div');
  italiaOuter.setAttribute('class', 'modal modalOne');
  italiaOuter.setAttribute('tabindex', '-1');
  italiaOuter.setAttribute('role', 'dialog');

  var italiaBones = document.createElement('div');
  italiaBones.setAttribute('class', 'modal-dialog modal-sm');

  var italiaContent = document.createElement('div');
  italiaContent.setAttribute('class', 'modal-content');

  var italiaHeader = document.createElement('div');
  italiaHeader.setAttribute('class', 'modal-header');

  var italiaClick = document.createElement('button');
  italiaClick.setAttribute('type', 'button');
  italiaClick.setAttribute('class', 'close');
  italiaClick.setAttribute('data-dismiss', 'modal');
  italiaClick.setAttribute('aria-label', 'Close');

<<<<<<< HEAD
  var italiaHide = document.createElement('span');
  var italiaEx = document.createTextNode('&times;');

  var italiaTitle = document.createElement('h4');
  italiaTitle.setAttribute('class', 'modal-title');
  var italiaHead = document.createTextNode('Modal Title');
=======
  var italiaTitle = document.createElement('h4');
  italiaTitle.setAttribute('class', 'modal-title');
  var italiaHead = document.createTextNode('Success!');
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5

  var italiaBody = document.createElement('div');
  italiaBody.setAttribute('class', 'modal-body');
  var italiaBodyText = document.createElement('h4');
  var italiaThank = document.createTextNode('Thank you for voting!');

  var italiaFooter = document.createElement('div');
  italiaFooter.setAttribute('class', 'modal-footer');

  var italiaClose = document.createElement('button');
  italiaClose.setAttribute('class', 'btn btn-default');
  var italiaDone = document.createTextNode('Close');

  document.body.appendChild(italiaContainer);

  italiaContainer.appendChild(italiaRow);
  italiaContainer.appendChild(italiaCol);
  italiaContainer.appendChild(italia);
  italiaContainer.appendChild(firstBox);
  italiaContainer.appendChild(firstVote);
  italiaContainer.appendChild(italiaImage);
  italiaContainer.appendChild(italiaCaption);
  italiaContainer.appendChild(italiaOverlay) 
  italiaContainer.appendChild(italiaOuter);
  italiaContainer.appendChild(italiaBones);
  italiaContainer.appendChild(italiaContent);
  italiaContainer.appendChild(italiaHeader);
  italiaContainer.appendChild(italiaClick);
<<<<<<< HEAD
  italiaContainer.appendChild(italiaHide);
  italiaContainer.appendChild(italiaEx);
=======
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaContainer.appendChild(italiaTitle);
  italiaContainer.appendChild(italiaHead);
  italiaContainer.appendChild(italiaBody);
  italiaContainer.appendChild(italiaBodyText);
  italiaContainer.appendChild(italiaThank);
  italiaContainer.appendChild(italiaFooter);
  italiaContainer.appendChild(italiaClose);
  italiaContainer.appendChild(italiaDone);

  italiaRow.appendChild(italiaCol);
  italiaRow.appendChild(italia);
  italiaRow.appendChild(firstBox);
  italiaRow.appendChild(firstVote);
  italiaRow.appendChild(italiaImage);
  italiaRow.appendChild(italiaCaption);
  italiaRow.appendChild(italiaOverlay);
  italiaRow.appendChild(italiaOuter);
  italiaRow.appendChild(italiaBones);
  italiaRow.appendChild(italiaContent);
  italiaRow.appendChild(italiaHeader);
  italiaRow.appendChild(italiaClick)
<<<<<<< HEAD
  italiaRow.appendChild(italiaHide);
  italiaRow.appendChild(italiaEx);
=======
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaRow.appendChild(italiaTitle);
  italiaRow.appendChild(italiaHead);
  italiaRow.appendChild(italiaBody);
  italiaRow.appendChild(italiaBodyText);
  italiaRow.appendChild(italiaThank);
  italiaRow.appendChild(italiaFooter);
  italiaRow.appendChild(italiaClose);
  italiaRow.appendChild(italiaDone);

  italiaCol.appendChild(italia);
  italiaCol.appendChild(firstBox);
  italiaCol.appendChild(firstVote);
  italiaCol.appendChild(italiaImage);
  italiaCol.appendChild(italiaCaption);
  italiaCol.appendChild(italiaOverlay);
  italiaCol.appendChild(italiaOuter);
  italiaCol.appendChild(italiaBones);
  italiaCol.appendChild(italiaContent);
  italiaCol.appendChild(italiaHeader);
  italiaCol.appendChild(italiaClick);
<<<<<<< HEAD
  italiaCol.appendChild(italiaHide);
  italiaCol.appendChild(italiaEx);
=======
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaCol.appendChild(italiaTitle);
  italiaCol.appendChild(italiaHead);
  italiaCol.appendChild(italiaBody);
  italiaCol.appendChild(italiaBodyText);
  italiaCol.appendChild(italiaThank);
  italiaCol.appendChild(italiaFooter);
  italiaCol.appendChild(italiaClose);
  italiaCol.appendChild(italiaDone);

  italia.appendChild(firstBox);
  italia.appendChild(firstVote);
  italia.appendChild(italiaImage);
  italia.appendChild(italiaCaption);
  italia.appendChild(italiaOverlay);
  italia.appendChild(italiaOuter);
  italia.appendChild(italiaBones);
  italia.appendChild(italiaContent);
  italia.appendChild(italiaHeader);
  italia.appendChild(italiaClick);
<<<<<<< HEAD
  italia.appendChild(italiaHide);
  italia.appendChild(italiaEx);
=======
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italia.appendChild(italiaTitle);
  italia.appendChild(italiaHead);
  italia.appendChild(italiaBody);
  italia.appendChild(italiaBodyText);
  italia.appendChild(italiaThank);
  italia.appendChild(italiaFooter);
  italia.appendChild(italiaClose);
  italia.appendChild(italiaDone);

  firstBox.appendChild(firstVote);
  firstBox.appendChild(italiaImage);
  firstBox.appendChild(italiaCaption);
  firstBox.appendChild(italiaOverlay);

  firstVote.appendChild(italiaImage);

<<<<<<< HEAD
=======
  italiaCaption.appendChild(italiaOverlay);

>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaOuter.appendChild(italiaBones);
  italiaOuter.appendChild(italiaContent);
  italiaOuter.appendChild(italiaHeader);
  italiaOuter.appendChild(italiaClick);
<<<<<<< HEAD
  italiaOuter.appendChild(italiaHide);
  italiaOuter.appendChild(italiaEx);
=======
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaOuter.appendChild(italiaTitle);
  italiaOuter.appendChild(italiaHead)
  italiaOuter.appendChild(italiaBody);
  italiaOuter.appendChild(italiaBodyText);
  italiaOuter.appendChild(italiaThank);
  italiaOuter.appendChild(italiaFooter);
  italiaOuter.appendChild(italiaClose);
  italiaOuter.appendChild(italiaDone);

  italiaBones.appendChild(italiaContent);
  italiaBones.appendChild(italiaHeader);
  italiaBones.appendChild(italiaClick);
<<<<<<< HEAD
  italiaBones.appendChild(italiaHide);
  italiaBones.appendChild(italiaEx);
=======
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaBones.appendChild(italiaTitle);
  italiaBones.appendChild(italiaHead);
  italiaBones.appendChild(italiaBody);
  italiaBones.appendChild(italiaBodyText);
  italiaBones.appendChild(italiaThank);
  italiaBones.appendChild(italiaFooter);
  italiaBones.appendChild(italiaClose);
  italiaBones.appendChild(italiaDone);

  italiaContent.appendChild(italiaHeader);
  italiaContent.appendChild(italiaClick);
<<<<<<< HEAD
  italiaContent.appendChild(italiaHide);
  italiaContent.appendChild(italiaEx);
=======
>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaContent.appendChild(italiaTitle);
  italiaContent.appendChild(italiaHead);
  italiaContent.appendChild(italiaBody);
  italiaContent.appendChild(italiaBodyText);
  italiaContent.appendChild(italiaThank);
  italiaContent.appendChild(italiaFooter);
  italiaContent.appendChild(italiaClose);
  italiaContent.appendChild(italiaDone);

  italiaHeader.appendChild(italiaClick);
<<<<<<< HEAD
  italiaHeader.appendChild(italiaHide);
  italiaHeader.appendChild(italiaEx);
  italiaHeader.appendChild(italiaTitle);
  italiaHeader.appendChild(italiaHead);

  italiaClick.appendChild(italiaHide);
  italiaClick.appendChild(italiaEx);

  italiaHide.appendChild(italiaEx);

=======
  italiaHeader.appendChild(italiaTitle);
  italiaHeader.appendChild(italiaHead);

>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5
  italiaTitle.appendChild(italiaHead);

  italiaBody.appendChild(italiaBodyText);
  italiaBody.appendChild(italiaThank);

  italiaFooter.appendChild(italiaClose);
  italiaFooter.appendChild(italiaDone);

  italiaClose.appendChild(italiaDone);
<<<<<<< HEAD
};

firstModal();
=======


};

italiaModal();









>>>>>>> a4e5791c8586ee6145f60b5f5446e5dd1da9b9d5





