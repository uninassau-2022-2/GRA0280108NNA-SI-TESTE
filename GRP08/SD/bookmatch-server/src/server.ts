import express from 'express'
import { PrismaClient, User, List } from '@prisma/client'

const app = express()

app.use(express.json())

const prisma = new PrismaClient({
  log: ["query"]
})

interface UserRequestBody extends User {
  confirmation: string
}

app.get('/books', async (request, response) => {
  try {
    const books = await prisma.book.findMany()

    return response.status(201).json({
      data: books
    })
  } catch (error) {
    return response.json(error)
  }
})

app.post('/login', async (request, response) => {
  const { email, password }: User = request.body

  try {
    const user = await prisma.user.findFirstOrThrow({
      where: { email, password }
    })

    response.json(user)
  } catch (error) {
    response.status(500).json(error)
  }
})

app.post('/users', async (request, response) => {
  const { name, email, password, confirmation }: UserRequestBody = request.body

  try {
    if (password !== confirmation) {
      return response.status(500).json({
        error: [
          { message: 'Registration attempt failed' }
        ]
      })
    } else {
      const createdUser: User = await prisma.user.create({
        data: {
          name,
          email,
          password
        }
      })
  
      await prisma.list.create({
        data: {
          title: 'Quero ler',
          description: '',
          isCustom: false,
          userId: createdUser.id
        }
      })
      await prisma.list.create({
        data: {
          title: 'Estou lendo',
          description: '',
          isCustom: false,
          userId: createdUser.id
        }
      })
      await prisma.list.create({
        data: {
          title: 'Lidos',
          description: '',
          isCustom: false,
          userId: createdUser.id
        }
      })
      await prisma.list.create({
        data: {
          title: 'Parei de ler',
          description: '',
          isCustom: false,
          userId: createdUser.id
        }
      })
    
      return response.status(201).json({
        message: 'Registered successfully.'
      })
    }
  } catch (error) {
    return response.status(500).json(error)
  }
})

app.get('/users/:userId/lists', async (request, response) => {
  const userId = Number(request.params.userId)
  const isCustom = request.query["isCustom"] === 'true'

  try {
    const lists = await prisma.list.findMany({
      select: {
        id: true,
        title: true,
        description: isCustom,
        createdAt: true,
        books: true
      },
      where: { userId, isCustom }
    })
  
    return response.json({
      data: lists
    })
  } catch (error) {
    return response.status(500).json(error)
  }
})

app.post('/users/:userId/lists', async (request, response) => {
  const userId = Number(request.params.userId)
  const { title, description, isCustom }: List = request.body

  try {
    await prisma.list.create({
      data: {
        title,
        description,
        isCustom,
        userId
      }
    })

    return response.status(201).json({
      message: 'Registered successfully.'
    })
  } catch (error) {
    return response.status(500).json(error)
  }
})

app.put('/lists/:id', async (request, response) => {
  const id = Number(request.params.id)

  const { title, description }: List = request.body

  try {
    await prisma.list.update({
      where: { id },
      data: { title, description }
    })

    return response.json({
      message: 'Updated successfully.'
    })
  } catch (error) {
    return response.status(500).json(error)
  }
})

app.delete('/lists/:id', async (request, response) => {
  const id = Number(request.params.id)

  try {
    await prisma.list.delete({
      where: { id }
    })

    return response.status(201).json({
      message: 'Successfully deleted.'
    })
  } catch (error) {
    return response.status(500).json(error)
  }
})

app.listen(3333)