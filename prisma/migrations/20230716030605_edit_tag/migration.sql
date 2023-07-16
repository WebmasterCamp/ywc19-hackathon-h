/*
  Warnings:

  - You are about to drop the `_MenuToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_MenuToTag" DROP CONSTRAINT "_MenuToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_MenuToTag" DROP CONSTRAINT "_MenuToTag_B_fkey";

-- DropTable
DROP TABLE "_MenuToTag";

-- CreateTable
CREATE TABLE "_RestaurantToTag" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RestaurantToTag_AB_unique" ON "_RestaurantToTag"("A", "B");

-- CreateIndex
CREATE INDEX "_RestaurantToTag_B_index" ON "_RestaurantToTag"("B");

-- AddForeignKey
ALTER TABLE "_RestaurantToTag" ADD CONSTRAINT "_RestaurantToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RestaurantToTag" ADD CONSTRAINT "_RestaurantToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
