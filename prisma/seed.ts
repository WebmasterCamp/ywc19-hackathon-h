import { type Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {

    await prisma.tag.createMany({
        data: [
            {
                id: 'well',
                name: 'well_begin',
            },
            {
                id: 'water',
                name: 'water_recycling',
            },
            {
                id: 'zero',
                name: 'zero_waste',
            },
            {
                id: 'organic',
                name: 'organic_ingredient',
            },
        ]
    })

    for (let i = 0; i < 100; i++) {
        await prisma.restaurant.create({
            data: {
                name: `Restaurant ${i}`,
                location: 'Bangkok',
                imageUrl: 'https://picsum.photos/200',
                description: 'Lorem ipsum dolor sit amet',
                tags: {
                    connect: {
                        id: 'well'
                    }
                }
            }
        })
    }
}

void main()
