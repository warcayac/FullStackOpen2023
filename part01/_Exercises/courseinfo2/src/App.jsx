export default function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <>
      <div>
        <Header title={course.name} />
        <Content lessons={course.parts} />
        <hr />
        <Total lessons={course.parts} />
      </div>
    </>
  )
}

function Header({title}) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

function Content({lessons}) {
  // "key" prevents warning messages: "Each child in a list should have a unique key prop"
  const paragraphs = lessons.map((e,i=0) => <Part course={e} key={i++}/>);

  return (
    <>
      {paragraphs}
    </>
  )
}

function Part({course}) {
  return (
    <>
      <p>{course.name}&emsp;&emsp;&emsp;{course.exercises}</p>
    </>
  )
}

function Total({lessons}) {
  const total = lessons.map((e) => e.exercises).reduce((acc,num) => acc+num, 0);

  return (
    <>
      <p>Number of exercises:&emsp;&emsp;&emsp;{total}</p>
    </>
  )
}
