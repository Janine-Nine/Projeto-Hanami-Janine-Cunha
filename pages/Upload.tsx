import React, { useState } from 'react';
import { api } from '../services/api';
import { Navbar } from '../components/Navbar';

export default function Upload() {
  const [progress, setProgress] = useState(0);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    await api.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
      onUploadProgress: (event) => {
        if (event.total) {
          setProgress(Math.round((event.loaded * 100) / event.total));
        }
      }
    });
  }

  return (
    <>
      <Navbar />
      <main className="container">
        <div className="card max-w-xl">
          <h1 className="title">Upload de CSV</h1>

          <input type="file" onChange={handleUpload} />

          <div className="mt-4 progress-wrapper" aria-hidden>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>

          <p className="mt-2">{progress}%</p>
        </div>
      </main>
    </>
  );
}

