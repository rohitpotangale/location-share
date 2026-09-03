import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request) {
  try {
    const body = await request.json();
    const latitude = Number(body.latitude);
    const longitude = Number(body.longitude);
    const accuracy_m = body.accuracy_m == null ? null : Number(body.accuracy_m);

    if (
      !Number.isFinite(latitude) ||
      !Number.isFinite(longitude) ||
      latitude < -90 || latitude > 90 ||
      longitude < -180 || longitude > 180
    ) {
      return NextResponse.json({ error: "Invalid coordinates." }, { status: 400 });
    }

    if (accuracy_m !== null && (!Number.isFinite(accuracy_m) || accuracy_m < 0)) {
      return NextResponse.json({ error: "Invalid accuracy." }, { status: 400 });
    }

    const url = process.env.SUPABASE_URL;
    const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!url || !key) {
      return NextResponse.json(
        { error: "Server database configuration is missing." },
        { status: 500 }
      );
    }

    const supabase = createClient(url, key, {
      auth: { persistSession: false, autoRefreshToken: false },
    });

    const { data, error } = await supabase
      .from("location_shares")
      .insert({
        label: typeof body.label === "string" ? body.label.slice(0, 100) : null,
        latitude,
        longitude,
        accuracy_m,
      })
      .select("id, latitude, longitude, accuracy_m, created_at")
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
