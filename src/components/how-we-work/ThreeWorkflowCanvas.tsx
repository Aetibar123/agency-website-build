"use client";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/**
 * ThreeWorkflowCanvas
 * An interactive, high-definition 3D Continuous Workflow Ribbon.
 * Features:
 * - Rich sunset orange & golden amber ceramic luster (100% vibrant, never faded)
 * - Interactive click & drag 360° rotation with inertia damping
 * - Continuous smooth auto-rotation when idle
 * - Sized cleanly to its parent container with zero text obstruction
 */
export default function ThreeWorkflowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();

    // Camera setup - framed tightly for the container
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(0, 0, 30);
    camera.lookAt(0, 0, 0);

    // Warm, vivid studio lighting matching Aetibar's palette
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.95);
    scene.add(ambientLight);

    // Key Light: Vivid Sunset Orange
    const keyLight = new THREE.DirectionalLight(0xf97316, 3.4);
    keyLight.position.set(20, 25, 20);
    scene.add(keyLight);

    // Fill Light: Warm Golden Amber
    const fillLight = new THREE.DirectionalLight(0xfbbf24, 2.6);
    fillLight.position.set(-20, -15, 18);
    scene.add(fillLight);

    // Specular Highlight Light: Champagne/Warm White for gleaming edges
    const rimLight = new THREE.DirectionalLight(0xfff7ed, 2.2);
    rimLight.position.set(0, 20, 25);
    scene.add(rimLight);

    // Master Group
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Sculptural Continuous Workflow Ribbon (Radius 6.8, Tube 0.55 - tangible, glossy, solid body)
    const knotGeo = new THREE.TorusKnotGeometry(6.8, 0.55, 180, 36, 2, 3);

    // Rich, vibrant sunset orange material with polished ceramic/metallic sheen
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      emissive: 0x9a3412,
      emissiveIntensity: 0.32,
      metalness: 0.5,
      roughness: 0.16,
      transparent: true,
      opacity: 0.96,
      side: THREE.DoubleSide,
    });

    const ribbonMesh = new THREE.Mesh(knotGeo, ribbonMat);
    masterGroup.add(ribbonMesh);

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : 400;
      const h = parent ? parent.clientHeight : 400;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Interactive Drag to Rotate with Inertia
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let rotVelX = 0;
    let rotVelY = 0;

    const onPointerDown = (e: PointerEvent) => {
      isDragging = true;
      setIsInteracting(true);
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
      rotVelX = 0;
      rotVelY = 0;
      canvas.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      rotVelY = deltaX * 0.007;
      rotVelX = deltaY * 0.007;

      masterGroup.rotation.y += rotVelY;
      masterGroup.rotation.x += rotVelX;
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      setIsInteracting(false);
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      if (!isDragging) {
        // Inertia damping
        rotVelX *= 0.94;
        rotVelY *= 0.94;
        masterGroup.rotation.y += rotVelY;
        masterGroup.rotation.x += rotVelX;

        // Continuous smooth auto-rotation
        masterGroup.rotation.y += 0.008;
        masterGroup.rotation.x = Math.sin(time * 0.4) * 0.15 + 0.2;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);

      renderer.dispose();
      knotGeo.dispose();
      ribbonMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        cursor: isInteracting ? "grabbing" : "grab",
        touchAction: "none",
      }}
    />
  );
}
