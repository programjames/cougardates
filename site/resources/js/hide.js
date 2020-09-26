var url = window.location.hash;
var hash = url.substring(1);
// Allows hideTitle / hideBody classes.
hidden_blocks = document.getElementsByClassName('hidden_block');
for(let block of hidden_blocks) {
  let title = block.getElementsByClassName('hidden_title')[0];
  let body = block.getElementsByClassName('hidden_body')[0];
  title.onclick = function() {
    if (body.style.display === "none" || body.style.display == "") {
      body.style.display = "block";
    } else {
      body.style.display = "none";
    }
  }
}

// Expand the one that was referenced by the hash.
let block = document.getElementById(hash);
let body = block.getElementsByClassName('hidden_body')[0];
body.style.display = "block";
