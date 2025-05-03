// app/api/products/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";  // Import Prisma Client

export async function GET(request: Request) {
  try {
    const products = await prisma.product.findMany();  // Fetch products from DB
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to load products" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const product = await prisma.product.create({
      data: {
        name: body.name,
        description: body.description,
        longDescription: body.longDescription,
        category: body.category,
        subCategory: body.subCategory,
        tags: body.tags.join(", "), // Store tags as a string (could be improved)
        price: body.price,
        stock: body.stock,
        languageKey: body.languageKey,
      },
    });
    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to create product" }, { status: 500 });
  }
}
