import { type Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
async function main() {

    for (let i = 0; i < 100; i++) {
        await prisma.restaurant.create({
            data: {
                id: `res-${i}`,
                name: `Restaurant ${i}`,
                location: 'Bangkok',
                imageUrl: 'https://picsum.photos/200',
                description: 'Lorem ipsum dolor sit amet',
                tags: {
                    create: {
                        name: 'well_begin'
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
