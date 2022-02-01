/*
  Warnings:

  - You are about to drop the column `year` on the `birthdays` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `wedding_aniversary` table. All the data in the column will be lost.
  - Changed the type of `birthday` on the `birthdays` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `birthday` on the `users` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `weddingAnniversary` to the `users` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `birthday` on the `wedding_aniversary` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "birthdays" DROP COLUMN "year",
DROP COLUMN "birthday",
ADD COLUMN     "birthday" DATE NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "year",
DROP COLUMN "birthday",
ADD COLUMN     "birthday" DATE NOT NULL,
DROP COLUMN "weddingAnniversary",
ADD COLUMN     "weddingAnniversary" DATE NOT NULL;

-- AlterTable
ALTER TABLE "wedding_aniversary" DROP COLUMN "year",
DROP COLUMN "birthday",
ADD COLUMN     "birthday" DATE NOT NULL;
