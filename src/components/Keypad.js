// Code Keypad Component Here
function Keypad(){
function handleChange (){
    console.log("Entering password...");
}
    return (
        <input type="Password"
        onChange={handleChange}
        placeholder = "Entering password..."/>
    )
    
}

export default Keypad;
