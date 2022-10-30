import React, { useState } from "react"
import styled from "styled-components"
import reduxStore from "../ReduxStore"
import { useSelector } from "react-redux"
import { increment, decrement, reset } from "../Actions/CounterAction"

const Counter = () => {
  // useState
  const Row = styled.div`
    display: flex;
    padding-top: 1em;
  `
  const Counter = styled.h1`
    justify-content: flex-start;
    font-size: 7em;
  `
  const ButtonDiv = styled.div`
    justify-content: flex-end;
    padding-left: 2em;
    font-size: 1em;
  `
  const Btn = styled.button`
    font-size: 1em;
    margin: 0.25em;
    padding: 0.25em 1em;
    background-color: #97e597;
    float: left;
    clear: left;
  `

  const counterData = useSelector(state => state.count.counterData)

  return (
    <Row>
      <Counter>{counterData}</Counter>
      <ButtonDiv>
        <Btn onClick={() => reduxStore.dispatch(increment(counterData))}>
          INCREMENT
        </Btn>
        <Btn onClick={() => reduxStore.dispatch(decrement(counterData))}>
          DECREMENT
        </Btn>
        <Btn onClick={() => reduxStore.dispatch(reset())}>RESET</Btn>
      </ButtonDiv>
    </Row>
  )
}

export default Counter
