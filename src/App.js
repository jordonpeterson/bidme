import React, { Component, Fragment } from 'react';
import PostAJob from './PostAJob'
import JobsFeed from './JobsFeed'
import BidsFeed from './BidsFeed'
import MakeABid from './MakeABid'
import BidContainer from './BidContainer'


class App extends Component {

  render() {
    return (
      <Fragment>
          <h1>Bidme</h1>
          <BidContainer />



          {/*<PostAJob/>*/}
          {/*<JobsFeed/>*/}
          {/*<BidsFeed/>*/}
          {/*<MakeABid/>*/}

      </Fragment>
    );
  }
}




export default App;
