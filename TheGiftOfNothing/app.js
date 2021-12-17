let index = 2;

function nextPage() {
  let loc = `#sec0${index}`;
  window.location.href = loc;
  index++;
  if (index == 5) {
    index = 1;
  }

  console.log(loc);
}
