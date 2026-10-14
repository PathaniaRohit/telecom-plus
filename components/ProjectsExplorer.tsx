"use client";

import { useState, type CSSProperties } from "react";
import Image from "next/image";
import { ArrowTile } from "@/components/ui/ArrowButton";
import {
  ArrowUpRightIcon,
  MapPinIcon,
  MinusIcon,
  PlusIcon,
} from "@/components/ui/icons";
import type { NavLink, Photo, Project } from "@/lib/data";

type ProjectsExplorerProps = {
  projects: readonly Project[];
  defaultProjectId: string;
  map: Photo;
  allProjects: NavLink;
};

const ZOOM_LEVELS = [1, 1.5, 2.25] as const;

const OFF_MAP_VIEW = { x: 0.05, y: 0.85 };

export function ProjectsExplorer({
  projects,
  defaultProjectId,
  map,
  allProjects,
}: ProjectsExplorerProps) {
  const [selectedId, setSelectedId] = useState(defaultProjectId);
  const [zoomIndex, setZoomIndex] = useState(0);

  const selected =
    projects.find((project) => project.id === selectedId) ?? projects[0];
  if (!selected) return null;

  const view = selected.pin ?? OFF_MAP_VIEW;
  const canvasStyle = {
    "--px": view.x,
    "--py": view.y,
    "--fx": 0.7,
    "--fy": 0.42,
    "--zoom": ZOOM_LEVELS[zoomIndex],
  } as CSSProperties;

  return (
    <div className="grid gap-5 lg:grid-cols-[560px_1fr]">
      <ul className="flex flex-col gap-2.5">
        {projects.map((project) => {
          const active = project.id === selected.id;
          return (
            <li key={project.id}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedId(project.id)}
                className={`group relative flex min-h-[100px] w-full items-stretch overflow-hidden rounded-[4px] border text-left transition-colors duration-500 sm:h-[140px] ${
                  active
                    ? "border-transparent bg-linear-to-r from-panel to-sky"
                    : "border-ink/10 bg-surface hover:bg-tint"
                }`}
              >
                <span className="relative w-[120px] shrink-0 overflow-hidden sm:w-[240px]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 640px) 120px, 240px"
                    className="object-cover transition-transform duration-[1200ms] ease-out-expo group-hover:scale-110 motion-reduce:transition-none"
                  />
                </span>
                <span className="flex flex-col justify-end gap-1.5 p-4 sm:px-5 sm:pb-5">
                  <span className="text-lead">{project.title}</span>
                  <span className="label-micro text-ink/60">
                    {project.category}
                  </span>
                </span>
                <span
                  className={`absolute top-2.5 right-2.5 transition-opacity duration-300 ${
                    active
                      ? ""
                      : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  <ArrowTile className="bg-white" />
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="relative">
        <div className="map-viewport relative h-[300px] overflow-hidden rounded-[4px] bg-sky shadow-card md:h-[440px]">
          <div className="map-canvas" style={canvasStyle}>
            <Image
              src={map.src}
              alt={map.alt}
              fill
              sizes="(max-width: 1024px) 200vw, 1400px"
              className="object-cover"
            />
            {selected.pin ? (
              <div
                className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center gap-2"
                style={{
                  left: `${selected.pin.x * 100}%`,
                  top: `${selected.pin.y * 100}%`,
                }}
              >
                <span className="bg-white px-3 py-2 text-micro whitespace-nowrap shadow-card">
                  {selected.title}
                </span>
                <span className="relative grid place-items-center">
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 size-3 rounded-full bg-brand motion-safe:animate-ping-soft motion-reduce:hidden"
                  />
                  <MapPinIcon className="relative size-6 text-brand" />
                </span>
              </div>
            ) : null}
          </div>

          {selected.pin ? null : (
            <p className="absolute top-2.5 left-2.5 bg-white px-3 py-2 text-micro shadow-card">
              {selected.location} — beyond this map view
            </p>
          )}

          <div className="absolute right-2.5 bottom-2.5 flex flex-col shadow-card">
            <button
              type="button"
              aria-label="Zoom in"
              disabled={zoomIndex === ZOOM_LEVELS.length - 1}
              onClick={() => setZoomIndex(zoomIndex + 1)}
              className="grid size-11 place-items-center border-b border-ink/10 bg-white transition-colors hover:bg-tint disabled:text-ink/30 md:size-7"
            >
              <PlusIcon className="size-3" />
            </button>
            <button
              type="button"
              aria-label="Zoom out"
              disabled={zoomIndex === 0}
              onClick={() => setZoomIndex(zoomIndex - 1)}
              className="grid size-11 place-items-center bg-white transition-colors hover:bg-tint disabled:text-ink/30 md:size-7"
            >
              <MinusIcon className="size-3" />
            </button>
          </div>
        </div>

        <article
          aria-live="polite"
          className="mt-2.5 border-t-[3px] border-brand bg-surface p-5 shadow-float md:absolute md:bottom-2.5 md:left-2.5 md:mt-0 md:w-[370px]"
        >
          <h3 className="text-body">{selected.title}</h3>
          <p className="label-micro mt-1 text-ink/60">{selected.category}</p>
          {selected.description ? (
            <p className="mt-4 text-small text-ink/60">
              {selected.description}
            </p>
          ) : null}
          <a
            href={allProjects.href}
            className="group mt-6 inline-flex min-h-11 items-center gap-2 text-note text-brand-ink md:min-h-0"
          >
            <span className="link-wipe">{allProjects.label}</span>
            <ArrowUpRightIcon className="size-2.5 transition-transform duration-500 ease-out-expo group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" />
          </a>
        </article>
      </div>
    </div>
  );
}
