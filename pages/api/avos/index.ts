import { NextApiHandler } from "next"
import DB from "@database"

const allAvos: NextApiHandler = async (_req, res) => {
  try {
    const db = new DB()
    const allEntries = await db.getAll()
    res.status(200).json(allEntries)
  } catch (error) {
    res.status(400).json(error)
  }
}

export default allAvos
