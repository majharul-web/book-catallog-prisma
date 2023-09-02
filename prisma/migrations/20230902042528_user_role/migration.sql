/*
  Warnings:

  - The `role` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('customer', 'admin');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "role",
ADD COLUMN     "role" "userRole" NOT NULL DEFAULT 'customer',
ALTER COLUMN "profileImg" DROP NOT NULL;
