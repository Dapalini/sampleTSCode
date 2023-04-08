import * as React from 'react';


const User = () => {

  class Coder {
    constructor(
      public readonly name: string, 
      public music: string, 
      private age: number, 
      protected lang: string = "Typescript"
    ){
      this.name = name
      this.music = music
      this.age = age
      this.lang = lang
    }

    public getAge(){
      return this.age
    }
  }

  class JuniorCoder extends Coder {   
    constructor(
      public computer: string,
      name: string,
      music: string,
      age: number,
    ){
      super(name,music,age)
        this.computer = computer
    }

    getLang(){
      return `I write ${this.lang}`
    }
  }

  const Daniel = new JuniorCoder("Mac","Daniel","Chill",42,)

  interface Exec {
    name: string,
    action: string,
    age: number
    whatDo(king: string): string 
  }

  class Executioner implements Exec {
    constructor (
      public name: string,
      public action: string,
      public age: number
    ){
      this.name = name
      this.action = action
      this.age = age
    }

    whatDo(king: string){
      return `I am ${this.name}, ${this.age} years old, and I am a ${this.action}, my king is ${king} `
    }
  }

  const Horrobo = new Executioner("Horrobo", "execute", 34)

  class Deaths {
    static count: number = 0
    static getCount(){
      return Deaths.count
    }
    public id: number
    constructor(
      public name: string
    ){
      this.name = name
      this.id = ++Deaths.count
    }
  }

  const Jill = new Deaths("Jill")
  const James= new Deaths("Jamas")
  const Jack = new Deaths("Jack")

  console.log(Deaths.getCount())
  console.log(Jill.id)
  console.log(Jack.id)
  console.log(James.id)

  class Courses {
    private dataState: string[]

    constructor() {
      this.dataState = []
    }

    public get data(): string[] {
      return this.dataState
    }
    public set data(value: string[]){
      if(Array.isArray(value) && value.every(el => typeof el === "string")) {
        this.dataState = value
        return
      } else throw new Error("Paramater needs to be an array of strings.")
    }
  }

  const Nathanial = new Courses()
  Nathanial.data = ["Student Hat", "Pro TRs", "Upper Indoc TRs"]
  console.log(Nathanial.data)

  Nathanial.data = [...Nathanial.data, "Metering Course"]
  Nathanial.data = ["Jack"]

  interface Educator {
    // [index: string]: string | number
    helper: string,
    student: string,
    grade: number
  }

  const jane: Educator = {
    helper: "Jim",
    student: "Jules",
    grade: 10
  }

  const prop: string = "helper"

  console.log(jane[prop as keyof Educator])


  const logEducator = (educator: Educator, key: keyof Educator): void => {
    console.log(`${key}: ${educator[key]}`)
  }

  const todaysEductor = jane;


  interface BoolCheck<T> {
    value: T,
    type: string, 
    is: Boolean,
  }

  const isTrue = function<T>(arg: T): BoolCheck<T> {
    if (Array.isArray(arg) && !arg.length){
      return {value: arg, type: "array", is: false}
    }
    if (typeof arg === "object" && arg !== null && Object.keys(arg as keyof T)){
      return {value: arg, type: typeof arg, is: false}
    }
    return {value: arg, type: typeof arg, is: !!arg}
  }

  console.log(isTrue([1,2]))

  logEducator(todaysEductor, "helper")

  for (const key in jane) {
    console.log(`${key}: ${jane[key as keyof typeof jane]}`)
  }

  interface HasID {
    id: string | number
  }

  const checkUser = <T extends HasID>(user: T): T => {
    return user
  }

  console.log(checkUser({id: 1, name: "joe"}))

  class State<T> {
    public data: T

    constructor(value: T){
      this.data = value
    }

    get jump(): T {
      return this.data
    }

    set jump(value: T) {
      this.data = value
    }
  }

  let joe = new State<number>(12)

  joe.data = 12

  console.log(joe.data)

  type Student = {
    name: string,
    grade: number,
    level: number,
    teacher: string,
    active?: boolean,
  }

  type Janitor = {
    name: string,
    grade: number,
    level: number,
    teacher: string,
    active?: boolean,
  }

  const updateStudent = (student: Student, studentPropToUpdate: Partial<Student>): Student=> {
    return {...student, ...studentPropToUpdate}
  }

  const studentA: Student= {
    name: "Joe",
    grade: 3,
    level: 5,
    teacher: "Jack"
  }

  const jack: Required<Student> = {name: "Jill", grade:2,level:3,teacher: "Phil", active: true}

  const klaes: Readonly<Student> = {name: "Jill", grade:2,level:3,teacher: "Phil"} 

  jack.grade = 4

  type Name = Omit<Janitor, "grade" | "level" | "teacher" | "active">

  type Teacher = "Jim" | "Jack" | "James"

  type Ability = "Awesome" | "Average" | "Poor"

  const teacherRecord: Record<Teacher,Ability> = {
    Jack: "Awesome",
    Jim: "Average",
    James: "Poor"
  }

  console.log(teacherRecord.James)

  console.log(jack)

  console.log(updateStudent(studentA, {name: "Jim", teacher: "Jane"}).teacher)



  return ( <div className="user">
    <p>Hello
    </p>
    <div style={{background: "red"}} id="year">{Daniel.name} {Daniel.music}, {Daniel.getAge()} {Horrobo.whatDo("Charles")}</div>
    {Nathanial.data.map(course => <div key={course}>{course}</div>)}
  </div> );
}
 
export default User;