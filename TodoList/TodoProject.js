        let enteredValue = JSON.parse(localStorage.getItem("key")) || [];
        
        function takingValue(){
            let name = document.querySelector('#input').value;
            let due = document.querySelector('#due').value;
            enteredValue.push({name: name,
                due: due
            });
            //localStorage.setItem("item", JSON.stringify(enteredValue));
            document.querySelector('#input').value = '';
            //document.querySelector('#due').value = '';
        }

        function todoFunc(){
        let showText = '';
        /*
        for(let i =0; i<enteredValue.length; i++)
        {
            let todo = enteredValue[i];
            let html = `<div class="name-date-add" id="output">
                            <div>${todo.name} </div>
                            <div>${todo.due} </div>
                            <button id="delete" onclick="
                                enteredValue.splice(${i}, 1);
                                todoFunc();
                            ">Delete
                            </button>
                        </div>`;
            showText += html;
        }*/
        //Now, we will use forEach which is the preferred method for looping through
        enteredValue.forEach((obj, index) => { //using arrow function
            let html = `<div class="name-date-add" id="output">
                            <div>${obj.name} </div>
                            <div>${obj.due} </div>
                            <button id="delete" onclick="
                                enteredValue.splice(${index}, 1);
                                todoFunc();
                            ">Delete
                            </button>
                        </div>`;
            showText += html;
        });

        let value = document.querySelector('#show');
        value.innerHTML = showText;
        localStorage.setItem("key", JSON.stringify(enteredValue));
    }
        todoFunc();