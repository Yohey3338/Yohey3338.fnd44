'use strict'
// 1行目に記載している 'use strict' は削除しないでください
function test(actual, expected) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("OK! Test PASSED.");
  } else {
    console.error("Test FAILED. Try again!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
    console.trace();
  }
}
const input = document.getElementById("count");
const btn = document.getElementById("release");
const stage = document.getElementById("sea");

btn.addEventListener("click", function (){ //
  const num = input.value; //入力された値をnumにいったん入れる
  stage.innerText = "";　　//いったんstageを空にする（リセット）
  for ( let i = 0 ; i < num ; i++){　// numに　なるまで加算を繰り替えす
    stage.innerText += "🐊";　//stageのinnertTextに🐊を代入する
  }
}
);

const input01 = document.getElementById("count01");
const btn01 = document.getElementById("release01");
const stage01 = document.getElementById("sea01");

btn01.addEventListener("click", function (){ //
  const num = input01.value; //入力された値をnumにいったん入れる
  console.log(num)
  for ( let i = 0 ; i < num ; i++){　// numに　なるまで加算を繰り替えす
    stage01.innerText += "🐑";　//stageのinnertTextに🐑を代入する
  }
}
);

const btn02 = document.getElementById("reset");

btn02.addEventListener("click",function (){
  stage01.innerText ="";
}
);

const image = document.getElementById("pandaImg");
image.addEventListener("mouseover", function(){
  this.src="grPanda.jpg";
}
);

image.addEventListener("mouseout", function(){
  this.src="stPanda.jpg";
}
);
