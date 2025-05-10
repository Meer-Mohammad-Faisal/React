

function Title () {
    let name = "faisal";
  return (
    <div>
       <p>2 * 3 = {2 * 3}</p>
       <p>Hi, {name.toUpperCase()}</p>
    </div>
  );

}

// exports
 export default Title;

// /// named exports : for multiple values
// export { Title };