import {NextResponse} from "next/server"

export async function GET(request: Request) {

    return NextResponse.json({ message: "Hello World" });
}

export async function POST(req:Request){
    const data = req.body;
    console.log(data)
    return NextResponse.json({message:"product added successfully"});
}