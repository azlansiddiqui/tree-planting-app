"use client";

import { useEffect, useState } from "react";
import {
  ref,
  push,
  set,
  onValue,
} from "firebase/database";

import { db } from "@/services/firebase";

export function useTrees() {
  const [trees, setTrees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const treesRef = ref(db, "trees");

    const unsubscribe = onValue(
      treesRef,
      (snapshot) => {
        const data = snapshot.val();

        if (!data) {
          setTrees([]);
        } else {
          const treeList = Object.entries(data).map(
            ([id, tree]) => ({
              id,
              ...tree,
            })
          );

          treeList.sort(
            (a, b) => (b.createdAt || 0) - (a.createdAt || 0)
          );

          setTrees(treeList);
        }

        setLoading(false);
      },
      (error) => {
        console.error("Firebase read error:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const addTree = async (tree) => {
    const treesRef = ref(db, "trees");
    const newTreeRef = push(treesRef);

    await set(newTreeRef, {
      ...tree,
      createdAt: Date.now(),
    });
  };

  return {
    trees,
    loading,
    addTree,
  };
}