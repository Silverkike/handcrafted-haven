import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    image: string;
}

export async function GET() {
    try {
        const { db } = await connectToDatabase();
        const productsCollection = db.collection('products');
        const products = await productsCollection.find({}).toArray();

        const serializedProducts = products.map((doc) => ({
            ...doc,
            _id: doc._id.toString(),
            id: doc._id.toString(),
        }));

        return NextResponse.json(serializedProducts, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to fetch products';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { db } = await connectToDatabase();
        const productsCollection = db.collection('products');
        const body = (await req.json()) as Partial<Product>;

        const product = {
            name: body.name,
            category: body.category,
            price: Number(body.price),
            description: body.description,
            image: body.image,
        };

        const result = await productsCollection.insertOne(product);
        const insertedProduct = {
            ...product,
            _id: result.insertedId.toString(),
            id: result.insertedId.toString(),
        };

        return NextResponse.json(
            {
                message: 'Product created successfully',
                product: insertedProduct,
            },
            { status: 201 },
        );
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to create product';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
