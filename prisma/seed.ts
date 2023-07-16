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
                id: `res-${i}`,
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

    for (let i = 0; i < 20; i++) {
        await prisma.menu.create({
            data: {
                id: `menu-${i}`,
                restaurant: {
                    connect: {
                        id: `res-1`
                    }
                },
                name: `Menu ${i}`,
                price: +(Math.random() * 100).toFixed(2),
                description: 'Lorem ipsum dolor sit amet 5555',
            }
        })
    }
}

void main()
