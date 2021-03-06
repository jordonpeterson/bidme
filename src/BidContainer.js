import React,{Component, Fragment} from 'react';
import styled from 'styled-components';
import Bid from './Bid.js';

const FlexColumn = styled.div`
display:flex;
flex-direction: column;
background-color:orange;
width: 60%;
`
const FlexRow = styled.div`
text-align: center;
 width: 100%;
background-color: yellow;
`
class BidContainer extends Component{
    state = {
        bids: [
            {company:"ABC 1",comment:"We da best",price:99,id:123},
            {company:"ABC 2",comment:"We da best",price:9,id:1234},
            {company:"ABC 3",comment:"We da best",price:0,id:1235}
]
        }

    renderBids () {
        console.log('renderBids',this.props)

        if (this.state.bids.length === 0) {return <FlexRow><p>We are still waiting on bids!</p></FlexRow>}
        const bidsFromState = [...this.state.bids]
        bidsFromState.sort((a,b) => { return a.price-b.price})
        return(
            <FlexColumn>
                {bidsFromState.map(bid => (
                    <FlexRow><Bid key={bid.id} company={bid.company} comment = {bid.company} price = {bid.price}> </Bid></FlexRow>
                ))}
            </FlexColumn>
        )
    }
    render(){
        console.log('BidContainer', this.props)
        return(
            <Fragment>
                {this.renderBids()}
            </Fragment>
        )
    }

}


export default BidContainer
