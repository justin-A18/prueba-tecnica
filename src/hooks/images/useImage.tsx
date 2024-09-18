import { getImagesService } from "@/services/images";
import { useCallback, useEffect, useState } from "react";

export const useImage = (name: string) => {
  const [image, setImage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getImage = useCallback(async () => {
    try {
      const response = await getImagesService(name);
      setImage(response.urls.full);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [name]);

  useEffect(() => {
    getImage();
  }, [getImage]);

	return {
		image,
		isLoading
	}
};
