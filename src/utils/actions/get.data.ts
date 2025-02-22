export async function getDataHome(){

    try {
        const res= await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/67ba183c3b8d8645536f26df?pretty=true&read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)

        if (!res.ok){
            throw new Error("Failed to fetch data falha")
        }
         
         return res.json();

    } catch(err) {
        throw new Error("Failed to fetch data falha")
    }
}