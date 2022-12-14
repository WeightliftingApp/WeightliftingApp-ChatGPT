import testData from '../test/data/test-wld-data.js'

export type Workout = any
export type Exercise = any
export type Set = any

export function exercisesInstancesFor(data: any): Exercise[] {
  return data['workouts'].flatMap((workout: Workout) => workout['exercises'])
}

export function exerciseInstancesNamed(
  exercises: Exercise[],
  name: string,
  iteration?: string,
): Exercise[] {
  if (iteration) {
    return exercises.filter(
      (exercise: Exercise) => exercise['name'] === name && exercise['iteration'] === iteration,
    )
  }
  return exercises.filter((exercise: Exercise) => exercise['name'] === name)
}

export function formattedSetProgressionsFor(exercise: Exercise): string {
  return exercise['sets'].map((set: Set) => `${set['weight']} x ${set['reps']}`).join(', ')
}

export function setProgressionsFor(exercises: Exercise[]): string[] {
  return exercises.map(
    (exercise: Exercise, i: number) => `${formattedSetProgressionsFor(exercise)}`,
  )
}

export const exercises = exercisesInstancesFor(testData)

export const benchPressInstances = exerciseInstancesNamed(exercises, 'Barbell Bench Press', 'Flat')

export const benchPressSetProgressions = setProgressionsFor(benchPressInstances)
