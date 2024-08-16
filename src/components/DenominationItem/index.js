// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denomination, decreaseAmount} = props

  const onClickedDecrease = () => {
    decreaseAmount(denomination.value)
  }

  const {id, value} = denomination
  return (
    <li>
      <button type="button" className="withdrawBtn" onClick={onClickedDecrease}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
