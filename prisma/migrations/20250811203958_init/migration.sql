-- CreateTable
CREATE TABLE "public"."Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rollno" TEXT NOT NULL,
    "branch" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "firstDomain" TEXT NOT NULL,
    "secondDomain" TEXT NOT NULL,
    "motivation" TEXT NOT NULL,
    "toContribute" TEXT NOT NULL,
    "experience" TEXT,
    "additionalInfo" TEXT,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_rollno_key" ON "public"."Student"("rollno");
