"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
    camera.position.set(0, -6, 42);
    camera.lookAt(0, 0, 0);

    // Warm Ambient and Directional Lights
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xF97316, 2.5);
    dirLight1.position.set(20, 20, 30);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xFB923C, 1.8);
    dirLight2.position.set(-20, -10, 20);
    scene.add(dirLight2);

    // Group for mouse interaction and positioning
    const waveGroup = new THREE.Group();
    scene.add(waveGroup);

    // Flowing 3D Silk Plane Geometry
    const gridX = 70;
    const gridY = 46;
    const width = 80;
    const height = 48;
    const geometry = new THREE.PlaneGeometry(width, height, gridX, gridY);

    // Save initial vertex positions
    const posAttr = geometry.attributes.position as THREE.BufferAttribute;
    const count = posAttr.count;
    const originalZ = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    // Warm Sunset Color Gradient (Ember -> Sunset Orange -> Golden Amber)
    const colorDeep = new THREE.Color("#EA580C");  // Valleys
    const colorMid = new THREE.Color("#F97316");   // Slopes
    const colorPeak = new THREE.Color("#FBBF24");  // Crests

    for (let i = 0; i < count; i++) {
      originalZ[i] = 0;
      // Default initial gradient based on Y coordinate
      const yNorm = (posAttr.getY(i) + height / 2) / height;
      const c = new THREE.Color().lerpColors(colorDeep, colorPeak, yNorm);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Dual Layer: Fine Architectural Silk Wireframe + Soft Translucent Glow Mesh
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      wireframe: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });

    const surfaceMaterial = new THREE.MeshStandardMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.12,
      roughness: 0.4,
      metalness: 0.1,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
    });

    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    const surfaceMesh = new THREE.Mesh(geometry, surfaceMaterial);

    waveGroup.add(surfaceMesh);
    waveGroup.add(wireframeMesh);

    // Tilt the plane to look like a sweeping digital terrain/silk wave
    waveGroup.rotation.x = -Math.PI / 2.7;
    waveGroup.rotation.z = -Math.PI / 18;
    waveGroup.position.y = -2;

    // Mouse Coordinates tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      targetMouseX = (event.clientX - windowHalfX) * 0.0006;
      targetMouseY = (event.clientY - windowHalfY) * 0.0006;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      const w = parent ? parent.clientWidth : window.innerWidth;
      const h = parent ? parent.clientHeight : window.innerHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime() * 0.65;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Gentle wave group parallax
      waveGroup.rotation.y = mouseX * 0.8;
      waveGroup.rotation.x = -Math.PI / 2.7 + mouseY * 0.5;

      // Compute fluid compound sine waves for silk motion
      const positions = geometry.attributes.position as THREE.BufferAttribute;
      const colorAttr = geometry.attributes.color as THREE.BufferAttribute;
      const posArray = positions.array as Float32Array;
      const colArray = colorAttr.array as Float32Array;

      for (let i = 0; i < count; i++) {
        const x = posArray[i * 3];
        const y = posArray[i * 3 + 1];

        // Smooth multi-frequency wave
        const wave1 = Math.sin(x * 0.12 + time * 1.1) * Math.cos(y * 0.14 + time * 0.8) * 3.2;
        const wave2 = Math.sin(x * 0.22 - time * 0.7 + y * 0.18) * 1.6;
        const wave3 = Math.cos(Math.sqrt(x * x + y * y) * 0.15 - time * 0.9) * 1.4;

        const newZ = wave1 + wave2 + wave3;
        posArray[i * 3 + 2] = newZ;

        // Dynamic vertex color shifting based on wave height
        const heightFactor = Math.min(Math.max((newZ + 4) / 8, 0), 1);
        let vertexColor: THREE.Color;
        if (heightFactor < 0.5) {
          vertexColor = new THREE.Color().lerpColors(colorDeep, colorMid, heightFactor * 2);
        } else {
          vertexColor = new THREE.Color().lerpColors(colorMid, colorPeak, (heightFactor - 0.5) * 2);
        }

        colArray[i * 3] = vertexColor.r;
        colArray[i * 3 + 1] = vertexColor.g;
        colArray[i * 3 + 2] = vertexColor.b;
      }

      positions.needsUpdate = true;
      colorAttr.needsUpdate = true;
      geometry.computeVertexNormals();

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      geometry.dispose();
      wireframeMaterial.dispose();
      surfaceMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
