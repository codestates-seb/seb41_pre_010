import { useState } from "react";

function useImage(url) {
  const [image, setImage] = useState(url);

  return { image, setImage };
}

export default useImage;
