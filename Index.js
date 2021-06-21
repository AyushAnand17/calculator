
function getHistory()
{
    return document.getElementById("historyValue").innerText;
}

function printHistory(num)
{
    document.getElementById("historyValue").innerText=num;
}
function getOutput()
{
    return document.getElementById("outputValue").innerText;

}

function printOutput(num)
{
    document.getElementById("outputValue").innerText=num;
}

var operator =document.getElementsByClassName("operator");
for(var i=0; i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){
        if(this.id=="clear")
        {
            printHistory("");
            printOutput("");
            
        }
        else if(this.id=="backspace"){
            var output = getOutput().toString();
            output=output.substr(0,output.length-1);    
            printOutput(output);
        }
        else
        {
            var output= getOutput();
            var history= getHistory();
            if(output!="")
        {
            history=history+output;
            if(this.id=="=")
            {
                var result= eval(history);
                printOutput(result);
                printHistory("");
            }
            else
            {
                history=history+this.id;
                printHistory(history);
                printOutput("");
            }
        }
        }
        

    })
}

var number =document.getElementsByClassName("number");
for(var i=0; i<number.length;i++)
{
    number[i].addEventListener('click',function(){
        var output = getOutput();
        output=output+this.id;
        printOutput(output);

    })
}




