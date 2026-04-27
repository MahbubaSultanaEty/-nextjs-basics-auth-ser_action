'use server'
  import { addPost } from "@/database/postdb";
import { revalidatePath } from "next/cache";
  
export const handleAddPost = async (formData) => {
      
        const title = formData.get('title');
        const body = formData.get('body');

        // console.log({title, body})
        addPost({
            title,
            body
        })
        revalidatePath('/server-action')
    }
