function User(props) {
    let name = props.name.length > 5 ?  props.name.substr(0, 5).concat('...') : props.name;
    let isPremium = props.name.indexOf('e') > -1 ? `It’s Premium User! Welcome, ${name}` : `It’s user ${name}`;
    
    function checkPalindrom (str) {
         console.log(str.toLowerCase().split('').reverse().join(''))
         return str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? 'name-highlighted' : '';
    }

    return (
      <li>
        <span className={checkPalindrom(props.name)}>{isPremium}</span>
      </li>
    )
  }
  
  export default User;