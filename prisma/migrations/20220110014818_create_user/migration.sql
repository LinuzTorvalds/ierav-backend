-- CreateTable
CREATE TABLE "User" (
    "code" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "charge" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "weddingAnniversary" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
