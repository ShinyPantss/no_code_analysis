import { supabase } from "@/lib/initSupabase";

export const handleClick = async (selectedFile: File) => {
  try {
    if (selectedFile) {
      const { data, error } = await supabase.storage
        .from("fileBucket")
        .upload(`/${selectedFile.name}`, selectedFile);

      if (error) {
        console.error("Error uploading file:", error.message);
      } else {
        console.log("File uploaded successfully:", data);
      }
    }
    return true;
  } catch (error) {
    console.error("An error occurred during file upload:", error);
    return false;
  }
};
