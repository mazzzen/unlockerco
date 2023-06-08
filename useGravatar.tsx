import md5 from "md5-hash";
import { useEffect, useState } from "react";

const gravatarUrlGenerator = (email: string, size = 80) =>
  `https://www.gravatar.com/avatar/${md5(
    email.toLowerCase()
  )}.jpg?s=${size}&d=404`;

const isImageExist = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return url;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const useGravatar = (
  email: string | undefined | null,
  size = 80
): [string | null, React.Dispatch<React.SetStateAction<string | null>>] => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const url = gravatarUrlGenerator(email!, size);
      const src = await isImageExist(url);
      setImageSrc(src);
    };
    if (email) fetchImage();
  }, [email, size]);

  return [imageSrc, setImageSrc];
};
