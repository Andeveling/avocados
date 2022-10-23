import { NextApiRequest, NextApiResponse } from "next"
import DB from "@database"

const oneAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id
    const db = new DB()
    const oneEntry = await db.getById(id as string)
    res.status(200).json(oneEntry)
  } catch (error) {
    res.status(400).json(error)
  }
}

export default oneAvos
