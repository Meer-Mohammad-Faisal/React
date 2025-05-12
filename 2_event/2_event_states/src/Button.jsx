function HandlingClick(event) {
    console.log("Hello, World!");
    console.log(event);
};


function HandlingMouse() {
    console.log("Bye, World!");
};

function HandleDblClick() {
    console.log("Double Clicked");
}

export default function Button() {
    return (
        <div>
            <button onClick={HandlingClick}>Click me</button>
            <p onMouseOver={HandlingMouse}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Ut delectus sequi, consectetur ad ipsum distinctio alias soluta fuga sed?
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias veniam
            quos esse rerum error autem sunt voluptate tenetur eos quod.</p>
            <button onDoubleClick={HandleDblClick}> click me twice</button>
        </div>
    )
}