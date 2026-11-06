"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { MediaItem } from "@/content/types";

const filters = [
  { value: "all", label: "Tout" },
  { value: "photo", label: "Photos" },
  { value: "video", label: "Vidéos" },
];

export function MediaGallery({ items }: { items: MediaItem[] }) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState<MediaItem | null>(null);

  const visible = items.filter((item) => filter === "all" || item.type === filter);

  return (
    <>
      <Tabs value={filter} onValueChange={setFilter}>
        <TabsList className="h-auto rounded-full">
          {filters.map((option) => (
            <TabsTrigger key={option.value} value={option.value} className="rounded-full px-4 py-1.5">
              {option.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => setSelected(item)}
              aria-label={`Ouvrir : ${item.title}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-3xl bg-muted text-left outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent to-50%" />
              {item.type === "video" && (
                <span className="absolute top-4 right-4 grid size-11 place-items-center rounded-full bg-white text-black">
                  <Play className="size-4 fill-current" aria-hidden />
                </span>
              )}
              <span className="absolute inset-x-5 bottom-4 text-sm font-medium text-white">
                {item.title}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="gap-3 rounded-3xl p-3 sm:max-w-4xl">
          {selected && (
            <>
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
                {selected.videoSrc ? (
                  <video
                    src={selected.videoSrc}
                    poster={selected.image.src}
                    controls
                    autoPlay
                    className="size-full"
                  />
                ) : (
                  <Image
                    src={selected.image.src}
                    alt={selected.image.alt}
                    fill
                    sizes="(min-width: 896px) 896px, 100vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="px-2 pb-2">
                <DialogTitle>{selected.title}</DialogTitle>
                <DialogDescription className={selected.description ? "mt-1" : "sr-only"}>
                  {selected.type === "video" && !selected.videoSrc
                    ? "Vidéo à venir."
                    : (selected.description ?? selected.image.alt)}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
