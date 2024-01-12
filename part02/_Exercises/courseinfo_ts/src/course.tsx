type TLesson = {
  id: number,
  name: string,
  exercises: number,
}

type TCourse = {
  id: number,
  name: string,
  parts: TLessonList,
}

type TLessonList = TLesson[]

export type TCourseList = TCourse[]


function Header({title}: {title: string}) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

function Content({lessons}: {lessons: TLessonList}) {
  // "key" prevents warning messages: "Each child in a list should have a unique key prop"
  const paragraphs = lessons.map((e) => <Part lesson={e} key={e.id}/>);

  return (
    <>
      {paragraphs}
    </>
  )
}

function Part({lesson}: {lesson: TLesson}) {
  return (
    <>
      <p>{lesson.name}&emsp;&emsp;&emsp;{lesson.exercises}</p>
    </>
  )
}

function Total({lessons}: {lessons: TLessonList}) {
  const total = lessons.map((e) => e.exercises).reduce((acc,num) => acc+num, 0);

  return (
    <>
      {/* <p>Number of exercises:&emsp;&emsp;&emsp;{total}</p> */}
      <p><strong>Total of {total} exercises</strong></p>
    </>
  )
}

export function Course({course}: {course: TCourse}) {
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