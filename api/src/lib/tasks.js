import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import { userExamples } from 'src/services/userExamples/userExamples'


export const exampleTask = async () => {
  const users = await userExamples()
  logger.debug(
    {
      users
    },
    'Invoke async service function.'
  )
  const userObjects = db.userExample.findMany()
  logger.debug(
    {
      userObjects
    },
    'Invoke db call directly.'
  )
}
