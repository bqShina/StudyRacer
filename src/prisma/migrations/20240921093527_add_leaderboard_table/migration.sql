-- CreateTable
CREATE TABLE "Leaderboard" (
    "user_id" INTEGER NOT NULL,
    "subtask_id" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,

    PRIMARY KEY ("user_id", "subtask_id"),
    CONSTRAINT "Leaderboard_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Leaderboard_subtask_id_fkey" FOREIGN KEY ("subtask_id") REFERENCES "Subtask" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
