function ComposableUser(props) {
    let name = props.children.length > 5 ?  props.children.substr(0, 5).concat('...') : props.children;
    let isPremium = props.children.indexOf('e') > -1 ? `It’s Premium User! Welcome, ${name}` : `It’s user ${name}`;
    
    function checkPalindrom (str) {
         console.log(str.toLowerCase().split('').reverse().join(''))
         return str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? 'name-highlighted' : '';
    }

    return (
      <li>
        <span className={checkPalindrom(props.children)}>{isPremium}</span>
      </li>
    )
}
  
  export default ComposableUser;