// To access your database
import { exampleTask } from '../api/src/lib/tasks'

export default async ({ args }) => {
  // Your script here...
  console.log(':: Executing script with args ::')
  console.log(args)
  try {
    await exampleTask()
  } catch {
    console.error('Something went wrong')
  }
}
