function add1() {

  let a = document.querySelector("#elements");
  let outerbox = document.querySelector(".generateFormWithTitles");
  let box = document.createElement("div");
  let part1 = document.createElement("div");
  let part2 = document.createElement("div");
  let inp1 = document.createElement("input");
  let inp2 = document.createElement("input");
  let btn1 = document.createElement("button");

  // Unique ID for this field
  let fieldId = Date.now() + Math.floor(Math.random() * 1000);

  part1.className = "part1";
  box.className = "box";
  part2.className = "part2";
  inp1.id = "lab1_" + fieldId;
  inp1.type = "text";
  inp1.placeholder = "Field Label";
  inp2.type = a.value;
  inp2.placeholder = a.value;
  inp2.name = a.value + "_" + fieldId;
  btn1.textContent = "Add Label";
  btn1.className = "add-label-btn";


  btn1.addEventListener("click", () => {
    let label = document.createElement("label");
    label.textContent = inp1.value;
    label.htmlFor = inp2.id || ("input_" + fieldId);
    inp2.id = inp2.id || ("input_" + fieldId);
    inp1.style.display = "none";
    btn1.style.display = "none";
    part1.insertBefore(label, inp1);
  });

  let btn2 = document.createElement("button");
  btn2.addEventListener("click", () => {
    box.remove();
  });

    btn2.className = "cancel";
    btn2.textContent = "X";

  

  part1.appendChild(inp1);
  part1.appendChild(btn1);
  part2.appendChild(inp2);
  part2.appendChild(btn2);
  box.appendChild(part1);
  box.appendChild(part2);
  outerbox.appendChild(box);

  // if (a.value == "radio") {
  //   function fun1() {
  //     inp2.remove();

  //     let part3 = document.createElement("div");
  //     let inp4 = document.createElement("input");
  //     let inp3 = document.createElement("input");
  //     let btn3 = document.createElement("button");

  //     part3.className = "part3";
  //     inp4.type = "radio";
  //     inp4.className = 'radiobtnbtn'
  //     inp3.type = "text";
  //     inp3.className = "inp3";
  //     inp3.placeholder = "options";
  //     btn3.id = "addoption";
  //     btn3.textContent = "Add";

  //     // part3.appendChild(inp4);
  //     // part3.appendChild(inp3);
  //     part3.appendChild(btn3);
  //     part2.appendChild(part3);

  //     btn3.addEventListener("click", () => {
  //       // if (!inp3.value.trim()) return;

  //       // part3.appendChild(inp4);
  //       part3.appendChild(inp3);
  //       let nameAdd = document.createElement("p");
  //       nameAdd.textContent = inp3.value;
  //       btn3.remove();
  //       // inp3.remove();
  //       part3.appendChild(nameAdd);
  //       fun1();
  //     });
  //   }
  //   fun1();
  // }

  if(a.value == 'radio'){

      inp2.remove();
      let part3 = document.createElement("div");
      part3.className = 'part3'
      let btn3 = document.createElement("button");
      btn3.id = "addoption";
      btn3.textContent = "Add Option";
      let inp3 = document.createElement("input");
      inp3.type = "text";
      inp3.placeholder = "Option";
      inp3.className = "inp3";

      btn3.addEventListener('click',()=>{
        let part54 = document.createElement('div');
        part54.className = 'part54';
        let label = document.createElement('label');
        let rd = document.createElement('input');
        rd.name = 'radio_' + fieldId;
        rd.type = 'radio';
        rd.value = inp3.value;
        label.appendChild(rd);
        label.appendChild(document.createTextNode(inp3.value));
        part54.appendChild(label);
        part2.appendChild(part54);
        inp3.value = "";
      })
      part3.appendChild(inp3);
      part3.appendChild(btn3);
      part2.appendChild(part3);
  }

  else if (a.value == "select") {
    inp2.remove();

    let part4 = document.createElement("div");
    let select = document.createElement("select");
    let inpField = document.createElement("input");
    let addButton = document.createElement("button");

    part4.className = "part4";
    select.name = "select_" + fieldId;
    select.id = "select_" + fieldId;
    
    inpField.placeholder = "Option";
    inpField.id = "inpField";
    addButton.id = 'addButton';
    addButton.textContent = "+";

    addButton.addEventListener("click", ()=>{
      if(inpField.value.trim()){
        let o = document.createElement("option");
        o.textContent = inpField.value;
        o.value = inpField.value;
        select.appendChild(o);
        inpField.value = '';
      }
    });

    part4.appendChild(select);
    part4.appendChild(inpField);
    part4.appendChild(addButton);
    part2.appendChild(part4);
  }

  // else if(a.value == 'checkbox'){
  //   function fun3(){
  //   inp2.remove();
  //   let part5 = document.createElement('div');
  //   // let multicheck = document.createElement('input');
  //   let inp5 = document.createElement("input");
  //   let btn5 = document.createElement("button");


  //   part5.className = "part5";
  //   // multicheck.type = 'checkbox';
  //   // multicheck.className = 'multicheck';
  //   inp5.id = 'inp5';
  //   inp5.type = 'text';
  //   inp5.placeholder = 'Option'
  //   btn5.id = 'btn5';
  //   btn5.textContent = '+';


  //   btn5.addEventListener('click',()=>{
  //     let addName = document.createElement('p');
  //     addName.textContent = inp5.value;
  //     // inp5.remove();
  //     // btn5.remove();
  //     part5.appendChild(addName);
  //     // fun3();
  //   })


  //   // part5.appendChild(multicheck);
  //   part5.appendChild(inp5);
  //   part5.appendChild(btn5);
  //   part2.appendChild(part5);

  //   }
  //   fun3()
  // }

  else if(a.value == 'checkbox'){
    inp2.remove();
    let part5 = document.createElement("div");
    part5.className = "part5";
    let inp5 = document.createElement("input");
    inp5.type = "text";
    inp5.placeholder = "Option";
    let btn5 = document.createElement("button");
    btn5.id = 'btn5';
    btn5.textContent = '+';

    btn5.addEventListener('click',()=>{
      if(inp5.value.trim()){
        let part44 = document.createElement('div');
        part44.className = 'part44';
        let label = document.createElement('label');
        let multicheck = document.createElement('input');
        multicheck.type = 'checkbox';
        multicheck.name = 'checkbox_' + fieldId + '[]';
        multicheck.value = inp5.value;
        label.appendChild(multicheck);
        label.appendChild(document.createTextNode(inp5.value));
        part44.appendChild(label);
        part2.appendChild(part44);
        inp5.value = '';
      }
    })

    part5.appendChild(inp5);
    part5.appendChild(btn5);
    part2.appendChild(part5);
  }
  else if(a.value == 'submit'){
    inp1.remove();
    btn1.remove();
    inp2.remove();

    let btn6 = document.createElement("button");
    let inp6 = document.createElement("input");

    let part6 = document.createElement('div');
    part6.className = 'part6';
    btn6.id = 'btn6'
    btn6.textContent = '+';
    inp6.placeholder = 'Button Name';

    btn6.addEventListener("click", () => {
      let submitBtn = document.createElement("button");
      submitBtn.type = 'submit';
      submitBtn.textContent = inp6.value;
      submitBtn.className = 'submit-btn';
      inp6.style.display = "none";
      btn6.style.display = "none";
      part6.appendChild(submitBtn);
    });

    
    part6.appendChild(inp6);
    part6.appendChild(btn6);
    part2.appendChild(part6);
  }

}

function generateform(){

  let finalForm = document.querySelector('.finalForm');
  let finalBox = document.querySelectorAll('.box');
  let delbtns = document.getElementsByClassName('cancel');

  // Hide the input for adding options if exists
  let in11 = document.querySelector(".inp3");
  if(in11) in11.style.display = 'none';

  // Remove cancel buttons
  Array.from(delbtns).forEach((button) => {
    button.remove();
  });

  // Create a form element
  let form = document.createElement('form');
  form.action = 'https://httpbin.org/post'; // For testing, change to your endpoint
  form.method = 'POST';
  form.className = 'generated-form';

  // Append all boxes to the form
  finalBox.forEach(box => {
    form.appendChild(box);
  });

  // Clear finalForm and append the form
  finalForm.innerHTML = '';
  finalForm.appendChild(form);

  // Add a default submit button if no submit field was added
  if(!form.querySelector('button[type="submit"]')){
    let defaultSubmit = document.createElement('button');
    defaultSubmit.type = 'submit';
    defaultSubmit.textContent = 'Submit Form';
    defaultSubmit.className = 'default-submit-btn';
    form.appendChild(defaultSubmit);
  }
}
