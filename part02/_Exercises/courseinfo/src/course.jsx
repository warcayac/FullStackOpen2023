function Header({title}) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

function Content({lessons}) {
  // "key" prevents warning messages: "Each child in a list should have a unique key prop"
  const paragraphs = lessons.map((e) => <Part course={e} key={e.id}/>);

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
      {/* <p>Number of exercises:&emsp;&emsp;&emsp;{total}</p> */}
      <p><strong>Total of {total} exercises</strong></p>
    </>
  )
}

export function Course({course}) {
  return (
    <>
      <div>
        <Header title={course.name} />
        <Content lessons={course.parts} />
        <Total lessons={course.parts} />
        <hr />
      </div>
    </>
  )
}