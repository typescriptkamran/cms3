// app/api/products/[id]/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";  // Import Prisma Client

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    if (!product) return new NextResponse(JSON.stringify({ message: "Product not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Failed to fetch product" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const body = await request.json();
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        name: body.name,
        description: body.description,
        longDescription: body.longDescription,
        category: body.category,
        subCategory: body.subCategory,
        tags: body.tags.join(", "), // Store tags as a string
        price: body.price,
        stock: body.stock,
        languageKey: body.languageKey,
      },
    });
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Failed to update product" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    await prisma.product.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Failed to delete product" }), { status: 500, headers: { "Content-Type": "application/json" } });
  }
}
