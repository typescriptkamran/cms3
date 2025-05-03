/*
  Warnings:

  - The primary key for the `Order` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `status` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Order` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `currency` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `delivery` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryStatus` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `method` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentStatus` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `shop` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customer" TEXT NOT NULL,
    "delivery" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "currency" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "method" TEXT NOT NULL,
    "shop" TEXT NOT NULL,
    "device" TEXT NOT NULL,
    "orderDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deliveryDate" DATETIME NOT NULL,
    "paymentStatus" TEXT NOT NULL,
    "deliveryStatus" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Order" ("createdAt", "customer", "deliveryDate", "id", "orderDate", "price", "product", "updatedAt") SELECT "createdAt", "customer", "deliveryDate", "id", "orderDate", "price", "product", "updatedAt" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
