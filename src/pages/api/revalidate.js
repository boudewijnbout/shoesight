import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

// console.log(revalidateTag);

export default async function POST() {
    revalidateTag("prismic");

    return NextResponse.json({ revalidated: true, now: Date.now() });
}