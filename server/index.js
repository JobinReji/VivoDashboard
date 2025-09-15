import express from "express";
import mysql from "mysql2/promise";

const app = express();
const PORT = 3000;

// Create MySQL connection pool
const pool = mysql.createPool({
    host: "193.203.184.125",      // 🔹 change to your DB host
    user: "u880709202_vivo",           // 🔹 change to your DB user
    password: "NeuralNet@123",   // 🔹 change to your DB password
    database: "u880709202_vivo",    // 🔹 change to your DB name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

// API route

// Page 1 Routes

app.get("/gender-classification", async (req, res) => {
    try {
        const brand = req.query.brand || "VIVO"; // default brand

        const query = `
            WITH distinct_responses AS (
                SELECT DISTINCT p.InstanceID, p.QS3
                FROM part_1 p
                JOIN val_lab vb
                    ON p.Q1F = vb.Code
                   AND vb.Vallab = 'Q1F'
                   AND vb.Response_2 = ?   -- ✅ dynamic brand filter
                WHERE p.Flt_1 = 1
            ),
            gender_counts AS (
                SELECT 
                    v.Code,
                    v.Actual_Response AS Gender,
                    COUNT(dr.InstanceID) AS total_count
                FROM distinct_responses dr
                JOIN val_lab v 
                    ON dr.QS3 = v.Code
                   AND v.Vallab = 'QS3'
                GROUP BY v.Code, v.Actual_Response
            ),
            totals AS (
                SELECT SUM(total_count) AS grand_total
                FROM gender_counts
            )
            SELECT 
                g.Code,
                g.Gender,
                g.total_count,
                CASE 
                    WHEN t.grand_total > 0 
                    THEN ROUND(g.total_count * 100.0 / t.grand_total, 0)
                    ELSE 0
                END AS percentage
            FROM gender_counts g
            JOIN totals t ON 1=1
            ORDER BY g.Code;
        `;

        const [rows] = await pool.query(query, [brand]);

        res.json({rows
        });

    } catch (err) {
        console.error("❌ Query Error:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.get("/age-distribution", async (req, res) => {
    try {
        const brand = req.query.brand || "SAMSUNG"; // default brand

        const query = `
            WITH distinct_responses AS (
                SELECT DISTINCT p.InstanceID, p.QS2_postcode
                FROM part_1 p
                JOIN val_lab vb
                    ON p.Q1F = vb.Code
                   AND vb.Vallab = 'Q1F'
                   AND vb.Response_2 = ?   -- ✅ dynamic brand filter
                WHERE p.Flt_1 = 1
            ),
            age_counts AS (
                SELECT 
                    v.Code,
                    v.Actual_Response AS AgeGroup,
                    COUNT(dr.InstanceID) AS total_count
                FROM distinct_responses dr
                JOIN val_lab v 
                    ON dr.QS2_postcode = v.Code
                   AND v.Vallab = 'QS2_postcode'
                GROUP BY v.Code, v.Actual_Response
            ),
            totals AS (
                SELECT SUM(total_count) AS grand_total
                FROM age_counts
            )
            SELECT 
                a.Code,
                a.AgeGroup,
                a.total_count,
                round(CASE 
                    WHEN t.grand_total > 0 
                    THEN ROUND(a.total_count * 100.0 / t.grand_total, 2)
                    ELSE 0
                END, 0) AS percentage
            FROM age_counts a
            JOIN totals t ON 1=1
            ORDER BY a.Code;
        `;

        const [rows] = await pool.query(query, [brand]);

        res.json({
            brand,
            total_respondents: rows.reduce((sum, r) => sum + r.total_count, 0),
            data: rows
        });

    } catch (err) {
        console.error("❌ Query Error:", err);
        res.status(500).json({ error: "Failed to fetch age distribution" });
    }
});

app.get("/top-5-prev-brands", async (req, res) => {
    
});



// Start server
app.listen(PORT, () => {
    console.log(`✅ API running at http://localhost:${PORT}/gender-classification`);
});
