"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

const LearnUseRouter: React.FC = () => {
  const router = useRouter();
  console.log("Router", router);

  return (
    <>
      <h1>Use Router</h1>
      <button type='button' onClick={() => router.push("/admin/dashboard")}>
        Go To Admin Dashboard
      </button>
    </>
  );
};

export default LearnUseRouter;
