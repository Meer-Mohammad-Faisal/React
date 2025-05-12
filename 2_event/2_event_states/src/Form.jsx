function handleFormSubmint (event) {
    event.preventDefault();
    console.log("form was submited");
}

export default function Form () {
    return (
        <form onSubmit={handleFormSubmint}>
            <input placeholder="write somthing" />
            <button>Submit</button>
        </form>


    );
}