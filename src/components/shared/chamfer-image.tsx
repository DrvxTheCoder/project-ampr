import Image from "next/image";

import type { ImageAsset } from "@/content/types";
import { cn } from "@/lib/utils";

type ChamferImageProps = {
  image: ImageAsset;
  /** Largeur d'affichage attendue, transmise à next/image. */
  sizes: string;
  /** Classe d'aspect ou de hauteur, par exemple "aspect-[4/3]". */
  className?: string;
  preload?: boolean;
  children?: React.ReactNode;
};

/** Image à coins biseautés, avec contenu superposé optionnel. */
export function ChamferImage({
  image,
  sizes,
  className,
  preload,
  children,
}: ChamferImageProps) {
  return (
    <div
      data-reveal="image"
      className={cn("chamfer relative overflow-hidden rounded-3xl bg-muted", className)}
    >
      {/* GSAP anime ce conteneur : l'image garde sa transition CSS au survol. */}
      <div data-reveal-media className="absolute inset-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes={sizes}
          preload={preload}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      {children}
    </div>
  );
}
