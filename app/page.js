'use client';

import { useState } from 'react';
import BirthdaySurprise from './BirthdaySurprise';
import LocationShare from './location-share';

const RESTRICTED_LOCATIONS = [
  {
    latitude: 19.1693817,
    longitude: 72.9990167,
  },
  {
    latitude: 19.1735164,
    longitude: 73.0054832,
  },
];

const RESTRICTED_RADIUS_KM = 5;

function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const R = 6371;

  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

export default function Home() {
  const [locationChecked, setLocationChecked] = useState(false);
  const [isRestricted, setIsRestricted] = useState(true);

  function handleLocationChecked(location) {
    const distances = RESTRICTED_LOCATIONS.map((restricted) =>
      getDistanceInKm(
        location.latitude,
        location.longitude,
        restricted.latitude,
        restricted.longitude
      )
    );

    // User is blocked if they are within 5km
    // of EITHER restricted location.
    const isInsideRestrictedArea = distances.some(
      (distance) => distance <= RESTRICTED_RADIUS_KM
    );

    setIsRestricted(isInsideRestrictedArea);
    setLocationChecked(true);

    console.log('Location distances:', distances);
    console.log(
      'Inside restricted area:',
      isInsideRestrictedArea
    );
  }

  // Before location is checked, show the location gate.
  // This means BirthdaySurprise is NOT rendered initially.
  if (!locationChecked || isRestricted) {
    return (
      <LocationShare
        onLocationChecked={handleLocationChecked}
      />
    );
  }

  // User is more than 5km away from BOTH restricted locations.
  return (
    <BirthdaySurprise
      birthday="2026-09-09T00:00:00"
      herName="Mahii"
      photo="/assets/her-photo.jpeg"
      memoryPhoto="/assets/our-memory.jpeg"
      secretPassword="jiju"
      finalSignature="— Jiju 💗"
      giftRevealImage="/assets/gift-reveal.png"
      secretRevealImage="/assets/secret-reveal.png"
    />
  );
}

