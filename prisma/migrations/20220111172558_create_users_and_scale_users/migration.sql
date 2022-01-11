-- CreateTable
CREATE TABLE "users" (
    "code" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sex" TEXT NOT NULL,
    "maritalStatus" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "charge" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "weddingAnniversary" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("code")
);

-- CreateTable
CREATE TABLE "scale_users" (
    "code" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "departament" TEXT NOT NULL,

    CONSTRAINT "scale_users_pkey" PRIMARY KEY ("code")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "scale_users_email_key" ON "scale_users"("email");
