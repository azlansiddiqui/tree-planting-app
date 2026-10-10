"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import TreeForm from "../components/TreeForm";
import { useTrees } from "../hooks/useTrees";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

export default function page() {
  const [location, setLocation] = useState(null);

  const [formData, setFormData] = useState({
    userName: "",
    treeName: "",
  });

  // Get tree data and saving function from Firebase
  const { trees, loading, addTree } = useTrees();

  // Clicking the map only selects coordinates
  const handleMapClick = (selectedLocation) => {
    setLocation(selectedLocation);
  };

  // Save a tree only when the form is submitted
  const handleSaveTree = async () => {
    if (!location) return;

    const userName = formData.userName.trim();
    const treeName = formData.treeName.trim();

    // Validate before writing to Firebase
    if (!userName || !treeName) return;

    const newTree = {
      userName,
      treeName,
      lat: location.lat,
      lng: location.lng,
      date: new Date().toLocaleDateString(),
    };

    try {
      await addTree(newTree);

      setFormData({
        userName: "",
        treeName: "",
      });

      setLocation(null);
    } catch (error) {
      console.error("Failed to save tree:", error);
      alert("Unable to plant tree. Please try again.");
    }
  };

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="mx-auto max-w-7xl">
        <Navbar/>
        <Hero/>
        <h1 className="mb-2 text-3xl font-bold text-green-700">
          🌳 Tree Planting Application
        </h1>

        <p className="mb-6 text-gray-600">
          Click on the map, select a location, and plant your tree.
        </p>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Map */}
          <div className="lg:col-span-2">
            <Map trees={trees} onMapClick={handleMapClick} />
          </div>

          {/* Form and tree count */}
          <div>
            <TreeForm
              location={location}
              formData={formData}
              setFormData={setFormData}
              onSave={handleSaveTree}
              loading={false}
            />

            <div className="mt-4 rounded-lg bg-white p-4">
              <h2 className="font-semibold">Total Trees</h2>

              <p className="mt-1 text-3xl font-bold text-green-600">
                {trees.length}
              </p>

              {loading && (
                <p className="mt-2 text-sm text-gray-500">
                  Loading trees from Firebase...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
