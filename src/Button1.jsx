
function Button1(){
    const handleClick= () => console.log("Ouch!")
    const handleClick2= (name) => console.log(`${name} stop clicking me`)
    let count=0
    const handleClick3 =(name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else{
            console.log(`${name} stop clicking me`)
        }
    }
    const handleClick4= (e) => e.target.textContent="Ouch"
    return( <>
                <button onClick={handleClick}>Click me</button>
                <button onClick={() => handleClick2('Venkat')}>Click me1</button>
                <button onClick={() => handleClick3('Bhagnesh')}>Click me2</button>
                <button onDoubleClick={(e) => handleClick4(e)}>Click me3</button>
            </>);
}
export default Button1