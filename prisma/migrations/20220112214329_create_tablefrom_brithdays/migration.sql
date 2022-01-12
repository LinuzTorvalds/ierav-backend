/*
  Warnings:

  - Added the required column `year` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "year" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "birthdays" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "birthdays_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "wedding_aniversary" (
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "year" TEXT NOT NULL,

    CONSTRAINT "wedding_aniversary_pkey" PRIMARY KEY ("code")
);
