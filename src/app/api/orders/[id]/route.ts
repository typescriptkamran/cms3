// app/api/orders/[id]/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; // Prisma Client to interact with database

// Get order by ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    const order = await prisma.order.findUnique({
      where: { id },
    });
    if (!order) return NextResponse.json({ message: "Order not found" }, { status: 404 });
    return NextResponse.json(order);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to fetch order" }, { status: 500 });
  }
}

// Update order by ID
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  const body = await request.json();
  try {
    const updatedOrder = await prisma.order.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(updatedOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to update order" }, { status: 500 });
  }
}

// Delete order by ID
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  try {
    await prisma.order.delete({
      where: { id },
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to delete order" }, { status: 500 });
  }
}
