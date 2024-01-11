import prisma from '@/prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

interface Request extends NextApiRequest {
  body: {
    title: string
    content: string
    authorId: string
  }
}

export default async function handler(req: Request, res: NextApiResponse) {
  const { title, content, authorId } = req.body

  try {
    await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: {
            id: Number(authorId),
          },
        },
      },
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ success: false })
  }

  res.status(200).json({ success: true })
}
