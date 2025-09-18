// চার্ট ডাটা (ছবির সাথে মিলিয়ে)
const chart = {
  0: ["B","S","B","S","B","B","S","S","S","B"],
  1: ["S","S","S","B","S","S","B","B","S","B"],
  2: ["B","B","B","S","B","S","S","B","S","S"],
  3: ["B","S","B","S","S","B","B","S","S","B"],
  4: ["B","S","B","S","B","S","B","S","S","B"],
  5: ["B","S","S","B","S","S","B","B","S","S"],
  6: ["S","S","B","S","B","B","S","S","B","S"],
  7: ["B","S","S","S","B","S","B","S","S","B"],
  8: ["S","B","B","B","B","S","B","S","S","B"],
  9: ["S","S","B","B","B","S","S","B","S","B"]
};

function checkChart(){
  let top = parseInt(document.getElementById("topNum").value);
  let bottom = parseInt(document.getElementById("bottomNum").value);
  let output = document.getElementById("output");

  if(isNaN(top) || isNaN(bottom)){
    output.innerHTML = "⚠️ দুইটা নাম্বার দিন!";
    output.className = "result error";
    return;
  }
  if(top < 0 || top > 9 || bottom < 1 || bottom > 10){
    output.innerHTML = "⚠️ সংখ্যা সীমার বাইরে!";
    output.className = "result error";
    return;
  }

  let result = chart[top][bottom-1];
  if(result === "B"){
    output.innerHTML = "👉 ফলাফল: <span>BIG (B)</span>";
    output.className = "result big";
  } else {
    output.innerHTML = "👉 ফলাফল: <span>SMALL (S)</span>";
    output.className = "result small";
  }
    }
