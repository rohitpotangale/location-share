'use client';

import { useState } from 'react';

export default function LocationShare() {
  const [status, setStatus] = useState('');
  const [saved, setSaved] = useState(null);
  const [loading, setLoading] = useState(false);

  function shareLocation() {
    if (!navigator.geolocation) {
      setStatus('Location is not supported by this browser.');
      return;

    setLoading(true);
    setStatus('Requesting your location permission…');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const payload = {
          label: 'Shared location',
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy_m: position.coords.accuracy,
        };

        try {
          const response = await fetch('/api/location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.error || 'Could not save location.');
          }

          setSaved(data);
          setStatus('Location shared successfully.');
        } catch (error) {
          setStatus(error.message);
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);
        const messages = {
          1: 'Location permission was denied.',
          2: 'Your location could not be determined.',
          3: 'Location request timed out.',
        };
        setStatus(messages[error.code] || 'Could not get your location.');
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      }
    );
  }

  return (
    <main className="page">
      <section className="card">
        <div className="pin">📍</div>
        <h1>Share your location</h1>
        <p>
          Tap the button below to share your current location. Your browser
          will ask for permission first.
        </p>

        <button onClick={shareLocation} disabled={loading}>
          {loading ? 'Getting location…' : 'Share my location'}
        </button>

        {status && <div className="status">{status}</div>}

        {saved && (
          <div className="result">
            <strong>Location shared</strong>
            <div>Latitude: {saved.latitude}</div>
            <div>Longitude: {saved.longitude}</div>
            {saved.accuracy_m != null && (
              <div>Accuracy: approximately {Math.round(saved.accuracy_m)} m</div>
            )}
            <a
              href={`https://www.google.com/maps?q=${saved.latitude},${saved.longitude}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        )}

        <small>
          Location is only collected after you press the button and approve
          the browser permission request.
        </small>
      </section>
    </main>
  );
}
