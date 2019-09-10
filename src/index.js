import React from 'react'
import ReactDOM from 'react-dom'

const Header = function(props){
    return(
        <>
        <h1>{props.course}</h1>
        </>
    )
}
const Part= function(props){
    return(
    <p>{props.part} {props.exercise}</p>
    )
}


const Total = function(props){
    return(
    <>
        <p>{props.exercises1 + props.exercises2 + props.exercises3}</p>
       
    </>
    )
}
const App = function(props){
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Part part={part1} exercise={exercises1} />
      <Part part={part2} exercise={exercises2} />
      <Part part={part3} exercise={exercises3} />
      <Total exercises1 = {exercises1} exercises2 ={exercises2} exercises3 = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))