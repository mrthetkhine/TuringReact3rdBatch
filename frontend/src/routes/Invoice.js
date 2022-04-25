import {Link,useSearchParams} from "react-router-dom";
import React from "react";

export default function Invoice() {
    let [searchParams, setSearchParams] = useSearchParams();
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Invoices </h2>
            <h3> Search {searchParams.get("data")}</h3>
            <Link to="/">Back to Home</Link> |{" "}
        </main>
    );
}