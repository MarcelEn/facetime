import * as React from 'react';
import Background from '../../components/background/Background';
import UserTile from '../../components/userTile/UserTile';
import IncomingCallMessage from '../../components/incomingCallMessage/IncomingCallMessage';


class App extends React.Component {
  public render() {
    return (
      <div>
        <Background />
        {
          [1,2,3,4,5,6,7].map((i: number) => (
            <UserTile
              id={i}
              name="Nicole"
              profileImageSrc={"http://i42.tinypic.com/330sh3o.jpg"}
            />
          ))
        }
        <IncomingCallMessage />
      </div>
    );
  }
}

export default App;
