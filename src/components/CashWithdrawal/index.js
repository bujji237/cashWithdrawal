import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  decreaseAmount = decreaseAmount => {
    const {amount} = this.state
    this.setState(prevState => {
      return {amount: prevState.amount - decreaseAmount}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    return (
      <div className="body-container">
        <div className="bg-container">
          <div className="header-section">
            <div className="icon">
              <p className="icon-letter">S</p>
            </div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-info">Your Balance</p>
            <div className="amount-balance-container">
              <p className="amount-balance-container-amount">{amount}</p>
              <p className="amount-balance-container-amount-inrs">In Rupeees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="withdraw-info">CHOOSE SUM (IN RUPEES)</p>
          <div className="buttons-container">
            <ul className="two-button-container">
              <DenominationItem
                denomination={denominationsList[0]}
                decreaseAmount={this.decreaseAmount}
                key={denominationsList[0].id}
              />
              <DenominationItem
                denomination={denominationsList[1]}
                decreaseAmount={this.decreaseAmount}
                key={denominationsList[1].id}
              />
              <DenominationItem
                denomination={denominationsList[2]}
                decreaseAmount={this.decreaseAmount}
                key={denominationsList[2].id}
              />
              <DenominationItem
                denomination={denominationsList[3]}
                decreaseAmount={this.decreaseAmount}
                key={denominationsList[3].id}
              />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
