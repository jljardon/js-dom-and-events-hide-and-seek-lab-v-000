function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  const firstList = rankedLists[0].children;
  const secondList = rankedLists[1].children;

  for (var i = 0; i < firstList.length; i++) {
    firstList[i].innerHTML = parseInt(firstList[i].innerHTML, 10) + n;
  }

  for (var i = 0; i < secondList.length; i++) {
    secondList[i].innerHTML = parseInt(secondList[i].innerHTML, 10) + n;
  }
}
