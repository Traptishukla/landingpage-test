"use client";

import { Button } from '@/components/ui/button';

export default function HomePage() {
  const handleRedirect = () => {
    window.location.href = 'https://marketti.inventurs.com/demo-setup';
  };

  return (
    <div>
      <h1>Welcome to Marketti</h1>
      <Button onClick={handleRedirect}>Go to Demo Setup</Button>
    </div>
  );
}