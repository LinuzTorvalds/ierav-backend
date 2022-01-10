-- CreateTable
CREATE TABLE "ScaleUsers" (
    "code" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "departament" TEXT NOT NULL,

    CONSTRAINT "ScaleUsers_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "ScaleUsers_email_key" ON "ScaleUsers"("email");
