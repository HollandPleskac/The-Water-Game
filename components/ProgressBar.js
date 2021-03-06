import React, { useContext } from 'react'
import ContractContext from '../context/contractContext'

const ProgressBar = () => {
  const contractCtx = useContext(ContractContext)

  const isInitialized = contractCtx.donPedroHeight !== null && contractCtx.modestoHeight !== null
  const isAboveHistoricalAvg = contractCtx.donPedroHeight > contractCtx.donPedroHistAvg && contractCtx.modestoHeight > contractCtx.modestoHistAvg
  const color = isAboveHistoricalAvg ? 'bg-reservoirGreen' : 'bg-reservoirRed'

  if (isInitialized)
    return (
      <div className={`${color} mx-10 py-4 mt-4 text-center text-xl text-white`} >
        Almost There
      </div>
    )

  else
    return (
      <div className='mx-10 py-4 mt-4 text-xl bg-background text-background' >
        PlaceHolder
      </div>
    )

}

export default ProgressBar
