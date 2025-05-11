export default function Price ({OldPrice, NewPrice}) {
    let oldStyles = {
        textDecorationLine: "line-through",
    };

    let newStyles = {
        fontWeight: "bold",
    };

    let styles = {
        backgroundColor: "#e0c367",
        height: "30px",
        width: "200px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",

    };
    return (
        <div style={styles}>
            <span style={oldStyles}>{OldPrice}</span>
            &nbsp;&nbsp;
            <span style={newStyles}>{NewPrice}</span>
        </div>
        

    );
}