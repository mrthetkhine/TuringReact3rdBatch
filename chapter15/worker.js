function factorial(num)
{
    if(num ==0)
    {
        return 1;
    }
    else
    {
        return num * factorial(num-1);
    }
}
onmessage = function(e)
{
    console.log("meessage received ",e.data);
    let result = factorial(e.data);
    postMessage(result);
}