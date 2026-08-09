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
        //enteredValue = JSON.parse(localStorage.getItem("item"));
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
        }
        let value = document.querySelector('#show');
        value.innerHTML = showText;
        localStorage.setItem("key", JSON.stringify(enteredValue));
    }
        todoFunc();