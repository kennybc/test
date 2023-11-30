-- CreateTable
CREATE TABLE "Archive" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "answers" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "time" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "GamePlay" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "answers" TEXT NOT NULL,
    "points" INTEGER NOT NULL,
    "time" INTEGER NOT NULL
);
