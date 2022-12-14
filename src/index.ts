import * as chatgpt from './chatgpt.js'
import * as parser from './parser.js'

type Response = {
  actual: string
  predicted: string
}

async function predictNextSetProgression(setProgressions: string[]): Promise<Response> {
  // const count = setProgressions.length
  // const message = `Given the following Flat Barbell Bench Press set progressions:\n${setProgressionsString}\nGive me a good next set progression for maximizing muscle hypertrophy. For example, a valid response would be:\n${count}: 135 x 12, 225 x 11, 275 x 10, 305 x 10, 285 x 8, 255 x 11`

  const actual = setProgressions.shift()!
  const setProgressionsString = setProgressions.join('\n')

  const message = `Guess the next line:\n${setProgressionsString}`
  console.log(`Message:\n${message}\n`)
  const predicted = await chatgpt.sendMessage(message)
  return { actual, predicted }
}

async function main() {
  const response = await predictNextSetProgression(parser.benchPressSetProgressions)

  console.log(`Actual:\n${response.actual}\n`)
  console.log(`Predicted:\n${response.predicted}\n`)
}

main()
