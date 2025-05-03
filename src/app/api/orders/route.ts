import { prisma } from "@/lib/prisma";  // Make sure the prisma import path is correct

export async function POST(req: Request) {
  try {
    const { customer, product, price, total, status, orderDate, deliveryDate } = await req.json();

    const newOrder = await prisma.order.create({
      data: {
        customer,
        product,  // Make sure this matches the schema and that `product` exists in the Prisma schema
        price,
        total,
        status,
        orderDate: new Date(orderDate),
        deliveryDate: new Date(deliveryDate),
      },
    });

    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    console.error("Failed to create order:", error);
    return new Response(JSON.stringify({ error: "Failed to create order" }), { status: 500 });
  }
}
