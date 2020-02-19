import React, { useState, useContext } from 'react';
import { UserContext } from '../App';

const Toggle = () => {
  const [status, setStatus] = useState(false);
  const userInfo = useContext(UserContext);

  // console.log(userInfo);

  if (!userInfo.user) {
    return null;
  }

  function toggle() {
    setStatus(!status);
  }

  return (
    <div>
      <button onClick={() => toggle()}>Toggle {status ? 'ON' : 'OFF'}</button>
      {status && <h2>Hello!</h2>}
    </div>
  );
};

export default Toggle;

// import React, { Component } from 'react';

// export default class Refactor extends Component {
//   state = {
//     isToggled: false
//   };

//   toggle = () => {
//     this.setState(state => {
//       return { isToggled: !state.isToggled };
//     });
//   };

//   render() {
//     let toggleState = ' OFF';

//     return (
//       <div>
//         <button onClick={this.toggle}>
//           Toggle {this.state.isToggled ? 'ON' : 'OFF'}
//         </button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }
