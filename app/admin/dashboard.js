'use client';

import { useState } from 'react';

export default function AdminDashboard() {
  const [password, setPassword] = useState('');
  const [rows, setRows] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function load() {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/admin/locations', {
        headers: { 'x-admin-password': password },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Unable to load locations.');
      setRows(data.rows || []);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="page">
      <section className="card wide">
        <h1>Location dashboard</h1>
        <p>Enter your admin password to view submitted locations.</p>

        <div className="login">
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={load} disabled={loading || !password}>
            {loading ? 'Loading…' : 'View locations'}
          </button>
        </div>

        {error && <div className="status error">{error}</div>}

        {rows.length > 0 && (
          <div className="tableWrap">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Latitude</th>
                  <th>Longitude</th>
                  <th>Accuracy</th>
                  <th>Map</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td>{new Date(r.created_at).toLocaleString()}</td>
                    <td>{Number(r.latitude).toFixed(6)}</td>
                    <td>{Number(r.longitude).toFixed(6)}</td>
                    <td>{r.accuracy_m == null ? '—' : `${Math.round(r.accuracy_m)} m`}</td>
                    <td>
                      <a
                        href={`https://www.google.com/maps?q=${r.latitude},${r.longitude}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {rows.length === 0 && !error && (
          <small>No locations loaded yet.</small>
        )}
      </section>
    </main>
  );
}
