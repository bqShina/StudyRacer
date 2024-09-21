/*
  Warnings:

  - You are about to drop the `Assignment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Assignment";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Assignments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Subtask" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "assignment_id" INTEGER,
    CONSTRAINT "Subtask_assignment_id_fkey" FOREIGN KEY ("assignment_id") REFERENCES "Assignments" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Subtask" ("assignment_id", "description", "id") SELECT "assignment_id", "description", "id" FROM "Subtask";
DROP TABLE "Subtask";
ALTER TABLE "new_Subtask" RENAME TO "Subtask";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
