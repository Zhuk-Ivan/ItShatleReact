import User from './User';
import ComposableUser from './ComposableUser';

function UserList(props) {  
  return (
    <ul>
    {props.children.map((item) => (
    //   <User key={item.id} name={item.name}></User>
      <ComposableUser>{item.name}</ComposableUser>))
    }
    </ul>
  )
}

export default UserList;