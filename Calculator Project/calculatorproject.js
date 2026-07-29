        let variable='';
        function displayOutput(number)
        {
            if(number>= 0 && number<=9)
                variable += number;
            else if (number == '.')
                variable += number;
            else
                variable += ' '+number+' ';
            document.querySelector('#para').innerHTML = variable;
        }