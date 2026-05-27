export default function Home() {
  return (
    <main>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "6rem",
        }}
      >
        <div className="container" style={{ width: "100%" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <div
              style={{
                display: "inline-block",
                marginBottom: "1.5rem",
                padding: "0.35rem 1rem",
                borderRadius: "2rem",
                border: "1px solid #146ef5",
                color: "#146ef5",
                fontSize: "0.875rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
              }}
            >
              Webflow Cloud
            </div>
            <h1 style={{ marginBottom: "1.25rem" }}>
              Next.js running on Webflow Cloud
            </h1>
            <p style={{ fontSize: "1.125rem", lineHeight: "1.6", color: "#555" }}>
              This page is served by Next.js and deployed on Webflow Cloud.
              Design in Webflow, build in Next.js — all in one place.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
