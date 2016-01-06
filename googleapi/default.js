document.getElementById('search').addEventListener('click', function() {
  var xhr = new XMLHttpRequest();


  var keyword = document.getElementById('keyword').value;
  console.log(keyword);
  xhr.open('POST', 'http://127.0.0.1:1337/query', true);
  xhr.send(keyword);
  xhr.onload = function() {
    if(xhr.status === 200) {
      result = document.getElementById('result');
      result.textContent = xhr.responseText;
    }
  }
}, false);