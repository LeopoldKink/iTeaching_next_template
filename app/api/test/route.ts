import { NextResponse } from 'next/server';
import { sql } from "@vercel/postgres";

export async function POST(req: any) {
    try {
        const requestData = await req.json();
        const { testData } = requestData;
        // Validate required fields

        let name = "Max";   //Eigentlich testData.name
        let age = 12        //Eigentlich testData.age

        await sql`INSERT INTO "TestData" 
        ("name", "age") 
        VALUES 
        (${name}, ${age});`;


        if (!testData) {
            return NextResponse.json({
                status: 'error',
                message: 'Missing required fields. Please ensure all fields are provided.',
            }, {
                status: 400 // Bad Request
            });
        }   
        console.log('Creating form record:', testData);
        return NextResponse.json("Success");
    } catch (error) {
        console.error('Error creating form record:', error);

        // Generic error response
        return NextResponse.json({
            status: 'error',
            message: 'An unexpected error occurred.',
        }, {
            status: 500 // Internal Server Error
        });
    }
}

export async function GET(req: any) {
    try {
        
        const {rows} = await sql`SELECT * FROM "TestData";`;
        return NextResponse.json(rows);

    } catch (error) {
        console.error('Error fetching form records:', error);

        // Generic error response
        return NextResponse.json({
            status: 'error',
            message: 'An unexpected error occurred.',
        }, {
            status: 500 // Internal Server Error
        });
    }
}